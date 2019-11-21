module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: {
          700: '#030748',
          600: '#1d225c',
          500: '#44457c',
          400: '#6371c7',
          100: '#f4f6f8'
        },
        "foundation-blue": '#4fc1be'
      },
      borderWidth: {
        3: '3px'
      },
      boxShadow: {
        'yellow-tag': '0 0 0 2px #b7791f inset',
        'yellow-large': '0 0 0 5px #fbf084',
        'green-large': '0 0 0 5px #c6f6d5'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-grey': {
          background: ' linear-gradient(180deg,#fff,#f9fafb)',
        },
        '.bg-gradient-indigo': {
          background: 'linear-gradient(180deg,#6371c7,#5563c1)',
        }
      }

      addUtilities(newUtilities, [])
    }
  ]
}
