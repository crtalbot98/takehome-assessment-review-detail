module.exports = {
  content: [
    './src/*.tsx',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}