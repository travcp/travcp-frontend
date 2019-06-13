<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <Circle8 /> -->
    <router-view/>
    <Footer v-if="this.$route.path != '/dashboard/messages'" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import {mapActions, mapState} from 'vuex';
import {Circle8} from 'vue-loading-spinner'
import axios from 'axios';

export default {
  name: 'App',
  components: {Footer},
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
          console.log(response.data.data)
        }).catch((error) => {
          console.log(error.data);

        })
      }
    },
   getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      },
      async showPosition(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude + 
        // "<br>Longitude: " + position.coords.longitude;
        await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + ","+ position.coords.longitude + "&sensor=true&key=AIzaSyDgnbjMxlLW2BHBPJ4-iFsX_aB9jEHBFCg").then(response => {
          console.log(response.data)

          this.$store.state.current_location = response.data.results
          axios.get(`${this.$store.state.API_BASE}/experiences?location=${this.$store.state.current_location[4].formatted_address}`).then(response => {
              console.log(response.data.data);
              this.$store.state.experiences_around_me = response.data.data
              if(response.data.data.length < 1){
                axios.get(`${this.$store.state.API_BASE}/experiences?location=${this.$store.state.current_location[7].formatted_address}`).then(response => {
                    console.log(response.data.data);
                    this.$store.state.experiences_around_me = response.data.data
                    if(response.data.data.length < 1){
                      axios.get(`${this.$store.state.API_BASE}/experiences?location=${this.$store.state.current_location[9].formatted_address}`).then(response => {
                        this.$store.state.experiences_around_me = response.data.data
                        console.log(response.data.data)
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
    // ...mapActions(['getExperiences'])
  },
  created() {
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
                  console.log(response.data.data)
                  let getUserData = JSON.parse(localStorage.getItem('auth'))
                  getUserData.merchant = response.data.data;
                  localStorage.setItem("auth", JSON.stringify(getUserData))
                  this.$store.state.auth.merchant = response.data.data
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
</style>
