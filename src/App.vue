<template>
<html>
<head>
</head>

<body>
<div id="app" class="page">
 
  <router-view></router-view>
  <Footer/>
</div>
</body>
</html>


</template>

<script>

import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
   
   
    Footer
  },
  
}
</script>
<style>
#app {
}

</style>
