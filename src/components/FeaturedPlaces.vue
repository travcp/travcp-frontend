<template>
    <div class="digital_feature" style="margin-top: 100px">
        <div class="row">
            <div class="col-lg-8">
                <div class="d_feature_text">
                    <div class="main_title">
                        <h2>Featured Places</h2>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <router-link to="/places"><button type="button" class="btn view_all_btn">SEE ALL</button></router-link>
            </div>
            <div class="col-lg-12"> 

            </div>
            <div class="col-lg-12">
                <div class="container toggleCarousel">
                    <div class="row">
                        <div class="col-md-4 left_feature_place" v-for="place in places" :key="place.id" style="padding-right: 10px;padding-left: 0px;">
                            <router-link :to="'/experience/'+ place.id + '/' + place.city">
                              <div class="featured_places osaka">
                                  <div class="featured_places_item">
                                      <div class="featured_places_overlay featured_places_overlay_active">
                                          <div class="row">
                                              <div class="col-md-7">
                                                  <p class="ftr_places_title">{{ place.city }}</p>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
    data: function(){return{
      
    }},
    props: ['places'],
}
</script>
