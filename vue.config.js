const { defineConfig } = require('@vue/cli-service')
const publicPath = '';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/cablesolutions/" : "/",
  pluginOptions: {
    i18n: {
      locale: navigator.language.split('-')[0],
      fallbackLocale: 'hu',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
      reloadOnLanguageChange: false,
    }
  }
})
