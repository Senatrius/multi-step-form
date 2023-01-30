/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
    colors: {
      primary: {
        100: 'hsl(206, 94%, 87%)',
        200: 'hsl(228, 100%, 84%)',
        300: 'hsl(243, 100%, 62%)',
        400: 'hsl(213, 96%, 18%)'
      },
      error: 'hsl(354, 84%, 57%)',
      placeholder: 'hsl(231, 11%, 63%)',
      neutral: 'hsl(229, 24%, 87%)',
      bg: 'hsl(217, 100%, 97%)',
      component: 'hsl(231, 100%, 99%)',
      white: 'white',
      transparent: 'transparent'
    },
    fontSize: {
      'm-title': [
        '1.5rem',
        {
          fontWeight: 700
        }
      ],
      'd-title': [
        '2rem',
        {
          fontWeight: 700
        }
      ],
      paragraph: [
        '1rem',
        {
          fontWeight: 400,
          lineHeight: '156%'
        }
      ],
      'm-small': [
        '0.75rem',
        {
          fontWeight: 400
        }
      ],
      'd-small': [
        '0.875rem',
        {
          fontWeight: 400
        }
      ],
      'm-medium': [
        '0.875rem',
        {
          fontWeight: 500
        }
      ],
      'd-medium': [
        '1rem',
        {
          fontWeight: 500
        }
      ],
      'step-title': [
        '0.875rem',
        {
          fontWeight: 700,
          letterSpacing: '0.065em'
        }
      ],
      'step-number': [
        '0.875rem',
        {
          fontWeight: 700
        }
      ]
    }
  },
  plugins: []
};
