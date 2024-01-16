<template>
   <div class="site-main">
      <ContactForm id="form"/>
      <ContactInfo id="info"/>
   </div>
</template>
<script>
import ContactForm from './ContactForm.vue'
import ContactInfo from './ContactInfo.vue'

export default {
  name: 'ContactUs',
  components: {
    ContactForm,
    ContactInfo,
  }
}
</script>