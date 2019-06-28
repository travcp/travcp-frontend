<template>
       <div class="profile-container">
        <vue-headful
            :title="'Dashboard Profile | '+ $store.state.appName"
            :description="$store.state.appDescription"
        />
           <Navbar/>
           <div class="container">
               <div class="row">
                   <div class="col-md-4">
                       <div class="card profile-card">
                           <div class="card-body">
                               <span class="float-right">
                                   <span class="edit-link-button">
                                       <router-link to="/dashboard/edit-profile"><i class="fa edit"></i> Edit</router-link>
                                   </span>
                                   
                               </span>
                               <!-- <div class="user_pic"></div> -->

                               
                                <img :src="auth.user.profile_image ? auth.user.profile_image.image : require('@/assets/avatar.png')" class="user_pic" alt="profile picture">
                                <img v-if="medalType && medalType.name == 'Rookie'" src="../assets/travv/bronze.png" style="height: 60px;position:relative;top: 30px;left: -20px;" alt="Medal">
                               <img v-if="medalType && medalType.name == 'Hobby'" src="../assets/travv/sliver.png" style="height: 60px;position:relative;top: 30px;left: -20px;" alt="Medal">
                               <img v-if="medalType && medalType.name == 'Expert'" src="../assets/travv/gold.png" style="height: 60px;position:relative;top: 30px;left: -20px;" alt="Medal">

                               <br>
                                <h5 class="card-title" style="text-transform: capitalize">{{ userProperties.surname }} {{ userProperties.first_name }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted" style="text-transform: lowercase;">{{ userProperties.surname }}{{ userProperties.first_name }}</h6>
                                <p class="location" v-if="userProperties.address">

                                  <img src="/img/icons/map-marker-alt-solid.svg" alt="" style="width:10px"> {{ userProperties.address }}, {{ userProperties.country }}</p>
                                <br><br>
                              <button type="submit" class="btn btn-lg submit_btn float-right" style="width: 100%;">
                                <a class="" href="#affiliate-modal" data-toggle="modal" style="color: #FFF;">Affiliate Link</a>
                              </button>
                                
                                <!-- <p class="card-text description">Tour with me, Discover Places and experience the culture with me</p> -->
                                <!--  <textarea type="text" style="font-size: 14px;" v-model="message" class="form-control form-control-lg"></textarea> -->
                                <!-- <button type="button"
                                  v-clipboard:copy="message"
                                  v-clipboard:success="onCopy"
                                  v-clipboard:error="onError">Copy!</button> -->
                           </div>
                       </div>
                   </div>
                   <div class="col-md-8">
                    <div v-if="checkUserType" class="card shadow p-3 mb-5 bg-white rounded">
                      <div class="card-body">
                          <div class="card-body">
                             
                            <div class="row">
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #d3187f; border-radius: 5px;min-height: 120px;padding: 15px;padding-top: 25px;position: relative; left: -10px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fa fa-plane-departure fa-5x" style="color: #e83e8c;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Experiences</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ allExperience }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #6610f2; border-radius: 5px;min-height: 120px;padding: 15px;padding-top: 25px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fab fa-algolia fa-5x" style="color: #6610f2;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Events</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ eventsTotal }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #20c997; border-radius: 5px;min-height: 120px;padding: 15px;padding-top: 25px;position: relative; left: -10px;margin-top: 10px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fa fa-location-arrow fa-5x" style="color: #20c997;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Places</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ placeTotal }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6  merchant-data-card" style="border: 1px solid #eee; border-left: 4px solid #17a2b8; border-radius: 5px;min-height: 120px;padding: 15px;padding-top: 25px;margin-top: 10px;">
                                <div class="row">
                                  <div class="col-md-4">
                                    <i class="fas fa-utensils fa-5x" style="color: #17a2b8;"></i>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <h4>Restaurants</h4>
                                      </div>
                                      <div class="col-md-12">
                                        <h6>{{ restTotal }}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> 
                              <div class="col-md-12" style="margin-top: 40px;">
                                <div class="row">
                                  <div class="col-md-6">
                              <button type="submit" class="btn btn-lg submit_btn float-right" style="width: 100%;">
                                <router-link to="/dashboard/merchant/new-experience" class="" style="color: #FFF;font-weight: 100">Create New Experience</router-link>
                              </button>
                                  </div>
                                  <div class="col-md-6">
                              <button type="submit" class="btn btn-lg submit_btn float-right" style="width: 100%;">
                                <router-link to="/dashboard/merchant/experiences" class="" style="color: #FFF;font-weight: 100">View All Experiences</router-link>
                              </button>
                                  </div>
                                  <div class="col-md-6" style="margin-top: 40px;">
                              <button type="submit" class="btn btn-lg submit_btn float-right" style="width: 100%;">
                                <router-link to="/dashboard/merchant/restaurants" class="" style="color: #FFF;font-weight: 100">Manage Restaurants Menus</router-link>
                              </button>
                                  </div>
                                  <div class="col-md-6" style="margin-top: 40px;">
                              <button type="submit" class="btn btn-lg submit_btn float-right" style="width: 100%;">
                                <router-link to="/dashboard/merchant/bookings" class="" style="color: #FFF;font-weight: 100">Booking From Clients</router-link>
                              </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                       <div class="card bookings-card" v-if="bookings.length < 1 || checkUserType">
                           <div class="card-body">
                               <div class="card-head">
                                   <span class="card-title">My Bookings</span> 
                                   <span class="float-right"><router-link to="/dashboard/my-bookings">See All</router-link></span>
                               </div>
                               <br>
                               <div class="row">
                                  <div v-if="bookings.length < 1 && !loading">
                                    <empty-result>
                                      <template v-slot:error-header>Errm</template>
                                      You do not have any bookings yet. <br> When you book an experience, it will appear here.
                                    </empty-result>
                                  </div>
                                   <div v-else class="col-md-4 experience" v-for="booking in bookings">
                                    <!-- experience/2/Mikaylafurt -->
                                       <router-link :to="'../experience/' + booking.experience.id + '/' + booking.experience.title.toString().toLowerCase().replace( /\s/g, '-')">
                                            <div class="search_items">
                                                <div class="search_items_back_img nagoya"></div>
                                                <div class="search_items_item">
                                                    <div class="fetr_places_overlay">
                                                        <p>DAY TRIP | {{ booking.experience.state }}</p>
                                                        <h3>{{ booking.experience.city }}</h3>
                                                        <!-- <p><b>4.75 *</b> (224)</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </router-link>
                                   </div>
                                </div>
                           </div>
                       </div>
                       <div class="card videos-card" style="padding: 15px;">
                           <div class="card-body">
                               <div class="card-head">
                                    <!-- <h5 class="card-title">Videos</h5> -->
                                </div>
                                <div class="row">

            <div v-if="validationErrors">
              <form-errors
                      :errors="validationErrors"
                      v-if="validationErrors"
              ></form-errors>
            </div>

            <br />
            <form @submit.prevent="formSubmit">
              <div class="row">
                <!-- first_name
                    surname
                    email
                    company
                    address
                    city
                    country
                    postal_code -->
                <div class="form-group col-md-4" v-if="checkUserType">
                  <label for="">Company</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    v-model="business_name"
                    class="form-control edit-prof-input"
                    placeholder="TravvApp Inc."
                  />
                </div>
                <div class="form-group col-md-4" v-if="checkUserType">
                  <label for="">Bussiness Email</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    v-model="business_email"
                    class="form-control edit-prof-input"
                    placeholder="TravvApp Inc."
                  />
                </div>
                <div class="form-group col-md-4" v-if="checkUserType">
                  <label for="">Bussiness Phone Number</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    v-model="phone"
                    class="form-control edit-prof-input"
                    placeholder="+234 800 000 00"
                  />
                </div>
                <div class="form-group col-md-12" v-if="checkUserType">
                  <label for="">Short Bio</label>
                  <textarea
                    v-validate="'required'"
                    type="text"
                    v-model="bio"
                    class="form-control edit-prof-input" 
                  ></textarea>
                </div>
                <!--<div class="form-group col-6">-->
                  <!--<label for="">Username</label>-->
                  <!--<input-->
                    <!--type="text"-->
                    <!--class="form-control edit-prof-input"-->
                    <!--placeholder="michealjackson23"-->
                  <!--/>-->
                <!--</div>-->
                <!-- <div class="form-group col-6">
                  <label for="">Email</label>
                  <input
                    v-validate="'required|email'"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="Email"
                    v-model="email"
                  />
                </div> -->
              </div>
              <div class="row">
                
                <div class="form-group col-md-6">
                  <label for="">First Name</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="Micheal"
                    v-model="first_name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="">Last Name</label>
                  <input
                    v-validate="'required'"
                    v-model="surname"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="Jackson"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="">Address</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="15, Osborne Foreshore Road, Ikoyi, Lagos"
                    v-model="address"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="">City</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="Lagos"
                    v-model="city"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="">Country</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="Nigeria"
                    v-model="country"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="">Postal</label>
                  <input
                    v-validate="'required'"
                    type="text"
                    class="form-control edit-prof-input"
                    placeholder="Zip Code"
                    v-model="postal_code"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-sm-8">
                  <!-- <h5>About Me</h5>
                  <p>
                    Tour with me, Discover Places and experience the culture,
                    its best when you tour with me.
                  </p> -->
                </div>
                <div
                  class="col-12 col-sm-4"
                  style=""
                >
                  <button type="submit" class="btn btn-lg submit_btn float-right" :disabled="loading.updateProfile">
                    <span v-if="loading.updateProfile">
                      <img
                        style="height: 20px;"
                        src="../assets/loader_rolling.gif"
                      />
                    </span>
                    <span v-else>
                      Submit
                    </span>
                  </button>
                </div>
              </div>
            </form>
<!-- <div class="col-md-4" v-for="video in videoData" :key="video.id">

            <div class="card">
              <img :src="'http://img.youtube.com/vi/' + getVideoParam(video.url) +'/hqdefault.jpg'"  data-toggle="modal" :data-target="'#video' + video.id" class="card-img-top cursor-pointer" alt="...">

              <div class="card-body">
                <h5 class="card-title text-truncate"><span style="">{{ video.title }}</span></h5>
                <p style="  display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow:hidden">
                  {{ video.description }}
                </p>
                <footer class="blockquote-footer text-right" style="text-transform: capitalize;cursor: pointer;" @click="getVideoByCat(video.video_category.id)">{{ video.video_category.name }}</footer>
              </div>


            </div>

          </div> -->
                              <!--     <div class="col-md-12">
                                    <div v-for="video in videoData" :key="video.id" class="modal fade" :id="'video' + video.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document" style="max-width: 700px;">
                                      <div class="modal-content">
                                        <div class="modal-body" style="padding: 0">
                                          <iframe width="420" height="415" style="width: 100%" 
                                          :src="video.url">
                                          </iframe>
                                        </div>
                                        <div class="modal-footer" style="padding: 0;border-top: none;">
                                          <div class="row" style="width: 100%;">
                                            <div class="col-md-12" style="text-align: center">
                                               <button type="button" class="btn modal-btn-travv" data-dismiss="modal">Close</button>
                                            </div>
                                          </div>
                                         
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  </div> -->
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
import Navbar from '@/components/Navbar.vue';
import { mapState, mapActions } from 'vuex';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import Axios from 'axios';
import EmptyResult from "@/components/EmptyResult.vue";

import FormErrors from '@/components/FormErrors.vue';

export default {
    name: "Profile",
    beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem('auth'))
        if(checkToken.access_token) {
            return next()
        } else {
          // this.$noty.error("Sign in to access!")
          return next({ path: '/signin' })
        }
        next();
    },
    components: { Navbar, Footer, EmptyResult,
    'form-errors': FormErrors},
    data(){return{
      bookings: [],
      medalType: null,
      videoData: [],
      message: 'http://travvapp.herokuapp.com/signup?ref',
      allExperience: null,
      restTotal: null,
      eventsTotal: null,
      placeTotal: null,
      first_name: null,
      surname: null,
      // email: null,
      subscribed_to_newsletter: null,
      company: null,
      address: null,
      city: null,
      country: null,
      postal_code: null,
      hasImage: false,
      image: null,
      validationErrors: null,
      business_email: null,
      phone: null,
      bio: null,
      business_name: null,
    }},
    computed: {
      ...mapState(['auth']),
      userProperties() {
        return this.auth.user;
      },
      getUserMedalType() {
          if (this.medalType && this.medalType.name == "Rookie") {
              return 'bronze.png'
          } else if (this.medalType && this.medalType.name == "Hobby") {
              return 'silver.png'
          } else if (this.medalType && this.medalType.name == "Expert"){
              return 'gold.png'
          }
      },
      checkUserType() {
        if (this.$store.state.auth.user.role == 'merchant') {
          return true;
        }
        return false;
      }
    },
    methods: {
      ...mapActions(['updateProfile']),
      getMyBookings(){
      
        let requestHeaders = {
          headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
        };
        axios.get(`${this.$store.state.API_BASE}/users/${this.$store.state.auth.user.id}/bookings`, requestHeaders).then(response => {
          this.bookings = response.data.data;
          
        }).catch(err => {
          console.log("There was error fetching mybookings");
        })
        
      },
        getUserMedal(){
            if(this.auth && this.auth.access_token){
                axios.get(`${this.$store.state.API_BASE}/medals`).then(response => {
                    console.log(response.data.data)
                    this.medalType = response.data.data[0]
                }).catch((error) => {
                    console.log(error.data);

                })
            }
        },
        getVideos(){
          this.loading = true
          Axios.get(`${this.$store.state.API_BASE}/videos`).then((response) => {
            console.log(response.data.data)
            this.loading = false
            this.videoData = response.data.data
          }).catch(error => {
            console.log(error.data)
            this.loading = false
          })
        },
        getVideoParam(url){
          var url_string = url; //window.location.href
          var url = new URL(url_string);
          // var c = url.searchParams.get("c");
          return url.pathname.slice(7)
        },
        getExperiencesTotal(){
          axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences`)
                .then((response) => {
                  console.log('Expereinces')
                  this.allExperience = response.data.data.length

                    axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=12`)
                          .then(response => {
                            console.log('Restaurants')
                            this.restTotal = response.data.data.length

                            axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=2`)
                                  .then(response => {
                                    console.log('Events')
                                    this.eventsTotal = response.data.data.length

                                      axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences?experiences_type_id=22`)
                                            .then(response => {
                                              this.placeTotal = response.data.data.length
                                              console.log('Places')
                                              console.log(response.data.data)
                                            }).catch(error => {
                                              console.log(error.response.data)
                                            })

                                    console.log(response.data.data)
                                  })

                            console.log(response.data.data)
                          }).catch(error => {
                            console.log(error.response.data)
                          })

                  console.log(response.data.data)

                }).catch((error) => {
                  console.log(error.response.data)
                })
        },
        getVideoByCat(catergory){
          Axios.get(`${this.$store.state.API_BASE}/videos?video_category_id=${catergory}`).then((response) => {
            console.log(response.data.data)
            this.loading = false
            this.videoData = response.data.data
          }).catch(error => {
            console.log(error.data)
            this.loading = false
          })
        },
        onCopy: function (e) {
          this.$noty.success(`You just copied ${e.text}`)
          // alert('You just copied: ' + e.text)
        },
        onError: function (e) {
          alert('Failed to copy texts')
        },
        formSubmit: function(event) {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + this.$store.state.auth.access_token }
    };
      this.validationErrors = null;
      this.$validator.validateAll().then(result => {
        if (result) {
          this.updateProfile({
            first_name: this.first_name,
            surname: this.surname,
            subscribed_to_newsletter: this.subscribed_to_newsletter,
            user_id: this.auth.user.id,
            address: this.address,
            city: this.city,
            country: this.country,
            postal_code: this.postal_code
          }, requestHeaders)
            .then(data => {
              console.log(data)
              this.$noty.success("Profile Updated Succefully");
              if(this.checkUserType){
                let merchantData = ""
                axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.merchant.id}/extras`).then(response => {
                  console.log(response.data.data)
                  merchantData = response.data.data
                    axios.post(`${this.$store.state.API_BASE}/merchant/extras/${merchantData.id}`, {
                        business_name: this.business_name,
                        business_email: this.business_email,
                        phone: this.phone,
                        bio: this.bio,
                        merchant_id: this.$store.state.auth.merchant.id,
                        _method: 'PUT'
                    }, requestHeaders).then(response => {
                      let newData = JSON.parse(localStorage.getItem("auth"));
                      
                      newData.merchant = response.data.data;

                      // console.log("new data", newData);
                      localStorage.setItem("auth", JSON.stringify(newData));

                      this.$noty.success("Merchant Profile Updated Succefully");
                      window.location.reload(1);
                      console.log(response.data.data)
                    }).catch(error => {
                      console.log(error.response.data)
                    })
                }).catch(error => {
                  console.log(error.response.data);
                })
              }
            })
            .catch(err => {
              console.log(err.response);
              // this.validationErrors = err.response.data.errors;
              this.$noty.error("Oops, something went wrong!");
            });
        } else {
          this.$noty.error("Oops, something went wrong!");
        }
      });
    },
    // checkUserType() {
    //   if (this.auth.user.role == "merchant") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    authFirstName() {
      this.first_name = this.auth.user.first_name;
      return this.auth.user.first_name;
    },
    authSurnName() {
      this.surname = this.auth.user.surname;
      return this.auth.user.surname;
    },
    authEmail() {
      this.email = this.auth.user.email;
      return this.auth.user.email;
    },
    authCompany() {
      if(this.$store.state.auth.merchant) {
        this.company = this.auth.merchant.business_name;
        return this.auth.merchant.business_name;
      }
    },
    authAddress() {
      this.address = this.auth.user.address;
      return this.auth.user.address;
    },
    authCity() {
      this.city = this.auth.user.city;
      return this.auth.user.city;
    },
    authCountry() {
      this.country = this.auth.user.country;
      return this.auth.user.country;
    },
    authPostalCode() {
      this.postal_code = this.auth.user.postal_code;
      return this.auth.user.postal_code;
    },
    setImage(output){
      this.hasImage = true;
      this.image = output;
    },
    merchantCompany() {
      if(this.$store.state.auth.merchant) {
        this.company = this.auth.merchant.business_name;
        return this.auth.merchant.business_name;
      }
    },
    merchantEmail() {
      if(this.$store.state.auth.merchant) {
        this.company = this.auth.merchant.business_email;
        return this.auth.merchant.business_email;
      }
    },
    merchantPhone() {
      if(this.$store.state.auth.merchant) {
        this.company = this.auth.merchant.phone;
        return this.auth.merchant.phone;
      }
    },
    merchantBio() {
      if(this.$store.state.auth.merchant) {
        this.company = this.auth.merchant.bio;
        return this.auth.merchant.bio;
      }
    },
    },
    created(){
      this.message = `http://travvapp.herokuapp.com/signup?ref=${this.auth.user.referral_token}`
      this.getExperiencesTotal()
      this.getMyBookings()
      this.getUserMedal()
      this.getVideos()

      this.authFirstName();
      this.authSurnName();
      this.authEmail();
      this.authCompany();
      this.authAddress();
      this.authCity();
      this.authCountry();
      this.authPostalCode();
      this.merchantCompany();
      this.merchantEmail()
      this.merchantPhone()
      this.merchantBio() 
      if(this.checkUserType){
        this.business_name = this.auth.merchant.business_name
        this.business_email = this.auth.merchant.business_email
        this.bio = this.auth.merchant.bio
        this.phone = this.auth.merchant.phone  
      }
    }
}
</script>
<style scoped>
    .profile-container{
        margin-top:5px;
        margin-bottom: 50px;
        --pink-text-color: #D3187F;
        --black-text-color: #333333;
        --grey-text-color: #555555;
    }

    .profile-container a{
        font-weight: bold;
        text-transform: uppercase;
        color: var(--pink-text-color);
    }

    .edit-link-button a{
        background: var(--pink-text-color);
        padding-top:3px;
        padding-bottom:3px;
        padding-right:5px;
        padding-left:5px;
        color:white;
        border-radius: 5px;
        font-size:12px;
    }
    
    .user_pic{
        /* border: 1px solid #000; */
		height: 140px;
		width: 140px;
        /* display:inline-block; */
		/* margin-left: 90px; */
		margin-bottom: 40px;
		border-radius: 100%;
        position: relative;
        right: -20px;
    }
    .card.profile-card{
        border:none;
    }
    .profile-card .card-body{
        text-align:center;
    }
    .profile-card .card-title{
        color: var(--pink-text-color);
        font-weight:bold;
    }
    .profile-card p.location{
        font-weight: bold;
        color: var(--black-text-color);
    }
    .profile-card .description{
        font-weight:bold;
    }

    .bookings-card.card{
        border:none;
    }
    .bookings-card .card-title{
        color: var(--grey-text-color);
        font-size: 20px;
        font-weight: bold;
    }
    .bookings-card .card-head a{
        font-size:11px;
    }
    .nagoya {
        background: url('/images/shibuya.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .search_items {
        height: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin-bottom: 43px;
    }

    .search_items_back_img {
        width: 100%;
        height: 318px;
    }

    .search_items_item p {
        font-family: MuseoSans;
        font-size: 14px;
        font-weight: bold;
    }

    .search_items_item h3 {
        font-family: MuseoSans;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        color: var(--grey-text-color)
    }

    .search_items_item p b {
        color: #f81894;
        font-family: MuseoSans;
        font-size: 14px;
        font-weight: bold;
    }

    .videos-card{
        box-shadow: 2px 2px 9px var(--grey-text-color);
    }
    .videos-card .card-title{
        color: var(--pink-text-color);
        font-weight: bold;
    }
</style>

