
export default defineNuxtConfig({
  head : {
    htmlAttrs: {
      lang: 'fa'
    }
  },
  css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  components : true,
  buildModules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    icon: false, // disables the icon module
    manifest: {
      name: 'GUDULION',
      lang: 'fa',
      useWebmanifestExtension: false
    }
  }
})