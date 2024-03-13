// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  imports: {
    autoImport: false,
  },

  css: ['~/assets/styles/main.css', 'primevue/resources/themes/mdc-dark-indigo/theme.css'],

  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-primevue',
  ],

  primevue: {
    components: {
      include: ['DataTable', 'Column', 'MultiSelect', 'TriStateCheckbox', 'Tag'],
    },
  },
});
