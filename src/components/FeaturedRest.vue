<template>
  <div class="digital_feature" style="margin-top: 100px">
    <div class="row">
      <div class="col-lg-8">
        <div class="d_feature_text">
          <div class="main_title">
            <h2>Featured Restaurants</h2>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <router-link to="/restaurants"><button type="button" class="btn view_all_btn">SHOW ALL RESTAURANTS</button></router-link>
      </div>
      <div class="col-lg-12">
  
        <flickity ref="flickity" :options="flickityOptions" class="carousel" v-if="!isLoading">
               <div class="carousel-cell" v-for="restaurant in restaurants" :key="restaurant.id">
                  <div class="featured_places saitama">
                    <div class="featured_places_item">
                      <div class="featured_places_overlay">
                        <div class="row">
                          <div class="col-6">
                            <p class="ftr_places_title">{{ restaurant.location }}</p>
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

        </flickity>

        <!-- if you don't want to use the buttons Flickity provides -->
        <!-- <button @click="previous()">Custom Previous Button</button>
        <button @click="next()">Custom Next Button</button> -->


        <div class="container toggleCarousel">
          <div class="row">
            <div class="col-md-4 left_feature_place" v-for="restaurant in restaurants" :key="restaurant.id"
              style="padding-left: 0px; padding-right: 24px;">
              <router-link :to="'/restaurants/'+ restaurant.id + '/' + restaurant.location">
                <div class="featured_places saitama">
                  <div class="featured_places_item">
                    <div class="featured_places_overlay">
                      <div class="row">
                        <div class="col-sm-7 col-md-7">
                          <p class="ftr_places_title">SAITAMA</p>
                        </div>
                        <div class="col-sm-2 col-md-2">
                          <p class="ftr_places_title">221</p>
                        </div>
                        <div class="col-sm-2 col-md-2">
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
  import { mapState, mapActions } from 'vuex';
  export default {
    props: ['restaurants'],
    components: {
            Flickity
        },
    data () {
        return {
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true,
                autoPlay: 5000,
                resize: true
                // any options from Flickity can be used
            },
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    },
    computed: {
      ...mapState(['isLoading'])
    }
  }
</script>

<style>
.carousel-cell {
  height: 360px;
  width: 100%;
  border: 1px solid #000;
}
</style>