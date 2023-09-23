// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
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
  css: [path.join(__dirname, '../node_modules/normalize.css/normalize.css')],
});
