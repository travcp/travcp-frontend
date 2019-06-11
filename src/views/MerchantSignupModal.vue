<template>
  <div class="modal" tabindex="-1" role="dialog" id="merchant-signup-modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Become a merchant</h5>
        </div>
        <div class="modal-content">
          <div class="form-inner" style="padding:15px;">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <span class="alert alert-danger" v-if="agreement_error">
                    {{ agreement_error }}
                  </span>
                  <form-errors
                    :errors="validationErrors"
                    v-if="validationErrors"
                  ></form-errors>
                  <form @submit.prevent="submitForm">
                    <div class="form-header">
                      <!-- <div class="alert alert-danger" role="alert" v-if="user_errors">
                                            {{ user_errors.errors.email[0] }}
                                            </div> -->
                    </div>
                    <div class="row">
                      <div class="form-group col-md-12">
                        <label for="">Business Name</label>
                        <input
                          v-validate="'required'"
                          v-model="business_name"
                          type="text"
                          name="business_name"
                          class="form-control signin-input"
                          placeholder="Business name"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <label for="">About Merchant</label>
                        <textarea
                          name="about_merchant"
                          id="about_merchant"
                          cols="30"
                          rows="10"
                          class="form-control"
                          v-model="about_merchant"
                          placeholder="Merchant's bio"
                        ></textarea>
                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group col-md-12">
                        <label for="">Business Email</label>
                        <input
                          v-validate="'required|email'"
                          v-model="email"
                          type="email"
                          name="email"
                          class="form-control signin-input"
                          placeholder="Enter a valid email address"
                        />
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12">
                      <!-- <div class="file-upload">
                        <label class="upload-label">
                          <input class="upload-actual" id="filename" type="text" placeholder="Upload Valid ID"/>
                          <input class="upload-file" id="upload-shield" type="file"/>
                        </label>
                      </div> -->
                    </div>
                      <div class="form-group col-md-12">
                        <label for="">Upload Valid ID</label>
                        <input 
                          v-validate="'required'" type="file" class="form-control" ref="files" v-on:change="onFileChanged()" />
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          
                          <input type="checkbox" value="true" 
                              v-model="agree" id="check3"/>
                          <label for="check3">
                          <div><i class="fa fa-check"></i></div>I agree to the following
                              <a href="#">Terms and Conditions</a>
                          </label>
                        </div>
                        <div class="col-md-12" style="text-align: center">
                          <button type="submit" class="btn btn-lg signup-btn" :disabled="loading.merchantSignup">
                            <span v-if="loading.merchantSignup">
                              <img
                                style="height: 20px;"
                                src="../assets/loader_rolling.gif"
                              />
                            </span>
                            <span v-else>
                              Sign up
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <br />
                  <!-- <h6 style="text-align: center;">
                    Already a Member ?
                    <router-link to="/signin">Sign in</router-link>
                  </h6> -->
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import FormErrors from "@/components/FormErrors.vue";
import axios from "axios";
export default {
  name: "MerchantSignupModal",
  beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem("auth"));
    if (checkToken.access_token && checkToken.user.role != "merchant") {
      return next();
    } else {
      // this.$noty.error("Sign in to access!")
      return next({ path: "/signin" });
    }
    next();
  },
  data() {
    return {
      business_name: "",
      about_merchant: "",
      email: "",
      validationErrors: "",
      agree: false,
      agreement_error: false,
      selectedFile: [],
      files: null
    };
  },
  methods: {
    onFileChanged () {
      // console.log(event)
      // this.selectedFile = event.target.files[0]
      console.log(this.$refs.files.files)
      let uploadedFiles = this.$refs.files.files;
      // this.selectedFile = this.$refs.files.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.selectedFile.push(uploadedFiles[i]);
      }
    },
    submitForm: function() {
      if(this.agree) {
        if(this.auth){
          this.$store.state.loading.merchantSignup = true;
            let requestHeaders = {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + this.$store.state.auth.access_token
              }
            };
            let formData = new FormData();
            let data = {
              business_email: this.email,
              business_name: this.business_name,
              bio: this.about_merchant,
              user_id: this.$store.state.auth.user.id
            }

            for (var i = 0; i < this.selectedFile.length; i++) {
              let file = this.selectedFile[i];
              formData.append("identity_document", file);
            }
            formData.append('identity_document', this.selectedFile)
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                  // Do things here
                  formData.append(key, data[key]);
                  // console.log(formData);
                }
              }
            axios
              .post(`${this.$store.state.API_BASE}/merchant/extras`,
                formData,
                requestHeaders
              )
              .then(response => {
                this.$noty.success("Registration as a Merchant is sucessfull");
                console.log(response.data.data);
      
                let updateMerchantData = JSON.parse(localStorage.getItem("auth"));
                updateMerchantData.user = response.data.data.user_data;
                updateMerchantData.merchantData = response.data.data;
                localStorage.setItem("auth", JSON.stringify(updateMerchantData));
                this.$store.state.loading.merchantSignup = false;
                this.$router.push("/dashboard/merchant/new-experience");
                 window.location.reload(1);
              })
              .catch(err => {
                // this.$noty.error("Oops, something went wrong!")
                if (err.response.status == 422) {
                  this.validationErrors = err.response.data.errors;
                  this.$noty.error("Oops, something went wrong!");
                this.$store.state.loading.merchantSignup = false;
                }
              });
            } else {
              this.agreement_error = "Sign up as a user to Register as a Merchant"
              this.$noty.error("Sign up as a user to Register as a Merchant");  
            }
            
          } else {
            this.agreement_error = "Agree To Terms and Condition to Sign up!"
            this.$noty.error("Agree To Terms and Condition to Sign up!");
          }
      // this.$validator.validateAll().then(result => {
      //     console.log("Break it down")
      //     if (result){
      //         console.log("Who that")
      //         axios.post(`${this.$store.state.API_BASE}/merchant/extras`, {
      //             business_email: this.email,
      //             business_name: this.business_name,
      //             bio: this.about_merchant,
      //             merchant_id: this.$store.state.auth.user.id
      //         }).then(response => {
      //             this.$noty.success("Registration sucessfull")
      //         }).catch(err => {
      //             // this.$noty.error("Oops, something went wrong!")
      //             if (err.response.status == 422){
      //                 this.validationErrors = err.response.data.errors;
      //             }
      //         })

      //     }
      //     else{
      //         this.$noty.error("Oops, something went wrong!")
      //     }
      // });
    }
  },
  computed: {
    ...mapState(["loading"]),
    ...mapState(['auth'])
  },
  components: {
    FormErrors
  }
};
</script>
<style scoped>
.modal {
  border-radius: 20px;
}
input[type="checkbox"]{ display:none; }

label div{
  width:20px;
  height:20px;
  display:inline-block;
  border:2px solid #fff;
  text-align:center;
  line-height:15px;
  margin-right:6px; 
  border-radius:3px;
  cursor:pointer; 
  background:#F81894;
  border: 3px solid #F81894;
}

label i{ font-size:16px;  opacity:0; color: #FFF; }
label:hover div{ border: 3px solid #F81894; background: #FFF; color: #F81894; }
input:checked+label i{ opacity:1; }
input:checked+label div{ background:#F81894; }

.file-upload {
  position: relative;
}
.upload-label {
  position: relative;
}
#filename,
#upload-shield {
  border: none;
  outline: none;
  color: #252a46;
  cursor: pointer;
  width: 100%;
  max-height: 50px;
  min-height: 50px;
}
#upload-shield {
  z-index: 100;
  opacity: 0;
}
#upload-shield::-webkit-file-upload-button {
  display: none;
}
#filename {
  position: absolute;
  padding-right: 40px;
  font-size: 16px;
  border-radius: 0;
  word-break: break-word;
  background: #f5f5f6 url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/icon-upload-file2.svg") no-repeat;
  background-position: right 9px center;
  background-size: 22px;
}

</style>
