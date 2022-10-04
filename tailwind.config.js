/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    colors: {
      'primary': "#000",
      'secondary': '#FFF0D9',
      'blue': '#6640FF',
      'white': "#FFF",
      'inputBorder': "#E1E1E1"
    },
    container: {
      center: true,
      padding: "15px"
    },
    fontFamily: {
      satoshiBlack: ["satoshiBlack", "sans-serif"],
      SatoshiMedium: ["SatoshiMedium", "sans-serif"],
      satoshiRegular: ["satoshiRegular", "sans-serif"],
      SatoshiBold: ["SatoshiBold", "sans-serif"],
      ClashSemiBold: ["ClashSemiBold", "sans-serif"],
    },
    screens: {
      mylg: "1100px",
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      l: "1124px",
      herobreak: "1156px",
      xl: "1300px",
      myxlg: '1400px',
      normaldesktop: '1440px'
    },
    animation: {
      "slideLeft": 'slideLeft 40s linear infinite',
      "slideRight": 'slideRight 40s linear infinite'
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideRight: {
      '0%': { transform: 'translateX(0%)' },
      '100%': { transform: 'translateX(100%)' },
      }
    }
  },
  variants: {},
  plugins: [function ({ addComponents }) {
    addComponents({
      '.container': {
        maxWidth: '100%',
        '@screen sm': {
          maxWidth: '640px',
        },
        '@screen md': {
          maxWidth: '768px',
        },
        '@screen lg': {
          maxWidth: 'calc(100% - 170px) !important',
        },
        '@screen xl': {
          maxWidth: '1400px',
        },
      }
    })
  }],
}

