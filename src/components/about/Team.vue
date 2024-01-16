<template>
   <section class="ttm-row services-section ttm-bgcolor-grey clearfix">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="padding_top75 res-991-padding_top0"></div>
               <!-- section title -->
               <div class="section-title title-style-center_text">
                  <div class="title-header">
                     <h3>{{ $t('team.team') }}</h3>
                     <h2 class="title"> {{ $t('team.experience-team') }}</h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="row slick_slider mb_15">
            <div class="col-md-4 col-sm-6" v-for="(item, index) in team" :key="index">
               <div class="featured-imagebox featured-imagebox-services style1">
                  <div class="featured-thumbnail">
                     <img class="img-fluid" src="https://via.placeholder.com/768x512?text=768x512+services-01.jpg" alt="image">
                  </div>
                  <div class="featured-content">
                     <div class="featured-title">
                        <h3><a>{{item.name}}</a></h3>
                     </div>
                     <div class="featured-desc">
                        <p>{{item.desc}}</p>
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
  name: 'Team',
  data(){
    return {
        team:[
            {
                name: "Benjamin	Cameron", desc:"Engineer"
            },
            { 
                name: "Grace Murray", desc:"Quality Manager"
            },
            { 
                name: "Tracey Hart", desc:"Owner"
            },
             { 
                name: "David Walillams", desc:"CONSULTANT"
            },
             { 
                name: "Lucy Eva", desc:"Manager"
            }
        ]
    }
 }
}
</script>