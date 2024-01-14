 <template>
    <Header :isHome="true"/>
    <Slider id="home"/>
    <AboutSection id="about"/>
    <StatisticsSection/>
    <ProductsSection id="product"/>
    <ContactSection id="contact"/>
    <div id="totop" class="scroll-to-top" @click="scrollToTop" :class="{ 'top-visible': topVisible }">
     <i class="fa fa-angle-up"></i>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import AboutSection from '../components/about/AboutSection.vue'
import ProductsSection from '../components/products/ProductsSection.vue'
import ContactSection from '../components/contact/ContactSection.vue'
import StatisticsSection from '../components/statistics/StatisticsSection.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    AboutSection,
    StatisticsSection,
    ProductsSection,
    ContactSection,
    
  },
  data() {
    return {
      topVisible: false,
    };
  },
  mounted() {
    this.initializeScrollToTop();
  },
  methods: {
    initializeScrollToTop() {
      this.checkScrollPosition();
      window.addEventListener("scroll", this.checkScrollPosition);
    },
    checkScrollPosition() {
      if (window.scrollY >= 500) {
        this.topVisible = true;
      } else {
        this.topVisible = false;
      }
    },
    scrollToTop() {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkScrollPosition);
  },
}
</script>