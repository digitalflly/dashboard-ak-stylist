# Arquitetura — AK Stylist · Gestão de Tráfego

Referência técnica do painel. A aplicação inteira é **um único arquivo** (`Dashboard.dc.html`): template + lógica + estilos inline, renderizado pelo runtime `support.js`. Sem build, sem bundler, sem backend.

---

## 1. Estrutura do arquivo

`Dashboard.dc.html` tem três partes:

1. **`<helmet>`** — carrega os tokens do design system (`_ds/l-marques-…`), o Chart.js (CDN) e os `@font-face`/resets globais.
2. **Template** (`<x-dc>…</x-dc>`) — markup das 3 páginas (conta, conteúdos, campanhas), com estilos inline e holes `{{ … }}`.
3. **Classe `Component extends DCLogic`** — todo o estado, fetch de dados e cálculo dos valores que o template consome (`renderVals()` / métodos `*Vals` / `*Info` / `*Funnel`).

---

## 2. Estado e navegação

- `page` — qual das 3 páginas está visível (`conta`, `conteudos`, `candidaturas`).
- `campaign` — aba ativa na página de campanhas: `vendas`, `leads`, `perfil` (Novos Seguidores).
- `product` — sub-filtro **Produtos** dentro da aba Vendas: `sdm`, `sfc`, `tdd`.
- `adSort` / `adsetSort` / `pubSort` — ordenação por coluna das tabelas (`{key, dir}`; dir −1 = maior→menor).
- `candMonth` / `candFrom` / `candTo` — filtro de data da página de campanhas. O `to` default acompanha a data de atualização (`lastSyncYMD`).
- `month` / `week` — filtros das páginas de conta/conteúdos.
- `sales`, `adRows`, `seg`, `demo` — dados carregados.

---

## 3. Fontes de dados

### Instagram (Windsor.ai)
`fetchLive()` busca perfil, série diária (views, alcance, interações), saldo de seguidores e publicações de **@akstylist.academy**. `fetchDemographics()` traz idade/gênero/cidade (cache de 7 dias).

### Facebook Ads (Windsor.ai)
`fetchAds()` busca a conta `504057149034541` e atribui cada linha a um bucket por regex no nome da campanha (`ADS_CAMPAIGN_MATCH`):

| Bucket | Regex | Comportamento (`CAMPAIGN_KIND`) |
|---|---|---|
| `sdm` | `^[SDM]` | vendas |
| `sfc` | `^[SFC][VENDA]` | vendas |
| `tdd` | `^[TDD]` | vendas |
| `leads` | `^[SFC][CAP]` | leads |
| `perfil` | tráfego p/ perfil · `[VISITA]` · aumento de base | perfil |

Semeia desde jan/2025 em cache (`akAdsCampaigns:v2`) e depois revalida só os 3 dias anteriores à atualização. Campos incluem `actions_initiate_checkout` (finalização de compra) e `instagram_permalink_url` (link do criativo).

### Vendas
`HAS_SALES_SHEET = false` — a AK não tem planilha de vendas (Eduzz) conectada, então as abas de venda mostram **apenas o funil de anúncios**. A estrutura de leitura de planilha via `gviz` (`fetchSales`) segue preservada no código para reativação futura.

---

## 4. Cálculos principais (página de campanhas)

- **Intervalo de datas / meses** — derivados dos próprios dados carregados (anúncios), não de planilha externa.
- **Investimento / funil** (`investFunnel`):
  - Vendas (sdm/sfc/tdd): Alcance → Impressões → Cliques → Visualizações da página → **Finalização de compra** → Vendas do gerenciador; KPIs CPM, CPC, connect rate, custo por venda.
  - Leads: Alcance → Impressões → Cliques → Visualizações da página → Leads; KPIs CPL, CTR, CPM.
- **Novos Seguidores** (`perfilFunnel`) — campanhas de perfil: investimento → visitas ao perfil, rosca de distribuição de orçamento e tabela de anúncios de perfil; combina com crescimento orgânico e demografia.
- **Ordenação de tabelas** — `toggleSort()` alterna a coluna/direção; `investFunnel`/`sortPubs` reordenam os arrays antes de renderizar.

---

## 5. Cache (localStorage)

| Chave | Conteúdo |
|---|---|
| `dbi_posts_cache_<handle>` | Publicações + capas embutidas |
| `akAdsCampaigns:v2` | Linhas de anúncios por bucket (com finalização de compra) |
| `igdemo_<handle>` | Demografia (7 dias) |

`pruneCaches()` roda na carga e remove versões antigas / caches de contas anteriores, evitando estouro de quota (~5 MB).

---

## 6. Deploy

Projeto estático. `vercel.json` faz o *rewrite* de `/` → `/Dashboard.dc.html` para manter a URL limpa. No Vercel: importar o repositório sem framework/build, ou arrastar a pasta.

---

## 7. Limitações conhecidas

- A data final dos filtros vai até o último dia sincronizado pelos conectores.
- A chave da Windsor.ai está embutida no cliente (painel privado).
- As capas do Instagram só persistem porque são baixadas e embutidas; URLs assinadas originais expiram.
- Os links de criativo abrem no Instagram em nova aba no site publicado; dentro de previews em iframe protegido o Instagram pode recusar a abertura.
