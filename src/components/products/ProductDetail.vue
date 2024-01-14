<template>
    <Header/>
    <Product/>
    <a id="totop" href="#top">
        <i class="fa fa-angle-up"></i>
    </a>
</template>

<script>
import Header from '../Header.vue'
import Product from './Product.vue'
export default {
  name: 'ProductDetail',
  components: {
   Header,
   Product
  }
}
</script>