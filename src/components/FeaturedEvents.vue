<template>
    <div class="digital_feature" style="margin-top: 100px">
        <div class="row">
            <div class="col-lg-8">
                <div class="d_feature_text">
                    <div class="main_title">
                        <h2>Featured Events</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <router-link to="/events"><button type="button" class="btn view_all_btn">SEE ALL</button></router-link>
            </div>
            <div class="col-lg-12"> 

            </div>
            <div class="col-lg-12">
                <div class="container toggleCarousel">
                    <div class="row">
                      <div class="card-deck">
                        <div class="row">
                          <div class="col-md-4" v-for="event in events" :key="event.id">
                            <router-link :to="'/experience/'+ event.id + '/' + event.city">
                                <div class="featured-card card">
                                <img v-if="event.images.length" :src="event.images[0].image" class="card-img-top featured-card-img" alt="...">
                                <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" alt="...">
                                 <div class="featured-card-footer featured_places_overlay_active">
                                    <div class="row">
                                      <div class="col-6">
                                        {{ event.city }}                                  
                                      </div>
                                      <div class="col-3 text-center">
                                       <p>{{ event.rating_count }} <i class="fa fa-star"></i></p>  
                                      </div>
                                      <div class="col-3 text-center">
                                       <p>{{ event.number_admittable }} <i class="fa fa-heart"></i></p>  
                                      </div>
                                    </div>
                                  </div>
                            </div>
                            </router-link>
                          </div>
                        </div>
                      </div>
                        <!-- <div class="col-md-4 left_feature_place" v-for="event in events" :key="event.id" style="padding-right: 10px;padding-left: 0px;">
                            <router-link :to="'/experience/'+ event.id + '/' + event.city">
                              <div class="featured_places nagoya">
                                  <div class="featured_places_item">
                                      <div class="featured_places_overlay featured_places_overlay_active">
                                          <div class="row">
                                              <div class="col-md-7">
                                                  <p class="ftr_places_title">{{ event.city }}</p>
                                              </div>
                                              <div class="col-md-2">
                                                  <p class="ftr_places_title">{{ event.number_admittable }}</p>
                                              </div>
                                              <div class="col-md-2">
                                                  <p class="ftr_places_title">{{ event.rating_count }}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </router-link>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
    name: 'FeaturedEvents',
    data: function(){return{
      
    }},
    props: ['events'],
    // components: {
    //       Flickity
    // },
    // data () {
    //     return {
    //         flickityOptions: {
    //             initialIndex: 3,
    //             prevNextButtons: false,
    //             pageDots: false,
    //             wrapAround: true,
    //             autoPlay: 5000,
    //             resize: true
    //             // any options from Flickity can be used
    //         }
    //     }
    // },
    // methods: {
    //     // next() {
    //     //     this.$refs.flickity.next();
    //     // },

    //     // previous() {
    //     //     this.$refs.flickity.previous();
    //     // }
    // }
}
</script>

<style>
.featured-card {
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1), 2px 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
}
.featured-card-footer{
  color: #FFF;
  position: relative;
  padding: .75rem 1.25rem;
  margin-top:-50px;
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
}
.featured-card-img {
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
}
</style>