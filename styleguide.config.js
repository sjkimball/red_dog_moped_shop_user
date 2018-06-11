module.exports = {
  ignore: ['**/components/navigation/nav/nav.js'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/ius6gqc.css'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Industry", sans-serif'
    }
  },
  components: 'src/components/**/**/*.js'
};
