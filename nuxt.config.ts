// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/image"],
  image: {
    quality: 80,
    format: ["avif", "webp"],
    domains: ["unsplash.com"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome", "gsap"],
    babel: {
      compact: true,
    },
  },
});
