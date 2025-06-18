import { Config } from "tailwindcss"
import { colors } from "./src/component/colors"

const fontSize: Config["fontSize"] = {
  "10":  ['1.0rem', { lineHeight: '1.4rem'   }],
  "12":  ['1.2rem', { lineHeight: '1.8rem'   }],
  "14":  ['1.4rem', { lineHeight: '2.0rem'   }],
  "16":  ['1.6rem', { lineHeight: '2.4rem'   }],
  "20":  ['2.0rem', { lineHeight: '2.8rem'   }],
  "24":  ['2.4rem', { lineHeight: '3.6rem'   }],
  "32":  ['3.2rem', { lineHeight: '4.16rem'  }],
  "36":  ['3.6rem', { lineHeight: '4.752rem' }],
  "40":  ['4.0rem', { lineHeight: '4.8rem'   }],
  "46":  ['4.6rem', { lineHeight: '5.75rem'  }],
  "54":  ['5.4rem', { lineHeight: '7.2rem'   }],
  "62":  ['6.2rem', { lineHeight: '7.44rem'  }],
}

const fontWeight: Config["fontWeight"] = {
  "400": "400",
  "500": "500",
  "600": "600",
  "700": "700",
}

export default {
  content: [
    "./index.html",
    "./index.ts",
    "./src/**/*.{ts,js}",
  ],
  theme: {
    colors,
    fontFamily: {
      sans: [
        "Instrument Sans",
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      ...fontSize,
      tiny:  fontSize["10"],
      small: fontSize["12"],
      base:  fontSize["14"],
      large: fontSize["16"],
    },
    fontWeight: {
      ...fontWeight,
      normal:   fontWeight["400"],
      medium:   fontWeight["500"],
      semibold: fontWeight["600"],
      bold:     fontWeight["700"],
    },
    spacing: {
      px:   '1px',
      0:    '0px',
      0.5:  '0.2rem', // 2px
      1:    '0.4rem', // 4px
      1.5:  '0.6rem', // 6px
      2:    '0.8rem', // 8px
      2.5:  '1.0rem', // 10px
      3:    '1.2rem', // 12px
      3.5:  '1.4rem', // 14px
      4:    '1.6rem', // 16px
      5:    '2.0rem', // 20px
      6:    '2.4rem', // 24px
      7:    '2.7rem', // 28px
      8:    '3.2rem', // 32px
      9:    '3.6rem', // 36px
      10:   '4.0rem', // 40px
      12:   '4.8rem', // 48px
      14:   '5.6rem', // 56px
      16:   '6.4rem', // 64px
      18:   '7.2rem', // 72px
      20:   '8.0rem', // 80px
      24:   '9.6rem', // 96px
      28:  '11.2rem', // 112px
      32:  '12.8rem', // 128px
      36:  '14.4rem', // 144px
      40:  '16.0rem', // 160px
      44:  '17.6rem', // 176px
      48:  '19.2rem', // 192px
      52:  '20.8rem', // 208px
      56:  '22.4rem', // 224px
      60:  '24.0rem', // 240px
      64:  '25.6rem', // 256px
      72:  '28.8rem', // 288px
      80:  '32.0rem', // 320px
      88:  '35.2rem', // 352px
      96:  '38.4rem', // 384px
     128:  '51.2rem', // 512px
    },
    minWidth: ({ theme }) => ({
      ...theme('spacing'),
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      ...theme('spacing'),
      none:  'none',
      xs:    '32rem',    //  320px
      sm:    '38.4rem',  //  384px
      md:    '44.8rem',  //  448px
      lg:    '51.2rem',  //  512px
      xl:    '57.6rem',  //  576px
      '2xl': '67.2rem',  //  672px
      '3xl': '76.8rem',  //  768px
      '4xl': '89.6rem',  //  896px
      '5xl': '102.4rem', // 1024px
      '6xl': '115.2rem', // 1152px
      '7xl': '128rem',   // 1280px
      full:  '100%',
      min:   'min-content',
      max:   'max-content',
      fit:   'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    borderRadius: {
      none:    '0px',
      sm:      '0.2rem', // 2px
      DEFAULT: '0.4rem', // 4px
      md:      '0.6rem', // 6px
      lg:      '0.8rem', // 8px
      xl:      '1.2rem', // 12px
      '2xl':   '2.4rem', // 24px
      full:    '9999px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      input: '1px 1px 0px 0px #000',
      button: '2px 2px 0px 0px #131127',
      none: 'none',
    },
  },
  plugins: [
  ],
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
    "toggle-thumb",
  ],
} satisfies Config
