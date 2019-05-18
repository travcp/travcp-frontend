<template>
    <div class="ExperienceView">
        <vue-headful
            title="Experience | TravvApp"
            description="Description from travvApp"
        />
        <Navbar></Navbar>
        <section class="project_area nagoya" style="">
            <div class="container">
            </div>
        </section>
        <div class="digital_feature blog_part">
            <div class="row">
                <div class="col-lg-7" style="text-align: center;" v-if="isLoading">
                    <Circle9 />
                </div>
                <div class="col-sm-6 col-md-7 col-lg-8 blog_content" v-else>
                    <h3>
                        DAY TRIP | {{ experience.state }}
                    </h3>
                    <h1>{{ experience.city }}</h1>
                    <h5>{{ experience.title }}</h5>
                    <p>
                        {{ experience.description }}
                    </p>
                    <h5>About Merchant</h5>
                    <p>
                        {{ experience.about_merchant }}
                    </p>
                    <br>
                    <h6 style="margin-left:20px;"><b>Rate the Experience</b></h6> <br>
                    <form  @submit.prevent="rateExperienceSubmit">
                        <div class="col-md-12">
                            <div id="reviewStars-input" @click="toggleRatingBox">
                                <input id="star-4" value="5" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="gorgeous" for="star-4"></label>

                                <input id="star-3" value="4" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="good" for="star-3"></label>

                                <input id="star-2" value="3" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="regular" for="star-2"></label>

                                <input id="star-1" value="2" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="poor" for="star-1"></label>

                                <input id="star-0" value="1" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="bad" for="star-0"></label>
                            </div><br><br>
                        </div>
                        <div class="form-group col-md-6" v-if="toggleRating">
                            <h6>Rate this Experience</h6>
                            <!-- <label>Rate this Experience</label> -->
                            <input type="text" class="form-control edit-prof-input" v-model="rate_this_exp_text">
                            <button type="submit" class="book_btn">Rate</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 sidebar-pd">
                    <div class="travv-sidebar" style="height: auto;">
                        <div class="container">
                            <div class="row sidebar_text">
                                <div class="col-md-12">
                                    <h3>Experience Type</h3>
                                    <h5 v-for="experience_type in experience_types" v-if="experience_type.id == experience.experiences_type_id">
                                        {{ experience_type.name }}
                                    </h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>City</h3>
                                    <h5>{{ experience.city }}</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Duration</h3>
                                    <h5>36 hours</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Cost</h3>
                                    <h5>$ {{ experience.dollar_price }}</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Payment Covers</h3>
                                    <h5>{{ experience.offerings }}</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Language</h3>
                                    <h5>{{ experience.language }}</h5>
                                </div>
                                <div class="col-md-12 booking-action">
                                    <form @submit.prevent="bookExperience" v-if="!checkBookingStatus">
                                        <h3 class="d-none d-sm-block">Book</h3>
                                        <date-picker v-validate="'required'" v-model="time" range :shortcuts="shortcuts" :lang="lang"></date-picker>
                                        <!-- <p>Start Date <input id="datepicker" v-model="start_date" type="date" width="276" /> -->
                                        <!-- <date-picker v-model="time" range :shortcuts="shortcuts" :lang="lang"></date-picker> -->
                                        <!-- <p>End Date <input id="datepicker2" v-model="end_date" type="date" width="276" /></p> -->
                                        <div class="row">
                                            <div class="col-md-12" style="text-align: center;">
                                                <button type="submit" class="book_btn">
                                                    <span v-if="isLoading || loading">
                                                        <img style="height: 20px;" src="../assets/loader_rolling.gif" />
                                                    </span>
                                                    <span v-else>
                                                        Book Now
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                        <!-- <date-picker v-model="time1" :first-day-of-week="1"></date-picker> -->
                                    </form>
                                    <div class="book_btn" style="padding-top: 10px;text-align: center;" v-else>
                                        Booked
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="average_review_section">
                            <h2>Average Rating</h2>
                            <h5>Based on {{ reviews.meta ? reviews.meta.total : 0}} ratings</h5>
                            <br>
                            <div class="row">
                                <div class="col-2"><p class="star_range">5-star</p></div>
                                <div class="col-8">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 55%;background-color: #f81894;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings[5] }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">4-star</p></div>
                                <div class="col-8">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 75%;background-color: #f81894;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings[4] }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">3-star</p></div>
                                <div class="col-8">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 35%;background-color: #f81894;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings[3] }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">2-star</p></div>
                                <div class="col-8">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 25%;background-color: #f81894;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings[2] }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">1-star</p></div>
                                <div class="col-8">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 15%;background-color: #f81894;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings[1] }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>

                    <div class="col-md-6">
                        <div class="gst_review_content">
                            <h2>Reviews</h2>
                            <br>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="guest_review_" v-for="review in experience.reviews">
                                        <div class="row">
                                            <div class="col-2" style="text-align: center;">
                                                <img src="../assets/profile_2.png" class="rounded-circle" style="height: 50px;display: inline-block;">
                                            </div>
                                            <div class="col-8">
                                                <p class="review_name">{{ review.user_name }}</p>
                                                <p class="review_rev">
                                                    <img v-for="i in review.rating" src="../assets/review-icon.svg" alt="Review icon" style="height: 28px;">
                                                </p>
                                                <br>
                                                <p class="review_date">{{ review.review_body }}</p>
                                            </div>
                                            <!-- <div class="col-4">
                                                <div class="guest_review_cont">
                                                    <h4>Great</h4>
                                                    <p>good quality stickers</p>
                                                </div>
                                            </div> -->
                                        </div> <br>
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
    import Navbar from '@/components/Navbar.vue';
    import DatePicker from 'vue2-datepicker';
    import Footer from '@/components/Footer.vue';
    import axios from 'axios'
    import { Circle9 } from 'vue-loading-spinner'
    import {
        mapState,
        mapActions,
        mapGetters
    } from 'vuex';

    // import Datepicker from 'vuejs-datepicker';
    // import format from 'date-fns/format'

    export default {
        name: 'ExperienceView',
        data() {
            return {
                ratings: [],
                rate_this_exp_text: "",
                start_date: '4/12/2019',
                end_date: '6/12/2019',
                dateFormat: 'D MMM',
                dateOne: '',
                dateTwo: '',
                time: '',
                star_5: 0,
                star_5_people: 0,
                star_4: 0,
                star_4_people: 0,
                star_3: 0,
                star_3_people: 0,
                star_2: 0,
                star_2_people: 0,
                star_1: 0,
                star_1_people: 0,
                reviewStar: null,
                toggleRating: false,
                loading: false,
                checkBookingStatus: null,
                reviews: [],
                // custom lang
                lang: {
                    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
                    placeholder: {
                    date: 'Select Date',
                    dateRange: 'Select Date Range'
                    }
                },
                // custom range shortcuts
                shortcuts: [
                    {
                        text: 'Today',
                        onClick: () => {
                            this.time3 = [ new Date(), new Date() ]
                        }
                    }
                ],
                timePickerOptions: {
                    start: '00:00',
                    step: '00:30',
                    end: '23:30'
                }
            }
        },
        components: {
            Navbar,
            DatePicker,
            Circle9
            // vuejsDatepicker
        },
        methods: {
            ...mapActions(['getExperienceById']),
            ...mapActions(['bookingExperience']),
            ...mapActions(['rateExperience']),
            ...mapActions(['getMyBookings']),
            ...mapActions(['getExperienceTypes']),
            rateExperienceSubmit(){
                if(this.auth) {
                    if (this.toggleRating) {
                        // user_id
                        // experience_id
                        // review_body
                        this.rateExperience({
                            "user_id": this.auth.user.id,
                            "experience_id": this.experience.id,
                            "review_body": this.rate_this_exp_text
                        });
                        this.$noty.success("Review is Successfull")
                        this.toggleRating = false;
                        this.rate_this_exp_text = ""
                        this.getExperienceById(this.$route.params['id']);
                    } 
                } else {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                }
                
            },
            bookExperience: function () {
                if(this.auth) {
                    if (this.time[0]) {
                        let data = {
                            food_menu_ids: ["2", "3", "4"],
                            price: this.experience.naira_price,
                            merchant_id: this.experience.merchant_id,
                            user_id: this.auth.user.id,
                            experience_id: this.$route.params.id,
                            start_date: this.formatDate(this.time[0]),
                            end_date: this.formatDate(this.time[1])
                        };
                        // console.log(this.formatDate(this.time[0]));
                        this.bookingExperience(data);
                        this.checkIfBooked()
                        this.$noty.success("Experience is Booked Succesfully")
                    } else {
                        this.$noty.error("Please enter a check in and check out date");
                    }

                } else {
                    this.$noty.error("Oops, You need to Login to Book and Experience");
                }
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
            toggleRatingBox(){
                if(this.auth) {
                    this.toggleRating = true;
                } else {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                }
            },
            ratingInfo() {
                this.loading = true;
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                };
                axios.get(`${this.$store.state.API_BASE}/experiences/${this.$route.params.id}/reviews`, requestHeaders).then(response => {
                    
                    this.ratings = response.data.rating_info
                    this.loading = false;
                    this.reviews = response.data;
                }).catch(err => {
                    console.log(err.data);
                });
            },
            checkIfBooked () {
                this.loading = true;
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                };
                axios.post(`${this.$store.state.API_BASE}/bookings/exists`,{
                    experience_id: this.$route.params.id,
                    user_id: this.$store.state.auth.user.id,
                }, requestHeaders).then(response => {
                    
                    this.checkBookingStatus = response.data[0]
                    this.loading = false;
                }).catch(err => {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                })
            }
        },
        computed: {
            ...mapState(["experience_types"]),
            ...mapState(['experience']),
            ...mapState(['isLoading']),
            ...mapState(['auth']),
            ...mapState(['bookings'])

        },
        created: function () {
            
            this.getExperienceById(this.$route.params['id']);
            
            this.getMyBookings();
            this.bookings.forEach(book => {
                // console.log(book);
            })
            
            this.ratingInfo()
            this.getExperienceTypes();
            this.checkIfBooked()
        }
    }
</script>

<style>
@media only screen and (max-width: 576px) {
    .project_area {
        margin: 10px 10px 42px 10px !important;
    }
    .digital_feature.blog_part {
        margin: 0px 10px 42px 10px !important;
        color: #555 !important;
    }
    .sidebar-pd{
        /* padding-left: 0 !important; */
    }
    .guest_review {
        display: none;
    }
    .guest_review_for_mobile {
        display: block !important;
        border-top: 2px solid #eee;
        height: 150px;
        padding-top: 20px;
    }
    .booking-action{
        position:fixed;
        bottom:0;
        background:white;
        z-index:1000;
        width:100%;
        margin:unset;
        padding-top:15px;
        padding-bottom:15px;
        padding-right:10px;
        padding-left:10px;
        left:0;
        right:0;
        border-top:2px solid rgb(235, 235, 235);
    }
    .booking-action button.book_btn{
        padding: 10px 15px;
        width: auto;
        font-size: 14px;
    }
    .booking-action .mx-datepicker.mx-datepicker-range {
        width: 100%;
    }
    .nagoya{
        max-height:200px;
        /* background-size:100% 100%; */
        height:200px;
    }
}
.average_review_section h2 {
    font-weight: bolder;
    font-size: 1.5rem;
}
.average_review_section h5 {
    color: #776d6d;
    font-weight: bolder;
    font-size: 1rem
}
.gst_review_content h2 {
    font-weight: bolder;
    font-size: 1.5rem;
}
.star_range {
    font-size: 1.1rem;
    font-weight: bolder;
    margin-bottom: 5px;
}
.progress {
    height: 2.5rem;
}
.guest_review_for_mobile{
    display: none;
}
/* .sidebar-pd{
    padding-left: 80px;
} */
.navbar-brand {
    color: #555 !important;
}

.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}

.navbar-brand {
    color: #555 !important;
}

.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}

.project_area {
    height: 400px !important;
    margin: 10px 88px 42px 88px;
    margin-bottom: 57px;
}

.cover_image {
    width: 100%;
}

.nagoya {
    background: url('../assets/nagoya.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.project_area:before {
    background: none;
}

.digital_feature.blog_part {
    margin: 0px 88px 42px 88px;
    color: #555 !important;
}

.blog_content h1 {
    font-family: MuseoSans700 !important;
    font-size: 40px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
    margin-top: 5px;
    margin-bottom: 47px;
}

.blog_content h3 {
    font-family: MuseoSans700 !important;
    font-size: 18px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
}

.blog_content h5 {
    font-family: MuseoSans500 !important;
    font-size: 24px;
    /* font-weight: 500; */
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 40px;
}

.blog_content p {
    /* font-family: MuseoSans700 !important; */
    font-size: 20px;
    /* font-weight: 500; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 40px;
}

.travv-sidebar {
    border: 1px solid rgb(238, 230, 230);
    background: #FFF !important;
    width: 100%;
    height: 475px;
    padding: 30px 0 30px 25px !important;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.2);
}

.travv-sidebar_text h3 {
    font-family: MuseoSans500 !important;
    font-size: 18px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #f81894;
}

.travv-sidebar_text h5 {
    font-family: MuseoSans500 !important;
    font-size: 16px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #555 !important;
    margin-bottom: 24px;
}

.searchbar {
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
}

.search_input,
.searchbar>.search_input {
    width: 255px;
    height: 100%;
    color: #000;
    padding: 11px 0 11px 29px;
    transition: width .4s linear;
    font-size: 20px;
    margin-left: 25px;
    border-radius: 8px;
    border: solid 1px #979797;
    border-radius: 8px 0 0 8px;
}

.search_input {
    color: #fff;
    border: 0;
    outline: 0;
    background: 0 0;
    caret-color: #000;
}

/* .searchbar>.search_input {
    caret-color: red
} */

input.search_input::placeholder {
    color: #555;
}

input::-webkit-calendar-picker-indicator {
    display: none
}

.searchbar>.search_icon {
    background: #f81894;
    width: 59px;
    height: 47px;
    border-radius: 0 8px 8px 0;
}

.search_icon {
    height: 100%;
    width: 78px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: none
}

.review_content h4 {
    font-family: MuseoSans500 !important;
    font-size: 35px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 49px;
}

.guest_review {
    border-top: 2px solid #eee;
    height: 150px;
    padding-top: 20px;
}

.guest_review_cont h4 {
    font-family: MuseoSans500 !important;
    font-size: 18px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 30px;
}

.guest_review_cont p {
    font-family: MuseoSans !important;
    font-size: 13px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
}

.review_name {
    font-family: MuseoSans !important;
    font-size: 16px !important;
    font-weight: 100;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 15px;
}

.review_date {
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
    margin-bottom: 15px;
}

.review_rev {
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
}
.guest_review_pic{
    width: 100%;
    height: 120px;
    background: url('../assets/avatar.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
@media only screen and (max-width: 576px) {
    .project_area {
        margin: 121px 10px 42px 10px;
    }
    .digital_feature.blog_part {
        margin: 0px 10px 42px 10px;
        color: #555 !important;
    }
}
.mx-datepicker.mx-datepicker-range {
    width: 250px;
}
.book_btn {
    margin-top: 14px;
    background: #F81894;
    border: none;        
    font-family: MuseoSans700;
    font-size: 16px;
    width: 130px;
    height: 45px;
    border-radius: 8px;
    background-color: #f81894;
    color: #FFF;
    cursor: pointer;
}
#reviewStars-input input:checked ~ label, #reviewStars-input label, #reviewStars-input label:hover, #reviewStars-input label:hover ~ label {
  background: url('http://positivecrash.com/wp-content/uploads/ico-s71a7fdede6.png') no-repeat;
}

#reviewStars-input {
  
  /*fix floating problems*/
  overflow: hidden;
  *zoom: 1;
  /*end of fix floating problems*/
  
  position: relative;
  float: left;
}

#reviewStars-input input {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  
  width: 43px;
  height: 40px;
  
  position: absolute;
  top: 0;
  z-index: 0;
}

#reviewStars-input input:checked ~ label {
  background-position: 0 -40px;
  height: 40px;
  width: 43px;
}

#reviewStars-input label {
  background-position: 0 0;
  height: 40px;
  width: 43px;
  float: right;
  cursor: pointer;
  margin-right: 10px;
  
  position: relative;
  z-index: 1;
}

#reviewStars-input label:hover, #reviewStars-input label:hover ~ label {
  background-position: 0 -40px;
  height: 40px;
  width: 43px;
}

#reviewStars-input #star-0 {
  left: 0px;
}
#reviewStars-input #star-1 {
  left: 53px;
}
#reviewStars-input #star-2 {
  left: 106px;
}
#reviewStars-input #star-3 {
  left: 159px;
}
#reviewStars-input #star-4 {
  left: 212px;
}
#reviewStars-input #star-5 {
  left: 265px;
}
.sidebar_text h5{
    color: #555 !important;
}
.sidebar_text h5 {
  /*font-family: MuseoSans500 !important;*/
  font-size: 16px !important;
}
.navbar-brand {
    color: #555 !important;
}
.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}
.navbar-brand {
    color: #555 !important;
}

.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}

.project_area {
    margin-top: 0;
    height: 400px !important;
    margin: 0px 88px 42px 88px;
    margin-bottom: 57px;
}

.cover_image {
    width: 100%;
}

.nagoya {
    background: url('../assets/nagoya.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.project_area:before {
    background: none;
}

.digital_feature.blog_part {
    margin: 0px 88px 42px 88px;
    color: #555 !important;
}
.blog_content h1{
    font-family: MuseoSans700 !important;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
    margin-top: 5px;
    margin-bottom: 47px;
}
.blog_content h3 {
    font-family: MuseoSans700 !important;
    font-size: 22px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
}
.blog_content h5 {
    font-family: MuseoSans500 !important;
    font-size: 25px;
    /* font-weight: 500; */
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 40px;
}
.blog_content p {
    /* font-family: MuseoSans700 !important; */
    font-size: 20px;
    /* font-weight: 500; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 40px;
}
.sidebar{
    background: #000;
    widows: 100%;
    width: 100%;
    height: 475px;
    padding: 61px 0 0 50px;
}
.sidebar_text h3{
    font-family: MuseoSans500 !important;
    font-size: 20px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #f81894;
}
.sidebar_text h5 {
    font-family: MuseoSans500 !important;
    font-size: 20px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 24px;
}
.searchbar {
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
}

.search_input,
.searchbar>.search_input {
    width: 300px;
    height: 100%;
    color: #000;
    padding: 11px 0 11px 29px;
    transition: width .4s linear;
    font-size: 20px;
    margin-left: 25px;
    border-radius: 8px;
    border: solid 1px #979797;
    border-radius: 8px 0 0 8px;
}

.search_input {
    color: #fff;
    border: 0;
    outline: 0;
    background: 0 0;
    caret-color: #000;
}

/* .searchbar>.search_input {
    caret-color: red
} */

input.search_input::placeholder {
    color: #555;
}

input::-webkit-calendar-picker-indicator {
    display: none
}

.searchbar>.search_icon {
    background: #f81894;
    width: 59px;
    height: 47px;
    border-radius: 0 8px 8px 0;
}

.search_icon {
    height: 100%;
    width: 78px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: none
}
.review_content h4 {
    font-family: MuseoSans500 !important;
    font-size: 45px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 49px;
}
.guest_review{
    border-top: 2px solid #eee;
    height: 150px;
    padding-top: 20px;
}
.guest_review_cont h4 {
    font-family: MuseoSans500 !important;
    font-size: 18px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 30px;
}
.guest_review_cont p {
    font-family: MuseoSans !important;
    font-size: 13px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
}
.review_name{
    font-family: MuseoSans900 !important;
    font-size: 12px;
    font-weight: bolder;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 15px;
}
.review_date{
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
    margin-bottom: 15px;
}
.review_rev{
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
}
.guest_review_pic{
    width: 100%;
    height: 120px;
    background: url('../assets/avatar.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>