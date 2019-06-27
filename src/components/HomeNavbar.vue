<template>
    <header class="main_menu_area">
        <nav class="container navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/" style="color: #fff !important;">
              <img class="travv_logo" src="../assets/travv/travv_brand_logo_overlay.png">
            </router-link>
            <slot name="search"></slot>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="display: inline;width: 50px;">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" style="color: #fff !important;">

                    <li class="nav-item">
                        <router-link style="color: #fff !important;" class="nav-link nav-item-color" to="/experiences">Explore</router-link>
                    </li>
                    <li class="nav-item" v-if="checkUser &&  checkUserType == 'merchant'">
                      <router-link style="color: #fff !important;" class="nav-link" to="/dashboard/merchant/new-experience">Add Listings</router-link>
                    </li>
                    <li class="nav-item"><router-link style="color: #fff !important;"  to="/videos">Videos</router-link></li>
                    <li class="nav-item" v-if="checkUser"><router-link style="color: #fff !important;" class="nav-link" to="/dashboard/my-bookings">My Bookings</router-link></li>
                    <li class="nav-item"><a style="color: #fff !important;" class="nav-link" href="#">Help</a></li>                    
                    <li class="nav-item" v-if="!checkUser"><router-link style="color: #fff !important;" class="nav-link" to="/signin">Sign in</router-link></li>
                    <li class="nav-item" v-if="checkUser">
                        <router-link class="nav-link nav-item-color" style="color: #fff !important;" to="/dashboard/favourite-experiences">Favourites</router-link>
                    </li>
                    <li class="nav-item" v-if="checkUser">
                      <router-link style="color: #fff !important;" class="nav-link" to="/dashboard/messages">
                        <i class="fa fa-envelope" style="font-size: 24px;"></i>
                        <!-- <img src="../assets/envelope-2.png" style="height: 24px;" alt=""> -->
                      </router-link>
                    </li>
                    <li class="nav-item" v-if="checkUser" style="padding-top: 5px;">
                      <router-link style="color: #fff !important;" class="nav-link" to="/notifications">
                        <img src="../assets/bell-icon.png" style="height: 24px;" alt="">
                      </router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="checkUser">
                      <a class="nav-link dropdown-toggle" href="#" style="color: #fff !important;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <!-- <img src="../assets/avatar.png" class="rounded-circle" style="height: 50px;"> -->
                        <img :src="auth.user.profile_image ? auth.user.profile_image.image : require('@/assets/avatar.png')" class="rounded-circle" style="height: 50px;width: 50px;">
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="padding: 8px 0px 5px 1px;width: 250px;">
                        <router-link class="dropdown-item drp_pd" to="/dashboard/profile">Dashboard</router-link>
                        <!-- <router-link class="dropdown-item drp_pd" to="/experiences">Experiences</router-link> -->
                        <a class="dropdown-item drp_pd" href="/dashboard/my-cart">My Cart</a>
                        <a class="dropdown-item drp_pd" href="#">Payment <span class="badge badge-info">Comming Soon</span></a>
                        <a class="dropdown-item drp_pd" href="#">Settings <span class="badge badge-info">Comming Soon</span></a>
                        <div class="dropdown-divider"></div>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/new-experience" v-if="checkUser &&  checkUserType == 'merchant'">Add New Experience</router-link>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/experiences" v-if="checkUser &&  checkUserType == 'merchant'">Merchant Experiences</router-link>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/restaurants" v-if="checkUser &&  checkUserType == 'merchant'">Merchant Restaurants</router-link>
                        <router-link class="dropdown-item drp_pd" to="/dashboard/merchant/bookings" v-if="checkUser &&  checkUserType == 'merchant'">Merchant Bookings</router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item drp_pd" href="/signin" @click="logout">Sign out</a>
                      </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    color: #FFF;
}
.main_menu_area {
   border-bottom: none;
}
.main_menu_area .navbar .navbar-nav li a{
    font-size: 14px;
    font-weight: bold;
}
header.main_menu_area{
    padding-left: 88px;
    padding-right: 88px;
}
.dropdown-menu {
  line-height: 50px;
  left: -105px;
  border-radius: .9rem;
  width: 14em;
  padding: 20px 0 20px 45px;
  margin: .9rem 0 0;
}
.dropdown-menu:before {
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    top: -8px;
    left: 170px;
    right: auto;
    color: #FFFFFF;
    border-bottom: .6em solid;
    border-right: .6em solid transparent;
    border-left: .6em solid transparent;
}
.main_menu_area .navbar .navbar-nav li a {
  line-height: 50px;
}
.travv_logo {
  height: 20px;
  position: relative;
  /* top: -50px; */
}
</style>
