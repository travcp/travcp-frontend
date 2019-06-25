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
            <div class="col-lg-12 carousel"> 
              <carousel  :autoplayLoop="true" :autoplay="true" :autoplayTimeout="1000" :autoplayHoverPause="true" :paginationEnabled="false"
               :perPageCustom="[[480, 1], [100, 1]]">
                <slide v-for="event in events" :key="event.id">
                   <!-- <router-link :to="'/experience/'+ restaurant.id + '/' + restaurant.title.toString().toLowerCase().replace( /\s/g, '-')"> -->
                    <div class="featured-card card" style="margin-bottom: 20px;box-shadow:none;"  v-on:click="goToRestPage(event.id, event.title.toString().toLowerCase().replace( /\s/g, '-'))">
                    <img v-if="event.images.length" :src="event.images[0].image" style="width: 100%;object-fit: cover;height:300px;" class="card-img-top featured-card-img" alt="...">
                    <img v-else src="../assets/osaka.png" style="width: 100%;object-fit: cover;height:300px;" class="card-img-top featured-card-img" alt="...">
                     <div class="card-body" style="text-align: center">
                          <p class="card-text" style="color: #f81894;text-transform: capitalize;">{{ event.title }} | {{ event.state }}</p><br>
                          <h5 class="card-title" style="text-transform: capitalize;color:#000"> {{ event.city }}</h5><br>
                         <star-rating  :rating="parseFloat(event.rating)" :read-only="true" :increment="0.01" :star-size="18"></star-rating>
                          <p class="card-text" style="color: #f81894"><b>{{event.rating == null ? 0 : event.rating}} <i class="fa fa-star"></i></b> ({{event.rating_count == null ? 0 : event.rating_count}})</p>
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
                          <div class="col-md-4" v-for="event in events" :key="event.id">
                            <router-link :to="'/experience/'+ event.id + '/' + event.title.toString().toLowerCase().replace( /\s/g, '-')">
                                <div class="featured-card card" style="overflow: hidden;">
                                    <img v-if="event.images.length" style="width: 100%;object-fit: cover;height:380px;" :src="event.images[0].image" class="card-img-top featured-card-img" alt="...">
                                    <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" style="width: 100%;object-fit: cover;height: 380px;" alt="...">
                                    <div class="featured-card-footer featured_places_overlay_active">
                                        <div class="row" style="text-transform: capitalize;">
                                            <div class="col-6">
                                               {{ event.city }}
                                            </div>
                                            <div class="col-3 text-center">
                                               <p>{{ event.rating }} <i class="fa fa-star"></i></p>
                                            </div>
                                            <div class="col-3 text-center" @click="postFavoriteExeperience(event.id)">
                                                <p>{{ event.number_admittable }} <i class="fa fa-heart"></i></p>
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
import Axios from 'axios'
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel';

import StarRating from 'vue-star-rating'

export default {
    name: 'FeaturedEvents',
    data: function(){return{
      loading: false
    }},
    components: {
      Carousel,
      Slide,
      StarRating
    },
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
    computed: {
        ...mapState(['auth'])
    },
    methods: {
        // next() {
        //     this.$refs.flickity.next();
        // },

        // previous() {
        //     this.$refs.flickity.previous();
        // }
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