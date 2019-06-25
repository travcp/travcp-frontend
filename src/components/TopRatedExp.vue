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
                <router-link to="/experiences"><button type="button" class="btn view_all_btn">SEE ALL</button></router-link>
            </div>
            <div class="col-lg-12">    
             <!--  <flickity ref="flickity" :options="flickityOptions">
                     <div class="carousel-cell" v-for="experience in experiences" :key="experience.id">
                        <div class="featured_places saitama">
                          <div class="featured_places_item">
                            <div class="featured_places_overlay">
                              <div class="row">
                                <div class="col-6">
                                  <p class="ftr_places_title">{{ experience.location }}</p>
                                </div>
                                <div class="col-3">
                                  <p class="ftr_places_title">221</p>
                                </div>
                                <div class="col-3">
                                  <p class="ftr_places_title">50</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
              </flickity> -->

            </div>
            <div class="col-lg-12">
                <div class="container toggleCarousel">
                    <div class="row">
                        <div class="col-md-4 left_feature_place" v-for="experience in experiences" :key="experience.id" style="padding-right: 24px;padding-left: 0px;">
                            <router-link :to="'/experience/'+ experience.id + '/' + experience.city">
                              <div class="featured_places nagoya">
                                  <div class="featured_places_item">
                                      <div class="featured_places_overlay featured_places_overlay_active">
                                          <div class="row">
                                              <div class="col-md-7">
                                                  <p class="ftr_places_title">{{ experience.city }}</p>
                                              </div>
                                              <div class="col-md-2">
                                                  <p class="ftr_places_title">221</p>
                                              </div>
                                              <div class="col-md-2">
                                                  <p class="ftr_places_title">50</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </router-link>
                        </div>
                        <!-- <div class="col-md-4 middle_feature_place" style="padding-right: 24px;padding-left: 24px;">
                            <div class="featured_places niigata2">
                                <div class="featured_places_item">
                                    <div class="featured_places_overlay">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <p class="ftr_places_title">NIIGATA</p>
                                            </div>
                                            <div class="col-md-2">
                                                <p class="ftr_places_title">221</p>
                                            </div>
                                            <div class="col-md-2">
                                                <p class="ftr_places_title">50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 right_feature_place" style="padding-left: 24px;padding-right: 0px;">
                            <div class="featured_places osaka">
                                <div class="featured_places_item">
                                    <div class="featured_places_overlay">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <p class="ftr_places_title">OSAKA</p>
                                            </div>
                                            <div class="col-md-2">
                                                <p class="ftr_places_title">221</p>
                                            </div>
                                            <div class="col-md-2">
                                                <p class="ftr_places_title">50</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Flickity from 'vue-flickity';

export default {
    data: function(){return{
      
    }},
    props: ['experiences'],
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