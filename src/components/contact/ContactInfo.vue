<template>
   <section class="ttm-row conatact-section clearfix">
      <div class="container">
         <div class="row">
            <div class="col-lg-5">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.3270895791907!2d20.0715225760728!3d46.93561013407185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474158a035b0b365%3A0xb29078aae4ed0bbe!2sTiszak%C3%A9cske%2C%20D%C3%B3zsa%20Telep%20u.%2083%2C%206060!5e0!3m2!1shu!2shu!4v1705164223073!5m2!1shu!2shu" width="600" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-lg-7">
               <div class="padding_top20 res-991-padding_top40">
                  <div class="section-title">
                     <div class="title-header">
                        <h3>{{ $t('contact-us-page.title')}}</h3>
                        <h2 class="title">{{ $t('contact-us-page.subtitle')}}</h2>
                     </div>
                     <div class="title-desc">
                        <p>{{ $t('contact-us-page.description')}}</p>
                     </div>
                  </div>
                  <h2 class="fs-24 padding_top10">{{ $t('contact-us-page.head-office')}}</h2>
                  <div class="ttm-horizontal_sep width-100"></div>
                  <div class="row">
                     <div class="col-lg-6 col-md-6">
                        <div class="featured-icon-box icon-align-before-content">
                           <div class="featured-icon">
                              <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded"> 
                                 <i class="themifyicon ti-location-pin ttm-textcolor-skincolor"></i>
                              </div>
                           </div>
                           <div class="featured-content">
                              <div class="featured-title">
                                 <h3 class="margin_bottom0">{{ $t('contact-us-page.address')}}</h3>
                              </div>
                              <div class="featured-desc">{{$t('contact-us-page.head_office')}}</div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-6 col-md-6">
                        <div class="featured-icon-box icon-align-before-content">
                           <div class="featured-icon">
                              <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded"> 
                                 <i class="themifyicon ti-email ttm-textcolor-skincolor"></i>
                              </div>
                           </div>
                           <div class="featured-content">
                              <div class="featured-title">
                                 <h3 class="margin_bottom0">{{ $t('contact-us-page.call-us')}} / {{ $t('contact-us-page.email')}}</h3>
                              </div>
                              <div class="featured-desc">{{ head_office_phone}}<br>{{ head_office_email}} </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <h2 class="fs-24 padding_top30">{{ $t('contact-us-page.branch-office')}}</h2>
                  <div class="ttm-horizontal_sep width-100"></div>
                  <div class="row">
                     <div class="col-lg-6 col-md-6">
                        <div class="featured-icon-box icon-align-before-content">
                           <div class="featured-icon">
                              <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded"> 
                                 <i class="themifyicon ti-location-pin ttm-textcolor-skincolor"></i>
                              </div>
                           </div>
                           <div class="featured-content">
                              <div class="featured-title">
                                 <h3 class="margin_bottom0">{{ $t('contact-us-page.address')}}</h3>
                              </div>
                              <div class="featured-desc">{{$t('contact-us-page.branch_office')}}</div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-6 col-md-6">
                        <!--featured-icon-box-->
                        <div class="featured-icon-box icon-align-before-content">
                           <div class="featured-icon">
                              <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded"> 
                                 <i class="themifyicon ti-email ttm-textcolor-skincolor"></i>
                              </div>
                           </div>
                           <div class="featured-content">
                              <div class="featured-title">
                                 <h3 class="margin_bottom0">{{ $t('contact-us-page.call-us')}} / {{ $t('contact-us-page.email')}}</h3>
                              </div>
                              <div class="featured-desc">{{ branch_office_phone}}<br>{{ branch_office_email}}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
export default {
  name: 'ContactInfo',
  data() {
    return {
      head_office_phone:"+31 165 856230",
      head_office_email:"administration@cablesolutions.eu",
      branch_office_phone:"+31 621 955470",
      branch_office_email:"administration@cablesolutions.eu",
    };
  },
}
</script>