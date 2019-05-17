<template>
  <div>
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
                            >
                              <!-- <option selected>Select</option> -->
                              <option
                                v-for="experience_type in experience_types"
                                :value="experience_type.id"
                                >{{ experience_type.name }}</option
                              >
                            </select>
                          </div>
                        </div>
                        <div v-if="experience_type == '22'" class="form-places">
                          <form @submit.prevent="submitFormExperience_22">
                            <div class="row">
                              <div class="form-group col-md-6">
                                <label>Title</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="Title"
                                  v-model="title_22"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>Address</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Address"
                                        v-model="address_22" />
                              </div>
                              <div class="form-group col-md-4">
                                <label>City</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder="City"
                                  v-model="city_22"
                                />
                              </div>
                              <div class="form-group col-md-4">
                                <label>State</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="State"
                                        v-model="state_22"
                                />
                              </div>
                              <div class="form-group col-md-4">
                                <label>Country</label>
                                <!-- <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Country"
                                        v-model="state_22"
                                /> -->
                                <country-select v-model="country" :country="country" countryName="true" topCountry="US" className="form-control new_experience_input" />
                              </div>
                              <div class="form-group col-md-6">
                                <label
                                  >Offerings on tour ( drinks, snacks,
                                  etc)</label
                                >
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="offerings_on_tour_22"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>Language</label>
                                <input type="text" name="language" id="inputState" class="form-control new_experience_input" v-model="language_22" placeholder="Language e.g English">
                                <!-- <select
                                  id="inputState"
                                  class="form-control new_experience_input"
                                  v-model="language_22"
                                >
                                  <option>English</option>
                                </select> -->
                              </div>
                              <!--<div class="form-group col-md-6">-->
                              <!--<label>Ratings</label>-->
                              <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="" >-->
                              <!--</div>-->
                              <div class="form-group col-md-6">
                                <label
                                  >Short descriptions of the experience</label
                                >
                                <textarea
                                  v-validate="'required'"
                                  cols="30"
                                  rows="10"
                                  class="form-control"
                                  v-model="
                                    short_description_of_the_experience_22
                                  "
                                ></textarea>
                              </div>
                              <!--<div class="form-group col-md-6">-->
                              <!--<label>Dates and time</label> <br>-->
                              <!--<date-picker v-validate="'required'" v-model="time" range :shortcuts="shortcuts" :lang="lang" input-class="form-control new_experience_input"></date-picker>-->
                              <!--&lt;!&ndash;<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="" >&ndash;&gt;-->
                              <!--</div>-->
                              <!--<div class="form-group col-md-6">-->
                              <!--<label>Written reviews</label>-->
                              <!--<textarea v-validate="'required'" cols="30" rows="10" class="form-control"></textarea>-->
                              <!--</div>-->
                              <div class="form-group col-md-6">
                                <label
                                  >Where they would meet up with clients with
                                  map</label
                                >
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="
                                    where_they_would_meet_up_with_client_22
                                  "
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>What tourists should bring along</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="what_tourists_should_bring_along_22"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>Itinerary for the experience</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="itenary_for_the_experience"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>Number that each tour can admit</label>
                                <input
                                  v-validate="'required'"
                                  type="text"
                                  class="form-control new_experience_input"
                                  placeholder=""
                                  v-model="number_that_each_tour_can_admit_22"
                                />
                              </div>

                              <div class="form-group col-md-6">
                                <div class="row">
                                  <div class="form-group col-md-4">
                                    <label>Price</label>
                                    <input
                                      v-validate="'required'"
                                      type="text"
                                      class="form-control new_experience_input"
                                      placeholder="in Dollars"
                                      v-model="price_in_dollars_22"
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
                                <!--<br>-->
                                <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="in Pounds">-->
                                <!--<br>-->
                                <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="in Dollars">-->
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
                        <div v-if="experience_type == '2'" class="form-places">

                          <form @submit.prevent="submitFormExperience_2">
                            <div class="row">
                              <div class="form-group col-md-6">
                                <label>Name of event</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Name of Event"
                                        v-model="name_of_event_2"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>Address</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Address"
                                        v-model="address_2"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>City</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="City"
                                        v-model="city_2"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>State</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="State"
                                        v-model="state_2"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label>Language</label>
                                <select
                                        id="inputState"
                                        class="form-control new_experience_input"
                                        v-model="language_2"
                                >
                                  <!-- <option selected>Select</option> -->
                                  <option>English</option>
                                </select>
                              </div>
                              <div class="form-group col-md-6">
                                <label>About event</label>
                                <textarea
                                        v-validate="'required'"
                                        cols="30"
                                        rows="10"
                                        class="form-control"
                                        v-model="about_event_2"
                                ></textarea>
                              </div>
                              <!--<div class="form-group col-md-12">-->
                              <!--<label>Picture</label>-->
                              <!--<p>Pic</p>-->
                              <!--</div>-->
                              <div class="form-group col-md-6">
                                <label>Location</label>
                                <input
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control new_experience_input"
                                        placeholder="Location"
                                        v-model="location_2"
                                />
                              </div>
                              <!--<div class="form-group col-md-6">-->
                                <!--<label>Email</label>-->
                                <!--<input-->
                                        <!--v-validate="'required'"-->
                                        <!--type="text"-->
                                        <!--class="form-control new_experience_input"-->
                                        <!--placeholder="Contact Email"-->
                                <!--/>-->
                              <!--</div>-->
                              <div class="form-group col-md-6">
                                <div class="row">
                                  <div class="form-group col-md-4">
                                    <label>Price</label>
                                    <input
                                            v-validate="'required'"
                                            type="text"
                                            class="form-control new_experience_input"
                                            placeholder="in Dollars"
                                            v-model="price_2"
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
                                <!--<br>-->
                                <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="in Pounds">-->
                                <!--<br>-->
                                <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="in Dollars">-->
                              </div>
                              <div class="col-md-12" style="text-align: center;">
                                <button
                                        type="submit"
                                        class="btn btn-lg submit_exp_btn"
                                        :disable="isLoading"
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
                            </div>
                          </form>
                        </div>

                        <!--<div class="form-group col-md-12">-->
                        <!--<select id="inputState" class="form-control new_experience_input">-->
                        <!--&lt;!&ndash; <option selected>Select</option> &ndash;&gt;-->
                        <!--<option v-for="experience_type in experience_types">{{ experience_type.name }}</option>-->
                        <!--</select>-->
                        <!--</div>-->
                        <!--<div class="form-group col-md-12">-->
                        <!--<label class="">City</label>-->
                        <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="City" v-model="city">-->
                        <!--</div>-->
                        <!--<div class="form-group col-md-12">-->
                        <!--<label class="">Location</label>-->
                        <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="" >-->
                        <!--</div>-->
                        <!--<div class="form-group col-md-12">-->
                        <!--<label class="">State</label>-->
                        <!--<input v-validate="'required'" type="text" class="form-control new_experience_input" placeholder="" >-->
                        <!--</div>-->
                        <!--<div class="form-group col-md-12">-->
                        <!--<label for="">Language</label>-->
                        <!--<select v-validate="'required'" id="inputState" class="form-control new_experience_input" v-model="language">-->
                        <!--&lt;!&ndash; <option selected>Select</option> &ndash;&gt;-->
                        <!--<option>English</option>-->
                        <!--</select>-->
                        <!--</div>-->
                        <!--<div class="form-group col-md-12">-->
                        <!--<label>Offerings</label>-->
                        <!--<textarea v-validate="'required'" cols="30" rows="10" class="form-control"></textarea>-->
                        <!--</div>-->
                        <!--<div class="form-group col-md-12">-->
                        <!--<div class="row">-->
                        <!--<div class="col-md-6"></div>-->
                        <!--<div class="col-md-6" style="text-align: right;">-->
                        <!--<button type="button" class="btn btn-lg submit_exp_btn" @click="inFormIndx">Next</button>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                      </div>
                      <!--<div class="form-index-2" v-if="form_index == 2">-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label for="">About the experience designer</label>-->
                      <!--<textarea-->
                      <!--v-validate="'required'"-->
                      <!--cols="30"-->
                      <!--rows="10"-->
                      <!--class="form-control"-->
                      <!--v-model="about_the_experiece_designer"-->
                      <!--&gt;</textarea>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label class=""-->
                      <!--&gt;Offerings on tour ( drinks, snacks, etc)</label-->
                      <!--&gt;-->
                      <!--<input-->
                      <!--v-validate="'required'"-->
                      <!--type="text"-->
                      <!--class="form-control new_experience_input"-->
                      <!--placeholder="Offerings on tour ( drinks, snacks, etc)"-->
                      <!--v-model="offerings_on_tour"-->
                      <!--/>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label for=""-->
                      <!--&gt;Short descriptions of the experience</label-->
                      <!--&gt;-->
                      <!--<textarea-->
                      <!--v-validate="'required'"-->
                      <!--cols="30"-->
                      <!--rows="10"-->
                      <!--class="form-control submit-exp-textarea"-->
                      <!--v-model="short_description_of_the_experience"-->
                      <!--&gt;</textarea>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label class=""-->
                      <!--&gt;Price in Naira, Dollars and Pounds</label-->
                      <!--&gt;-->
                      <!--<input-->
                      <!--v-validate="'required'"-->
                      <!--type="text"-->
                      <!--class="form-control new_experience_input"-->
                      <!--placeholder="$200,000"-->
                      <!--v-model="price_in_naira"-->
                      <!--/>-->
                      <!--</div>-->
                      <!--&lt;!&ndash; <div class="form-group col-md-12">-->
                      <!--<label for="">Pictures</label>-->
                      <!--<input type="file" class="form-control" name="" multiple="true">-->
                      <!--</div> &ndash;&gt;-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<div class="row">-->
                      <!--<div class="col-md-6" style="text-align: left;">-->
                      <!--<button-->
                      <!--type="button"-->
                      <!--class="btn btn-lg submit_exp_btn  prev_btn"-->
                      <!--@click="deFormIndx"-->
                      <!--&gt;-->
                      <!--< Back-->
                      <!--</button>-->
                      <!--</div>-->
                      <!--<div class="col-md-6" style="text-align: right;">-->
                      <!--<button-->
                      <!--type="button"-->
                      <!--class="btn btn-lg submit_exp_btn"-->
                      <!--@click="inFormIndx"-->
                      <!--&gt;-->
                      <!--Next-->
                      <!--</button>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--<div class="form-index-3" v-if="form_index == 3">-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label class=""-->
                      <!--&gt;Where they would meet up with clients with-->
                      <!--map</label-->
                      <!--&gt;-->
                      <!--<input-->
                      <!--v-validate="'required'"-->
                      <!--type="text"-->
                      <!--class="form-control new_experience_input"-->
                      <!--v-model="meet_up"-->
                      <!--placeholder="Where they would meet up with clients with map"-->
                      <!--/>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label class=""-->
                      <!--&gt;What tourists should bring along</label-->
                      <!--&gt;-->
                      <!--<input-->
                      <!--v-validate="'required'"-->
                      <!--type="text"-->
                      <!--class="form-control new_experience_input"-->
                      <!--v-model="what_tourists_should_bring_along"-->
                      <!--placeholder="What tourists should bring along"-->
                      <!--/>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label class="">Itinerary for the experience</label>-->
                      <!--<input-->
                      <!--v-validate="'required'"-->
                      <!--type="text"-->
                      <!--class="form-control new_experience_input"-->
                      <!--placeholder="Itinerary for the experience"-->
                      <!--v-model="itinerary_for_the_experience"-->
                      <!--/>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<label class=""-->
                      <!--&gt;Number that each tour can admit</label-->
                      <!--&gt;-->
                      <!--<input-->
                      <!--v-validate="'required'"-->
                      <!--type="text"-->
                      <!--class="form-control new_experience_input"-->
                      <!--placeholder="Number that each tour can admit"-->
                      <!--v-model="number_that_each_tour_can_admit"-->
                      <!--/>-->
                      <!--</div>-->
                      <!--<div class="form-group col-md-12">-->
                      <!--<div class="row">-->
                      <!--<div class="col-md-6" style="text-align: left;">-->
                      <!--<button-->
                      <!--v-validate="'required'"-->
                      <!--type="button"-->
                      <!--class="btn btn-lg submit_exp_btn  prev_btn"-->
                      <!--@click="deFormIndx"-->
                      <!--&gt;-->
                      <!--< Back-->
                      <!--</button>-->
                      <!--</div>-->
                      <!--<div class="col-md-6" style="text-align: right;">-->
                      <!--<button-->
                      <!--type="submit"-->
                      <!--class="btn btn-lg submit_exp_btn"-->
                      <!--&gt;-->
                      <!--Submit-->
                      <!--</button>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->
                      <!--</div>-->
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
                    <!-- <div class="uploaded_image">
				    						
				    					</div> -->
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
    next();
  },
  data() {
    return {
      city_22: null,
      offerings_on_tour_22: null,
      language_22: null,
      short_description_of_the_experience_22: null,
      where_they_would_meet_up_with_client_22: null,
      what_tourists_should_bring_along_22: null,
      itenary_for_the_experience: null,
      number_that_each_tour_can_admit_22: null,
      price_in_dollars_22: null,
      address_22: null,
      state_22: null,
      form_index: 1,
      experience_type: null,
      title_22: null,
      name_of_event_2: null,
      city_2: null,
      language_2: null,
      about_event_2: null,
      location_2: null,
      price_2: null,
      address_2: null,
      state_2: null,
      country: '',
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
    submitFormExperience_22: function() {
      // if (this.experience_type == 22) {
        // let start_date = this.formatDate(this.time[0])
        // let end_date = this.formatDate(this.time[1])
        let data = {
          slug: "something-something",
          title: this.title_22,
          city: this.city_22,
          offerings: this.offerings_on_tour_22,
          language: this.language_22,
          description: this.short_description_of_the_experience_22,
          meetup_location: this.where_they_would_meet_up_with_client_22,
          tourist_expected_items: this.what_tourists_should_bring_along_22,
          itenary: this.itenary_for_the_experience,
          number_admittable: this.number_that_each_tour_can_admit_22,
          dollar_price: this.price_in_dollars_22,
          experiences_type_id: this.experience_type,
          contact_email: this.$store.state.auth.user.email,
          merchant_id: this.$store.state.auth.user.id,
          location: this.address_22,
          state: this.state_22,
        };

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
    submitFormExperience_2() {
      let data = {
        slug: "something-something",
        title: this.name_of_event_2,
        city: this.city_2,
        language: this.language_2,
        description: this.about_event_2,
        location: this.location_2,
        dollar_price: this.price_2,
        experiences_type_id: this.experience_type,
        contact_email: this.$store.state.auth.user.email,
        merchant_id: this.$store.state.auth.user.id,
        location: this.address_2,
        state: this.state_2,
      };

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
    }
  },
  computed: {
    ...mapState(["experience_types"]),
    ...mapState(["isLoading"])
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
