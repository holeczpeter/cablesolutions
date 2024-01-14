<template>
   <section class="ttm-row about-section clearfix">
      <div class="container">
         <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-8">
               <div class="ttm_single_image-wrapper">
                  <img class="img-fluid auto_size" width="475" height="624" src="../../assets/img/about.jpeg" alt="single-07">
               </div>
            </div>
            <div class="col-lg-7 col-md-12 col-xs-12">
               <div class="padding_left30 padding_top20 res-991-padding_left0 res-991-padding_top40">
                  <div class="section-title">
                     <div class="title-header">
                        <h3>{{$t('about-page.section-title')}}</h3>
                        <h2 class="title">{{ $t('about-page.title')}} <b> {{ $t('about-page.since')}}</b></h2>
                     </div>
                     <div class="title-desc">
                        <p>{{ $t('about-page.detail')}}</p>
                     </div>
                  </div>
                  <!-- section title end -->
                  <div class="ttm-horizontal_sep width-100 padding_top30"></div>
                  <div class="d-sm-flex align-items-center">
                     <div class="ttm_single_image-wrapper text-left m-0">
                        <img class="img-fluid auto_size" width="168" height="88" src="../../assets/img/Symbol.jpg" alt="single-08">
                     </div>
                     <div class="pl-4 res-575-padding_left0 res-575-margin_top15">
                        <h3 class="fs-20 mb-0 pr-5 res-991-padding_right0">Our Electronics Manufacturing Found In 2011</h3>
                     </div>
                  </div>
                  <div class="ttm-horizontal_sep width-100 margin_top30 padding_bottom30"></div>
                  <div>
                     <ul class="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey without-border">
                        <li><i class="ti ti-check"></i><span class="ttm-list-li-content">{{ $t('about-page.check-1')}}</span></li>
                        <li><i class="ti ti-check"></i><span class="ttm-list-li-content">{{ $t('about-page.check-2')}}</span></li>
                        <li><i class="ti ti-check"></i><span class="ttm-list-li-content">{{ $t('about-page.check-3')}}</span></li>
                     </ul>
                  </div>
                  <div class="d-inline-block margin_top15">
                     <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor margin_right20 margin_top15" :href="'about-detail'">{{ $t('about-page.view-more')}}!</a>
                     <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark margin_top15" href="#" v-scroll-to="'#contact'">{{ $t('about-page.contact')}}</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
export default {
  name: 'About',
}
</script>