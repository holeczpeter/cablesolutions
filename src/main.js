import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/animate.css";
import "./assets/css/flaticon.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.css";
import "./assets/css/main.css";
import "./assets/css/megamenu.css";
import "./assets/css/prettyPhoto.css";
import "./assets/css/responsive.css";
import "./assets/css/shortcodes.css";
import "./assets/css/slick.css";
import "./assets/css/themify-icons.css";
import i18n from './i18n'
import hu from './locales/hu.json'
import en from './locales/en.json'
import nl from './locales/nl.json'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    hu,en,nl
}


createApp(App)
.use(router)
.use(VueScrollTo)
.use(i18n)
.use(CoolLightBox)
.mount('#app')
