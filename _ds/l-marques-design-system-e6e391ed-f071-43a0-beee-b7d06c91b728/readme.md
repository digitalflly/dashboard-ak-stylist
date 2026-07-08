# Lê Marques — Design System

An editorial brand system for **Lê Marques**, a Porto atelier of slow-made, considered
garments. The identity is built on two typefaces and exactly three colours: a deep
green-black, a near-black ink, and a warm paper white. The result is quiet, tailored, and
unmistakably editorial — closer to a fashion lookbook than a typical web UI.

> **Sources provided:** brand fonts (PP Editorial New, Neue Montreal) and three brand
> colours, supplied directly by the client. No codebase, Figma, or slide deck was attached.
> The product context below (an atelier / commerce brand) is an informed interpretation of
> the kit — confirm or redirect it (see CAVEATS at the end).

---

## Brand at a glance

- **Name** Lê Marques · positioned as a small atelier / slow-fashion house (Porto).
- **Display type** PP Editorial New — Ultralight, with italics. Used very large, very tight.
- **Text type** Neue Montreal — the grotesque workhorse for everything functional.
- **Palette** Forest `#172219`, Ink `#1D1D1E`, Bone `#FFFDF7`. *No other primary colours.*
- **Feel** Restrained, expensive-quiet, generous white space, near-square corners.

---

## CONTENT FUNDAMENTALS — how Lê Marques writes

**Voice.** Calm, precise, understated. The brand speaks like a tailor, not a marketer.
Sentences are short and declarative. Confidence comes from restraint, never from hype.

- **Person.** Mostly **"we"** for the house ("We make the way a tailor does"), and **"you/your"**
  for the customer ("Your cart", "Keep me informed"). Avoid "I".
- **Casing.** Sentence case for headlines and body. **UPPERCASE** is reserved for small
  tracked labels (eyebrows, nav micro-labels, field labels) — never for headlines.
- **Tone words.** *considered, slow-made, cut, milled, finished by hand, kept for years,
  small runs, natural fibres, atelier, in limited quantity.* Material and craft language.
- **Numerals.** Roman numerals for ceremony (`Est. MMXXV`, `Collection 01`); plain figures
  for prices and sizes. Currency in euros (`€680`).
- **No emoji. No exclamation marks. No slang.** Punctuation is spare; the em dash — used
  sparingly — sets a reflective rhythm.
- **Length.** Headlines 2–6 words. Lead paragraphs one sentence. Body rarely over three.

**Specimen copy (use as a tone reference):**
- Hero: *"Quiet clothes, made to last."*
- Sub: *"A small run of considered garments, cut in natural fibres and finished by hand in
  our Porto atelier."*
- Quote: *"We would rather offer less, and offer it properly."*
- Section: *"Made the way a tailor does."*
- Microcopy: *"Complimentary shipping", "Keep me informed", "Quick add", "Save".*

---

## VISUAL FOUNDATIONS

**Colour.** Three primaries only, and everything else is an **alpha step of one of them** —
no new hues are ever introduced. Forest tints (over bone) generate every neutral on light
surfaces; bone tints (over forest) do the same on dark. There is no separate grey ramp. A
single muted claret (`#8c2f2f`) is permitted *only* for form-error states, never decorative.
Two surface modes exist: **light** (bone paper, the default) and **forest** (dark), toggled
with `data-theme="forest"`. Sections alternate between them for rhythm — typically a forest
hero, bone body, forest quote/footer.

**Type.** The whole system is a duet. **PP Editorial New Ultralight** is set *huge and very
tight* (tracking `-0.078em`, line-height ~0.96) so the thin serif reads as a confident
display voice; italics carry emphasis words. **Neue Montreal** handles all text at tracking
`-0.045em`. The one place tracking goes *positive* is the uppercase eyebrow/label
(`+0.22em`). Weight contrast does the work: ultralight display against medium labels.

**Spacing & layout.** 8px base scale; layouts are airy with large vertical rhythm
(64–128px section padding). Max content width ~1280px. Grids are simple: 4-up product grids,
2-up editorial splits. Negative space is a feature, not a gap to fill.

**Corners & borders.** Near-square. Radii top out at 8px for cards; 2–4px for controls;
pills only for chips, badges and toggles. Borders are **hairlines** (`forest @ 12%`) or
**rules** (`forest @ 25%`) — there is no heavy chrome. The bottom-rule input (underline only,
no box) is the signature form treatment.

**Shadows.** Minimal and warm — tinted with forest, never neutral black. Cards rest **flat**
(border only) and gain a soft `shadow-md` *only* on hover. No glows, no hard drop shadows.

**Imagery.** Editorial fashion photography, used full-bleed or in tall 3:4 / 4:5 plates,
warm-toned to sit with the bone paper. *(No photography ships with this kit — the UI kit uses
tonal placeholder "plates"; swap in real lookbook imagery.)* No illustration, no iconographic
spot art, no gradients-as-decoration.

**Motion.** Quiet and slow. A custom editorial easing (`cubic-bezier(0.16,1,0.3,1)`) settles
elements; durations 140–480ms. Fades and small upward translations (6px) on reveal; no
bounce, no spin, no infinite loops. Hover on tiles cross-fades a "Quick add" in.

**Interaction states.**
- *Hover* — primary buttons deepen to `forest-90`; outlines darken and pick up a faint
  `forest-06` wash; links underline; cards lift 3px.
- *Press* — buttons nudge down 1px (no scale).
- *Selected* — chips and toggles fill forest with a bone knob/label.
- *Focus* — the input rule darkens to full forest; native focus rings are suppressed in
  favour of the rule.

**Transparency / blur.** Used once, deliberately: the sticky header is `bone @ 80%` with a
12px backdrop blur so content scrolls under it. Otherwise surfaces are opaque.

---

## ICONOGRAPHY

Lê Marques is **near-iconless by design** — an editorial brand that prefers *words* to
symbols. There is no icon font, no SVG icon set, and no emoji anywhere in the system.

- **Navigation & actions** are labelled in text ("Search", "Account", "Cart (2)") rather than
  glyphs — consistent with the typographic, low-chrome aesthetic.
- The few marks that appear are **Unicode typographic characters**, set in the brand fonts:
  the dropdown caret `▾`, the checkbox tick `✓`, quantity `−`/`+`, list dashes `—`, and the
  decimal/middle dot `·`. These read as typography, not iconography.
- The **monogram "LM"** (and `L·M`) set in PP Editorial New is the closest thing to a logo
  mark — see `guidelines/brand-monogram.card.html`.
- **If a project genuinely needs UI icons** (e.g. a richer app), introduce a *thin, single-
  weight line set* to match the ultralight display — **Lucide** at ~1.25px stroke is the
  recommended CDN substitute. Flag this as an addition, since no icon set was supplied.

No icon binaries were provided or shipped; nothing to copy in.

---

## Tokens

All design decisions live as CSS custom properties, imported through the single root
`styles.css`. Consuming projects link that one file.

- `tokens/fonts.css` — `@font-face` for PP Editorial New & Neue Montreal (OTF in `assets/fonts/`).
- `tokens/colors.css` — the three primaries, their alpha ramps, and semantic aliases
  (`--text-strong/body/muted/faint`, `--surface-*`, `--line-*`, `--accent`). Includes the
  `[data-theme="forest"]` dark scope.
- `tokens/typography.css` — families, weights, the two tracking constants, type scale, line
  heights, and base element defaults + `.lm-display` / `.lm-overline` utilities.
- `tokens/spacing.css` — 8px space scale, layout widths, radii, borders, warm shadows, motion.

---

## Components  (`window.LMarquesDesignSystem_e6e391`)

React primitives, styled entirely via the tokens above.

- **core/** — `Button` (primary / secondary / ghost), `Badge`, `Tag` (filter chip),
  `Avatar`, `Divider` (labelled rule), `Card`.
- **forms/** — `Input` (underline field), `Select`, `Checkbox`, `Switch`.

Each directory has a `.card.html` showcase (Design System tab) and each component a
`.d.ts` contract + `.prompt.md` usage note.

---

## UI kit

- **`ui_kits/atelier-site/`** — a clickable editorial commerce site: home/landing, collection
  grid with live filter + sort, product detail with size select & add-to-cart, working cart,
  lookbook, and atelier story. Built from the component primitives. `index.html` is the
  interactive entry. *Imagery is placeholder "plates" — swap in real photography.*

## Slides

- **`slides/`** — four 16:9 templates (title, section, quote, content) showing the brand at
  presentation scale. Pure HTML/CSS on the tokens.

---

## Index / manifest (root)

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import`s every token file. Link this. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css` |
| `assets/fonts/` | PP Editorial New + Neue Montreal OTFs |
| `components/core/` | Button, Badge, Tag, Avatar, Divider, Card |
| `components/forms/` | Input, Select, Checkbox, Switch |
| `ui_kits/atelier-site/` | Full clickable site recreation |
| `slides/` | Four deck templates |
| `guidelines/` | Foundation specimen cards (Type, Colors, Spacing, Brand) |
| `SKILL.md` | Agent-Skills manifest for downloadable use |

---

## CAVEATS

- **Product context is interpreted, not supplied.** Only fonts + colours were given. The
  "Porto atelier / slow fashion" world — copy, the commerce UI kit, sample imagery context —
  is my reasonable read of an editorial fashion brand. **Tell me what Lê Marques actually
  makes** and I'll re-point the copy and kit precisely.
- **No real imagery.** The site and slides use tonal placeholder plates. Hand me lookbook
  photography (or let me wire image slots) and I'll drop it in.
- **Letter-spacing interpretation.** The brief's `-78` / `-45` are read as `-0.078em`
  (PP Editorial) and `-0.045em` (Neue Montreal). If those were meant as a different unit
  (e.g. percentage or px at a specific size), say so and I'll retune the tracking tokens.
- **Iconography is intentionally minimal.** If you want a proper UI icon set, confirm and I'll
  add a thin Lucide set tuned to the display weight.
