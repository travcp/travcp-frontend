<template>
    <div class="container main">
        <vue-headful
            :title="'My Bookings | '+ $store.state.appName"
            :description="$store.state.appDescription"
        />
        <Navbar/>
        <!-- booking header details left -->
        <div class="row my-booking-left">
            <div class="col-lg-8 my-booking-header">
                <div class="my-booking-title">
                    <p>Bookings from Clients</p>
                    <hr class="my-booking-title-horizontal">
                </div>
                <div style="text-align: center;" v-if="loading">
                    <Circle9 />
                </div>
                <div v-if="bookings.length < 1 && !loading">
                    <empty-result>
                        <template v-slot:error-header>Errm</template>
                        You do not have any bookings yet. <br> When you book an experience, it will appear here.
                    </empty-result>
                </div>
                <div class="row" v-for="booking in bookings" :key="booking.id" style="margin-bottom: 10px;">
                    <div class="col-md-3 my-booking-details-image" v-if="booking.experience.images.length > 0" :style="{background: 'url(' + booking.experience.images[0].image + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}"></div>
                    <div class="col-md-3 my-booking-details-image" v-else></div>
                    <div class="col-md-9">
                        <div class="my-booking-trip-main">
                            <div class="my-booking-trip-details-header">
                                <p class="my-booking-trip-details-header-p1">{{ booking.experience.city }} | {{ booking.experience.state }}</p>
                                <p class="my-booking-trip-details-header-p2">{{ booking.experience.title }}</p>
                            </div>
                            <div class="my-booking-trip-details">
                                <p
                                        class="my-booking-trip-details-p1"
                                >{{ booking.experience.title }}</p>
                                <p
                                        class="my-booking-trip-details-p2"
                                >{{ booking.experience.description.slice(0, 200) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- booking header details right -->
            <div class="col-lg-4">
                <div class="my-booking-details-right">
                    <div class="feature-places-title">
                        <p class="feature-places-title-p1">Featured Places</p>
                        <p class="feature-places-title-p2"><router-link to="/places">SEE ALL</router-link></p>
                    </div>
                    <div>

                        <div class="featured_places saitama changed" v-for="place in places.slice(0, 3)" >
                            <router-link :to="'/experience/'+ place.id + '/' + place.city">
                                <div class="featured_places_item">
                                    <div class="featured_places_overlay overlay-changed">
                                        <div class="row">
                                            <div class="col-sm-7 col-md-7">
                                                <p class="ftr_places_title">{{ place.city }}</p>
                                            </div>
                                            <div class="col-sm-2 col-md-2">
                                                <p class="ftr_places_title">{{ place.number_admittable }}</p>
                                            </div>
                                            <div class="col-sm-2 col-md-2">
                                                <p class="ftr_places_title">{{ place.rating_count }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
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
    import { mapState } from 'vuex';
    import axios from 'axios';
    import Footer from '@/components/Footer.vue';
    import { Circle9 } from 'vue-loading-spinner'
    // events.slice(0, 3)
    export default {
        name: "MerchantBooking",
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
            Navbar, EmptyResult, Circle9
        },
        data(){
            return {
                bookings: [],
                loading: false,
            }
        },
        computed: {
            ...mapState(['places'])
        },
        methods: {
            getMyBookings(){
                console.log('Collecting Bookings')
                this.loading = true;
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                };
                axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/bookings`, requestHeaders).then(response => {
                    this.$store.state.bookings = response.data.data;
                    this.bookings = response.data.data;
                    this.loading = false;
                }).catch(err => {
                    // this.$noty.error('There was an ');
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
        font-size: 18x;
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
