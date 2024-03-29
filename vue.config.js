const { defineConfig } = require('@vue/cli-service')
const publicPath = '';

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/cablesolutions/" : "/",
  pluginOptions: {
    i18n: {
      locale: 'nl',
      fallbackLocale: 'nl',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
      reloadOnLanguageChange: false,
    }
  }
})
