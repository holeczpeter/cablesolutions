<template>
<div class="col-lg-12 col-md-12 col-xs-12 product-section">
   <section class="ttm-row padding_zero-section clearfix">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="ttm-bg ttm-col-bgcolor-yes ttm-bg ttm-col-bgimage-yes col-bg-img-one ttm-left-span spacing-2">
                  <div class="layer-content">
                     <div class="section-title style2 product-flex">
                        <div class="title-header">
                           <h3>{{ $t('products-page.title')}} </h3>
                           <h2 class="title">{{ $t('products-page.subtitle')}}</h2>
                        </div>
                        <div class="title-desc">
                           <p class="justify-p">{{ $t('products-page.description')}}</p>
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
         <div class="ttm-service-description margin_top50">
            <div class="ttm-horizontal_sep width-100 margin_top35 margin_bottom35"></div>
            <div class="row">
               <div class="col-md-8">
                  <h3 v-if="this.$i18n.locale == 'en'">{{cable.title_en}}</h3>
                  <h3 v-if="this.$i18n.locale == 'hu'">{{cable.title_hu}}</h3>
                  <h3 v-if="this.$i18n.locale == 'nl'">{{cable.title_nl}}</h3>
                  <p v-if="this.$i18n.locale == 'hu'">{{cable.shortdescription_hu}}</p>
                  <p v-if="this.$i18n.locale == 'en'">{{cable.shortdescription_en}}</p>
                  <p v-if="this.$i18n.locale == 'nl'">{{cable.shortdescription_nl}}</p>
                  <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark margin_top15" :href="'product/' + cable.id">{{ $t('products-page.read-more')}}</a>
               </div>
               <div class="col-md-4">
                  <div class="featured-imagebox featured-imagebox-services style1">
                     <div class="featured-thumbnail">
                        <img class="img-fluid" :src="cable.pic" alt="image">
                     </div>
                     
                  </div>
               </div>
            </div>
            <div class="ttm-horizontal_sep width-100 margin_top35 margin_bottom35"></div>
            <div class="row">
               <div class="col-md-4">
                   <div class="featured-imagebox featured-imagebox-services style1">
                     <div class="featured-thumbnail">
                        <img class="img-fluid" :src="box.pic" alt="image">
                     </div>
                    
                  </div>
               </div>
               <div class="col-md-8">
                  <div class="res-767-margin_top30">
                     <h3 v-if="this.$i18n.locale == 'en'">{{box.title_en}}</h3>
                     <h3 v-if="this.$i18n.locale == 'hu'">{{box.title_hu}}</h3>
                     <h3 v-if="this.$i18n.locale == 'nl'">{{box.title_nl}}</h3>
                     <p v-if="this.$i18n.locale == 'hu'">{{box.shortdescription_hu}}</p>
                     <p v-if="this.$i18n.locale == 'en'">{{box.shortdescription_en}}</p>
                     <p v-if="this.$i18n.locale == 'nl'">{{box.shortdescription_nl}}</p>
                     <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark margin_top15" :href="'product/' + box.id">{{ $t('products-page.read-more')}}</a>
                  </div>
               </div>
            </div>
            <div>
            </div>
         </div>
      </div>
   </section>
   </div>
</template>
<script>
   import { data } from '@/assets/js/products.js'; 
   export default {
     name: 'Products2',
     data(){
       return { 
          
           cable: data.items[0],
           box: data.items[1],
           
           } 
     }
   }
   
</script>