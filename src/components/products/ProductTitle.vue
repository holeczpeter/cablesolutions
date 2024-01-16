 <template>
    <div class="ttm-page-title-row ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
      <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-12">
               <div class="ttm-page-title-row-inner">
                  <div class="page-title-heading">
                     <h2 class="title" v-if="this.$i18n.locale == 'hu'">{{ currentProduct.title_hu }}</h2>
                     <h2 class="title" v-if="this.$i18n.locale == 'en'">{{ currentProduct.title_en }}</h2>
                     <h2 class="title" v-if="this.$i18n.locale == 'nl'">{{ currentProduct.title_nl }}</h2>
                  </div>
                  <div class="breadcrumb-wrapper">
                     <span>
                     <a title="Homepage" :href="'/'">{{$t('home')}}</a>
                     </span>
                     <span  v-if="this.$i18n.locale == 'hu'">{{ currentProduct.title_hu }}</span>
                     <span  v-if="this.$i18n.locale == 'en'">{{ currentProduct.title_en }}</span>
                     <span  v-if="this.$i18n.locale == 'nl'">{{ currentProduct.title_nl }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
 </template>
 <script>
import { data } from '@/assets/js/products.js'; 
export default {
  name: 'Product',
  data(){
    return { 
        currentProduct:data.items.find(x=>x.id == this.$route.params.id)
        } 
  }
}

</script>