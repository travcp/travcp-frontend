<template>
  <div id="app">
    <!-- <Navbar /> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import {mapActions} from 'vuex';
export default {
  name: 'App',
  components: {Navbar, Footer},
  methods: {
    ...mapActions(['getExperiences']),
    ...mapActions(['getRestaurants']),
    ...mapActions(['getEvents'])
  },
  created() {
    // this.getExperiences()
    // this.getRestaurants()
    this.getEvents()
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
  font-family: MuseoSans !important;
}
.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
    border-color: transparent; 
}
</style>
