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
      colors: {
        indigo: '#0747a6',
        ocean: '#217aff'
      },
      width: {
        '400px': '400px'
      }
    }
  },
  plugins: [
    function ({ addBase, _ }) {
      addBase({
        'input': { transition: 'border,background 0.2s ease-in' },
      })
    },
  ]
}
