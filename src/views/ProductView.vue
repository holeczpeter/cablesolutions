<template>
  <Header/>
  <ProductTitle/>
  <ProductInfo/>
  <ScrollToTop/>
</template>

<script>
import Header from '../components/Header.vue'
import ProductTitle from '../components/products/ProductTitle.vue'
import ProductInfo from '../components/products/ProductInfo.vue'
import ScrollToTop from '../components/ScrollToTop.vue'
export default {
  name: 'ProductView',
  components: {
   Header,
   ProductTitle,
   ProductInfo,
   ScrollToTop
  },
  
}
</script>