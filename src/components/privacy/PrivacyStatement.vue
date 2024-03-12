<template>
   <section class="ttm-row about-section clearfix">
      <div class="container">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12">
               <div class="padding_top20 res-991-padding_top40">
                  <div class="section-title">
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-1')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-1-1')}}</p>
                        <p>{{$t('privacy-page.paragraph-1-2')}}</p>
                        <p>{{$t('privacy-page.paragraph-1-3')}}</p>
                        <p>{{$t('privacy-page.paragraph-1-4')}}</p>
                        <p>{{$t('privacy-page.paragraph-1-5')}}</p>
                        
                     </div>
                  </div>
                  <div class="section-title">
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-2')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-2-1')}}</p>
                        <p>{{$t('privacy-page.paragraph-2-2')}}</p>
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
                        <h3>{{$t('privacy-page.heading-3')}}</h3>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-3-1')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-3-1')}}</p>
                         <ul class="ul-support">
                            <li  v-for="index in 4" :key="index" >
                              {{$t('privacy-page.li-3-1-1-'+index)}}
                            </li>
                        </ul>
                        <p>{{$t('privacy-page.paragraph-3-2')}}</p>
                        <p>{{$t('privacy-page.paragraph-3-3')}}</p>
                        <p>{{$t('privacy-page.paragraph-3-4')}}</p>
                        <ul class="ul-support">
                            <li  v-for="index in 3" :key="index" >
                              {{$t('privacy-page.li-3-1-4-'+index)}}
                            </li>
                        </ul>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-3-2')}}</h3>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-3-2-1')}}</h3>
                     </div>
                     <div class="title-desc">
                         <ul class="ul-support">
                            <li  v-for="index in 4" :key="index" >
                              {{$t('privacy-page.li-3-2-1-'+index)}}
                            </li>
                        </ul>
                        <p>{{$t('privacy-page.paragraph-3-2-1-1')}}</p>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-3-2-2')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-3-2-2-1')}}</p>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-4')}}</h3>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-5')}}</h3>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-5-1')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-5-1-1')}}</p>
                        <p>{{$t('privacy-page.paragraph-5-1-2')}}</p>
                        <p>{{$t('privacy-page.paragraph-5-1-3')}}</p>
                        <p>{{$t('privacy-page.paragraph-5-1-4')}}</p>
                        <ul class="ul-support">
                            <li  v-for="index in 6" :key="index" >
                              {{$t('privacy-page.li-5-1-4-'+index)}}
                            </li>
                        </ul>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-6')}}</h3>
                     </div>
                      <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-6-1-1-1')}}</p>
                        <p>{{$t('privacy-page.paragraph-6-1-1-2')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-7')}}</h3>
                     </div>
                      <div class="title-desc">
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-1')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-1')}}</p>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-2')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-2')}}</p>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-3')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-3')}}</p>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-4')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-4-1')}}</p>
                        <ul class="ul-support">
                            <li  v-for="index in 6" :key="index" >
                              {{$t('privacy-page.li-8-4-1-'+index)}}
                            </li>
                        </ul>
                         <p>{{$t('privacy-page.paragraph-8-4-2')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-5')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-5-1')}}</p>
                        <ul class="ul-support">
                            <li  v-for="index in 4" :key="index" >
                              {{$t('privacy-page.li-8-5-1-'+index)}}
                            </li>
                        </ul>
                         <p>{{$t('privacy-page.paragraph-8-5-2')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-6')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-6')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-7')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-7')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-8')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-8')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-9')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-9')}}</p>
                     </div>
                     <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-10')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-10')}}</p>
                     </div>
                      <div class="title-header">
                        <h3>{{$t('privacy-page.heading-8-11')}}</h3>
                     </div>
                     <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-8-11')}}</p>
                         <ul class="ul-support">
                            <li  v-for="index in 7" :key="index" >
                              {{$t('privacy-page.li-8-11-1-'+index)}}
                            </li>
                        </ul>
                     </div>
                       <div class="title-header">
                        <h3>{{$t('privacy-page.heading-9')}}</h3>
                     </div>
                      <div class="title-desc">
                        <p>{{$t('privacy-page.paragraph-9-1')}}</p>
                        <p>{{$t('privacy-page.paragraph-9-2')}}</p>
                        <p>{{$t('privacy-page.paragraph-9-3')}}</p>
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
