/** @type {import('tailwindcss').Config}
module.exports = {
  content: ['public/*.html'],
  thme: {
    screens: 
      {
      'frs': '1600px',
    },
    colors: {

    },
    extend: {
     fontFamily: {
       'Nunito': "'nunito', sans-serif",
       'Alegreya': "'Alegreya', serif",
       'Lora': "'Lora', serif",
       'Roboto': "'Roboto', sans-serif",
       'Montserrat': "'Montserrat', sans-serif"
     },
   },
  },
  plugins: [require('@tailwindcss/typography')],
}
*/
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: ['public/*.html'],
  theme: {
    screens: 
    {
     // => @media (min-width: xxxpx and max-width: xxxpx) { ... }
      'screenUnder700': {'min-width': '668px'},
     'screenBetween700-1600': {'min-width': '700px', 'max-width': '1600px'},
     'screenBetween1600-2500': {'min-width': '1600px', 'max-width': '2500px'},
      'screenGreater2500': {'min-width': '2501px'},
      
  },
    extend: {
      spacing: {
        '98': '400px',
        '112': '26rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        'Suez':"'Suez One', serif",
        'Syne':"'Syne', sans-serif"
      },
      fontSize: {
        dynamic: "clamp(1rem, -0.875rem + 8.333vw, 3.5rem)",
        
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          link: withOpacity('--color-text-link')
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

