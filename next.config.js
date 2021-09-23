/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    // ISO Language code -> http://www.lingoes.net/en/translator/langcode.htm
    // These are all the locales you want to support in
    // your application
    locales: ['ko', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ko',
  },
}
