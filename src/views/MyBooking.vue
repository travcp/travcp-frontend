<template>
  <div class="container main">
    <Navbar/>
    <!-- booking header details left -->
    <div class="row my-booking-left">
      <div class="col-lg-8 my-booking-header">
        <div class="my-booking-title">
          <p>My Bookings</p>
          <hr class="my-booking-title-horizontal">
        </div>
        <div v-if="bookings.length < 1">
          <empty-result>
            <template v-slot:error-header>Errm</template>
            You do not have any bookings yet. <br> When you book an experience, it will appear here.
          </empty-result>
        </div>
        <div class="row" v-for="booking in bookings" :key="booking.id">
          <div class="col-md-3 my-booking-details-image"></div>
          <div class="col-md-9">
            <div class="my-booking-trip-main">
              <div class="my-booking-trip-details-header">
                <p class="my-booking-trip-details-header-p1">DAY TRIP | {{ booking.experience.state }}</p>
                <p class="my-booking-trip-details-header-p2">{{ booking.experience.city }}</p>
              </div>
              <div class="my-booking-trip-details">
                <p
                  class="my-booking-trip-details-p1"
                >{{ booking.experience.title }}</p>
                <p
                  class="my-booking-trip-details-p2"
                >{{ booking.experience.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row my-booking-left">
          <div class="col-md-3 my-booking-details-image"></div>
          <div class="col-md-9">
            <div class="my-booking-trip-main">
              <div class="my-booking-trip-details-header">
                <p class="my-booking-trip-details-header-p1">DAY TRIP | WEST SUNNYBERG</p>
                <p class="my-booking-trip-details-header-p2">Kimberg</p>
              </div>
              <div class="my-booking-trip-details">
                <p
                  class="my-booking-trip-details-p1"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugiat alias at suscipit</p>
                <p
                  class="my-booking-trip-details-p2"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus saepe asperiores, culpa ab illum quia quis odit ipsum magni voluptas laboriosam pariatur recusandae est in ad sint? Eveniet, delectus pariatur.</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- booking header details right -->
      <div class="col-lg-4">
        <div class="my-booking-details-right">
          <div class="feature-places-title">
            <p class="feature-places-title-p1">Featured Places</p>
            <p class="feature-places-title-p2">SEE ALL</p>
          </div>
          <div>
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed">
                  <div class="row">
                    <div class="col-sm-7 col-md-7">
                      <p class="ftr_places_title">SAITAMA</p>
                    </div>
                    <div class="col-sm-2 col-md-2">
                      <p class="ftr_places_title">221</p>
                    </div>
                    <div class="col-sm-2 col-md-2">
                      <p class="ftr_places_title">50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed">
                  <div class="row">
                    <div class="col-sm-7 col-md-7">
                      <p class="ftr_places_title">SAITAMA</p>
                    </div>
                    <div class="col-sm-2 col-md-2">
                      <p class="ftr_places_title">221</p>
                    </div>
                    <div class="col-sm-2 col-md-2">
                      <p class="ftr_places_title">50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="featured_places saitama changed">
              <div class="featured_places_item">
                <div class="featured_places_overlay overlay-changed">
                  <div class="row">
                    <div class="col-sm-7 col-md-7">
                      <p class="ftr_places_title">SAITAMA</p>
                    </div>
                    <div class="col-sm-2 col-md-2">
                      <p class="ftr_places_title">221</p>
                    </div>
                    <div class="col-sm-2 col-md-2">
                      <p class="ftr_places_title">50</p>
                    </div>
                  </div>
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
import Navbar from "@/components/Navbar.vue";
import EmptyResult from "@/components/EmptyResult.vue";
import { mapActions } from 'vuex';
import axios from 'axios';
import Footer from '@/components/Footer.vue';

export default {
  name: "MyBooking",
  components: {
    Navbar, EmptyResult, Footer
  },
  data(){
    return {
      bookings: []
    }
  },
  methods:{
    getMyBookings(){
      
      let requestHeaders = {
        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
      };
      axios.get(`${this.$store.state.API_BASE}/users/${this.$store.state.auth.user.id}/bookings`, requestHeaders).then(response => {
        this.bookings = response.data.data;
        
      }).catch(err => {
        console.log("There was error fetching mybookings");
      })
      
    }
  },
  created(){
    this.getMyBookings()
  }
};
</script>
<style scoped>
.main {
  /*padding-top: 100px;*/
}
.my-booking-left {
  margin-top: 30px;
}
.my-booking-trip-main {
  padding-left: 5px;
}
.my-booking-trip-details-header {
}
.my-booking-trip-details-header-p1 {
  font-size: 12px;
  font-weight: 1000;
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
  font-size: 18x;
  font-weight: bold;
}
.my-booking-trip-details-p2 {
  color: grey;
}

.my-booking-details-image {
  background: url("../assets/nagoya.png");
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
  background: url("../assets/nagoya.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.feature-places-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
</style>
