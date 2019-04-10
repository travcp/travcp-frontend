<template>
    <header class="main_menu_area">
        <nav class="container navbar navbar-expand-lg navbar-light bg-light">
            <!-- <router-link :to="'/result-details/'+ experience.id"> -->
            <router-link class="navbar-brand" to="/"><h2>TravvApp</h2></router-link>
            <slot name="search"></slot>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Add Listings</a></li>
                    <li class="nav-item"><a  href="static.html">Videos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Bookings</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Help</a></li>                    
                    <li class="nav-item" v-if="!checkUser"><router-link style="color: #000 !important;" class="nav-link" to="/login">Sign in</router-link></li>                    
                    <li class="nav-item" v-if="!checkUser"><router-link style="color: #000 !important;" class="nav-link" to="/register">Sign up</router-link></li>
                    <li class="nav-item" v-if="checkUser"><button style="color: #000 !important;background:none;border: none;" class="nav-link">Hi {{ username }}</button></li>
                    <li class="nav-item" @click="logout" v-if="checkUser"><a style="color: #000 !important;" class="nav-link" href="#">Log out</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'Navbar',
  methods: {
      ...mapActions(['userLogout']),
      logout(){
          this.userLogout();
      },
    //   get_user_name(){
    //       if(this.checkUser){
    //         return this.auth.user.first_name;
    //       }
    //   }
  },
  computed: {
      ...mapState(['auth']),
      checkUser() {
          return this.auth != null ? true : false
      },
      username() {
          if(this.checkUser){
            return this.auth.user.first_name;
          }
      }
  }
}
</script>

<style>
.navbar-brand{
    font-family: MuseoSans700 !important;
    font-size: 30px;
    font-weight: bolder;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1.8px;
    color: #555;
}
.main_menu_area {
   border-bottom: none;
}
.main_menu_area .navbar .navbar-nav li a{
    font-size: 18px;
    font-weight: 0;
}
header.main_menu_area{
    padding-left: 88px;
    padding-right: 88px;
}
</style>
