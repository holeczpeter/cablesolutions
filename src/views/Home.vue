 <template>
    <Header :isHome="true"/>
    <Slider id="home"/>
    <About id="about"/>
    <Statistics/>
    <ProductsOriginal id="product"/>
    <Products id="product"/>
    <Contact id="contact"/>
    <ScrollToTop/>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import About from '../components/about/About.vue'
import Products from '../components/products/Products.vue'
import ProductsOriginal from '../components/products/ProductsOriginal.vue'
import Contact from '../components/contact/Contact.vue'
import Statistics from '../components/statistics/Statistics.vue'
import ScrollToTop from '../components/ScrollToTop.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    About,
    Statistics,
    Products,
    ProductsOriginal,
    Contact,
    ScrollToTop
  },
  
}
</script>