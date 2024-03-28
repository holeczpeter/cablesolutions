<template>
   <footer class="footer widget-footer  clearfix">
   <div class="ttm-horizontal_sep width-100 margin_top35"></div>
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
                           <p class="footer-title">{{$t('footer.title')}}</p>
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
      <div class="second-footer ttm-bgcolor-darkgrey ttm-textcolor-white">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                  <div class="widget widget_nav_menu clearfix">
                     <h3 class="widget-title">{{$t('footer.site-links')}}</h3>
                     <ul id="menu-footer-quick-links" class="menu">
                        <li v-for="(item, index) in menuitems" :key="index">
                           <a :href="`${$route.meta.basePath || ''}/` + item.routerlink">{{$t(item.title)}}</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                  <div class="widget widget_nav_menu clearfix">
                     <h3 class="widget-title">{{$t('footer.support')}}</h3>
                     <ul id="menu-footer-quick-links" class="menu">
                        <li><a href="docs/Cable_Solutions_Privacy.pdf" download>{{$t('footer.privacy')}}</a></li>
                        <li><a :href="`${$route.meta.basePath || ''}/` + 'impressum'">{{$t('footer.impressum')}}</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                  <div class="widget widget-latest-tweets clearfix">
                     <h3 class="widget-title">{{$t('contact')}}</h3>
                     <ul class="widget_contact_wrapper">
                        <li><i class="ttm-textcolor-skincolor fa fa-map-marker"></i>{{ $t('contact-us-page.head_office')}}</li>
                        <li><i class="ttm-textcolor-skincolor fa fa-phone"></i>{{contact.head_office.phone}}</li>
                        <li><i class="ttm-textcolor-skincolor fa fa-envelope-o"></i><a href="mailto:administration@cablesolutions.eu">{{contact.head_office.email}}</a></li>
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
                        <li><a class="ttm-textcolor-skincolor font-weight-500" href="https://holeczpeter.com/#about">About Us</a></li>
                        <li><a class="ttm-textcolor-skincolor font-weight-500" href="https://holeczpeter.com/#contact">Contact Us</a></li>
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


