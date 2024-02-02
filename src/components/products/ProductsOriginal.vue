<template>
<div>
      <section class="ttm-row padding_zero-section clearfix">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="ttm-bg ttm-col-bgcolor-yes ttm-bg ttm-col-bgimage-yes col-bg-img-one ttm-left-span spacing-2">
                     <div class="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div class="ttm-col-wrapper-bg-layer-inner"></div>
                     </div>
                     <div class="layer-content">
                        <div class="section-title style2 product-flex">
                           <div class="title-header">
                              <h3>{{ $t('products-page.title')}} </h3>
                              <h2 class="title">{{ $t('products-page.subtitle')}}</h2>
                           </div>
                           <div class="title-desc">
                              <p>{{ $t('products-page.description')}}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="ttm-row padding_top_zero-section mt_210 res-991-margin_top_30 position-relative z-index-2 clearfix">
         <div class="container">
            <div class="row slick_slider" data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "autoplay":false, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 2}},{"breakpoint":840,"settings":{"slidesToShow": 2}},{"breakpoint":650,"settings":{"slidesToShow": 1}}]}'>
               <div class="col-md-6 col-sm-6" v-for="(product, key) in products" :key="key">
                  <div class="featured-imagebox featured-imagebox-services style1">
                     <div class="featured-thumbnail">
                        <img class="img-fluid" :src="product.pic" alt="image">
                     </div>
                     <div class="featured-content">
                        <div class="featured-title">
                           <h3>
                              <a :href="'product/' + product.id" v-if="this.$i18n.locale == 'hu'" aria-label="Read more about products">{{ product.title_hu }}</a>
                              <a :href="'product/' + product.id" v-if="this.$i18n.locale == 'en'" aria-label="Read more about products">{{ product.title_en }}</a>
                              <a :href="'product/' + product.id" v-if="this.$i18n.locale == 'nl'" aria-label="Read more about products">{{ product.title_nl  }}</a>
                           </h3>
                           <div class="ttm-details-link">
                              <a :href="'product/' + product.id">
                              <i class="themifyicon ti-arrow-top-right"></i>
                              </a>
                           </div>
                        </div>
                        <div class="featured-desc">
                           <p  v-if="this.$i18n.locale == 'hu'">{{  product.description_hu}}</p>
                           <p  v-if="this.$i18n.locale == 'en'">{{  product.description_en}}</p>
                           <p  v-if="this.$i18n.locale == 'nl'">{{  product.description_nl}}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
      </section>
   </div>
</template>
<script >
import { data } from '@/assets/js/products.js'; 
export default {
  name: 'ProductsOriginal',
   data() {
    return {
      count:0,
      products: data.items.slice(0,this.count)
    };
  },
  methods: {
    myMethod: function say() {
      this.count +=3;
      this.products = data.items.slice(0,this.count)
   }
  },
   
  
}
</script>
