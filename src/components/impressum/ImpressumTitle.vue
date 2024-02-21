<template>
    <div class="ttm-page-title-row ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
      <div style="background:#9f0000" class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-12">
               <div class="ttm-page-title-row-inner">
                  <div class="page-title-heading">
                     <h2 class="title">{{$t('impressum-page.title')}}</h2>
                  </div>
                  <div class="breadcrumb-wrapper">
                     <span>
                     <a title="Homepage" :href="`${$route.meta.basePath || ''}/`">{{$t('home')}}</a>
                     </span>
                     <span>{{$t('impressum-page.title')}}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>