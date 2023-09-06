export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TH Systems',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'TH-Systems', content: 'True hockey systems – это самая крупная частная многопрофильная организация в сфере хоккея в РК, занимающаяся от хоккейных тренировок до строительства ледовых арен' },
		{ name: 'googlebot', content: 'TH-Systems, это самая крупная частная многопрофильная организация в сфере хоккея в РК, занимающаяся от хоккейных тренировок до строительства ледовых арен'},
      { property: 'og:image', content: './assets/img/new_logo_main.jpg' },
		{ name: 'google-site-verification', content: 'dZuCAn1cSMS928lyfZ1OWrj8ea-YWwr_ozVuH0a1yZE'}
    ],
	  //<meta name="google-site-verification" content="dZuCAn1cSMS928lyfZ1OWrj8ea-YWwr_ozVuH0a1yZE" />
	  link: [{ rel: 'icon', type: 'image/jpg', href: 'https://th-systems.kz/_nuxt/img/logo_main.ff98c61.jpg' }],

  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
	  './assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	  babel: {
		  compact: true
	  }
  }
}
