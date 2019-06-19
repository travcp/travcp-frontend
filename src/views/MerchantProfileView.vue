<template>
       <div class="profile-container">
        <vue-headful
            title="Merchant Profile | TRAV CP"
            description="Description from TRAV CP"
        />
           <Navbar/>
           <div class="container">
               <div class="row">
                   <div class="col-md-4">
                       <div class="card profile-card">
                           <div class="card-body">
                               <span class="float-right">
                                   <span class="edit-link-button">
                                       <!-- <router-link to="/dashboard/edit-profile"><i class="fa edit"></i> Edit</router-link> -->
                                   </span>
                                   
                               </span>
                               <!-- <div class="user_pic"></div> -->

                               <br>
                                <h5 class="card-title" style="text-transform: capitalize">{{ merchantProfile.business_email }} {{ merchantProfile.first_name }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted" style="text-transform: lowercase;">{{ merchantProfile.surname }}{{ merchantProfile.first_name }}</h6>
                                <p class="location" v-if="merchantProfile.address"><img src="/img/icons/map-marker-alt-solid.svg" alt="" style="width:10px"> {{ merchantProfile.address }}, {{ merchantProfile.country }}</p>

                                
                                <!-- <p class="card-text description">Tour with me, Discover Places and experience the culture with me</p> -->
                           </div>
                       </div>
                   </div>
                   <div class="col-md-8">
                       <div class="card bookings-card">
                           <div class="card-body">
                               <div class="card-head">
                                   <span class="card-title">Experience By this Merchant</span> 
                                   <!-- <span class="float-right"><router-link to="/dashboard/my-bookings">See All</router-link></span> -->
                               </div>
                               <br>
                               <div class="row">
                                  <div v-if="merchantExperience.length < 1 && !loading">
                                    <empty-result>
                                      <template v-slot:error-header>Errm</template>
                                      You do not have any bookings yet. <br> When you book an experience, it will appear here.
                                    </empty-result>
                                  </div>
                                   <div v-else class="col-md-4 experience" v-for="booking in merchantExperience">
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
    name: "MerchantProfileView",
    components: { Navbar, Footer, EmptyResult },
    data(){return{
      bookings: [],
      medalType: null,
      videoData: [],
      message: 'http://travvapp.herokuapp.com/signup?ref',
      merchantProfile: [],
      merchantExperience: []
    }},
    computed: {
      ...mapState(['auth']),
      userProperties() {
        return this.auth.user;
      }
    },
    methods: {
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
        getMerchantExtras(){
          this.loading = true
          Axios.get(`${this.$store.state.API_BASE}/merchant/extras/132`).then(response => {
            this.merchantProfile = response.data.data
            console.log(response.data.data);
            this.getMerchantExperience()
            this.loading = false;
          }).catch(error => {
            this.loading = false
            console.log(error.response.data)
          })
        },
        getMerchantExperience(){
          this.loading = true
          Axios.get(`${this.$store.state.API_BASE}/merchants/${this.merchantProfile.id}/experiences`).then(response => {
            console.log(response.data.data)
            this.merchantExperience = response.data.data
            this.loading = false
          }).catch(error => {
            // this.
            this.loading = false
          })
        }
    },
    created(){
      this.message = `http://travvapp.herokuapp.com/signup?ref=${this.auth.user.referral_token}`

      this.getMerchantExtras()
      this.getMerchantExperience()
      // this.getMyBookings()
      // this.getUserMedal()
      // this.getVideos()
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

