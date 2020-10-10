module.exports = {
  plugins: [
    require('postcss-import'),
    require(`tailwindcss`)(`src/css/tailwind.config.js`),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === 'production'
      ? [require(`postcss-clean`)]
      : []),
  ],
};