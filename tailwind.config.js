/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    colors: {
      'primary': "#000",
      'secondary': 'rgb(255,240,217)',
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
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      l: "1124px",
      customlg: "1100px",
      herobreak: "1156px",
      xl: "1300px",
      customxlg: '1400px',
      containerFluid: '1440px'
    },
    animation: {
      "slideLeft": 'slideLeft 50s alternate linear infinite',
      "slideRight": 'slideRight 50s alternate linear infinite'
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translate3d(0,0,0)' },
        '100%': { transform: 'translate3d(-1100px,0,0)' },
      },
      slideRight: {
        '0%': { transform: 'translate3d(-1440px,0,0)' },
        '100%': { transform: 'translate3d(1440px,0,0)' },
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

