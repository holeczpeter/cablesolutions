<template>
   <Header :isHome="false"/>
   <ImpressumTitle/>
   <Impressum/>
</template>


<script>
import Header from '../Header.vue'
import ImpressumTitle from './ImpressumTitle.vue'
import Impressum from './Impressum.vue'

export default {
  name: 'ImpressumPage',
  components: {
   Header,
   ImpressumTitle,
   Impressum
  },
 
}
</script>