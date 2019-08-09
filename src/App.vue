<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <Circle8 /> -->
    <div id="mySidebar" class="sidebar-main">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"><i class="fa fa-cancel"></i></a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div> 
    <div id="main">
        
      <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view/>
      </fade-transition>

      <!-- <router-view/> -->
      <Footer v-if="this.$route.path != '/dashboard/messages'" />
    </div>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import {mapActions, mapState} from 'vuex';
import {Circle8} from 'vue-loading-spinner'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Footer,
    FadeTransition
  },
  computed: {
    ...mapState(['loadingExperience']),
    ...mapState(['auth'])
  },
  methods: {
    ...mapActions(['getExperiences']),
    ...mapActions(['getRestaurants']),
    ...mapActions(['getEvents']),
    ...mapActions(['getPlaces']),
    ...mapActions(['getRestaurants']),
    getUserMedal(){
      if(this.auth && this.auth.access_token){
        axios.get(`${this.$store.state.API_BASE}/medals`).then(response => {
          // console.log(response.data.data)
        }).catch((error) => {
          console.log(error.data);

        })
      }
    },
   getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
          this.$noty.warning("Geolocation is not supported by this browser.")
        }
      },
      async showPosition(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude + 
        // "<br>Longitude: " + position.coords.longitude;
        await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + ","+ position.coords.longitude + "&sensor=true&key=AIzaSyDgnbjMxlLW2BHBPJ4-iFsX_aB9jEHBFCg").then(response => {
          // console.log(response.data)

          this.$store.state.current_location = response.data.results
          axios.get(`${this.$store.state.API_BASE}/experiences?location=${this.$store.state.current_location[4].formatted_address}`).then(response => {
              // console.log(response.data.data);
              this.$store.state.experiences_around_me = response.data.data
              if(response.data.data.length < 1){
                axios.get(`${this.$store.state.API_BASE}/experiences?location=${this.$store.state.current_location[7].formatted_address}`).then(response => {
                    // console.log(response.data.data);
                    this.$store.state.experiences_around_me = response.data.data
                    if(response.data.data.length < 1){
                      axios.get(`${this.$store.state.API_BASE}/experiences?location=${this.$store.state.current_location[9].formatted_address}`).then(response => {
                        this.$store.state.experiences_around_me = response.data.data
                        // console.log(response.data.data)
                      }).catch(error => {
                        console.log(error.response.data)
                      })
                    }
                }).catch(error => {
                  console.log(error.response.data)
                })
              }
            }).catch(error => {
              console.log(error.response)
            })
        })
      },
      showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
             // this.$noty.warning("User denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
             // this.$noty.warning("Location information is unavailable.")
            break;
          case error.TIMEOUT:
             // this.$noty.warning("The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
             // this.$noty.warning("An unknown error occurred.")
            break;
        }
      }
    // ...mapActions(['getExperiences'])
  },
  created() {
    // if(document.URL.split('').splice(0, 5).join('') != "https"){
    //     window.location.href = 'https://travvapp.herokuapp.com/'      
    // }
    this.getLocation()
    // this.getRandomExperiences()
    // this.experienceAroundMe()
    // this.getLocation()
    this.getExperiences()
    // // this.getRestaurants()
    this.getEvents()
    this.getPlaces()
    this.getRestaurants()
    this.getUserMedal();
    if(this.$store.state.auth) {
      // localStorage.setItem("auth", JSON.stringify(payload));
      let checkUserType = this.$store.state.auth.user.role;
      if(checkUserType == "merchant") {
        axios.get(`${this.$store.state.API_BASE}/merchant/extras/users/${this.$store.state.auth.user.id}`)
                .then(response => {
                   axios.get(`${this.$store.state.API_BASE}/merchants/${response.data.data.id}/extras`)
                        .then(response => {
                          console.log('New Merhcna')
                          console.log(response.data.data)
                          let getUserData = JSON.parse(localStorage.getItem('auth'))
                          getUserData.merchant = response.data.data;
                          localStorage.setItem("auth", JSON.stringify(getUserData))
                          this.$store.state.auth.merchant = response.data.data
                        }).catch(error => {
                          console.log(error.response.data)
                        })
                  console.log('merchant')
                  console.log(response.data.data)
                })
                .catch(err => {
                  console.log(err);
                })
      }
    }

    // console.log(this.$route)
    // this.getExperiences();
  }
}
</script>

<style>
body, h6, h5, h4, h3, h2, h1, p  {
  font-family: MuseoSans;
  font-weight: 200 !important;
}
.featured-card.card {
    min-width: 321px;
}
@font-face {
    font-family: MuseoSans;
    src: url("assets/Fonts/MuseoSans-100.otf") format("opentype");
}
@font-face {
    font-family: MuseoSans300;
    font-weight: 500;
    src: url("assets/Fonts/MuseoSans-300.otf") format("opentype");
}
@font-face {
    font-family: MuseoSans900;
    src: url("assets/Fonts/MuseoSans_900.otf") format("opentype");
}
@font-face {
    font-family: MuseoSans700;
    src: url("assets/Fonts/MuseoSans_700.otf") format("opentype");
}
@font-face {
    font-family: MuseoSans500;
    src: url("assets/Fonts/MuseoSans_500.otf") format("opentype");
}
*, {
  font-family: MuseoSans;
   /* !important; */
}
.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: transparent; 
}
.progress {
    margin-bottom: 10px;
}
.categories_widget {
  margin-left: 0;
}
.main_menu_area .navbar .navbar-nav li a,
.categories_widget ul li a,
.copy_right_area .float-md-right .nav li a ,
.feature_video_sm_title h6,
.ftr_places_title,
.image-holder-inner-text h2,
.form-header h3,
.navbar .navbar-nav li a,
.login-btn {
  font-family: MuseoSans;
}

a{
  text-decoration: none !important;
}

.sidebar-main {
  height: 100% !important;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar-main a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar-main a:hover {
  color: #f1f1f1;
}

.sidebar-main .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#main {
  transition: margin-left .5s;
  /*padding: 16px;*/
}
.featured-card.card {
    overflow: hidden !important;
    display: flex !important;
    justify-content: flex-end !important;
}
.featured-card-footer {
    color: #FFF !important;
    position: absolute !important;
    width: 100% !important;
    padding: .75rem 1.25rem !important;
    /* margin-top: -50px; */
    border-bottom-left-radius: .25rem !important;
    border-bottom-right-radius: .25rem !important;
    margin-top: 0 !important;
}
.my-custom-floating-label .input__container {
  border-radius: 4px;
  box-shadow: 0 0 0 1px #d9d9d9;
}
.my-custom-floating-label .input__container .slot-container {
  position: relative;
}
.my-custom-floating-label .input__container.has-error {
  box-shadow: 0 0 0 1px #ff0000;
}
.my-custom-floating-label .input__container.has-error.input__container--focus {
  box-shadow: 0 0 0 2px #ff0000;
}
.my-custom-floating-label .input__container.input__container--focus {
  box-shadow: 0 0 0 2px #222;
}
</style>
