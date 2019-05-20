<template>
  <div>
    <vue-headful
            title="New Experiene | TravvApp"
            description="Description from travvApp"
        />
    <Navbar />
    <div class="new_experience">
      <div class="new_experience_title" style="text-align: center;">
        <p>Add New</p>
        <hr class="new_experience_title_horizontal" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card" style="width: 100%;border: none;">
              <div class="card-body">
                <div class="row">
                  <!--<div class="col-md-3"></div>-->
                  <div class="col-md-9">
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
                                v-for="experience_type in experience_types" v-if="experience_type">{{ experience_type.name }}</option
                              >
                            </select>
                          </div>
                        </div>

                        <!-- <p v-if="experience_types.indexOf("Apple");"></p> -->
                        <div class="form-places">
                          <form @submit.prevent="submitFormExperience">
                            <div class="row">
                              <div class="form-group col-md-6" v-if="requiredFields.includes('title')">
                                <label>Title</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="Title"
                                  v-model="title"
                                  v-if="requiredFields.includes('title')"
                                />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('location')">
                                <label>Location</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Location"
                                        v-model="location" />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('city')">
                                <label>City</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="City"
                                        v-model="city" />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('state')">
                                <label>State</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="State"
                                        v-model="state" />
                              </div>
                              <div class="form-group col-md-4" v-if="requiredFields.includes('country')">
                                <label>Country</label>
                                <!-- <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Country"
                                        v-model="state_22"
                                /> -->
                                <country-select v-model="country" :country="country" :countryName="true" topCountry="US" className="form-control new_experience_input" />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('offerings')">
                                <label
                                  >Offerings on tour ( drinks, snacks,
                                  etc)</label
                                >
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="State"
                                        v-model="offerings" />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('language')">
                                <label>Language</label>
                                <input type="text" name="language" id="inputState" class="form-control new_experience_input" v-model="language" placeholder="Language e.g English">
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('description')">
                                <label
                                  >Short descriptions</label
                                >
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="description"
                                ></textarea>
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('extra_perks')">
                                <label
                                  >Extra Perks</label
                                >
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="extra_perks"
                                ></textarea>
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('drink_types')">
                                <label
                                  >Drink Types</label
                                >
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="drink_types"
                                ></textarea>
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('history')">
                                <label
                                  >History</label
                                >
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="history"
                                ></textarea>
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('meetup_location')">
                                <label
                                  >Meet up Location</label
                                >
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="meetup_location"
                                />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('itenary')">
                                <label>Itinerary for the experience</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="itenary"
                                />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('tourist_expected_items')">
                                <label>What tourists should bring along</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="tourist_expected_items"
                                />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('number_admittable')">
                                <label>Number admittable</label>
                                <input
                                  name="number_admittable"
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="number_admittable"
                                />
                              </div>
                              <div class="form-group col-md-6" v-if="requiredFields.includes('opening_and_closing_hours')">
                                <label>Opening and closing hours</label>
                                <input
                                  name="opening_and_closing_hours"
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="opening_and_closing_hours"
                                />
                              </div>

                              <div class="form-group col-md-6" v-if="requiredFields.includes('naira_price')">
                                <div class="row">
                                  <div class="form-group col-md-4">
                                    <label>Price</label>
                                    <input
                                      v-validate="'required'"
                                      type="text"
                                      class="form-control new_experience_input"
                                      placeholder="in Dollars"
                                      v-model="naira_price"
                                    />
                                  </div>
                                  <div class="form-group col-md-8">
                                    <label>Dates Range</label> <br />
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
                            </div>
                            <div class="col-md-12" style="text-align: center;">
                              <button
                                type="submit"
                                class="btn btn-lg submit_exp_btn"
                              >
                                <span v-if="isLoading">
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
                          </form>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="col-md-3" v-if="form_index == 1">
                    <h5>Uploaded Image</h5>
                    <br />
                    <vue-dropzone
                      ref="myVueDropzone"
                      id="dropzone"
                      :options="dropzoneOptions"
                    ></vue-dropzone>

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
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";
import DatePicker from "vue2-datepicker";

export default {
  name: "NewExperience",
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("auth")) {
      return next();
    } else {
      // this.$noty.error("Sign in to access!")
      return next({ path: "/signin" });
    }
    // next();
  },
  data() {
    return {
      // experience_type_placeholder: null,
      form_index: 1,
      experience_type: null,
      title: null,
  	  location: null,
  	  city: null,
  	  state: null,
  	  country: null,
  	  offerings: null,
  	  language: null,
  	  description: null,
  	  naira_price: null,
  	  meetup_location: null,
  	  itenary: null,
  	  tourist_expected_items: null,
  	  number_admittable: null,
  	  start_date: null,
  	  end_date: null,
  	  extra_perks: null,
  	  drink_types: null,
  	  history: null,
      country: '',
      requiredFields: [],
      experience_type_name: null,
      opening_and_closing_hours: null,
      // city: null,
      // language: null,
      // about_the_experiece_designer: null,
      // offerings_on_tour: null,
      // short_description_of_the_experience: null,
      // price_in_naira: null,
      // meet_up: null,
      // what_tourists_should_bring_along: null,
      // itinerary_for_the_experience: null,
      // number_that_each_tour_can_admit: null,
      time: "",
      required_fields_for_events: ["title", "about_merchant", "contact_email", "location", "city", "state", "country"],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
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
    DatePicker
  },
  methods: {
    ...mapActions(["getExperienceTypes"]),
    ...mapActions(["submitExperience"]),
    inFormIndx() {
      this.form_index++;
    },
    deFormIndx() {
      this.form_index--;
    },
    formatDate (date) {
      var d = new Date(date),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },
    formSubmit() {
      if(this.experience_type == 22) {
        start_date: this.formatDate(this.time[0])
        end_date: this.formatDate(this.time[1])

        let data = {
          slug: "somthinasdaas-dsgdsfgg",
          title: this.title_22,
          experiences_type_id: this.experience_type,
          city: this.city,
          language: this.language,
          about_the_experiece_designer: this.about_the_experiece_designer,
          offerings_on_tour: this.offerings_on_tour,
          short_description_of_the_experience: this
                  .short_description_of_the_experience,
          price_in_naira: this.price_in_naira,
          meet_up: this.meet_up,
          what_tourists_should_bring_along: this.what_tourists_should_bring_along,
          itinerary_for_the_experience: this.itinerary_for_the_experience,
          number_that_each_tour_can_admit: this.number_that_each_tour_can_admit
        };
        this.$validator.validateAll().then(result => {
          if (result) {
            // this.$
          } else {
            this.$noty.error("Oops, something went wrong!");
          }
        });
      } else if (this.experience_type = 2) {
        let data = {
          slug: "somthinasdaas-dsgdsfgg",
          title: this.title_22,
          experiences_type_id: this.experience_type,
          // city: this.city,
          // language: this.language,
          // about_the_experiece_designer: this.about_the_experiece_designer,
          // offerings_on_tour: this.offerings_on_tour,
          // short_description_of_the_experience: this
          //         .short_description_of_the_experience,
          // price_in_naira: this.price_in_naira,
          // meet_up: this.meet_up,
          // what_tourists_should_bring_along: this.what_tourists_should_bring_along,
          // itinerary_for_the_experience: this.itinerary_for_the_experience,
          // number_that_each_tour_can_admit: this.number_that_each_tour_can_admit
        };
        this.$validator.validateAll().then(result => {
          if (result) {
            // this.$
          } else {
            this.$noty.error("Oops, something went wrong!");
          }
        });
      }

    },
    submitFormExperience: function() {
      // if (this.experience_type == 22) {
        // let start_date = this.formatDate(this.time[0])
        // let end_date = this.formatDate(this.time[1])
        let data = {
          title: this.title,
          location: this.location,
          city: this.city,
          state: this.state,
          country: this.country,
          offerings: this.offerings,
          language: this.language,
          description: this.description,
          naira_price: this.naira_price,
          meetup_location: this.meetup_location,
          itenary: this.itenary,
          tourist_expected_items: this.tourist_expected_items,
          number_admittable: this.number_admittable,
          start_date: this.start_date,
          end_date: this.end_date,
          extra_perks: this.extra_perks,
          drink_types: this.drink_types,
          history: this.history,
          start_date: this.time ? this.formatDate(this.time[0]) : null,
          end_date: this.time ? this.formatDate(this.time[1]) : null,
          contact_email: this.$store.state.auth.user.email,
          merchant_id: this.$store.state.auth.user.id,
          location: this.address_22,
          state: this.state_22,
          experiences_type_id: this.exp_id,
          opening_and_closing_hours: this.opening_and_closing_hours
        };
        Object.entries(data).forEach( o => (o[1] === null ? delete data[o[0]] : 0));
        this.$validator.validateAll().then(result => {
          if (result) {
            this.submitExperience(data)
                    .then(response => {
                      console.log(response);
                      this.$noty.success(`Expereince Posted sucecesfully - ${data.title}`);
                    })
                    .catch(err => {
                      console.log(err);
                    });
          } else {
            this.$noty.error("Oops, something went wrong!");
          }
        });
      // }

    },
    checkExperienceType(event) {
    	for(let i = 0; i < this.experience_types.length; i++) {
    		// console.log(this.experience_types)
    		if(this.experience_types[i]) {
    			if(this.experience_types[i].name == event.target.value) {
            this.experience_type_name = event.target.value;
    				this.exp_id = this.experience_types[i].id
	    			this.requiredFields = this.experience_types[i].experience_fields;
	    			// console.log(this.requiredFields)
	    		}	
    		}
    	}

    }
  },
  computed: {
    ...mapState(["experience_types"]),
    ...mapState(["isLoading"]),
    experience_type_placeholder () {

    }
  },
  created() {
    this.getExperienceTypes();
    console.log(this.experience_types);
  }
};
</script>
<style scoped>
label {
  font-size: 15px !important;
}
</style>
<style>
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
