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
  components: {Navbar, Footer, Circle8},
  computed: {
    ...mapState(['loadingExperience'])
  },
  methods: {
    ...mapActions(['getExperiences']),
    ...mapActions(['getRestaurants']),
    ...mapActions(['getEvents']),
    ...mapActions(['getPlaces']),
    // ...mapActions(['getExperiences'])
  },
  created() {
    this.getExperiences()
    // // this.getRestaurants()
    this.getEvents();
    this.getPlaces();
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
* {
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
</style>
