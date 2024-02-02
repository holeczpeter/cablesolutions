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
                                    <div class="row"  v-if="currentProduct.id == 1">
                                        <div class="col-md-6">
                                            
                                            <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor margin_top15">
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_1 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_1 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_1 }}</div>
                                                </li> <br>
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_2 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_2 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_2 }}</div>
                                                </li> <br>
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_3 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_3 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_3 }}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor margin_top15">
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_4 }}</div> 
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_4 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_4 }}</div>
                                                </li> <br>
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_5 }}</div>  
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_5 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_5 }}</div>
                                                </li> <br>
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_6 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_6 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_6 }}</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row"  v-if="currentProduct.id == 2">
                                        <div class="col-md-6">
                                            <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor margin_top15">
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_1 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_1 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_1 }}</div>
                                                </li> <br>
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_2 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_2 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_2 }}</div>
                                                </li> <br>
                                               
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor margin_top15">
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_3 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_3 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_3 }}</div>
                                                </li><br>
                                                <li><i class="ti ti-check"></i>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.solution_hu_4 }}</div> 
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'en'">{{ currentProduct.solution_en_4 }}</div>
                                                    <div class="ttm-list-li-content" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.solution_nl_4 }}</div>
                                                </li> <br>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="row" >
                              <div class="col-md-6 col-sm-6" v-for="(pic, key) in currentProduct.pics" :key="key">
                              <div class="featured-imagebox featured-imagebox-services style1">
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
        
        } 
  }
}

</script>
