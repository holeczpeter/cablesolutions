<template>
   <div class="site-main">
      <ContactForm/>
      <ContactInfo/>
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