const { colors } = require('tailwindcss/defaultTheme');

const purgeOptions = {
  content: ['dist/**/*.{html,njk}'],
  options: {
    extensions: ['html', 'njk'],
    whitelist: [
      'body',
      'nav',
      'html',
      'a',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'blockquote',
      'strong',
      'breadcrumbs',
      'content',
      'form',
      'input',
      'textarea',
      'intro',
      'btn',
      'loaded',
      'page-title',
      'required',
      'row',
      'visually-hidden',
      'menu-visible',
      'img',
    ],
  },
};

const config = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    zIndex: {
      '-10': '-10',
    },
    extend: {
      colors: {
        primary: colors.pink,
        secondary: colors.blue,
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};

process.env.NODE_ENV == 'production'
  ? (config.purge = purgeOptions)
  : (config.purge = {});

module.exports = config;
