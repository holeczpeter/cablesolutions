<template>
    <Header :isHome="false"/>
    <AboutSection/>
    <a id="totop" href="#top">
        <i class="fa fa-angle-up"></i>
    </a>
</template>

<script>
import Header from '../Header.vue'
import AboutSection from './AboutSection.vue'
export default {
  name: 'About',
  components: {
   Header,
   AboutSection
  }
}
</script>