<template>
   <div class="site-main">
      <section class="ttm-row project-single-section clearfix">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="ttm-pf-single-content-wrapper ttm-pf-view-left-image">
                     <div class="ttm-pf-single-content-wrapper-innerbox">
                        <div class="ttm-pf-detail-box">
                           <div class="row">
                              <div class="col-md-12 col-lg-8">
                                 <div class="ttm_pf_image-wrapper">
                                    <img class="img-fluid" :src="currentProduct.pic" alt="portfolio-img">
                                 </div>
                              </div>
                              <div class="col-md-12 col-lg-4">
                                 <div class="ttm-pf-single-detail-box">
                                    <div class="ttm-pf-single-title ttm-bgcolor-skincolor">
                                       <h3>{{$t('product-detail-page.information')}}</h3>
                                    </div>
                                    <div class="ttm-short-desc" v-if="this.$i18n.locale == 'en'">{{currentProduct.shortdescription_en}}</div>
                                    <div class="ttm-short-desc" v-if="this.$i18n.locale == 'hu'">{{currentProduct.shortdescription_hu}}</div>
                                    <div class="ttm-short-desc" v-if="this.$i18n.locale == 'nl'">{{currentProduct.shortdescription_nl}}</div>
                                   
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="ttm-pf-single-content-area" id="pics">
                           <div class="row">
                              <div class="col-lg-12">
                                <div class="margin_top40">
                                    <h2 v-if="this.$i18n.locale == 'hu'">{{ currentProduct.subtitle_hu }}</h2>
                                    <h2 v-if="this.$i18n.locale == 'en'">{{ currentProduct.subtitle_en }}</h2>
                                    <h2 v-if="this.$i18n.locale == 'nl'">{{ currentProduct.subtitle_nl }}</h2>
                                    <p v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu}}</p>
                                    <p v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en}}</p>
                                    <p v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl}}</p>
                                </div> 
                            </div> 
                        </div> 
                           <div class="row" >
                           <div class="masonry-container" >
                              <div class="featured-imagebox featured-imagebox-services style1" v-for="(pic, key) in currentProduct.pics" :key="key">
                            
                                 <div class="featured-thumbnail">
                                    <img class="img-fluid" :src="pic.pic" alt="image">
                                 </div>
                             
                               </div>
                           </div>
                           </div>
                        </div>
                        <div class="ttm-horizontal_sep width-100 margin_top30 margin_bottom30"></div>
                        <div class="d-flex justify-content-between" v-if="prevProductId !=0">
                           <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark" :href="prevProductId" v-if="prevProductId !=0">{{$t('previous')}}</a>
                           <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark" :href="nextProductId" v-if="prevProductId !=max">{{$t('next')}}</a>
                        </div>
                        <div class="d-flex justify-content-end" v-if="prevProductId ==0">
                           <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark" :href="nextProductId" v-if="prevProductId !=max">{{$t('next')}}</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
   
</template>
<script>
import { data } from '@/assets/js/products.js'; 
export default {
  name: 'ProductInfo',
  components: {
   
  },
  data(){
    return { 
        currentProduct:data.items.find(x=>x.id == this.$route.params.id),
        prevProductId: data.items.find(x=>x.id == this.$route.params.id)?.id -1,
        nextProductId: data.items.find(x=>x.id == this.$route.params.id)?.id +1,
        max:data.items.length-1,
        count: data.items.find(x=>x.id == this.$route.params.id)?.pics.length
        } 
  }
}

</script>
