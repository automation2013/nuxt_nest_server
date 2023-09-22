// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    https: {
      key: '../secrets/private-key.pem',
      cert: '../secrets/public-certificate.pem',
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
});
