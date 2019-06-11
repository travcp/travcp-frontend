<template>
        <nav class="container navbar navbar-expand-lg navbar-light travvappNavbar" style="background: transparent;">
            <!-- <router-link :to="'/result-details/'+ experience.id"> -->
            <router-link class="navbar-brand" to="/">
              <img class="travv_logo" src="../assets/travv/travv_brand_logo.png">
            </router-link>
            <!-- <slot name="search"></slot> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="width: 50px;">
                 <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">

                    <li class="nav-item">
                        <router-link class="nav-link nav-item-color" to="/experiences">Explore</router-link>
                    </li>
                    <li class="nav-item" v-if="checkUser &&  checkUserType == 'merchant'">
                      <router-link class="nav-link nav-item-color" to="/dashboard/merchant/new-experience">Add Listings</router-link>
                    </li>
                    <li class="nav-item"><router-link class="nav-link nav-item-color" to="/videos">Videos</router-link></li>
                    <li class="nav-item" v-if="checkUser"><router-link class="nav-link nav-item-color" to="/dashboard/my-bookings">My Bookings</router-link></li>
                    <li class="nav-item"><a class="nav-link nav-item-color" href="#">Help</a></li>  

                    <li class="nav-item" v-if="!checkUser"><router-link style="color: #000 !important;" class="nav-link" to="/signin">Sign in</router-link></li>
                    <li class="nav-item" v-if="checkUser">
                        <router-link class="nav-link nav-item-color" to="/dashboard/favourite-experiences">Favourites</router-link>
                    </li>
                    <li class="nav-item" v-if="checkUser">
                      <router-link style="color: #fff !important;" class="nav-link" to="/dashboard/messages">
                        <img src="../assets/envelope-2.png" style="height: 24px;" alt="">
                      </router-link>
                    </li>
                    <li class="nav-item" v-if="checkUser">
                      <router-link style="color: #fff !important;" class="nav-link" to="/notifications">
                        <img src="../assets/bell-icon-2.png" style="height: 24px;" alt="">
                      </router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="checkUser">
                      <a class="nav-link dropdown-toggle" href="#" style="color: #fff !important;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img :src="auth.user.profile_image ? auth.user.profile_image.image : require('@/assets/avatar.png')" class="rounded-circle" style="height: 50px;width: 50px;">
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="padding: 5px 0px 5px 1px;width: 250px;">
                        <router-link class="dropdown-item drp_pd" to="/dashboard/profile">Dashboard</router-link>
                        <router-link class="dropdown-item drp_pd" to="/experiences">Experiences</router-link>
                        <a class="dropdown-item drp_pd" href="/dashboard/my-cart">My Cart</a>
                        <a class="dropdown-item drp_pd" href="#">Payment <span class="badge badge-info">Comming Soon</span></a>
                        <a class="dropdown-item drp_pd" href="#">Settings <span class="badge badge-info">Comming Soon</span></a>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/new-experience" v-if="checkUser &&  checkUserType == 'merchant'">Add New Experience</router-link>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/experiences" v-if="checkUser &&  checkUserType == 'merchant'">My Experiences</router-link>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/restaurants" v-if="checkUser &&  checkUserType == 'merchant'">My Restaurants</router-link>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/bookings" v-if="checkUser &&  checkUserType == 'merchant'">My Bookings</router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item drp_pd" href="/signin" @click="logout">Sign out</a>
                      </div>
                    </li>
                </ul>
            </div>
        </nav>
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
      checkUserType(){
        return this.auth.user.role
      },
      username() {
          if(this.checkUser){
            return this.auth.user.first_name;
          }
      }
  }
}
</script>
<style scoped>
nav.container.navbar.navbar-expand-lg.navbar-light.travvappNavbar {
    /* margin-bottom: -40px; */
}
ul.navbar-nav.ml-auto {
    position: relative;
    top: -35px;
}
div#navbarSupportedContent {
    position: relative;
    top: 40px;
}
</style>
<style>
.main_menu_area .navbar .navbar-nav {
    display: inline-block;
    margin-top: 10px;
}
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
.travv_light_nav {
   border-bottom: none;
}
.navbar .navbar-nav li a{
    font-size: 14px;
    font-weight: bold;
}
.travv_light_nav{
    padding-left: 88px;
    padding-right: 88px;
}
.drp_pd {
  padding: 5px 0 5px 15px !important;
}
.nav-item a.nav-link {
  color: #555 !important;
  font-weight: bold !important;
}
.travvappNavbar li.nav-item {
    min-width: 100px;
    position: relative;
    top: 10px;
    z-index: 10;
    text-align: center;
}
</style>
