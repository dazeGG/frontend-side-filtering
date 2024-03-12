// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  imports: {
    autoImport: false,
  },

  css: ['~/assets/styles/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],

  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-primevue',
  ],

  primevue: {
    components: {
      include: ['DataTable', 'Column', 'ColumnGroup', 'Row'],
    },
  },
})
