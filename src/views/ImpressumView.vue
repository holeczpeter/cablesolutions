<template>
   <Header :isHome="false"/>
   <ImpressumTitle/>
   <Impressum/>
</template>


<script>
import Header from '../components/Header.vue'
import ImpressumTitle from '../components/impressum/ImpressumTitle.vue'
import Impressum from '../components/impressum/Impressum.vue'

export default {
  name: 'ImpressumPage',
  components: {
   Header,
   ImpressumTitle,
   Impressum
  },
 
}
</script>