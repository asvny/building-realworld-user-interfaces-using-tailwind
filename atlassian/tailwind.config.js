module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: '#0747a6',
        ocean: '#217aff',
        gray: {
          100: 'rgb(250, 251, 252)',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#5e6c84',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          500: 'rgb(0, 82, 204)',
          100: 'rgb(222, 235, 255)'
        }
      },
      width: {
        '400px': '400px'
      },
      height: {
        '2px': '2px'
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
