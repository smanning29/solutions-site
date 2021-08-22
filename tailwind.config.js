module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxWidth: '100vw'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1600px',
    },
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    borderWidth: {
      default: '0px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    fontSize: {
      'xs': '.75rem',
      'tiny': '.875rem',
      'sm': '1rem',
      'sml': '1.25rem',
      'smd': '1.5rem',
      'base': '2rem',
      'mdbs': '2.5rem',
      'mdsm': '2.75rem',
      'md': '3rem',
      'mdlg': '4rem',
      'lg': '5rem',
      'xl': '8rem',
      '2xl': '10rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        drawdown: '#11487C',
        drawdown25: 'rgba(17,72,124,0.25)',
        drawdown50: 'rgba(17,72,124,0.5)',
        drawdown75: 'rgba(17,72,124,0.75)',
        sky: '#7FA1C1',
        forest: '#217055',
        leaf: '#4c8f42',
        sun: '#E8C547',
        sky25: 'rgba(127,161,193,0.25)',
        sky50: 'rgba(127,161,193,0.5)',
        leaf25: 'rgba(76,143,66,0.25)',
        leaf50: 'rgba(76,143,66,0.5)',
        sun25: 'rgba(232,197,71,0.25)',
        sun50: 'rgba(232,197,71,0.5)',
        clay: '#BA4026'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
        'pic': '500px'
      },
      maxWidth: {
        'q': '25%',
        'half': '50%',
        'three-q': '75%',
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
      },
      backgroundSize: {
        '25': '25%',
        '30': '30%',
        '35': '35%',
        '40': '40%',
        '50': '50%',
        '75': '75%',
        '90': '90%',
        '95': '95%',
        '100': '100%'

      },
      backgroundPosition: {
        'top-1': 'left 10%',
       'top-2': '50% 10%',
       'top-3': '50% 3%'
      }

      
    }
  },
  variants: {
    variants: {
      inset: ['responsive', 'hover', 'focus']
    }
  },
  plugins: [],
}
