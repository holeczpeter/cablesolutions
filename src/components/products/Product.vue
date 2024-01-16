<template>
  <Header/>
  <ProductTitle/>
  <ProductInfo/>
  <ScrollToTop/>
</template>

<script>
import Header from '../Header.vue'
import ProductTitle from './ProductTitle.vue'
import ProductInfo from './ProductInfo.vue'
import ScrollToTop from '../ScrollToTop.vue'
export default {
  name: 'ProductDetail',
  components: {
   Header,
   ProductTitle,
   ProductInfo,
   ScrollToTop
  },
  
}
</script>