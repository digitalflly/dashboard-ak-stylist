/* @ds-bundle: {"format":3,"namespace":"LMarquesDesignSystem_e6e391","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"1143a90d6676","components/core/Badge.jsx":"11c8f442b4ac","components/core/Button.jsx":"636f06a06a2e","components/core/Card.jsx":"532579679fdf","components/core/Divider.jsx":"310f5707d0ff","components/core/Tag.jsx":"24a9d5afa050","components/forms/Checkbox.jsx":"fd41700acfb6","components/forms/Input.jsx":"688366f36ab7","components/forms/Select.jsx":"64f3c48adcf1","components/forms/Switch.jsx":"ba854e295dc5","ui_kits/atelier-site/CatalogScreens.jsx":"0a90e44a50ff","ui_kits/atelier-site/HomeScreen.jsx":"5fe1df5a579a","ui_kits/atelier-site/SecondaryScreens.jsx":"d1081ab451b5","ui_kits/atelier-site/SiteChrome.jsx":"92d2de9ab015","ui_kits/atelier-site/data.jsx":"ded24a299537"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LMarquesDesignSystem_e6e391 = window.LMarquesDesignSystem_e6e391 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Avatar
 * Initials or image. Circle by default; forest fill with bone initials.
 */
function Avatar({
  name = "",
  src,
  size = 40,
  square = false,
  style,
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: square ? "var(--radius-sm)" : "var(--radius-pill)",
      background: "var(--forest)",
      color: "var(--bone)",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: size * 0.4,
      letterSpacing: "-0.02em",
      overflow: "hidden",
      flex: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "•");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Badge
 * Small status / category marker. Quiet by default, forest for emphasis.
 */
function Badge({
  children,
  variant = "neutral",
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: "var(--forest-06)",
      color: "var(--text-body)",
      borderColor: "var(--line-hairline)"
    },
    solid: {
      background: "var(--forest)",
      color: "var(--bone)",
      borderColor: "var(--forest)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--line-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      border: "1px solid transparent",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: "11px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Button
 * Editorial button: tight Neue Montreal, near-square corners, quiet motion.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px",
      height: "34px"
    },
    md: {
      padding: "11px 22px",
      fontSize: "15px",
      height: "42px"
    },
    lg: {
      padding: "15px 30px",
      fontSize: "16px",
      height: "52px"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    border: "1px solid transparent",
    borderRadius: "var(--radius-sm)",
    fontFamily: "var(--font-text)",
    fontWeight: 500,
    letterSpacing: "var(--track-text)",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-text-on)",
      borderColor: "var(--accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--line-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "primary" ? {
    background: "var(--forest-90)",
    borderColor: "var(--forest-90)"
  } : variant === "secondary" ? {
    borderColor: "var(--line-contrast)",
    background: "var(--forest-06)"
  } : {
    background: "var(--forest-06)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      transform: press && !disabled ? "translateY(1px)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Card
 * Editorial surface. Hairline border, near-square corners, optional raise on hover.
 */
function Card({
  children,
  interactive = false,
  inverse = false,
  padding = "var(--space-6)",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": inverse ? "forest" : undefined,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: inverse ? "var(--forest)" : "var(--surface-raised)",
      color: "var(--text-body)",
      border: "1px solid var(--line-hairline)",
      borderRadius: "var(--radius-md)",
      padding,
      transition: "transform var(--dur-base) var(--ease-editorial), box-shadow var(--dur-base) var(--ease-editorial), border-color var(--dur-base) var(--ease-editorial)",
      transform: hover ? "translateY(-3px)" : "none",
      boxShadow: hover ? "var(--shadow-md)" : "none",
      borderColor: hover ? "var(--line-strong)" : "var(--line-hairline)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Divider
 * Editorial hairline rule, optionally with a centered or leading label.
 */
function Divider({
  label,
  align = "center",
  inverse = false,
  style,
  ...rest
}) {
  const line = {
    flex: 1,
    height: 1,
    background: "var(--line-hairline)",
    border: "none"
  };
  const text = {
    fontFamily: "var(--font-text)",
    fontWeight: 500,
    fontSize: "11px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    whiteSpace: "nowrap"
  };
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      "data-theme": inverse ? "forest" : undefined,
      style: {
        ...line,
        width: "100%",
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-theme": inverse ? "forest" : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      ...style
    }
  }, rest), align !== "start" && /*#__PURE__*/React.createElement("span", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: text
  }, label), /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Tag (removable chip)
 * Filter / selection chip. Outline by default, fills forest when selected.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      border: "1px solid",
      borderColor: selected ? "var(--forest)" : "var(--line-strong)",
      background: selected ? "var(--forest)" : hover ? "var(--forest-06)" : "transparent",
      color: selected ? "var(--bone)" : "var(--text-strong)",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-text)",
      fontWeight: 400,
      fontSize: "13px",
      letterSpacing: "var(--track-text)",
      lineHeight: 1,
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: "14px",
      opacity: 0.65
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Checkbox
 * Near-square box, forest fill when checked, serif-free check.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      letterSpacing: "var(--track-text)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "18px",
      height: "18px",
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: "1px solid",
      borderColor: checked ? "var(--forest)" : "var(--line-strong)",
      background: checked ? "var(--forest)" : "transparent",
      color: "var(--bone)",
      fontSize: "12px",
      lineHeight: 1,
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, checked ? "\u2713" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Input
 * Underline-led editorial text field with optional floating label.
 */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  invalid = false,
  hint,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: "11px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: invalid ? "#8c2f2f" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      boxSizing: "border-box",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid",
      borderColor: invalid ? "#8c2f2f" : focus ? "var(--line-contrast)" : "var(--line-strong)",
      borderRadius: 0,
      padding: "10px 2px",
      fontFamily: "var(--font-text)",
      fontSize: "16px",
      letterSpacing: "var(--track-text)",
      color: "var(--text-strong)",
      outline: "none",
      opacity: disabled ? 0.45 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "12px",
      letterSpacing: "var(--track-text)",
      color: invalid ? "#8c2f2f" : "var(--text-faint)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Select
 * Underline-led native select, styled to match Input.
 */
function Select({
  label,
  value,
  onChange,
  children,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: "11px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      boxSizing: "border-box",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid",
      borderColor: focus ? "var(--line-contrast)" : "var(--line-strong)",
      borderRadius: 0,
      padding: "10px 24px 10px 2px",
      fontFamily: "var(--font-text)",
      fontSize: "16px",
      letterSpacing: "var(--track-text)",
      color: "var(--text-strong)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "4px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: "11px"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lê Marques — Switch
 * Pill toggle. Forest track when on; bone knob.
 */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      letterSpacing: "var(--track-text)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: "40px",
      height: "22px",
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "1px solid",
      borderColor: checked ? "var(--forest)" : "var(--line-strong)",
      background: checked ? "var(--forest)" : "transparent",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: checked ? "20px" : "2px",
      width: "16px",
      height: "16px",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--bone)" : "var(--forest)",
      transition: "left var(--dur-base) var(--ease-editorial), background var(--dur-base) var(--ease-out)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atelier-site/CatalogScreens.jsx
try { (() => {
/* Lê Marques — Collection (grid + filters) and Product detail screens. */

function CollectionScreen({
  go,
  add
}) {
  const {
    Tag,
    Select
  } = window.LMarquesDesignSystem_e6e391;
  const cats = ["All", "Outerwear", "Knitwear", "Tailoring", "Accessories"];
  const [cat, setCat] = React.useState("All");
  const [sort, setSort] = React.useState("Featured");
  let list = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  list = [...list];
  if (sort === "Price, low to high") list.sort((a, b) => a.price - b.price);
  if (sort === "Price, high to low") list.sort((a, b) => b.price - a.price);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "56px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 16
    }
  }, "Collection 01"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 64,
      letterSpacing: "-0.07em",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "The collection"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "44px 0 36px",
      paddingBottom: 18,
      borderBottom: "1px solid var(--line-hairline)",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: sort,
    onChange: e => setSort(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Featured"), /*#__PURE__*/React.createElement("option", null, "Price, low to high"), /*#__PURE__*/React.createElement("option", null, "Price, high to low")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.id,
    p: p,
    go: go,
    add: add
  }))));
}
function ProductScreen({
  product,
  go,
  add
}) {
  const {
    Button,
    Tag,
    Badge,
    Divider
  } = window.LMarquesDesignSystem_e6e391;
  const p = product || PRODUCTS[0];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [size, setSize] = React.useState("M");
  const related = PRODUCTS.filter(x => x.id !== p.id && x.cat === p.cat).slice(0, 4);
  const fill = related.length < 4 ? [...related, ...PRODUCTS.filter(x => x.id !== p.id && !related.includes(x))].slice(0, 4) : related;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "32px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 12,
      letterSpacing: "0.04em",
      color: "var(--text-faint)",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => go("collection"),
    style: {
      cursor: "pointer"
    }
  }, "Collection"), " \xA0/\xA0 ", p.cat, " \xA0/\xA0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: p.tone,
    ratio: "3 / 4",
    style: {
      gridColumn: "1 / -1"
    },
    label: "Front"
  }), /*#__PURE__*/React.createElement(Plate, {
    tone: (p.tone + 2) % 4,
    ratio: "3 / 4",
    label: "Detail"
  }), /*#__PURE__*/React.createElement(Plate, {
    tone: (p.tone + 1) % 4,
    ratio: "3 / 4",
    label: "Back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 90,
      paddingLeft: 26
    }
  }, p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, p.tag)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 46,
      letterSpacing: "-0.06em",
      lineHeight: 1.04,
      color: "var(--text-strong)",
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 22,
      color: "var(--text-body)",
      marginTop: 18
    }
  }, fmt(p.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "46ch",
      marginTop: 24
    }
  }, "A considered ", p.name.toLowerCase(), ", cut from a dry-handle natural fibre and finished by hand. Designed to soften with wear and hold its shape for years."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "32px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: size === s,
    onClick: () => setSize(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => add(p)
  }, "Add to cart \u2014 ", fmt(p.price)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Save")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "Details",
    align: "start"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "18px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["100% natural fibre, milled in Italy", "Made in our Porto atelier", "Complimentary shipping & 30-day returns"].map(d => /*#__PURE__*/React.createElement("li", {
    key: d,
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: "var(--text-body)",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "\u2014"), d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 36,
      letterSpacing: "-0.06em",
      color: "var(--text-strong)",
      margin: "0 0 32px"
    }
  }, "To wear with"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28
    }
  }, fill.map(x => /*#__PURE__*/React.createElement(ProductTile, {
    key: x.id,
    p: x,
    go: go,
    add: add
  })))));
}
Object.assign(window, {
  CollectionScreen,
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atelier-site/CatalogScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atelier-site/HomeScreen.jsx
try { (() => {
/* Lê Marques — Home / landing screen. */

function ProductTile({
  p,
  go,
  add
}) {
  const {
    Badge,
    Button
  } = window.LMarquesDesignSystem_e6e391;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => go("product", p),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: p.tone,
    ratio: "3 / 4"
  }), p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 12,
      opacity: hover ? 1 : 0,
      transform: hover ? "translateY(0)" : "translateY(6px)",
      transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    fullWidth: true,
    onClick: e => {
      e.stopPropagation();
      add(p);
    }
  }, "Quick add"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 14,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      letterSpacing: "var(--track-text)",
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 15,
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, fmt(p.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 12,
      letterSpacing: "0.04em",
      color: "var(--text-faint)",
      marginTop: 2
    }
  }, p.cat));
}
function HomeScreen({
  go,
  add
}) {
  const {
    Divider
  } = window.LMarquesDesignSystem_e6e391;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    "data-theme": "forest",
    style: {
      background: "var(--forest)",
      color: "var(--bone)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center",
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "72px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--bone-60)",
      marginBottom: 28
    }
  }, "Collection 01 \u2014 Spring / Summer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 92,
      lineHeight: 0.96,
      letterSpacing: "-0.078em",
      color: "var(--bone)",
      margin: 0
    }
  }, "Quiet clothes,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "made to last.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--bone-80)",
      maxWidth: 430,
      marginTop: 30
    }
  }, "A small run of considered garments, cut in natural fibres and finished by hand in our Porto atelier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("collection"),
    style: heroBtnLight
  }, "Shop the collection"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("lookbook"),
    style: heroBtnGhost
  }, "View lookbook"))), /*#__PURE__*/React.createElement(Plate, {
    tone: 2,
    ratio: "4 / 5",
    dark: true,
    label: "Look 01 \u2014 the overcoat"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "88px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 44,
      letterSpacing: "-0.06em",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "New this season"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("collection"),
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: "var(--text-muted)",
      cursor: "pointer",
      borderBottom: "1px solid var(--line-strong)",
      paddingBottom: 2
    }
  }, "All garments")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28
    }
  }, PRODUCTS.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductTile, {
    key: p.id,
    p: p,
    go: go,
    add: add
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "64px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: 0,
    ratio: "16 / 11",
    label: "In the atelier"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    label: "The atelier",
    align: "start"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 38,
      letterSpacing: "-0.06em",
      color: "var(--text-strong)",
      margin: "22px 0 0",
      maxWidth: "18ch"
    }
  }, "Cut in small runs, kept for years."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "44ch",
      marginTop: 20
    }
  }, "We work the way a tailor does \u2014 slowly, in limited quantity, with materials chosen to age well. Nothing is rushed to a calendar."), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("atelier"),
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: "var(--text-strong)",
      cursor: "pointer",
      marginTop: 26,
      borderBottom: "1px solid var(--line-contrast)",
      paddingBottom: 2,
      alignSelf: "flex-start"
    }
  }, "Read our story")))));
}
const heroBtnLight = {
  background: "var(--bone)",
  color: "var(--forest)",
  border: "1px solid var(--bone)",
  borderRadius: "var(--radius-sm)",
  padding: "14px 26px",
  fontFamily: "var(--font-text)",
  fontWeight: 500,
  fontSize: 15,
  letterSpacing: "var(--track-text)",
  cursor: "pointer"
};
const heroBtnGhost = {
  background: "transparent",
  color: "var(--bone)",
  border: "1px solid var(--bone-35)",
  borderRadius: "var(--radius-sm)",
  padding: "14px 26px",
  fontFamily: "var(--font-text)",
  fontWeight: 500,
  fontSize: 15,
  letterSpacing: "var(--track-text)",
  cursor: "pointer"
};
Object.assign(window, {
  HomeScreen,
  ProductTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atelier-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atelier-site/SecondaryScreens.jsx
try { (() => {
/* Lê Marques — Cart, Lookbook, Atelier screens. */

function CartScreen({
  cart,
  setCart,
  go
}) {
  const {
    Button,
    Divider
  } = window.LMarquesDesignSystem_e6e391;
  const items = Object.values(cart);
  const subtotal = items.reduce((s, it) => s + it.p.price * it.qty, 0);
  const setQty = (id, d) => setCart(c => {
    const next = {
      ...c
    };
    if (!next[id]) return next;
    const q = next[id].qty + d;
    if (q <= 0) delete next[id];else next[id] = {
      ...next[id],
      qty: q
    };
    return next;
  });
  if (items.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: "96px 40px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 200,
        fontSize: 56,
        letterSpacing: "-0.07em",
        color: "var(--text-strong)",
        margin: 0
      }
    }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-text)",
        fontSize: 16,
        color: "var(--text-muted)",
        marginTop: 16
      }
    }, "Nothing here yet \u2014 the collection is waiting."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go("collection")
    }, "Shop the collection")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "56px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 64,
      letterSpacing: "-0.07em",
      color: "var(--text-strong)",
      margin: "0 0 44px"
    }
  }, "Cart"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 0.8fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, items.map(({
    p,
    qty,
    size
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "grid",
      gridTemplateColumns: "92px 1fr auto",
      gap: 20,
      padding: "22px 0",
      borderTop: i === 0 ? "1px solid var(--line-strong)" : "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: p.tone,
    ratio: "3 / 4"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 13,
      color: "var(--text-faint)",
      marginTop: 4
    }
  }, p.cat, " \xB7 Size ", size), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      marginTop: 16,
      border: "1px solid var(--line-strong)",
      borderRadius: "var(--radius-sm)",
      padding: "5px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setQty(p.id, -1),
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      minWidth: 14,
      textAlign: "center"
    }
  }, qty), /*#__PURE__*/React.createElement("span", {
    onClick: () => setQty(p.id, 1),
    style: qtyBtn
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 16,
      color: "var(--text-body)"
    }
  }, fmt(p.price * qty))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--forest-06)",
      border: "1px solid var(--line-hairline)",
      borderRadius: "var(--radius-md)",
      padding: 28,
      position: "sticky",
      top: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, "Summary"), [["Subtotal", fmt(subtotal)], ["Shipping", "Complimentary"], ["Duties", "At checkout"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: "var(--text-body)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 18px"
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-text)",
      fontSize: 17,
      color: "var(--text-strong)",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmt(subtotal))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, "Checkout"))));
}
const qtyBtn = {
  cursor: "pointer",
  fontFamily: "var(--font-text)",
  fontSize: 16,
  color: "var(--text-muted)",
  userSelect: "none",
  lineHeight: 1
};
function LookbookScreen({
  go
}) {
  const looks = [{
    t: "Look 01 — The overcoat",
    tone: 2,
    span: "1 / 3"
  }, {
    t: "Look 02 — Tailoring",
    tone: 0,
    span: "auto"
  }, {
    t: "Look 03 — Knitwear",
    tone: 1,
    span: "auto"
  }, {
    t: "Look 04 — Off-duty",
    tone: 3,
    span: "1 / 3"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    "data-theme": "forest",
    style: {
      background: "var(--forest)",
      color: "var(--bone)",
      padding: "80px 40px 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--bone-60)",
      marginBottom: 18
    }
  }, "Spring / Summer \u2014 Lookbook"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 80,
      letterSpacing: "-0.078em",
      color: "var(--bone)",
      margin: 0,
      maxWidth: "14ch",
      lineHeight: 0.98
    }
  }, "A season in ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "nine looks")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "56px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, looks.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: l.span
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: l.tone,
    ratio: l.span === "1 / 3" ? "16 / 9" : "4 / 5",
    label: l.t
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("collection"),
    style: {
      background: "var(--forest)",
      color: "var(--bone)",
      border: "none",
      borderRadius: "var(--radius-sm)",
      padding: "15px 30px",
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 15,
      letterSpacing: "var(--track-text)",
      cursor: "pointer"
    }
  }, "Shop the looks"))));
}
function AtelierScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      padding: "80px 40px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 22,
      textAlign: "center"
    }
  }, "The atelier"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 60,
      letterSpacing: "-0.07em",
      color: "var(--text-strong)",
      margin: 0,
      textAlign: "center",
      lineHeight: 1.02
    }
  }, "We make the way a ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "tailor"), " does."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 20,
      lineHeight: 1.6,
      color: "var(--text-body)",
      textAlign: "center",
      maxWidth: "52ch",
      margin: "32px auto 0"
    }
  }, "Slowly, in limited quantity, with materials chosen to age well. L\xEA Marques began in a single Porto workroom and has stayed close to its bench ever since."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "56px 0"
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: 0,
    ratio: "16 / 8",
    label: "The Porto workroom"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--text-body)"
    }
  }, "Every garment is cut in small runs, often fewer than fifty pieces. We mill our cloth in Italy and Portugal, and finish each piece by hand \u2014 seams pressed open, buttons sewn by the same few hands."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--text-body)"
    }
  }, "Nothing is rushed to a calendar. A piece arrives when it is right, and stays in the collection only as long as we can make it well. We would rather offer less, and offer it properly.")));
}
Object.assign(window, {
  CartScreen,
  LookbookScreen,
  AtelierScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atelier-site/SecondaryScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atelier-site/SiteChrome.jsx
try { (() => {
/* Lê Marques — site chrome: announcement bar + header + footer.
   Kit-local components (no export; registered on window). */

function Announce() {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "forest",
    style: {
      background: "var(--forest)",
      color: "var(--bone-80)",
      fontFamily: "var(--font-text)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      textAlign: "center",
      padding: "9px 16px"
    }
  }, "Complimentary shipping on all orders \xB7 Collection 01 now available");
}
function SiteHeader({
  route,
  go,
  cartCount
}) {
  const links = [["collection", "Collection"], ["lookbook", "Lookbook"], ["atelier", "Atelier"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--bone-80)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 40px",
      height: 70,
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 13,
      letterSpacing: "var(--track-text)",
      color: route === id ? "var(--text-strong)" : "var(--text-muted)",
      cursor: "pointer",
      textDecoration: "none",
      borderBottom: route === id ? "1px solid var(--line-contrast)" : "1px solid transparent",
      paddingBottom: 2,
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    onClick: () => go("collection"),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 28,
      letterSpacing: "-0.04em",
      color: "var(--text-strong)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      textAlign: "center"
    }
  }, "L\xEA ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Marques")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: iconLink
  }, "Search"), /*#__PURE__*/React.createElement("span", {
    style: iconLink
  }, "Account"), /*#__PURE__*/React.createElement("span", {
    onClick: () => go("cart"),
    style: {
      ...iconLink,
      color: "var(--text-strong)"
    }
  }, "Cart ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "(", cartCount, ")")))));
}
const iconLink = {
  fontFamily: "var(--font-text)",
  fontSize: 13,
  letterSpacing: "var(--track-text)",
  color: "var(--text-muted)",
  cursor: "pointer"
};
function SiteFooter() {
  const cols = [["Shop", ["Outerwear", "Knitwear", "Tailoring", "Accessories"]], ["Atelier", ["Our story", "Materials", "Stockists", "Journal"]], ["Care", ["Shipping", "Returns", "Garment care", "Contact"]]];
  return /*#__PURE__*/React.createElement("footer", {
    "data-theme": "forest",
    style: {
      background: "var(--forest)",
      color: "var(--bone-60)",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "72px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 200,
      fontSize: 34,
      letterSpacing: "-0.04em",
      color: "var(--bone)"
    }
  }, "L\xEA ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, "Marques")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      maxWidth: 280,
      marginTop: 16,
      lineHeight: 1.6
    }
  }, "An atelier of considered, slow-made garments. Cut in small runs, kept for years.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--bone-35)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 14,
      color: "var(--bone-60)",
      cursor: "pointer",
      textDecoration: "none"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 56,
      paddingTop: 24,
      borderTop: "1px solid var(--bone-15)",
      fontFamily: "var(--font-text)",
      fontSize: 12,
      color: "var(--bone-35)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 MMXXV L\xEA Marques \u2014 Porto"), /*#__PURE__*/React.createElement("span", null, "Instagram \xB7 Newsletter"))));
}
Object.assign(window, {
  Announce,
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atelier-site/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/atelier-site/data.jsx
try { (() => {
/* Lê Marques — shared kit data + a tonal image-plate placeholder.
   Real photography is not part of this kit; Plate stands in for it. */

const PRODUCTS = [{
  id: "p1",
  name: "Melton wool overcoat",
  price: 680,
  cat: "Outerwear",
  tone: 0,
  tag: "New in"
}, {
  id: "p2",
  name: "Boiled cashmere crewneck",
  price: 240,
  cat: "Knitwear",
  tone: 1,
  tag: ""
}, {
  id: "p3",
  name: "Pleated wide trouser",
  price: 290,
  cat: "Tailoring",
  tone: 2,
  tag: ""
}, {
  id: "p4",
  name: "Cotton-silk camp shirt",
  price: 185,
  cat: "Shirting",
  tone: 3,
  tag: ""
}, {
  id: "p5",
  name: "Double-breasted blazer",
  price: 520,
  cat: "Tailoring",
  tone: 1,
  tag: "New in"
}, {
  id: "p6",
  name: "Ribbed lambswool scarf",
  price: 95,
  cat: "Accessories",
  tone: 0,
  tag: ""
}, {
  id: "p7",
  name: "Garment-dyed work jacket",
  price: 340,
  cat: "Outerwear",
  tone: 2,
  tag: ""
}, {
  id: "p8",
  name: "Fine-gauge merino polo",
  price: 175,
  cat: "Knitwear",
  tone: 3,
  tag: ""
}];

// Tonal placeholders standing in for editorial photography.
const TONES = [{
  bg: "#20302410",
  base: "var(--forest-06)",
  deep: "var(--forest-12)"
}, {
  bg: "#1d1d1e08",
  base: "rgba(29,29,30,0.05)",
  deep: "rgba(29,29,30,0.10)"
}, {
  bg: "#2a3a2d12",
  base: "var(--forest-12)",
  deep: "var(--forest-25)"
}, {
  bg: "#17221908",
  base: "var(--forest-06)",
  deep: "var(--forest-12)"
}];
function Plate({
  tone = 0,
  label,
  ratio = "3 / 4",
  dark = false,
  style
}) {
  const t = TONES[tone % TONES.length];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      width: "100%",
      background: dark ? "var(--forest)" : `radial-gradient(120% 90% at 30% 18%, ${t.base}, ${t.deep})`,
      border: "1px solid var(--line-hairline)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: dark ? "radial-gradient(80% 60% at 50% 30%, rgba(255,253,247,0.06), transparent)" : "repeating-linear-gradient(135deg, transparent 0 22px, rgba(23,34,25,0.025) 22px 23px)"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      margin: 12,
      fontFamily: "var(--font-text)",
      fontSize: 10,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: dark ? "var(--bone-35)" : "var(--text-faint)"
    }
  }, label));
}
const fmt = n => "€" + n.toLocaleString("en-IE");
Object.assign(window, {
  PRODUCTS,
  Plate,
  fmt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/atelier-site/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
