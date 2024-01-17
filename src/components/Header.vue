<template>
   <header id="masthead" class="header" :class="[isHome ? 'ttm-header-style-01' : 'ttm-header-style-03' ]" >
      <div id="site-header-menu" class="site-header-menu ttm-bgcolor-white">
         <div :class="{ 'fixed-header': fixedHeader }" class="site-header-menu-inner ttm-stickable-header" >
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="site-navigation d-flex flex-row align-items-center justify-content-between">
                        <div class="site-branding ">
                           <a class="home-link"  href="#" v-scroll-to="'#home'" title="Cable Solutions Kft" rel="home" v-if=isHome>
                           <img id="logo-img" height="35" width="130" class="img-fluid auto_size" src="../assets/img/logo-img.jpg" alt="logo-img">
                           </a>
                           <a class="home-link"  :href="'/'"  title="Cable Solutions Kft" rel="home" v-if=!isHome>
                           <img id="logo-img" height="35" width="130" class="img-fluid auto_size" src="../assets/img/logo-img.jpg" alt="logo-img">
                           </a>
                        </div>
                        <div class="site-description mr-auto">
                           <h2>{{$t('affordable-quality')}}</h2>
                        </div>
                        <div class="d-flex flex-row">
                           <div class="btn-show-menu-mobile menubar menubar--squeeze" @click="toggleMobileMenu">
                              <span class="menubar-box">
                              <span class="menubar-inner"></span>
                              </span>
                           </div>
                           <nav class="main-menu menu-mobile" :class="{ 'show': mobileMenuVisible }" id="menu">
                              <ul class="menu">
                                 <li class="mega-menu-item" v-for="(item, index) in menuitems" :key="index">
                                    
                                    <a :href="'/'" v-scroll-to="item.routerlink" v-if=isHome>{{ $t(item.title) }}</a>
                                    <a :href="'/cablesolutions'+item.routerlink" v-if=!isHome>{{ $t(item.title) }}</a>
                                 </li>
                                 <li class="mega-menu-item">
                                    <SelectLocale/>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>
<script>

import SelectLocale from './SelectLocale.vue';
export default {
  props: ['isHome'],
  name: 'Header',
  components: {
    SelectLocale,
  },
  data() {
    return {
      menuitems:[
        { title: 'home', routerlink: '#home' },
        { title: 'about', routerlink: '#about'},
        { title: 'products', routerlink: '#product'},
        { title: 'contact', routerlink: '#contact'},
      ],
      fixedHeader: false,
      mobileMenuVisible: false,
    };
  },
  
  created() {
    window.addEventListener("scroll", this.handleScroll);
    
  },
   unmountad() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.matchMedia('only screen and (min-width: 1200px)').matches) {
        if (window.scrollY >= 50) {
          this.fixedHeader = true;
        } else {
          this.fixedHeader = false;
        }
      }
    },
    initialize() {
      this.Menuhover();
      window.addEventListener("resize", this.checkScreenWidth);
    },
    Menuhover() {
      // Your existing Menuhover logic goes here
    },
    checkScreenWidth() {
      this.fixedHeader = window.matchMedia('only screen and (max-width: 1200px)').matches;
    },
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
   
  }
}
</script>
