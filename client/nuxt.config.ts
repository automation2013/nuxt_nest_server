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
  css: [
    '@/assets/styles/index.scss',
  ],
  postcss: {
    plugins: {
      // 测试autoprefixer是否生效的方法(https://github.com/postcss/autoprefixer?tab=readme-ov-file)搜索“interactive demo”
      // 点击超链接进入 https://autoprefixer.github.io/ 进行测试
      autoprefixer: {}, //
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 375,// postcss-px-to-viewport-8-plugin 库的 viewportWidth 属性可以配函数，动态支持转pc和H5
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 375,
      },
    },
  },

});
