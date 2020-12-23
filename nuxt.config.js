const pkg = require('./package')
const env = require('dotenv').config()

module.exports = {
  mode: 'universal',
  env: env.parsed,

  render: {
    http2: {
      push: true, pushAssets: null
    }
  },

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/smile.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Indie+Flower' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Permanent+Marker' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap' }
    ]
  },

  loading: {
    color: '#3B8070', height:'0px' , duration:0, throttle: 0
  },

  css: [

  ],

  plugins: [
    './plugins/mixins/startmix',
    './plugins/axios',
    './plugins/host',
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader',],
      },
    ],
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    'nuxt-vue-multiselect',
    ['nuxt-i18n-module', {
       languages: ['en', 'de','nl'],
       redirectDefaultLang : true,
       defaultLanguage:process.env.SITE_LOCALE
     }]
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: ['NavbarPlugin','CardPlugin'],
    directivePlugins: [],
    components: ['BCard', 'BSpinner'],
    directives: []
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'token' },
          logout: { url:'auth/logout', method: 'get' },
          user: { url:'auth/me', method: 'get', propertyName: 'data' },
        },
        tokenRequired: true,
        tokenType: 'bearer'
      },
    },
    redirect:{
      //callback:'/'
    },
    plugins: [
      'plugins/auth',
    ]
  },

  axios: {
    baseURL:process.env.API_URL,
  },

  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
