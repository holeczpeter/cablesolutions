import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import hu from './locales/hu.json'
import en from './locales/en.json'
import nl from './locales/nl.json'
export default {
    hu,en,nl
}
createApp(App).use(i18n).mount('#app')
