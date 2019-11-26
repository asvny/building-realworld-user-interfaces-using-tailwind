module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Circular Std',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ]
    },
    extend: {
      opacity: {
        65: '.65'
      },
      letterSpacing: {
        widest: "0.166em"
      },
      colors: {
        'black-alpha': {
          400: 'rgba(0,0,0,0.4)'
        },
        'white-alpha': {
          900: 'rgba(255,255,255, .9)',
          800: 'rgba(255,255,255, .8)',
          700: 'rgba(255,255,255, .7)',
          600: 'rgba(255,255,255, .6)',
          400: 'rgba(255,255,255, .4)',
          200: 'rgba(255,255,255, .2)',
          100: 'rgba(255,255,255, .1)'
        },
        gray: {
          700: '#282828',
          900: '#111111'
        },
        green: {

          500: '#1bb954',
          400: '#1ed760'
        }
      },
      borderRadius: {
        'pill': '52px'
      },
      height: {
        '14px': '14px',
        '2px': '2px'
      },
      width: {
        '14px': '14px'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition-opacity-200': {
          transition: ' opacity 200ms ease-in-out',
        },
        '.transition-transform-100': {
          transition: ' transform 100ms ease-in-out',
        },
        '.x-center': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.y-center': {
          top: '50%',
          transform: 'translateY(-50%)'
        }
      }

      const actionUtilities = {
        '.scale-up': {
          transform: 'scale(1.05)'
        }
      }


      addUtilities(newUtilities, [])
      addUtilities(actionUtilities, ['hover'])
    }
  ]
}
