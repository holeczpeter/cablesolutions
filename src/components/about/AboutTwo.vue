<template>
   <Header :isHome="false"/>
   <AboutTitle id="abouttitle"/>
   <AboutDetail id="aboutdetail"/>
   <Team id="team"/>
</template>

<script>
import Header from '../Header.vue'
import AboutTitle from './AboutTitle.vue'
import AboutDetail from './AboutDetail.vue'
import Team from './Team.vue'
export default {
  name: 'About',
  components: {
   Header,
   AboutTitle,
   AboutDetail,
   Team
  },
 
}
</script>