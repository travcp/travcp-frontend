<template>
  <div class="container main">
    <vue-headful
            :title="'My created restaurants |' + $store.state.appName"
            :description="$store.state.name"
        />
    <Navbar/>
    <!-- booking header details left -->
    <div class="row my-booking-left">
      <div class="col-lg-8 my-booking-header">
        <div class="my-booking-title">
          <p>List of Restaurants</p>
          <hr class="my-booking-title-horizontal">
        </div>
        <div style="text-align: center;" v-if="loading">
          <Circle9 />           
        </div>
        <div v-if="merchant_restaurants.length < 1 && !loading">
          <empty-result>
            <template v-slot:error-header>Errm</template>
            You do not have any restaunrants  yet. <br> When you create an experience of restaurant, it will appear here.
          </empty-result>
        </div>
        <div class="row" v-for="merchant_restaurant in merchant_restaurants" :key="merchant_restaurant.id" style="margin-bottom: 10px;">
          <div class="col-md-3 my-booking-details-image"></div>
          <div class="col-md-9">
            <router-link :to="'/dashboard/merchant/restaurant/' + merchant_restaurant.id + '/' + merchant_restaurant.title.toString().toLowerCase().replace( /\s/g, '-')">
            <div class="my-booking-trip-main">
              <div class="my-booking-trip-details-header">
                <p class="my-booking-trip-details-header-p1">{{ merchant_restaurant.city }} | {{ merchant_restaurant.state }}</p>
                <p class="my-booking-trip-details-header-p2">{{ merchant_restaurant.title }}</p>
              </div>
              <div class="my-booking-trip-details">
                <p
                  class="my-booking-trip-details-p1"
                >{{ merchant_restaurant.title }}</p>
                <p
                  class="my-booking-trip-details-p2"
                >{{ merchant_restaurant.location }}</p>
              </div>
            </div>
            </router-link>
          </div>
        </div>
       
      </div>
    </div>
  <!-- <Footer /> -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import EmptyResult from "@/components/EmptyResult.vue";
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import Footer from '@/components/Footer.vue';
import { Circle9 } from 'vue-loading-spinner'
// events.slice(0, 3)
export default {
  name: "RestaurantView",
  beforeRouteEnter(to, from, next) {
            let checkToken = JSON.parse(localStorage.getItem('auth'))
              if(checkToken.access_token && checkToken.user.role == 'merchant') {
                  return next()
              } else {
                // this.$noty.error("Sign in to access!")
                return next({ path: '/signin' })
              }
              next();
          },
  components: {
    Navbar, EmptyResult, Footer, Circle9
  },
  data(){
    return {
      merchant_restaurants: [],
      loading: false,
    }
  },
  computed: {
    ...mapState(['places'])
  },
  methods: {
    getMerchantsRestaurants(){
      this.loading = true;
      let requestHeaders = {
        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
      };
      axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=12`, requestHeaders).then(response => {
        // this.$store.state.bookings = response.data.data;
        this.merchant_restaurants = response.data.data;
        console.log(response.data.data);
        this.loading = false;
      }).catch(err => {
        this.$noty.error("Oops, There was an error, Please reload the page");
        this.loading = false;
      })
      
    }
  },
  created(){
    this.getMerchantsRestaurants()
  }
};
</script>
<style scoped>
.main {
  /*padding-top: 100px;*/
}
.my-booking-left {
  margin-top: 70px;
}
.my-booking-trip-main {
  padding-left: 5px;
}
.my-booking-trip-details-header {
}
.my-booking-trip-details-header-p1 {
  font-size: 12px;
  font-weight: 100;
  font-stretch: expanded;
}
.my-booking-trip-details-header-p2 {
  color: #f81894;
  font-size: 20px;
  font-weight: bold;
}
.my-booking-trip-details {
  padding-top: 12px;
}
.my-booking-trip-details-p1 {
  font-size: 18px;
  font-weight: bold;
}
.my-booking-trip-details-p2 {
  color: grey;
}

.my-booking-details-image {
  background: url("../../assets/nagoya.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.my-booking-header {
  padding: 20px;
}
.my-booking-details-right {
  /*margin-left: 55%;*/
}
.changed {
  height: 200px;
  width: 190px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  background: url("../../assets/nagoya.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.changed .ftr_places_title {
  padding: 5px 0 15px 25px;
}
.feature-places-title {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.feature-places-title-p1 {
  font-weight: bold;
}
.feature-places-title-p2 {
  color: #f81894;
  font-size: 14px;
}
.overlay-changed {
  background-color: #f81894;
  opacity: 0.6;
  height: 30px;
}
.my-booking-title {
  text-align: center;
  padding-bottom: 20px;
}
.my-booking-title p {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
}
.my-booking-title-horizontal {
  width: 300px;
}
.spinner.spinner--circle-9 {
  display: inline-block;
}
</style>
