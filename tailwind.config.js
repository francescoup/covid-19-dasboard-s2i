
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {
      width:{
        errorPage : '400px',
        mErrorPage : '56px',
      },
      animation: {
        jumps: 'jumps 0.8s ease-in'
      },

      keyframes: {
        jumps: {
          '0%': { transform: 'translatey(20px)', opacity: '0'},
          '100%': { transform: 'translatey(0)', opacity: '1'},
        }
        
      }
      
     
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
