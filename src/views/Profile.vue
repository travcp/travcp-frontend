<template>
       <div class="profile-container">
        <vue-headful
            title="Dashboard Profile | TravvApp"
            description="Description from travvApp"
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
                           </div>
                       </div>
                   </div>
                   <div class="col-md-8">
                       <div class="card bookings-card">
                           <div class="card-body">
                               <div class="card-head">
                                   <span class="card-title">My Bookings</span> 
                                   <span class="float-right"><router-link to="/dashboard/my-bookings">See All</router-link></span>
                               </div>
                               <br>
                               <div class="row">
                                   <div class="col-md-4 experience" v-for="booking in bookings">
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
    components: { Navbar, Footer },
    data(){return{
      bookings: [],
      medalType: null
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
        }
    },
    created(){
      this.getMyBookings()
      this.getUserMedal()
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

