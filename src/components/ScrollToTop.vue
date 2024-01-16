<template>
  <div id="totop" class="scroll-to-top" @click="scrollToTop" :class="{ 'top-visible': topVisible }">
     <i class="fa fa-angle-up"></i>
  </div>
</template>
<script>
export default {
  name: 'ScrollToTop',
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