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
            <div class="col-lg-12 carousel"> 
              <carousel  :autoplayLoop="true" :autoplay="true" :autoplayTimeout="1000" :autoplayHoverPause="true" :paginationEnabled="false"
               :perPageCustom="[[480, 1], [100, 1]]">
                <slide v-for="restaurant in restaurants" :key="restaurant.id">
                   <!-- <router-link :to="'/experience/'+ restaurant.id + '/' + restaurant.title.toString().toLowerCase().replace( /\s/g, '-')"> -->
                    <div class="featured-card card" style="margin-bottom: 20px;box-shadow:none;"  v-on:click="goToRestPage(restaurant.id, restaurant.title.toString().toLowerCase().replace( /\s/g, '-'))">
                    <img v-if="restaurant.images.length" :src="restaurant.images[0].image" style="width: 100%;object-fit: cover;height:300px;" class="card-img-top featured-card-img" alt="...">
                    <img v-else src="../assets/osaka.png" style="width: 100%;object-fit: cover;height:300px;" class="card-img-top featured-card-img" alt="...">
                     <div class="card-body" style="text-align: center">
                          <p class="card-text" style="color: #f81894;text-transform: capitalize;">{{ restaurant.title }} | {{ restaurant.state }}</p><br>
                          <h5 class="card-title" style="text-transform: capitalize;color:#000"> {{ restaurant.city }}</h5><br>
                         <star-rating  :rating="parseFloat(restaurant.rating)" :read-only="true" :increment="0.01" :star-size="18"></star-rating>
                          <p class="card-text" style="color: #f81894"><b>{{restaurant.rating == null ? 0 : restaurant.rating}} <i class="fa fa-star"></i></b> ({{restaurant.rating_count == null ? 0 : restaurant.rating_count}})</p>
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
                          <div class="col-md-4" v-for="restaurant in restaurants" :key="restaurant.id">
                            <router-link :to="'/experience/'+ restaurant.id + '/' + restaurant.title.toString().toLowerCase().replace( /\s/g, '-')">
                                <div class="featured-card card" style="overflow: hidden;">
                                  <img v-if="restaurant.images.length" style="width: 100%;object-fit: cover;height:380px;" :src="restaurant.images[0].image" class="card-img-top featured-card-img" alt="...">
                                  <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" style="width: 100%;object-fit: cover;height: 380px;" alt="...">

                                   <div class="featured-card-footer featured_places_overlay_active">
                                      <div class="row" style="text-transform: capitalize;">
                                        <div class="col-6">
                                          {{ restaurant.city }}                                  
                                        </div>
                                        <div class="col-3 text-center">
                                         <p>{{ restaurant.rating }} <i class="fa fa-star"></i></p>  
                                        </div>
                                        <div class="col-3 text-center" @click="postFavoriteExeperience(restaurant.id)">
                                         <p>{{ restaurant.number_admittable }} <i class="fa fa-heart"></i></p>  
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
import Flickity from 'vue-flickity';
import Axios from 'axios'
import { mapState } from 'vuex'
import VueGallerySlideshow from 'vue-gallery-slideshow';
import { Carousel, Slide } from 'vue-carousel';

import StarRating from 'vue-star-rating'

export default {
    name: 'FeaturedRest',
    data: function(){return{
      loading: false
    }},
    props: ['restaurants'],
    computed:{
        ...mapState(['auth'])
    },
    components: {
      Carousel,
      Slide,
      StarRating
    },
    methods: {
        postFavoriteExeperience(Id){
            this.loading = true
            if(this.auth && this.auth.access_token){
                let data = {
                    user_id: this.auth.user.id,
                    experience_id: Id
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
    }
}
</script>

<style>
.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.vuelabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

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