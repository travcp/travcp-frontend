<template>
  <div class="edit_profile">
    <vue-headful
            :title="'Edit Profile | '+ $store.state.appName"
            :description="$store.state.appDescription"
        />
    <Navbar />
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div
            class="card shadow p-3 mb-5 bg-white rounded edit_profile_content"
          >
            <h2>Edit Profile</h2>
            <br />
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
          </div>
        </div>
        <div class="col-md-4 edit_profile_user_sec">
          <div class="card" style="width: 100%;">
            <div class="card-body" style="text-align: center;">
              <img
                :src="auth.user.profile_image ? auth.user.profile_image.image : require('@/assets/avatar.png')"
                class="user_pic"
                alt="profile picture"
              />
              <br>
              <image-uploader
                ref="fileUpload"
                :debug="1"
                :maxWidth="512"
                :autoRotate=true
                outputFormat="verbose"
                :preview=true
                :className="['fileinput', { 'fileinput--loaded' : hasImage }]"
                capture="environment"
                accept="image/*"
                doNotResize="['gif', 'svg']"
                @input="setImage"
              >
                <label for="fileInput" slot="upload-label">
                  <span class="upload-caption text-primary" href="javascript:void(0)">{{ hasImage ? 'Replace' : 'Change avatar'}}</span>
                  <br>
                  <a href="javascript:void(0)" v-if="hasImage" class="btn btn-primary" @click="uploadImage">Upload</a>
                </label>
              </image-uploader>
              
               <br>
              <!--<div class="user_pic"></div>-->
              <h5 class="card-title">{{ userProperties.surname }} {{ userProperties.first_name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted" style="text-transform: lowercase;">{{ userProperties.surname }}{{ userProperties.first_name }}</h6>
              <p class="card-text">
                Tour with me, Discover Places and experience the culture with me
              </p>
              <hr />
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
import { mapState, mapActions } from "vuex";
import Footer from "@/components/Footer.vue";
import axios from "axios";

import FormErrors from '@/components/FormErrors.vue';

import Swal from 'sweetalert2'
export default {
  name: "EditProfile",
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
  // beforeRouteEnter(to, from, next){
  //     if(localStorage.getItem('auth')) {
  //         return next({ path: '/' })
  //     }
  //     next();
  // },"company": null,
  // "address": null,
  // "city": null,
  // "country": null,
  // "postal_code": null
  data() {
    return {
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
    };
  },
  components: {
    Navbar,
    Footer,
    'form-errors': FormErrors
  },
  computed: {
    ...mapState(["auth"]),
    ...mapState(["loading"]),
    userProperties() {
      return this.auth.user;
    },
    checkUserType() {
      if (this.$store.state.auth.user.role == 'merchant') {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions(["updateProfile"]),
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
              Swal.fire(
                'Profile',
                'Profile updated successfully',
                'success'
              )
              this.$noty.success("Profile Updated Succefully");
              if(this.checkUserType){
                let merchantData = ""
                axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/extras`).then(response => {
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
                      console.log(response.data.data)
                      let newData = JSON.parse(localStorage.getItem("auth"));
                      
                      newData.newMerchant = response.data.data;
                      newData.merchant.business_name = newData.newMerchant.business_name
                      newData.merchant.business_email = newData.newMerchant.business_email
                      newData.merchant.phone = newData.newMerchant.phone
                      newData.merchant.bio = newData.newMerchant.bio

                      this.$store.state.auth.merchant = newData.merchant
                      console.log("new data", newData);
                      localStorage.setItem("auth", JSON.stringify(newData));

                      this.$noty.success("Merchant Profile Updated Succefully");
                      // window.location.reload(1);
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
    uploadImage(){
      // console.log(this.$refs);
      let image = this.$refs.fileUpload.$el.children[1].files[0];
      let formData = new FormData();
      formData.append("profile_image", image);
      formData.append("_method", "PUT");
      axios.post(`${this.$store.state.API_BASE}/users/${this.$store.state.auth.user.id}`, 
      formData,
      {headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization' : `Bearer ${this.$store.state.auth.access_token}`
      }}).then(res => {
        let newData = JSON.parse(localStorage.getItem("auth"));
        console.log("response data", res.data);
        console.log("new data", newData);
        newData.user = res.data.data;

        localStorage.setItem("auth", JSON.stringify(newData));

        this.$store.state.auth.user = newData.user;
      })
      
      // document.querySelector(".user_pic").src = this.image.dataUrl;
      document.querySelector(".img-preview").style.display = "none";
      this.hasImage = false;
      this.image = null;

    }
  },
  created() {
    
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
};
</script>
<style>
.img-preview{
  width:100%;
  max-width: 100%;
}
.edit-prof-input {
  border-radius: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #777;
  /*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
}
.submit_btn {
  background: #f81894;
  border: none;
  font-size: 16px;
  width: 120px;
  height: 36px;
  border-radius: 8px;
  background-color: #f81894;
  color: #fff;
}
.edit_profile_content {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.edit_profile_content h2 {
  font-weight: bolder;
}
.edit_profile_user_sec .card {
  text-align: center;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.edit_profile_user_sec .card .card-title {
  color: #f81894;
  font-weight: bolder;
}

.edit_profile_user_sec .card .user_pic {
  /*border: 1px solid #000;*/
  height: 140px;
  width: 140px;
  display: inline-block;
  border-radius: 100%;
}

#fileInput {
  display: none;
}
</style>
