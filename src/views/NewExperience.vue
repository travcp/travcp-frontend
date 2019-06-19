<template>
  <div>
    <vue-headful title="New Experiene | TRAV CP" description="Description from TRAV CP"/>
    <Navbar/>
    <div class="new_experience">
      <div class="new_experience_title" style="text-align: center;">
        <p>Add New</p>
        <hr class="new_experience_title_horizontal">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card" style="width: 100%;border: none;">
              <div class="card-body">
                <div class="row" style="margin:auto;">
                  <!-- <div class="col-md-2"></div> -->

                  <div class="col-md-7" style="margin: auto;">
                    <ul class="nav nav-pills nav-justified">
                      <li class="nav-item">
                        <a class="nav-link" :style="{background: form_index == 1 ? '#f81894' : '', color:  form_index == 1 ? '#FFF !important' : ''}" href="#" style="color: #FFF;font-weight: 400;">Step 1</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" :style="{background: form_index == 2 ? '#f81894' : '', color:  form_index == 2 ? '#FFF !important' : ''}" href="#" style="color: #FFF;font-weight: 400;">Step 2</a>
                      </li>
                    </ul>
                    <br>
                     
                    <div class="form-holder">
                      <div class="form-index-1" v-if="form_index == 1">
                        <div class="row">
                          <div class="form-group col-md-12">
                            <label>Select Experience Type</label>
                            <select
                              v-validate="'required'"
                              class="form-control new_experience_input"
                              v-model="experience_type"
                              @change="checkExperienceType"
                            >
                              <!-- <option selected>Select</option> -->
                              <option
                                v-for="experience_type in experience_types"
                                v-if="experience_type"
                              >{{ experience_type.name }}</option>
                            </select>
                          </div>
                        </div>
                                <!-- <button id="upload_widget_opener" class="cloudinary-button">Upload files</button> -->
                        <!-- <p v-if="experience_types.indexOf("Apple");"></p> -->
                        <div class="form-places">
                          <form @submit.prevent="submitFormExperience">
                            <div class="row">
                              <div class="col-md-12">

                                <!-- <img class="image" src="image"> -->
                                <div class="large-12 medium-12 small-12 cell">
                                  <div v-for="(file, key) in files" class="file-listing">
                                    {{ file.name }}
                                    <span
                                      class="remove-file text-danger"
                                      v-on:click="removeFile(key)"
                                    ><i class="fa fa-times"></i> Remove</span>
                                  </div>
                                </div>
                                <br>

                                <!-- <div class="large-12 medium-12 small-12 cell">
                                      <button @click="addFiles">Add Files</button>
                                </div>-->
                              </div>
                            </div>
                            <div class="row-unusable">
                              <div class="row">
                                <div
                                  class="form-group col-md-12"
                                  v-if="requiredFields.includes('title')"
                                >
                                  <label>Title</label>
                                  <input
                                    v-validate="'required'"
                                    type="text"
                                    class="form-control new_experience_input"
                                    placeholder="Title"
                                    v-model="title"
                                    v-if="requiredFields.includes('title')"
                                  >
                                </div>
                              </div>
                              <div class="row">
                                <div
                                  class="form-group col-md-12"
                                  v-if="requiredFields.includes('location')"
                                >
                                  <label>Location</label>
                                  <input
                                    v-validate="'required'"
                                    type="text"
                                    class="form-control new_experience_input"
                                    placeholder="Location"
                                    v-model='vm.place.formatted_address' v-gmaps-searchbox=vm 
                                  >
                                </div>
                                <span> 
                                </span>
                              </div>
                              <div class="row">
                                <div
                                  class="form-group col-md-4"
                                  v-if="requiredFields.includes('city')"
                                >
                                  <label>City</label>
                                  <input
                                    v-validate="'required'"
                                    type="text"
                                    class="form-control new_experience_input"
                                    placeholder="City"
                                    v-model="city"
                                  >
                                </div>
                                <div
                                  class="form-group col-md-4"
                                  v-if="requiredFields.includes('state')"
                                >
                                  <label>State</label>
                                  <input
                                    v-validate="'required'"
                                    type="text"
                                    class="form-control new_experience_input"
                                    placeholder="State"
                                    v-model="state"
                                  >
                                </div>
                                <div
                                  class="form-group col-md-4"
                                  v-if="requiredFields.includes('country')"
                                >
                                  <label>Country</label>
                                  <country-select
                                    v-model="country"
                                    :country="country"
                                    :countryName="true"
                                    topCountry="US"
                                    class="form-control new_experience_input"
                                  />
                                </div>
                              </div>
                              <div class="row">
                                  <div
                                    class="form-group col-md-6"
                                    v-if="requiredFields.includes('offerings')"
                                  >
                                    <label>
                                      Offerings on tour ( drinks, snacks,
                                      etc)
                                    </label>
                                    <input
                                      v-validate="'required'"
                                      type="text"
                                      class="form-control new_experience_input"
                                      placeholder="What payment covers"
                                      v-model="offerings"
                                    >
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
                                      v-model="language"
                                      placeholder="Language e.g English"
                                    >
                                  </div>
                              </div>
                              <div class="row">
                                  <div
                                    class="form-group col-md-6"
                                    v-if="requiredFields.includes('description')"
                                  >
                                    <label>Description of the experience</label>
                                    <textarea
                                      v-validate="'required'"
                                      placeholder="A short description of the experience"
                                      cols="30"
                                      rows="10"
                                      class="form-control"
                                      v-model="description"
                                    ></textarea>
                                  </div>
                                  <div
                                    class="form-group col-md-6"
                                    v-if="requiredFields.includes('about_merchant')"
                                  >
                                    <label>Merchant's Bio</label>
                                    <textarea
                                      v-validate="'required'"
                                      placeholder="A short bio about the merchant adding this experience"
                                      cols="30"
                                      rows="10"
                                      class="form-control"
                                      v-model="about_merchant"
                                    ></textarea>
                                  </div>
                              </div>
                              <div class="row">
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
                                      v-model="extra_perks"
                                    ></textarea>
                                  </div>
                                  <div
                                    class="form-group col-md-6"
                                    v-if="requiredFields.includes('drink_types')"
                                  >
                                    <label>Drink Types</label>
                                    <textarea
                                      cols="30"
                                      rows="10"
                                      class="form-control"
                                      v-model="drink_types"
                                    ></textarea>
                                  </div>
                              </div>

                              <div class="row">
                                  <div
                                    class="form-group col-md-6"
                                    v-if="requiredFields.includes('history')"
                                  >
                                    <label>History</label>
                                    <textarea
                                      cols="30"
                                      rows="10"
                                      placeholder="History of the experience"
                                      class="form-control"
                                      v-model="history"
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
                                      placeholder
                                      v-model="meetup_location"
                                    >
                                  </div>
                              </div>
                              <div class="row">
                                  <div
                                    class="form-group col-md-5"
                                    v-if="requiredFields.includes('itenary')"
                                  >
                                    <label>Itinerary for the experience</label>
                                    <input
                                      v-validate="'required'"
                                      type="text"
                                      class="form-control new_experience_input"
                                      placeholder
                                      v-model="itenary"
                                    >
                                  </div>
                                  <div
                                    class="form-group col-md-4"
                                    v-if="requiredFields.includes('tourist_expected_items')"
                                  >
                                    <label>What tourists should bring along</label>
                                    <input
                                      v-validate="'required'"
                                      type="text"
                                      class="form-control new_experience_input"
                                      placeholder
                                      v-model="tourist_expected_items"
                                    >
                                  </div>
                                  <div
                                    class="form-group col-md-3"
                                    v-if="
                                      requiredFields.includes('number_admittable')
                                    "
                                  >
                                    <label>Number admittable</label>
                                    <input
                                      name="number_admittable"
                                      v-validate="'required'"
                                      type="number"
                                      class="form-control new_experience_input"
                                      placeholder
                                      v-model="number_admittable"
                                    >
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-12" v-if=" requiredFields.includes('opening_and_closing_hours')">
                                    <label>Opening and closing hours</label>
                                    <open-closing-times v-model="opening_and_closing_hours"/>
                                  </div>
                              </div>
                              <div class="row">
                                <div
                                  class="form-group col-md-6"
                                  v-if="requiredFields.includes('dollar_price')"
                                >
                                  <label>Price ($)</label>
                                    <input
                                      v-validate="'required'"
                                      type="number"
                                      step="any"
                                      class="form-control new_experience_input"
                                      placeholder="in Dollars"
                                      v-model="dollar_price"
                                    >
                                  </div>
                                  <div class="form-group col-md-6" v-if="requiredFields.includes('start_date')">
                                    <label>Dates Range</label>
                                    <br>
                                    <date-picker
                                      v-validate="'required'"
                                      v-model="time"
                                      range
                                      :shortcuts="shortcuts"
                                      :lang="lang"
                                      input-class="form-control new_experience_input"
                                    ></date-picker>
                                  </div>
                                  
                                
                              </div>
                            </div>
                            <br>
                            <div class="col-md-12" style="text-align: center;">
                              <button
                                type="submit"
                                class="btn btn-lg submit_exp_btn"
                                :disabled="loading.submitExperience"
                              >
                                <span v-if="loading.submitExperience">
                                  <img
                                    style="height: 20px;"
                                    src="../assets/loader_rolling.gif"
                                  />
                                </span>
                                <!-- <span v-else>
                                  Submit
                                </span> -->
                                <span v-else>Create Experience</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="form-index-2" v-if="form_index == 2">
                        <h3>
                          Upload Images to This Experience
                        </h3> <br>
                        <FilePond name="Expereince_upload" 
                         v-bind:files="travv_app_pictures" 
                         ref="pond" allowMultiple="true" 
                         accepted-file-types="image/*" allowImageEdit="true" />

                         <button :disabled="fileLoading" class="btn btn-lg submit_exp_btn" @click="handleFilePondInit">
                            <span v-if="fileLoading">
                              <img
                                      style="height: 20px;"
                                      src="../assets/loader_rolling.gif"
                                    />
                            </span>
                            <span>
                              Upload Pictures
                            </span>
                          </button>   
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-md-3" v-if="form_index == 1">
                    <h5>Uploaded Image</h5>
                    <br>
                    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
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
import OpenClosingTimes from "@/components/utility/OpenClosingTimes";
import {CldContext, CldImage, CldVideo, CldTransformation} from 'cloudinary-vue';
import cloudinary from "cloudinary-core";
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';

export default {
  name: "NewExperience",
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
      vm: {
          searchPlace: '',
          location: {
            place: {formatted_address : ''}
          },
          place: {formatted_address : ''}
      },
      form_index: 1,
      experience_response_data: [],
      travv_app_pictures: [],
      cloudinaryUploads: [],
      validationErrors: [],
      form_index: 1,
      experience_type: null,
      title: null,
      location: null,
      city: null,
      state: null,
      about_merchant: null,
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
      },
      fileLoading: false
    };
  },

  components: {
    Navbar,
    Footer,
    vueDropzone: vue2Dropzone,
    DatePicker,
    OpenClosingTimes,
    FilePond: vueFilePond(FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginImageEdit)
  },
  methods: {
    ...mapActions(["getExperienceTypes"]),
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
    async handleFilePondInit(){
      this.fileLoading = true
      console.log('FilePond has initialized');
      console.log(this.$refs.pond.getFiles())
      const url = 'https://api.cloudinary.com/v1_1/dbzyutd4o/image/upload';
      let imageFiles = this.$refs.pond.getFiles()
      if(!imageFiles.length < 1){
        this.fileLoading = false;
        this.$noty.warning('Upload at leaset one Image.')
      } else {
        for(let i = 0; i < imageFiles.length; i++){
          let formData = new FormData()
          formData.append('upload_preset', 'ultgwxm9');
          formData.append('folder', `experience_${this.experience_response_data.id}`);
          formData.append('file', imageFiles[i].file);

          await axios.post(url, formData, {
              headers: {
                  "Content-Type": "multipart/form-data"
                }
            }).then(response => {
              this.cloudinaryUploads.push(response.data.secure_url)
              console.log(response.data)
            }).catch(error => {
              console.log(error.response.data)
            })
          }

        let requestHeaders = {
          headers: {
            Authorization: "Bearer " + this.$store.state.auth.access_token
          }
        };

        await axios.post(`${this.$store.state.API_BASE}/experiences/${this.experience_response_data.id}`, {
          images: this.cloudinaryUploads,
          _method: 'PUT'
        }, requestHeaders).then(response => {
          console.log(response.data.data)
              this.fileLoading = false;
              this.$noty.success('Experience Image Upload Successfull')
              this.$router.push("/dashboard/merchant/experiences");
        }).catch(error => {
              this.fileLoading = false;
              console.log(error.response)
        })
      }
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;
      console.log(this.$refs.files.files)
      // console.log(URL.createObjectURL(this.$refs.files[0]))
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
      let formData = new FormData();
      let CLOUDINARY_BASE_URL = "https://api.cloudinary.com/v1_1/dbzyutd4o"

      // for (var i = 0; i < this.files.length; i++) {
      //   let file = this.files[i];
      //   // formData.append("images[" + i + "]", file);
      // }
      // console.log(formData);
      let data = {
        title: this.title,
        location: this.vm.location.place.formatted_address,
        city: this.city,
        state: this.state,
        country: this.country,
        offerings: this.offerings,
        language: this.language,
        description: this.description,
        dollar_price: this.dollar_price,
        meetup_location: this.meetup_location,
        itenary: this.itenary,
        tourist_expected_items: this.tourist_expected_items,
        number_admittable: this.number_admittable,
        about_merchant: this.about_merchant,
        // start_date: this.start_date,
        // end_date: this.end_date,
        extra_perks: this.extra_perks,
        drink_types: this.drink_types,
        history: this.history,
        start_date: this.time ? this.formatDate(this.time[0]) : null,
        end_date: this.time ? this.formatDate(this.time[1]) : null,
        contact_email: this.$store.state.auth.merchant.business_email,
        merchant_id: this.$store.state.auth.user.id,
        experiences_type_id: this.exp_id,
        opening_and_closing_hours: JSON.stringify(this.opening_and_closing_hours),
        images: this.cloudinaryUploads
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
          }
          // console.log('Got here 1')
          // return new Promise((resolve, reject) => {
          this.$store.state.loading.submitExperience = true;
          axios
            .post(
              `${this.$store.state.API_BASE}/experiences`,
              formData,
              requestHeaders
            )
            .then(response => {
              // resolve(response.data.data);
              console.log(response.data.data);
              this.experience_response_data = response.data.data
              this.form_index = 2
              this.$noty.success("Experience is Submitted Succesfully");
              this.$store.state.loading.submitExperience = false;
              // formData.append('upload_preset', 'ao19aaag')
              // for (var i = 0; i < this.files.length; i++) {
              // let formData = new FormData()
              //   let file = this.files[i];

              //   formData.append("file", file);
              //   formData.append("upload_preset", "ultgwxm9")

              //   formData.append("file", file);

              //   var cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});

              //   axios({
              //     url: CLOUDINARY_BASE_URL,
              //     method: 'POST',
              //     'Content-Type': 'application/x-www-form-urlencoded',
              //     data: formData
              //   }).then(response => {
              //     console.log(response.data.data)
              //   }).catch(error => {
              //     console.log(error.response)
              //   })

              // }

              // this.$router.push("/dashboard/merchant/experiences");
            })
            .catch(err => {
              console.log(err);
              // reject(err);
              this.$noty.error("Oops, something went wrong!");
              return (this.$store.state.loading.submitExperience = false);
            });
          // });
        } else {
          return this.$noty.error("Oops, something went wrong!");
        }
      });
      // }
    },
    checkExperienceType(event) {
      for (let i = 0; i < this.experience_types.length; i++) {
        // console.log(this.experience_types)
        if (this.experience_types[i]) {
          if (this.experience_types[i].name == event.target.value) {
            this.experience_type_name = event.target.value;
            this.exp_id = this.experience_types[i].id;
            this.requiredFields = this.experience_types[i].experience_fields;
            // console.log(this.requiredFields)
          }
        }
      }
    },
    sendingEvent(file, xhr, formData) {
      formData.append("paramName", "some value or other");
    }
  },
  computed: {
    ...mapState(["experience_types"]),
    ...mapState(["loading"]),
    experience_type_placeholder() {}
  },
  created() {
    this.getExperienceTypes();
  },
  mounted() {
     $("#upload_widget_opener").cloudinary_upload_widget(
      {
        cloud_name: "dbzyutd4o",
        upload_preset: "ultgwxm9",
        cropping: "server",
        folder: `experience_${this.$route.params['id']}`,
        theme: "minimal",
        stylesheet: ".drag_content { border: 4px solid red }",
        multiple: false,
        sources: ["local"],
        button_class: "ud_button inline no_margin",
        button_caption: "Browse",
        thumbnails: ".feature_thumb",
        thumbnail_transformation: { width: 100, height: 100, crop: "fit" },
        resource_type: "image"
      },
      function(error, result) {
        if (!error && result && result.event === "success") {
            this.cloudinaryUploads.push(result.info.secure_url)
            console.log('Done! Here is the image info: ', result.info); 
        }
        console.log(error, result);
      }
    );
  }
};
</script>
<style scoped>
label {
  font-size: 15px !important;
}
</style>
<style>
.image {
    width: 100px;
    height: 100px;
    background-size: cover;
    cursor: pointer;
    margin: 5px;
    border-radius: 3px;
    border: 1px solid lightgray;
    object-fit: contain;
}
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
  background: url("../assets/shibuya.png");
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
  border-radius: 5px;
  border: 1px solid #000;
  height: 70px;
}
.form-holder .submit_exp_btn {
  text-align: center;
}
</style>
