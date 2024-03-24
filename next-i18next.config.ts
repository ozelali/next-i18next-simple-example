/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./src/i18n/locales')
      : './src/i18n/locales',
  ns: ['common'],
};
