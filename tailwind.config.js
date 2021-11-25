module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "tech": "url('./image/1.jpg');",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
