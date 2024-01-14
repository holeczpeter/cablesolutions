<template>
   <section class="ttm-row padding_bottom_zero-section clearfix">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="ttm-bgcolor-white box-shadow p-50">
                     <div class="section-title title-style-center_text">
                        <div class="title-header">
                           <h2 class="title">{{ $t('contact-form.title-1')}}<b> {{ $t('contact-form.title-2')}}</b></h2>
                        </div>
                        <div class="title-desc">
                           <p>{{ $t('contact-form.subtitle-1')}} 
                              <a class="ttm-textcolor-skincolor" :href="linkedIn">{{ $t('contact-form.linkedIn')}}</a>
                              {{ $t('contact-form.subtitle-2')}}
                              <a class="ttm-textcolor-skincolor" :href="facebook">{{ $t('contact-form.facebook')}}</a>  
                              {{ $t('contact-form.subtitle-3')}}
                           </p>
                        </div>
                     </div>
                     <form id="request_qoute_form" class="request_qoute_form wrap-form clearfix" method="post" novalidate="novalidate" action="#">
                        <div class="row">
                           <div class="col-md-4">
                              <span class="text-input">
                              <input name="name"  type="text" value="" 
                                 :placeholder="$t('contact-form.name')" 
                                 required="required">
                              </span>
                           </div>
                           <div class="col-md-4">
                              <span class="text-input">
                              <input name="address" type="text" value="" 
                                 :placeholder="$t('contact-form.email')" 
                                 required="required">
                              </span>
                           </div>
                           <div class="col-md-4">
                              <span class="text-input">
                              <input name="phone" 
                                 type="text" 
                                 value="" 
                                 :placeholder="$t('contact-form.phone')" 
                                 required="required">
                              </span>
                           </div>
                           <div class="col-md-6">
                              <span class="text-input">
                              <input name="company name*" 
                                 type="text" value="" 
                                 :placeholder="$t('contact-form.company')"
                                 required="required">
                              </span>
                           </div>
                           <div class="col-md-6">
                              <span class="text-input">
                              <input name="subject" 
                                 type="text" value="" 
                                 :placeholder="$t('contact-form.subject')" 
                                 required="required">
                              </span>
                           </div>
                           <div class="col-lg-12">
                              <span class="text-input">
                              <textarea name="message" 
                                 rows="5" 
                                 :placeholder="$t('contact-form.message')" 
                                 required="required">
                              </textarea>
                              </span>
                           </div>
                           <div class="col-lg-12">
                              <div class="pt-15 text-center">
                                 <button class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" 
                                    type="submit">
                                 {{$t('contact-form.send')}}
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
import { socialmedia } from '@/assets/js/social.js'; 
export default {
  name: 'ContactForm',
  data() {
    return {
      facebook: socialmedia.facebook,
      linkedIn: socialmedia.linkedIn,
    };
  },
}
</script>
