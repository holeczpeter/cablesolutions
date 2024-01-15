<template>
  <div class="banner_slider_wrapper">
   <div class="slider-textarea">
   </div>
   <div class="slider-social-links-wrapper">
      <ul class="social-icons">
         <li class="tm-social-facebook"><a target="_blank" :href="facebook" aria-label="Read more about in facebook"><i class="fa fa-facebook"></i></a></li>
         <li class="tm-social-linkedin"><a target="_blank" :href="linkedIn" aria-label="Read more about in linkedin"><i class="fa fa-linkedin"></i></a></li>
      </ul>
   </div>
   <div class="banner_slider banner_slider_wide">
      <div class="slide">
         <div class="slide_img" :style="{ backgroundImage: 'url(' + require('@/assets/img/fiber.jpg') + ')' }"></div>
         <div class="slide__content">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="slide__content--headings ttm-textcolor-white text-center">
                        <h3  data-animation="fadeInDown">{{ $t('welcome') }}</h3>
                        <h2  data-animation="fadeInDown">Your <strong>problem</strong> our <strong>challenge</strong></h2>
                        <p  data-animation="fadeInDown">{{ $t('slider-about') }}<br>{{ $t('slider-about-2') }} </p>
                        <div class="d-inline-block margin_top30 res-767-margin_top20" data-animation="fadeInUp" data-delay="1.4">
                           <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor margin_right15" href="#" v-scroll-to="'#about'">{{$t('more-detail')}}</a>
                           <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white" href="#" v-scroll-to="'#contact'">{{$t('contact')}}</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
   </div>
</div>
</template>

<script>
import { socialmedia } from '@/assets/js/social.js'; 

export default {
  name: 'Slider',
  data() {
    return {
      facebook: socialmedia.facebook,
      linkedIn: socialmedia.linkedIn,
    };
  },
  
}
</script>


