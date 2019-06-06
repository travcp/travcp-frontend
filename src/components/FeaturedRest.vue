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

            </div>
            <div class="col-lg-12">
                <div class="container toggleCarousel">
                    <div class="row">
                      <div class="card-deck">
                        <div class="row">
                          <div class="col-md-4" v-for="restaurant in restaurants" :key="restaurant.id">
                            <router-link :to="'/experience/'+ restaurant.id + '/' + restaurant.city.toString().toLowerCase().replace( /\s/g, '-')">
                                <div class="featured-card card">
                                  <img v-if="restaurant.images.length" :src="restaurant.images[0].image" class="card-img-top featured-card-img" alt="...">
                                  <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" alt="...">
                                   <div class="featured-card-footer featured_places_overlay_active">
                                      <div class="row">
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

export default {
    name: 'FeaturedRest',
    data: function(){return{
      loading: false
    }},
    props: ['restaurants'],
    computed:{
        ...mapState(['auth'])
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
                    this.$noty.success('Experience now Favorite')
                }).catch(error => {
                    console.log(error.data)
                    this.loading = false
                })
            } else {
                this.$noty.error('You need to Login to Have a Favourite Experience')
            }
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