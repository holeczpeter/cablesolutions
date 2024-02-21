<template>
   <Header :isHome="false"/>
   <PrivacyStatementTitle/>
   <PrivacyStatement/>
</template>


<script>
import Header from '../components/Header.vue'
import PrivacyStatementTitle from '../components/privacy/PrivacyStatementTitle.vue'
import PrivacyStatement from '../components/privacy/PrivacyStatement.vue'

export default {
  name: 'PrivacyStatementView',
  components: {
   Header,
   PrivacyStatementTitle,
   PrivacyStatement
  },
 
}
</script>