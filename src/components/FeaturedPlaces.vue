<template>
    <div class="digital_feature">
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
            <div class="col-lg-12 carousel"> 
              <carousel  :autoplayLoop="true" :autoplay="true" :autoplayTimeout="1000" :autoplayHoverPause="true" :paginationEnabled="false"
               :perPageCustom="[[480, 1], [100, 1]]">
                <slide v-for="place in places" :key="place.id">
                   <!-- <router-link :to="'/experience/'+ restaurant.id + '/' + restaurant.title.toString().toLowerCase().replace( /\s/g, '-')"> -->
                    <div class="featured-card card" v-on:click="goToRestPage(place.id, place.slug)" style="overflow: hidden;">
                      <img v-if="place.images.length" style="width: 100%;object-fit: cover;height:380px;" :src="place.images[0].image" class="card-img-top featured-card-img" alt="..." loading="lazy">
                      <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" style="width: 100%;object-fit: cover;height: 380px;" alt="..." loading="lazy">
                      <div class="featured-card-footer featured_places_overlay_active">
                          <div class="row" style="text-transform: capitalize;">
                              <div class="col-12 text-left">
                                  {{ place.city }}
                              </div>
                              <div class="col-6 text-left">
                                  <p>{{ place.rating }} <i class="fa fa-star"></i></p>
                              </div>
                              <div class="col-6 text-left" @click="postFavoriteExeperience(place.id)">
                                  <p><i class="fa fa-heart"></i></p>
                              </div>
                          </div>
                      </div>
                  </div>
                </slide>
              </carousel>
            </div>
            <div class="col-lg-12 toggleCarousel">
                <div class="container">
                    <div class="row">
                      <div class="card-deck">
                        <div class="row">
                          <div class="col-md-4" v-for="place in places" :key="place.id" style="margin-right:1.2rem">
                            <router-link :to="'/experience/'+ place.id + '/' + place.title.toString().toLowerCase().replace( /\s/g, '-')">
                                <div class="featured-card card" style="overflow: hidden;">
                                    <img v-if="place.images.length" style="width: 100%;object-fit: cover;height:380px;" :src="place.images[0].image" class="card-img-top featured-card-img" alt="..." loading="lazy">
                                    <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" style="width: 100%;object-fit: cover;height: 380px;" alt="..." loading="lazy">
                                    <div class="featured-card-footer featured_places_overlay_active">
                                        <div class="row" style="text-transform: capitalize;">
                                            <div class="col-6">
                                                {{ place.city }}
                                            </div>
                                            <div class="col-3 text-center">
                                                <p>{{ place.rating }} <i class="fa fa-star"></i></p>
                                            </div>
                                            <div class="col-3 text-center" @click="postFavoriteExeperience(place.id)">
                                                <p><i class="fa fa-heart"></i></p>
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
        </div>
    </div>
</template>

<script>
// import Flickity from 'vue-flickity';
import { mapState } from 'vuex';
import Axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';

import StarRating from 'vue-star-rating'

export default {
    data: function(){return{
      loading: false
    }},
    props: ['places'],
    computed: {
        ...mapState(['auth'])
    },
    components: {
      Carousel,
      Slide,
      StarRating
    },
    methods: {
        postFavoriteExeperience(placeId){
            this.loading = true
            if(this.auth && this.auth.access_token){
                let data = {
                    user_id: this.auth.user.id,
                    experience_id: placeId
                }
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                }
                Axios.post(`${this.$store.state.API_BASE}/favourites`,
                            data,
                            requestHeaders).then(response => {
                                console.log(response.data.data);
                                this.loading = false
                                this.$noty.success('Added to Favorites')
                            }).catch(error => {
                                console.log(error.data)
                                this.loading = false
                            })
            } else {
                this.$noty.error('You need to Login to Have a Favourite Experience')
            }
        },
        goToRestPage(id, title){
          this.$router.push(`/experience/${id}/${title}`);
        },
        buildSlideMarkup (count){
          let slideMarkup = '';
          for (var i = 1; i <= count; i++) {
            slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
          }
          return slideMarkup;
        }
    },
}
</script>
