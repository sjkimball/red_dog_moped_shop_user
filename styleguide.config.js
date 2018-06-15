module.exports = {
  ignore: [
          '**/components/navigation/nav__item/nav__item.js',
          '**/components/navigation/nav/nav.js',
          '**/components/navigation/nav__item-light/nav__item-light.js',
          '**/components/main/main.js'
          ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/ius6gqc.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Industry", sans-serif'
    }
  },
  components: 'src/components/**/**/**/*.js'
};
