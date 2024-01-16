<template>
   <div class="site-main">
      <!--about-section-->
      <section class="ttm-row about-section clearfix">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-12">
                  <div class="ttm_single_image-wrapper text-left">
                     <img class="img-fluid" src="../../assets/img/about-2.jpg" alt="about">
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-xs-12">
                  <div class="padding_top20 res-991-padding_top40">
                     <!-- section title -->
                     <div class="section-title">
                        <div class="title-header">
                           <h3>{{$t('about-page-2.title')}}</h3>
                           <h2 class="title">{{$t('about-page-2.description')}}</h2>
                        </div>
                        <div class="title-desc">
                           <p>{{ $t('about-page-2.paragraph') }}</p>
                        </div>
                     </div>
                     <!-- section title end -->
                     <div class="ttm-highlight-quote margin_top35 clearfix">
                        <blockquote class=" ttm-bgcolor-grey">
                           <p>{{ $t('quote') }}</p>
                        </blockquote>
                        <div class="d-flex align-items-center">
                           <div class="d-inline-block">                                             
                              <img class="img-fluid auto_size" width="90" height="89" src="../../assets/img/owner.jpg" alt="author-quote">
                           </div>
                           <div class="d-inline-block padding_left30">
                              <h2 class="fs-20 mb-0">Edwin Baselier </h2>
                              <label>{{ $t('about-page-2.owner') }}</label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- row end -->                
         </div>
      </section>
      <section class="ttm-row padding_zero-section clearfix">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="featuredbox-number mb_90 res-991-margin_bottom0 mt_15 res-991-margin_top0">
                     <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6"  v-for="(item, index) in strengths" :key="index">
                           <div class="featured-icon-box icon-align-top-content style7">
                              <div class="featured-icon">
                                 <div class="ttm-icon ttm-icon_element-fill ttm-icon_element-size-sm ttm-icon_element-color-skincolor ttm-icon_element-style-square">
                                    <span class="fea_num">
                                    <i class="ttm-num ti-info"></i>
                                    </span>
                                 </div>
                              </div>
                              <div class="featured-content">
                                 <div class="featured-title">
                                    <h3>{{$t('about-page-2.' +item.title)}}</h3>
                                 </div>
                                 <div class="featured-desc">
                                    <p>{{$t('about-page-2.' +item.desc)}}</p>
                                 </div>
                              </div>
                           </div>
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
export default {
  name: 'AboutDetail',
  data(){
    return {
        strengths:[
            {
                title: "quality", desc:"quality-description"
            },
            { 
                title: "flexibility", desc:"flexibility-description"
            },
            { 
                title: "high-efficiency", desc:"high-efficiency-description"
            }
        ]
    }
 }
}
</script>