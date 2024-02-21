<template>
   <Header :isHome="false"/>
   <AboutTitle id="abouttitle"/>
   <AboutDetail id="aboutdetail"/>
</template>

<script>
import Header from '../components/Header.vue'
import AboutTitle from '../components/about/AboutTitle.vue'
import AboutDetail from '../components/about/AboutDetail.vue'

export default {
  name: 'AboutView',
  components: {
   Header,
   AboutTitle,
   AboutDetail
  },
 
}
</script>