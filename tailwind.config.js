module.exports = {
  purge: {
    enabled: true,
    content: [
        './*.html'
    ]
  },
  // purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-gray": '#121a34',
        "primary": '#0ea5e9',
        "dark-primary": '#1f2937'
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
