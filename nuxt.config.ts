import { i18n } from './locales/i18n-nuxt-config'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        as: 'style',
        rel: 'stylesheet preload prefetch',
        href: '/fonts/fonts.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/global', 'reset-css/reset.css'],

  styleResources: {
    scss: ['./assets/styles/variables.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/mixins/getDynamicFile.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    ['nuxt-i18n', i18n],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
