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
                <div class="container">
                    <div class="row">
                      <div class="card-deck">
                        <div class="row">
                          <div class="col-md-4" v-for="place in places" :key="place.id">
                            <router-link :to="'/experience/'+ place.id + '/' + place.title.toString().toLowerCase().replace( /\s/g, '-')">
                                <div class="featured-card card" style="overflow: hidden;">
                                    <img v-if="place.images.length" style="width: 100%;object-fit: cover;height:380px;" :src="place.images[0].image" class="card-img-top featured-card-img" alt="...">
                                    <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" style="width: 100%;object-fit: cover;height: 380px;" alt="...">
                                    <div class="featured-card-footer featured_places_overlay_active">
                                        <div class="row" style="text-transform: capitalize;">
                                            <div class="col-6">
                                                {{ place.city }}
                                            </div>
                                            <div class="col-3 text-center">
                                                <p>{{ place.rating }} <i class="fa fa-star"></i></p>
                                            </div>
                                            <div class="col-3 text-center" @click="postFavoriteExeperience(place.id)">
                                                <p>{{ place.number_admittable }} <i class="fa fa-heart"></i></p>
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
import { mapState } from 'vuex';
import Axios from 'axios';

export default {
    data: function(){return{
      loading: false
    }},
    props: ['places'],
    computed: {
        ...mapState(['auth'])
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
                                this.$noty.success('Experience now Favorite')
                            }).catch(error => {
                                console.log(error.data)
                                this.loading = false
                            })
            } else {
                this.$noty.error('You need to Login to Have a Favourite Experience')
            }
        }
    },
}
</script>
