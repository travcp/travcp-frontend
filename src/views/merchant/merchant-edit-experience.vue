<template>
  <div>
    <vue-headful
      title="Edit Experiene | TRAV CP"
      description="Description from TRAV CP"
    />
    <Navbar />
    <div class="new_experience">
      <div class="new_experience_title" style="text-align: center;">
        <p>Edit Experience</p>
        <hr class="new_experience_title_horizontal" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card" style="width: 100%;border: none;">
              <div class="card-body">
                <div class="row" style="margin: auto;">
                  <!--<div class="col-md-3"></div>-->
                      <div class="col-md-7 form-index-1" v-if="form_index == 1">
                        <div class="row">
                          <div class="form-group col-md-12 text-center" v-if="loadingExp">
                                  <Circle9 /> 
                          </div>
                        </div>

                        <!-- <p v-if="experience_types.indexOf("Apple");"></p> -->
                        <div class="form-places">
                          <form @submit.prevent="submitFormExperience">
                            <div class="row">
                              <div class="col-md-12">
                                <!-- <input
                                  type="file"
                                  id="file"
                                  ref="files"
                                  multiple
                                  v-on:change="handleFilesUpload()"
                                /> -->

                                <!-- <div class="large-12 medium-12 small-12 cell">
                                  <div
                                    v-for="(file, key) in files"
                                    class="file-listing"
                                  >
                                    {{ file.name }}
                                    <span
                                      class="remove-file"
                                      v-on:click="removeFile(key)"
                                      >Remove</span
                                    >
                                  </div>
                                </div> -->
                                <!-- <div class="large-12 medium-12 small-12 cell">
                                  <div v-for="(file, key) in files" class="file-listing">
                                    {{ file.name }}
                                    <span
                                      class="remove-file text-danger"
                                      v-on:click="removeFile(key)"
                                    ><i class="fa fa-times"></i> Remove</span>
                                  </div>
                                </div> -->
                                <br />
                                <!-- <button id="open-btn" class="myBtn">Open</button> -->
                                <!-- <div class="large-12 medium-12 small-12 cell">
                                      <button @click="addFiles">Add Files</button>
                                    </div> -->
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('title')"
                              >
                                <label>Title</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="Title"
                                  v-model="experience.title"
                                  v-if="requiredFields.includes('title')"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('location')"
                              >
                                <label>Location</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="Location"
                                  v-model="experience.location"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('city')"
                              >
                                <label>City</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="City"
                                  v-model="experience.city"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('state')"
                              >
                                <label>State</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="State"
                                  v-model="experience.state"
                                />
                              </div>
                              <div
                                class="form-group col-md-4"
                                v-if="requiredFields.includes('country')"
                              >
                                <label>Country</label>
                                <!-- <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Country"
                                        v-model="state_22"
                                /> -->
                                <country-select
                                  v-model="experience.country"
                                  :country="country"
                                  :countryName="true"
                                  topCountry="US"
                                  className="form-control new_experience_input"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('offerings')"
                              >
                                <label
                                  >Offerings on tour ( drinks, snacks,
                                  etc)</label
                                >
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="State"
                                  v-model="experience.offerings"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('language')"
                              >
                                <label>Language</label>
                                <input
                                  type="text"
                                  name="language"
                                  id="inputState"
                                  class="form-control new_experience_input"
                                  v-model="experience.language"
                                  placeholder="Language e.g English"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('description')"
                              >
                                <label>Short descriptions</label>
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="experience.description"
                                ></textarea>
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('extra_perks')"
                              >
                                <label>Extra Perks</label>
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="experience.extra_perks"
                                ></textarea>
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('drink_types')"
                              >
                                <label>Drink Types</label>
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="experience.drink_types"
                                ></textarea>
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('history')"
                              >
                                <label>History</label>
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="experience.history"
                                ></textarea>
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('meetup_location')"
                              >
                                <label>Meet up Location</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="experience.meetup_location"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('itenary')"
                              >
                                <label>Itinerary for the experience</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="experience.itenary"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('tourist_expected_items')"
                              >
                                <label>What tourists should bring along</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="experience.tourist_expected_items"
                                />
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="
                                  requiredFields.includes('number_admittable')
                                "
                              >
                                <label>Number admittable</label>
                                <input
                                  name="number_admittable"
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="experience.number_admittable"
                                />
                              </div>
                              <!-- <div
                                class="form-group col-md-6"
                                v-if="
                                  requiredFields.includes('opening_and_closing_hours')
                                "
                              >
                                <label>Opening and closing hours</label>
                                <input
                                  name="opening_and_closing_hours"
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="experience.opening_and_closing_hours"
                                />
                              </div> -->
                              <div class="col-md-12" v-if="
                                  requiredFields.includes('opening_and_closing_hours')
                                ">
                                <label>Opening and closing hours</label>
                                <open-closing-times v-if="isJson(experience.opening_and_closing_hours)" :days="JSON.parse(experience.opening_and_closing_hours)" v-model="opening_and_closing_hours"></open-closing-times>
                                <open-closing-times v-model="opening_and_closing_hours" v-else/>
                              </div>
                              <div
                                class="form-group col-md-6"
                                v-if="requiredFields.includes('dollar_price')"
                              >
                                <div class="row">
                                  <div class="form-group col-md-4">
                                    <label>Price ($)</label>
                                    <input
                                      v-validate="'required'"
                                      type="text"
                                      class="form-control new_experience_input"
                                      placeholder="in Dollars"
                                      v-model="experience.dollar_price"
                                    />
                                  </div>
                                  <div class="form-group col-md-8">
                                    <label>Dates Range</label> <br />
                                    <date-picker
                                      v-validate="'required'"
                                      v-model="time"
                                      range
                                      :shortcuts="dateShortcuts"
                                      :lang="lang"
                                      input-class="form-control new_experience_input"
                                    ></date-picker>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-12" style="text-align: center;">
                              <button
                                type="submit"
                                class="btn btn-lg submit_exp_btn"
                                :disabled="loading.merchantEditExperience"
                              >
                                <span v-if="loading.merchantEditExperience">
                                  <img
                                    style="height: 20px;"
                                    src="../../assets/loader_rolling.gif"
                                  />
                                </span>
                                <span v-else>
                                  Update
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                    
                  </div>
                  <div class="col-md-5">
                    <h4>
                      Upload Images to This Experience
                    </h4> <br>
                    <FilePond name="Expereince_upload" 
                     v-bind:files="travv_app_pictures" 
                     ref="pond" allowMultiple="true" 
                     accepted-file-types="image/*" allowImageEdit="true" />
                  </div>
                  <!-- <div class="col-md-3" v-if="form_index == 1">
                    <h5>Uploaded Image</h5>
                    <br />
                    <vue-dropzone
                      ref="myVueDropzone"
                      id="dropzone"
                      :options="dropzoneOptions"
                    ></vue-dropzone>
                  </div> -->
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
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";
import DatePicker from "vue2-datepicker";
import axios from "axios";
import OpenClosingTimes from "@/components/utility/OpenClosingTimes"

import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

import { Circle9 } from 'vue-loading-spinner'
export default {
  name: "MerchantEditExperience",
  beforeRouteEnter(to, from, next) {
    let checkToken = JSON.parse(localStorage.getItem("auth"));
    if (checkToken.access_token && checkToken.user.role == "merchant") {
      return next();
    } else {
      // this.$noty.error("Sign in to access!")
      return next({ path: "/signin" });
    }
    next();
  },
  data() {
    return {
      // experience_type_placeholder: null,
      loadingExp: false,
      experience_types: [],
      validationErrors: [],
      form_index: 1,
      travv_app_pictures: [],
      experience_type: null,
      title: null,
      location: null,
      city: null,
      state: null,
      offerings: null,
      language: null,
      description: null,
      dollar_price: null,
      meetup_location: null,
      itenary: null,
      tourist_expected_items: null,
      number_admittable: null,
      start_date: null,
      end_date: null,
      extra_perks: null,
      drink_types: null,
      history: null,
      country: "",
      requiredFields: [],
      experience_type_name: null,
      opening_and_closing_hours: null,
      files: [],
      time: "",
      experience: {},
      required_fields_for_events: [
        "title",
        "about_merchant",
        "contact_email",
        "location",
        "city",
        "state",
        "country"
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      },
      lang: {
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        pickers: [
          "next 7 days",
          "next 30 days",
          "previous 7 days",
          "previous 30 days"
        ],
        placeholder: {
          date: "Select Date",
          dateRange: "Select Date Range"
        }
      },
      dateFormat: "D MMM",
      // custom range shortcuts
      shortcuts: [
        {
          text: "Today",
          onClick: () => {
            this.time3 = [new Date(), new Date()];
          }
        }
      ],
      timePickerOptions: {
        start: "00:00",
        step: "00:30",
        end: "23:30"
      }
    };
  },
  components: {
    Navbar,
    Footer,
    vueDropzone: vue2Dropzone,
    DatePicker,
    OpenClosingTimes,
    FilePond: vueFilePond(FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginImageEdit),
    Circle9
  },
  methods: {
    // ...mapActions(["getExperienceTypes"]),
    ...mapActions(["submitExperience"]),
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },
    addFiles() {
      this.$refs.files.click();
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    submitFormExperience: function() {
      // if (this.experience_type == 22) {
      // let start_date = this.formatDate(this.time[0])
      // let end_date = this.formatDate(this.time[1])
      console.log(this.$refs.pond.getFiles())
      let imageFiles = this.$refs.pond.getFiles()
      let formData = new FormData();

      // let formData = new FormData()
      for (let i = 0; i < imageFiles.length; i++) {
        let file = this.files[i];
        formData.append("images[" + i + "]", imageFiles[i].file);
      }
      
      let data = {
        title: this.experience.title,
        location: this.experience.location,
        city: this.experience.city,
        state: this.experience.state,
        country: this.experience.country,
        offerings: this.experience.offerings,
        language: this.experience.language,
        description: this.experience.description,
        dollar_price: this.experience.dollar_price,
        meetup_location: this.experience.meetup_location,
        itenary: this.experience.itenary,
        tourist_expected_items: this.experience.tourist_expected_items,
        number_admittable: this.experience.number_admittable,
        // start_date: this.start_date,
        // end_date: this.end_date,
        extra_perks: this.experience.extra_perks,
        drink_types: this.experience.drink_types,
        history: this.experience.history,
        start_date: this.time ? this.formatDate(this.time[0]) : null,
        end_date: this.time ? this.formatDate(this.time[1]) : null,
        contact_email: this.$store.state.auth.merchant.business_email,
        merchant_id: this.$store.state.auth.user.id,
        experiences_type_id: this.exp_id,
        opening_and_closing_hours: JSON.stringify(this.opening_and_closing_hours),
        _method: 'PUT'
      };
      Object.entries(data).forEach(o =>
        o[1] === null ? delete data[o[0]] : 0
      );

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          // Do things here
          formData.append(key, data[key]);
          // console.log(formData);
        }
      }

      // console.log(formData);

      this.$validator.validateAll().then(result => {
        if (result) {
          let requestHeaders = {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + this.$store.state.auth.access_token
            }
          };
          // console.log('Got here 1')
          // return new Promise((resolve, reject) => {
          this.$store.state.loading.merchantEditExperience = true;
          axios
            .post(
              `${this.$store.state.API_BASE}/experiences/${this.experience.id}`,
              formData,
              requestHeaders
            )
            .then(response => {
              
              this.$noty.success("Experience is Submitted Succesfully");
              this.$store.state.loading.merchantEditExperience = false;
              this.$router.push("/dashboard/merchant/experiences");
            })
            .catch(err => {
              console.log(err);
              // reject(err);
              this.$noty.error("Oops, something went wrong!");
              return (this.$store.state.loading.merchantEditExperience = false);
            });
          // });
        } else {
          this.$noty.error("Oops, something went wrong!");
          this.$noty.error("Please Check the Date Range Field");
        }
      });
      // }
    },
    checkExperienceType() {
      
      for (let i = 0; i < this.experience_types.length; i++) {
        // console.log(this.experience_types)
        if (this.experience_types[i] != undefined) {
          if (this.experience_types[i].name == this.$route.params.experience_type) {
            // this.experience_type_name = event.target.value;
            this.exp_id = this.experience_types[i].id;
            this.requiredFields = this.experience_types[i].experience_fields;
            // console.log(this.requiredFields)
          }
        }
      }
    },
    getExperienceTypes() {
      // commit("IS_LOADING");
      return new Promise((resolve, reject) => {
        axios
        .get(`${this.$store.state.API_BASE}/experience_types`)
        .then(response => {
          this.experience_types = response.data.data
          resolve(response.data.data)
          console.log(response.data.data);
        })
        .catch(error => {
          console.log(error);
          reject(error)
        });
      })
    },
    async getExperienceById(id) {
      this.loadingExp = true
      await axios.get(`${this.$store.state.API_BASE}/experiences/${this.$route.params.id}`).then(response => {
        
        this.experience = response.data.data
        this.time = [
          this.experience.start_date,
          this.experience.end_date
        ];
        for(let i = 0; i < this.experience.images.length; i++){
          console.log(this.experience.images[i].image)
          this.travv_app_pictures.push(this.experience.images[i].image)
        }
        this.loadingExp = false
        this.opening_and_closing_hours = this.experience.opening_and_closing_hours;
      });
    },
    isJson(item){
      item = typeof item !== 'string' ? JSON.stringify(item) : item;
      try{
        item = JSON.parse(item);
      }
      catch(e){
        return false;
      }
      return typeof item === 'object' && item !== null;
    }
  },
  computed: {
    ...mapState(["loading"]),
    experience_type_placeholder() {},
    dateShortcuts: function(){
      return [
      {
        text: 'Start and End date',
        start: this.experience.start_date,
        end: this.experience.end_date
      }
    ]
    } 
  },
  created() {
    this.getExperienceById(this.$route.params.id)
    this.getExperienceTypes()
      .then(response => {
        this.checkExperienceType();        
      }).catch((err) => {

      });
  },
  mounted(){
       window.ml = cloudinary.createMediaLibrary({
       cloud_name: 'dbzyutd4o',
       api_key: '586358369334938',
       username: 'omoelu1@gmail.com',
       button_class: 'myBtn',
       button_caption: 'Manage Image or Video',
       folder: {path: "user_photos", resource_type: "image"}
       }, {
           insertHandler: function (data) {
             data.assets.forEach(asset => { console.log("Inserted asset:",
             JSON.stringify(asset, null, 2)) })
             }
          },
          document.getElementById("open-btn")
      )
  }
};
</script>
<style scoped>
label {
  font-size: 15px !important;
}
</style>
<style scoped>
.form-holder {
  width: 100%;
  /*height: 300px;*/
}
.new_experience {
  margin-top: 70px;
}
.new_experience_title {
  font-size: 3em;
  font-weight: bolder;
  color: #f81894;
}
.new_experience_content h2 {
  color: #f81894;
  font-weight: bolder;
  text-align: center;
}
.new_experience_content label {
  color: grey;
  font-size: 16px;
}
.new_experience_input {
  /*border-bottom: none;*/
  /*background-image: linear-gradient(to top, #989a9f, #adaeb2, #c3c3c6, #d8d8da, #eeeeee);*/
  border-radius: 4px;
  /*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
  height: 50px;
  font-size: 14px;
  border-radius: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border: 1px solid #000;
  height: 46px !important;
}

/*.mx-input {*/
/*border-radius: 4px;*/
/*!*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*!*/
/*height: 50px;*/
/*font-size: 16px;*/
/*border-radius: 10px;*/
/*border-top: none;*/
/*border-left: none;*/
/*border-right: none;*/
/*border: 1px solid #000;*/
/*height: 46px !important;*/
/*}*/

.submit-exp-textarea {
}
.uploaded_image {
  border: 3px solid #c3c3c6;
  height: 250px;
  width: 100%;
  background: url("../../assets/shibuya.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.submit_exp_btn {
  background: #f81894;
  border: none;
  /* padding: 44px 29px 39px 25px; */
  font-family: MuseoSans700;
  font-size: 16px;
  width: 120px;
  height: 50px;
  border-radius: 8px;
  background-color: #f81894;
  color: #fff;
  margin-top: -10px;
}
.prev_btn {
  color: #f81894;
  font-weight: bolder;
  background: #fff;
  text-align: left !important;
}
textarea.form-control {
  border-radius: 10px;
  border: 1px solid #000;
  height: 70px;
}
.form-holder .submit_exp_btn {
  text-align: center;
}
</style>
