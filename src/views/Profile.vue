<template>
       <div class="profile-container">
        <vue-headful
            :title="'Dashboard Profile | '+ $store.state.appName"
            :description="$store.state.appDescription"
        />
           <Navbar/>
           <div class="container">
               <div class="row">
                   <div class="col-md-4">
                       <div class="card profile-card">
                           <div class="card-body">
                               <span class="float-right">
                                   <span class="edit-link-button">
                                       <router-link to="/dashboard/edit-profile"><i class="fa edit"></i> Edit</router-link>
                                   </span>
                                   
                               </span>
                               <!-- <div class="user_pic"></div> -->

                               
                                <img :src="auth.user.profile_image ? auth.user.profile_image.image : require('@/assets/avatar.png')" class="user_pic" alt="profile picture">
                                <img v-if="medalType && medalType.name == 'Rookie'" src="../assets/travv/bronze.png" style="height: 60px;position:relative;top: 30px;left: -20px;" alt="Medal">
                               <img v-if="medalType && medalType.name == 'Hobby'" src="../assets/travv/sliver.png" style="height: 60px;position:relative;top: 30px;left: -20px;" alt="Medal">
                               <img v-if="medalType && medalType.name == 'Expert'" src="../assets/travv/gold.png" style="height: 60px;position:relative;top: 30px;left: -20px;" alt="Medal">

                               <br>
                                <h5 class="card-title" style="text-transform: capitalize">{{ userProperties.surname }} {{ userProperties.first_name }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted" style="text-transform: lowercase;">{{ userProperties.surname }}{{ userProperties.first_name }}</h6>
                                <p class="location" v-if="userProperties.address"><img src="/img/icons/map-marker-alt-solid.svg" alt="" style="width:10px"> {{ userProperties.address }}, {{ userProperties.country }}</p>

                                
                                <!-- <p class="card-text description">Tour with me, Discover Places and experience the culture with me</p> -->
                                 <textarea type="text" style="font-size: 14px;" v-model="message" class="form-control form-control-lg"></textarea>
                                <button type="button"
                                  v-clipboard:copy="message"
                                  v-clipboard:success="onCopy"
                                  v-clipboard:error="onError">Copy!</button>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-8">
                    <div v-if="checkUserType" class="card shadow p-3 mb-5 bg-white rounded">
                      <div class="card-body">
                          <div class="card-body">
                             
                            <div class="row">
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #d3187f; border-radius: 5px;height: 120px;padding: 15px;padding-top: 25px;position: relative; left: -10px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fa fa-plane-departure fa-5x" style="color: #e83e8c;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Experiences</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ allExperience }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #6610f2; border-radius: 5px;height: 120px;padding: 15px;padding-top: 25px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fab fa-algolia fa-5x" style="color: #6610f2;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Events</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ eventsTotal }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #20c997; border-radius: 5px;height: 120px;padding: 15px;padding-top: 25px;position: relative; left: -10px;margin-top: 10px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fa fa-location-arrow fa-5x" style="color: #20c997;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Places</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ placeTotal }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #17a2b8; border-radius: 5px;height: 120px;padding: 15px;padding-top: 25px;margin-top: 10px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fas fa-utensils fa-5x" style="color: #17a2b8;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Restaurants</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ restTotal }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                       <div class="card bookings-card">
                           <div class="card-body">
                               <div class="card-head">
                                   <span class="card-title">My Bookings</span> 
                                   <span class="float-right"><router-link to="/dashboard/my-bookings">See All</router-link></span>
                               </div>
                               <br>
                               <div class="row">
                                  <div v-if="bookings.length < 1 && !loading">
                                    <empty-result>
                                      <template v-slot:error-header>Errm</template>
                                      You do not have any bookings yet. <br> When you book an experience, it will appear here.
                                    </empty-result>
                                  </div>
                                   <div v-else class="col-md-4 experience" v-for="booking in bookings">
                                    <!-- experience/2/Mikaylafurt -->
                                       <router-link :to="'../experience/' + booking.experience.id + '/' + booking.experience.title.toString().toLowerCase().replace( /\s/g, '-')">
                                            <div class="search_items">
                                                <div class="search_items_back_img nagoya"></div>
                                                <div class="search_items_item">
                                                    <div class="fetr_places_overlay">
                                                        <p>DAY TRIP | {{ booking.experience.state }}</p>
                                                        <h3>{{ booking.experience.city }}</h3>
                                                        <!-- <p><b>4.75 *</b> (224)</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                   </div>
                                </div>
                           </div>
                       </div>
                       <div class="card videos-card">
                           <div class="card-body">
                               <div class="card-head">
                                    <h5 class="card-title">Videos</h5>
                                </div>
                                <div class="row">
<div class="col-md-4" v-for="video in videoData" :key="video.id">

            <div class="card">
              <img :src="'http://img.youtube.com/vi/' + getVideoParam(video.url) +'/hqdefault.jpg'"  data-toggle="modal" :data-target="'#video' + video.id" class="card-img-top cursor-pointer" alt="...">

              <div class="card-body">
                <h5 class="card-title text-truncate"><span style="">{{ video.title }}</span></h5>
                <p style="  display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow:hidden">
                  {{ video.description }}
                </p>
                <footer class="blockquote-footer text-right" style="text-transform: capitalize;cursor: pointer;" @click="getVideoByCat(video.video_category.id)">{{ video.video_category.name }}</footer>
              </div>


            </div>

          </div>
                                  <div class="col-md-12">
                                    <div v-for="video in videoData" :key="video.id" class="modal fade" :id="'video' + video.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document" style="max-width: 700px;">
                                      <div class="modal-content">
                                        <div class="modal-body" style="padding: 0">
                                          <iframe width="420" height="415" style="width: 100%" 
                                          :src="video.url">
                                          </iframe>
                                        </div>
                                        <div class="modal-footer" style="padding: 0;border-top: none;">
                                          <div class="row" style="width: 100%;">
                                            <div class="col-md-12" style="text-align: center">
                                              <!-- <p>Share</p> -->
                                               <button type="button" class="btn modal-btn-travv" data-dismiss="modal">Close</button>
                                            </div>
                                          </div>
                                         
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                           </div>
                           
                       </div>
                   </div>
               </div>
           </div>
           <!-- <Footer /> -->
        </div> 
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import { mapState, mapActions } from 'vuex';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Axios from 'axios';
import EmptyResult from "@/components/EmptyResult.vue";


export default {
    name: "Profile",
    beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem('auth'))
        if(checkToken.access_token) {
            return next()
        } else {
          // this.$noty.error("Sign in to access!")
          return next({ path: '/signin' })
        }
        next();
    },
    components: { Navbar, Footer, EmptyResult },
    data(){return{
      bookings: [],
      medalType: null,
      videoData: [],
      message: 'http://travvapp.herokuapp.com/signup?ref',
      allExperience: null,
      restTotal: null,
      eventsTotal: null,
      placeTotal: null
    }},
    computed: {
      ...mapState(['auth']),
      userProperties() {
        return this.auth.user;
      },
      getUserMedalType() {
          if (this.medalType && this.medalType.name == "Rookie") {
              return 'bronze.png'
          } else if (this.medalType && this.medalType.name == "Hobby") {
              return 'silver.png'
          } else if (this.medalType && this.medalType.name == "Expert"){
              return 'gold.png'
          }
      },
      checkUserType() {
        if (this.$store.state.auth.user.role == 'merchant') {
          return true;
        }
        return false;
      }
    },
    methods: {
      
      getMyBookings(){
      
        let requestHeaders = {
          headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
        };
        axios.get(`${this.$store.state.API_BASE}/users/${this.$store.state.auth.user.id}/bookings`, requestHeaders).then(response => {
          this.bookings = response.data.data;
          
        }).catch(err => {
          console.log("There was error fetching mybookings");
        })
        
      },
        getUserMedal(){
            if(this.auth && this.auth.access_token){
                axios.get(`${this.$store.state.API_BASE}/medals`).then(response => {
                    console.log(response.data.data)
                    this.medalType = response.data.data[0]
                }).catch((error) => {
                    console.log(error.data);

                })
            }
        },
        getVideos(){
          this.loading = true
          Axios.get(`${this.$store.state.API_BASE}/videos`).then((response) => {
            console.log(response.data.data)
            this.loading = false
            this.videoData = response.data.data
          }).catch(error => {
            console.log(error.data)
            this.loading = false
          })
        },
        getVideoParam(url){
          var url_string = url; //window.location.href
          var url = new URL(url_string);
          // var c = url.searchParams.get("c");
          return url.pathname.slice(7)
        },
        getExperiencesTotal(){
          axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences`)
                .then((response) => {
                  console.log('Expereinces')
                  this.allExperience = response.data.data.length

                    axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=12`)
                          .then(response => {
                            console.log('Restaurants')
                            this.restTotal = response.data.data.length

                            axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=2`)
                                  .then(response => {
                                    console.log('Events')
                                    this.eventsTotal = response.data.data.length

                                      axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=22`)
                                            .then(response => {
                                              this.placeTotal = response.data.data.length
                                              console.log('Places')
                                              console.log(response.data.data)
                                            }).catch(error => {
                                              console.log(error.response.data)
                                            })

                                    console.log(response.data.data)
                                  })

                            console.log(response.data.data)
                          }).catch(error => {
                            console.log(error.response.data)
                          })

                  console.log(response.data.data)

                }).catch((error) => {
                  console.log(error.response.data)
                })
        },
        getVideoByCat(catergory){
          Axios.get(`${this.$store.state.API_BASE}/videos?video_category_id=${catergory}`).then((response) => {
            console.log(response.data.data)
            this.loading = false
            this.videoData = response.data.data
          }).catch(error => {
            console.log(error.data)
            this.loading = false
          })
        },
        onCopy: function (e) {
          this.$noty.success(`You just copied ${e.text}`)
          // alert('You just copied: ' + e.text)
        },
        onError: function (e) {
          alert('Failed to copy texts')
        },
    },
    created(){
      this.message = `http://travvapp.herokuapp.com/signup?ref=${this.auth.user.referral_token}`
      this.getExperiencesTotal()
      this.getMyBookings()
      this.getUserMedal()
      this.getVideos()
    }
}
</script>
<style scoped>
    .profile-container{
        margin-top:5px;
        margin-bottom: 50px;
        --pink-text-color: #D3187F;
        --black-text-color: #333333;
        --grey-text-color: #555555;
    }

    .profile-container a{
        font-weight: bold;
        text-transform: uppercase;
        color: var(--pink-text-color);
    }

    .edit-link-button a{
        background: var(--pink-text-color);
        padding-top:3px;
        padding-bottom:3px;
        padding-right:5px;
        padding-left:5px;
        color:white;
        border-radius: 5px;
        font-size:12px;
    }
    
    .user_pic{
        /* border: 1px solid #000; */
		height: 140px;
		width: 140px;
        /* display:inline-block; */
		/* margin-left: 90px; */
		margin-bottom: 40px;
		border-radius: 100%;
        position: relative;
        right: -20px;
    }
    .card.profile-card{
        border:none;
    }
    .profile-card .card-body{
        text-align:center;
    }
    .profile-card .card-title{
        color: var(--pink-text-color);
        font-weight:bold;
    }
    .profile-card p.location{
        font-weight: bold;
        color: var(--black-text-color);
    }
    .profile-card .description{
        font-weight:bold;
    }

    .bookings-card.card{
        border:none;
    }
    .bookings-card .card-title{
        color: var(--grey-text-color);
        font-size: 20px;
        font-weight: bold;
    }
    .bookings-card .card-head a{
        font-size:11px;
    }
    .nagoya {
        background: url('/images/shibuya.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .search_items {
        height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin-bottom: 43px;
    }

    .search_items_back_img {
        width: 100%;
        height: 318px;
    }

    .search_items_item p {
        font-family: MuseoSans;
        font-size: 14px;
        font-weight: bold;
    }

    .search_items_item h3 {
        font-family: MuseoSans;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        color: var(--grey-text-color)
    }

    .search_items_item p b {
        color: #f81894;
        font-family: MuseoSans;
        font-size: 14px;
        font-weight: bold;
    }

    .videos-card{
        box-shadow: 2px 2px 9px var(--grey-text-color);
    }
    .videos-card .card-title{
        color: var(--pink-text-color);
        font-weight: bold;
    }
</style>

