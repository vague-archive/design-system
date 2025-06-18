// src/component/colors.ts
var black = "#000000";
var white = "#FFFFFF";
var pluetral = {
  "50": "rgb(249, 249, 251)",
  "100": "rgb(243, 243, 246)",
  "200": "rgb(230, 229, 235)",
  "300": "rgb(210, 209, 219)",
  "400": "rgb(158, 156, 175)",
  "500": "rgb(109, 107, 128)",
  "600": "rgb(77, 75, 99)",
  "700": "rgb(57, 55, 81)",
  "800": "rgb(33, 31, 55)",
  "900": "rgb(19, 17, 39)",
  "DEFAULT": ""
};
pluetral["DEFAULT"] = pluetral["400"];
var plue = {
  "50": "rgb(240, 238, 255)",
  "100": "rgb(208, 204, 255)",
  "200": "rgb(185, 179, 255)",
  "300": "rgb(152, 144, 255)",
  "400": "rgb(133, 122, 255)",
  "500": "rgb(102, 89, 255)",
  "600": "rgb(93, 81, 232)",
  "700": "rgb(72, 63, 181)",
  "800": "rgb(56, 49, 140)",
  "900": "rgb(43, 37, 107)",
  "DEFAULT": ""
};
plue["DEFAULT"] = plue["500"];
var ice = {
  "50": "rgb(235, 246, 253)",
  "100": "rgb(194, 226, 248)",
  "200": "rgb(165, 212, 244)",
  "300": "rgb(124, 192, 240)",
  "400": "rgb(98, 180, 237)",
  "500": "rgb(59, 161, 232)",
  "600": "rgb(54, 147, 211)",
  "700": "rgb(42, 114, 165)",
  "800": "rgb(32, 89, 128)",
  "900": "rgb(25, 68, 97)",
  "DEFAULT": ""
};
ice["DEFAULT"] = ice["500"];
var kiwi = {
  "50": "rgb(250, 252, 230)",
  "100": "rgb(241, 245, 178)",
  "200": "rgb(234, 241, 140)",
  "300": "rgb(224, 234, 88)",
  "400": "rgb(218, 230, 55)",
  "500": "rgb(193, 224, 5)",
  "600": "rgb(190, 204, 5)",
  "700": "rgb(148, 159, 4)",
  "800": "rgb(115, 123, 3)",
  "900": "rgb(88, 94, 2)",
  "DEFAULT": ""
};
kiwi["DEFAULT"] = kiwi["500"];
var jiggly = {
  "50": "rgb(255, 244, 255)",
  "100": "rgb(253, 220, 253)",
  "200": "rgb(253, 203, 253)",
  "300": "rgb(252, 180, 252)",
  "400": "rgb(251, 165, 251)",
  "500": "rgb(250, 143, 250)",
  "600": "rgb(228, 130, 228)",
  "700": "rgb(178, 102, 178)",
  "800": "rgb(178, 102, 178)",
  "900": "rgb(105, 60, 105)",
  "DEFAULT": ""
};
jiggly["DEFAULT"] = jiggly["500"];
var pkfire = {
  "50": "rgb(255, 236, 236)",
  "100": "rgb(255, 196, 196)",
  "200": "rgb(255, 167, 167)",
  "300": "rgb(255, 127, 127)",
  "400": "rgb(255, 102, 102)",
  "500": "rgb(255, 64, 64)",
  "600": "rgb(232, 58, 58)",
  "700": "rgb(181, 45, 45)",
  "800": "rgb(140, 35, 35)",
  "900": "rgb(107, 27, 27)",
  "DEFAULT": ""
};
pkfire["DEFAULT"] = pkfire["500"];
var fel = {
  "50": "#eff8ef",
  "100": "#cdeacf",
  "200": "#b4e0b7",
  "300": "#92d196",
  "400": "#7dc982",
  "500": "#5dbb63",
  "600": "#55aa5a",
  "700": "#428546",
  "800": "#336736",
  "900": "#274f2a",
  "DEFAULT": ""
};
fel["DEFAULT"] = fel["500"];
var pika = {
  "50": "#fffaee",
  "100": "#fff0cc",
  "200": "#ffe9b3",
  "300": "#ffe090",
  "400": "#ffd97a",
  "500": "#ffd059",
  "600": "#e8bd51",
  "700": "#b5943f",
  "800": "#8c7231",
  "900": "#6b5725",
  "DEFAULT": ""
};
pika["DEFAULT"] = pika["400"];
var colors = {
  black,
  white,
  pluetral,
  plue,
  ice,
  kiwi,
  jiggly,
  pkfire,
  fel,
  pika,
  light: white,
  dark: black,
  gray: pluetral,
  primary: plue,
  success: fel,
  warn: pika,
  danger: pkfire,
  transparent: "transparent",
  current: "currentColor",
  inherit: "inherit"
};

// tailwind.config.ts
var fontSize = {
  "10": ["1.0rem", { lineHeight: "1.4rem" }],
  "12": ["1.2rem", { lineHeight: "1.8rem" }],
  "14": ["1.4rem", { lineHeight: "2.0rem" }],
  "16": ["1.6rem", { lineHeight: "2.4rem" }],
  "20": ["2.0rem", { lineHeight: "2.8rem" }],
  "24": ["2.4rem", { lineHeight: "3.6rem" }],
  "32": ["3.2rem", { lineHeight: "4.16rem" }],
  "36": ["3.6rem", { lineHeight: "4.752rem" }],
  "40": ["4.0rem", { lineHeight: "4.8rem" }],
  "46": ["4.6rem", { lineHeight: "5.75rem" }],
  "54": ["5.4rem", { lineHeight: "7.2rem" }],
  "62": ["6.2rem", { lineHeight: "7.44rem" }]
};
var fontWeight = {
  "400": "400",
  "500": "500",
  "600": "600",
  "700": "700"
};
var tailwind_config_default = {
  content: [
    "./index.html",
    "./index.ts",
    "./src/**/*.{ts,js}"
  ],
  theme: {
    colors,
    fontFamily: {
      sans: [
        "Instrument Sans",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      ...fontSize,
      tiny: fontSize["10"],
      small: fontSize["12"],
      base: fontSize["14"],
      large: fontSize["16"]
    },
    fontWeight: {
      ...fontWeight,
      normal: fontWeight["400"],
      medium: fontWeight["500"],
      semibold: fontWeight["600"],
      bold: fontWeight["700"]
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.2rem",
      // 2px
      1: "0.4rem",
      // 4px
      1.5: "0.6rem",
      // 6px
      2: "0.8rem",
      // 8px
      2.5: "1.0rem",
      // 10px
      3: "1.2rem",
      // 12px
      3.5: "1.4rem",
      // 14px
      4: "1.6rem",
      // 16px
      5: "2.0rem",
      // 20px
      6: "2.4rem",
      // 24px
      7: "2.7rem",
      // 28px
      8: "3.2rem",
      // 32px
      9: "3.6rem",
      // 36px
      10: "4.0rem",
      // 40px
      12: "4.8rem",
      // 48px
      14: "5.6rem",
      // 56px
      16: "6.4rem",
      // 64px
      18: "7.2rem",
      // 72px
      20: "8.0rem",
      // 80px
      24: "9.6rem",
      // 96px
      28: "11.2rem",
      // 112px
      32: "12.8rem",
      // 128px
      36: "14.4rem",
      // 144px
      40: "16.0rem",
      // 160px
      44: "17.6rem",
      // 176px
      48: "19.2rem",
      // 192px
      52: "20.8rem",
      // 208px
      56: "22.4rem",
      // 224px
      60: "24.0rem",
      // 240px
      64: "25.6rem",
      // 256px
      72: "28.8rem",
      // 288px
      80: "32.0rem",
      // 320px
      88: "35.2rem",
      // 352px
      96: "38.4rem",
      // 384px
      128: "51.2rem"
      // 512px
    },
    minWidth: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      ...theme("spacing"),
      none: "none",
      xs: "32rem",
      //  320px
      sm: "38.4rem",
      //  384px
      md: "44.8rem",
      //  448px
      lg: "51.2rem",
      //  512px
      xl: "57.6rem",
      //  576px
      "2xl": "67.2rem",
      //  672px
      "3xl": "76.8rem",
      //  768px
      "4xl": "89.6rem",
      //  896px
      "5xl": "102.4rem",
      // 1024px
      "6xl": "115.2rem",
      // 1152px
      "7xl": "128rem",
      // 1280px
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...breakpoints(theme("screens"))
    }),
    borderRadius: {
      none: "0px",
      sm: "0.2rem",
      // 2px
      DEFAULT: "0.4rem",
      // 4px
      md: "0.6rem",
      // 6px
      lg: "0.8rem",
      // 8px
      xl: "1.2rem",
      // 12px
      "2xl": "2.4rem",
      // 24px
      full: "9999px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      input: "1px 1px 0px 0px #000",
      button: "2px 2px 0px 0px #131127",
      none: "none"
    }
  },
  plugins: [],
  safelist: [
    "debug",
    "debug-red",
    "debug-blue",
    "debug-green",
    "debug-yellow",
    "modal",
    "modal-blocker",
    "modal-outer-container",
    "modal-inner-container",
    "modal-card",
    "modal-toolbar",
    "modal-close-button",
    "toggle",
    "toggle-track",
    "toggle-thumb"
  ]
};
export {
  tailwind_config_default as default
};
