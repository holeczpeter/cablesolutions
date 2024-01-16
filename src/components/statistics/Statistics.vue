<template>
   <section class="ttm-row fid-section ttm-bgimage-yes bg-img1 ttm-bg ttm-bgcolor-darkgrey clearfix">
      <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
      <div class="container">
         <div class="row">
            <div class="col-lg-8 m-auto">
               <div class="section-title title-style-center_text">
                  <div class="title-header">
                     <h2 class="title">{{$t('statistics-page.title-1')}} <b class="ttm-textcolor-skincolor">{{$t('statistics-page.title-2')}} </b>{{$t('statistics-page.title-3')}}.</h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6" v-for="(item, index) in fidItems" :key="index">
               <div class="ttm-fid inside ttm-fid-with-icon style1">
                  <div class="ttm-fid-icon-wrapper">
                     <i class="flaticon" :class="item.icon"></i>
                  </div>
                  <div class="ttm-fid-contents">
                     <h4 class="ttm-fid-inner">
                        <span  data-appear-animation="animateDigits" 
                           data-from="0" 
                           data-to="350" 
                           data-interval="15" 
                           data-before="" 
                           data-before-style="sup" 
                           data-after=""
                           data-after-style="sub" 
                           class="numinate">{{item.value}}</span>
                     </h4>
                     <h3 class="ttm-fid-title">{{ $t(item.title) }}</h3>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-12">
               <div class="padding_bottom90 res-991-padding_bottom0"></div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
export default {
 name: 'Statistics',
 data() {
    return {
      fidItems: [
        { icon: 'flaticon flaticon-suit', value: 350, title: 'statistics-page.clients', animate: true },
        { icon: 'flaticon flaticon-fabric', value: 215, title: 'statistics-page.projects', animate: true },
        { icon: 'flaticon flaticon-factory', value: 13, title: 'statistics-page.experience', animate: true },
      ],
    };
  },
}
</script>
