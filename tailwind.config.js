export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07131F',
          soft: '#0E2233',
          line: '#1C2F42',
        },
        mustard: {
          DEFAULT: '#E7B52F',
          dark: '#C9990F',
        },
        light: '#F4F6F8',
        ink: '#17202A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '4px',
      },
      transitionTimingFunction: {
        industrial: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
}
