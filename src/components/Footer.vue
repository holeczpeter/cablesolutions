<template>
   <footer class="footer widget-footer ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
      <div class="first-footer">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-9 widget-area">
                  <div class="widget widget_text clearfix">
                     <div class="d-sm-flex align-items-center">
                        <div class="footer-logo">
                           <img id="footer-logo-img" class="img-fluid auto_size" height="46" width="170" src="../assets/img/logo.png" alt="image">
                        </div>
                        <div class="textwidget widget-text">
                           <p>{{$t('footer.title')}}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 widget-area">
                  <div class="widget widget_social clearfix">
                     <div class="social-icons text-lg-right">
                        <ul class="social-icons list-inline">
                           <li><a class="tooltip-top" :href="facebook" rel="noopener" aria-label="facebook" data-tooltip="Facebook"><i class="fa fa-facebook"></i></a></li>
                           <li><a class="tooltip-top" :href="linkedIn" rel="noopener" aria-label="linkedin" data-tooltip="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="second-footer">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div class="widget widget_text margin_right10 clearfix">
                     <h3 class="widget-title">{{$t('footer.get-in-touch')}}</h3>
                        <div class="textwidget widget-text">
                           <div class="call_detail">
                              <h3 class="fs-24">{{contact.phone}}</h3>
                              <div class="padding_top10 padding_bottom10"></div>
                                 <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white w-100 text-center" 
                                        :href="`${$route.meta.basePath || ''}/` + '#contact'"  >
                                        {{$t('footer.request-form')}}</a>
                              </div>
                           </div>
                        </div>
                  </div>
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div class="widget widget_nav_menu clearfix">
                     <h3 class="widget-title">{{$t('footer.site-links')}}</h3>
                     <ul id="menu-footer-quick-links" class="menu">
                        <li v-for="(item, index) in menuitems" :key="index">
                           <a :href="`${$route.meta.basePath || ''}/` + item.routerlink">{{$t(item.title)}}</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div class="widget widget_nav_menu clearfix">
                     <h3 class="widget-title">{{$t('footer.support')}}</h3>
                     <ul id="menu-footer-quick-links" class="menu">
                        <li><a :href="`${$route.meta.basePath || ''}/` + '/privacy'">{{$t('footer.privacy')}}</a></li>
                        <li><a :href="`${$route.meta.basePath || ''}/` + '/impressum'">{{$t('footer.impressum')}}</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div class="widget widget-latest-tweets clearfix">
                     <h3 class="widget-title">{{$t('contact')}}</h3>
                     <ul class="widget_contact_wrapper">
                        <li><i class="ttm-textcolor-skincolor fa fa-map-marker"></i>{{contact.address}}</li>
                        <li><i class="ttm-textcolor-skincolor fa fa-phone"></i>{{contact.phone}}</li>
                        <li><i class="ttm-textcolor-skincolor fa fa-envelope-o"></i><a href="mailto:administration@cablesolutions.eu">{{contact.email}}</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="bottom-footer-text copyright">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="text-center">
                     <span class="cpy-text">Copyright © 2024 <a href="https://holeczpeter.com" class="ttm-textcolor-skincolor font-weight-500">Holecz Péter </a> All rights reserved.</span>
                     <ul class="footer-nav-menu">
                        <li><a href="https://holeczpeter.com/#about">About Us</a></li>
                        <li><a href="https://holeczpeter.com/#contact">Contact Us</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>
<script>
import { socialmedia } from '@/assets/js/social.js'; 
import { contact } from '@/assets/js/contact.js'; 
export default {
  name: 'Footer',
   data() {
    return {
      facebook: socialmedia.facebook,
      linkedIn: socialmedia.linkedIn,
      contact:contact,
      menuitems:[
        { title: 'home', routerlink: '#home' },
        { title: 'about', routerlink: '#about'},
        { title: 'products', routerlink: '#product'},
        { title: 'contact', routerlink: '#contact'},
      ],
    };
  },
}
</script>


