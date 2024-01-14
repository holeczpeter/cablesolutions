const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir:'dist',
  assetsDir:'static',
  pluginOptions: {
    i18n: {
      locale: 'hu',
      fallbackLocale: 'hu',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
