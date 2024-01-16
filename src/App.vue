<template>
 <div id="app" class="page">
  <router-view></router-view>
  <Footer/>
</div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
  metaInfo () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
     
    }
  },
}
</script>

