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
                                    <div class="ttm-short-desc">{{$t('product-detail-page.shortdescription')}}</div>
                                    <ul class="ttm-pf-detailbox-list">
                                       <li><span>{{$t('product-detail-page.project')}}: </span><span>{{currentProduct.project}} </span></li>
                                       <li><span>{{$t('product-detail-page.category')}}: </span><span>{{currentProduct.category}} </span></li>
                                       <li><span>{{$t('product-detail-page.date')}}: </span><span>{{currentProduct.date}} </span></li>
                                    </ul>
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
                                    <p>{{$t('product-detail-page.paragraph')}}</p>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-md-6 col-sm-6">
                                 <div class="ttm_single_image-wrapper text-left padding_top15">
                                    <img class="img-fluid" src="https://via.placeholder.com/623x319?text=623x319+single_img10.jpg" alt="single-img-10">
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                 <div class="ttm_single_image-wrapper text-left padding_top15">
                                    <img class="img-fluid" src="https://via.placeholder.com/622x319?text=622x319+single_img11.jpg" alt="single-img-11">
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
  data(){
    return { 
        currentProduct:data.items.find(x=>x.id == this.$route.params.id),
        prevProductId: data.items.find(x=>x.id == this.$route.params.id)?.id -1,
        nextProductId: data.items.find(x=>x.id == this.$route.params.id)?.id +1,
        max:data.items.length-1,
        } 
  }
}

</script>
