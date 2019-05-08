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
                        <div class="col-md-4 left_feature_place" v-for="event in events" :key="event.id" style="padding-right: 10px;padding-left: 0px;">
                            <router-link :to="'/event/'+ event.id + '/' + event.city">
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
                        </div>
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

</style>