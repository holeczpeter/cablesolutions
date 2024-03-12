<template>
   <section class="ttm-row about-section clearfix">
      <div class="container">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12">
               <div class="padding_top20 res-991-padding_top40">
                  <div class="section-title">
                     <div class="title-header">
                        <h3>{{$t('impressum-page.business.data')}}</h3>
                     </div>
                     <div class="title-desc">
                        <ul class="ul-support">
                            <li>{{$t('impressum-page.business.name')}}: {{business.name}}</li>
                            <li>{{$t('impressum-page.business.address')}}: {{business.address}}</li>
                            <li>{{$t('impressum-page.business.post-address')}}: {{business.postaddress}}</li>
                            <li>{{$t('impressum-page.business.tax')}}: {{business.tax}}</li>
                            <li>{{$t('impressum-page.business.number')}}: {{business.number}}</li>
                            <li>{{$t('impressum-page.business.phone')}}: {{business.phone}}</li>
                            <li>{{$t('impressum-page.business.bank')}}: {{business.bank}}</li>
                            <li>{{$t('impressum-page.business.email')}}: {{business.email}}</li>
                        </ul>
                     </div>
                  </div>
                   <div class="section-title">
                     <div class="title-header">
                        <h3>{{$t('impressum-page.domain.data')}}</h3>
                     </div>
                     <div class="title-desc">
                        <ul class="ul-support">
                            <li>{{$t('impressum-page.domain.name')}}: {{domain.name}}</li>
                            <li>{{$t('impressum-page.domain.address')}}: {{domain.address}}</li>
                            <li>{{domain.email}}</li>
                            <li>{{domain.link}}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import { business } from '@/assets/js/business.js'; 
import { domain } from '@/assets/js/domain.js'; 
export default {
  name: 'Impressum',
  components: {
   
  },
  data(){
    return { 
        business:business,
        domain:domain
        } 
  }
}

</script>
