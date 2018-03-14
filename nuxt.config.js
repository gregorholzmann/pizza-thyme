module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-azure-pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An attempt to smash a nuxt app with azure functionality using progressive web application enhancements ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
  ],

  // Options
  oneSignal: {
    init: {
      appId: '7ccd76a3-2bbc-4046-8246-1757b55c8e18',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    }
  }
}
