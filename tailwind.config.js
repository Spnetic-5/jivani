module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'classic': ['ClassicFont', 'serif'],
      },
      fontFamily: {
        'sans': ['DM Sans, sans-serif'],
      },
      fontFamily: {
        'roboto': ['Roboto Slab, sans-serif']
      },
      fontFamily: {
        'comfort': ['Comfortaa, sans-serif']
      },
      fontFamily: {
        'poppins': ['Poppins, sans-serif']
      },
      fontFamily: {
        'raleway': ['Raleway, sans-serif']
      },
      fontFamily: {
        'great': ['Great Vibes', 'cursive'],
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
