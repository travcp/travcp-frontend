<template>
    <div class="home">
        <Navbar>
            <div class="searchbar" slot="search">
                <span class="searchbar" style="color: #f81894;">
                    <input class="search_input" type="text" placeholder="Search" />
                    <a href="javascript:void(0)" class="search_icon">
                        <img src="../assets/icons8-search.svg" />
                    </a>
                </span>
            </div>
        </Navbar>
        <section class="project_area nagoya" style="">
            <div class="container">
            </div>
        </section>
        <div class="digital_feature blog_part">
            <div class="row">
                <div class="col-lg-7 blog_content">
                    <h3>
                        DAY TRIP | {{ event.state }}
                    </h3>
                    <!-- <h1>{{ experience.city }}</h1> -->
                    <h5>{{ event.title }}</h5>
                    <p>
                        {{ event.description }}
                    </p>
                    <h5>About Merchant</h5>
                    <p>
                        {{ event.about_merchant }}
                    </p>
                    <br>
                    <h6>Rate the Experience</h6> <br>
                    <form  @submit.prevent="rateExperienceSubmit">
                        <div class="col-md-6">
                            <div id="reviewStars-input" @click="toggleRatingBox">
                                <input id="star-4" value="1" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="gorgeous" for="star-4"></label>

                                <input id="star-3" value="2" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="good" for="star-3"></label>

                                <input id="star-2" value="3" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="regular" for="star-2"></label>

                                <input id="star-1" value="4" v-model="reviewStar" type="radio" name="reviewStars"/>
                                <label title="poor" for="star-1"></label>

                                <input id="star-0" value="5" v-model="reviewStar" type="radio" name="reviewStars"/>
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
                <div class="col-lg-5 sidebar-pd">
                    <div class="travv-sidebar" style="padding: 41px 0 0 50px;">
                        <div class="container">
                            <div class="row sidebar_text">
                                <div class="col-md-12">
                                    <h3>Location</h3>
                                    <h5>{{ event.city }}</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Duration</h3>
                                    <h5>36 hours</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Language</h3>
                                    <h5>English</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Cost</h3>
                                    <h5>$ {{ event.price_from }} - $ {{ event.price_to }}</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Payment Covers</h3>
                                    <h5>Transportation and Feeding</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Language</h3>
                                    <h5>{{ event.language }}</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="average_review_section">
                            <h2>Average Rating</h2>
                            <h5>Based on 1351 ratings</h5>
                            <br>
                            <div class="row">
                                <div class="col-2"><p class="star_range">5-star</p></div>
                                <div class="col-8">
                                    <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 55%;background-color: #f81894;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">456</p>
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
                                    <p class="star_range">621</p>
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
                                    <p class="star_range">159</p>
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
                                    <p class="star_range">84</p>
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
                                    <p class="star_range">21</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="gst_review_content">
                            <h2>Reviews</h2>
                            <br>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="guest_review_">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="guest_review_pic"></div>
                                            </div>
                                            <div class="col-6">
                                                <p class="review_name">Barbara Cox</p>
                                                <p class="review_rev">* * * * * *</p>
                                                <p class="review_date">It is a long established fact that a reader will be distracted by the readable content</p>
                                            </div>

                                        </div>
                                    </div>
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
    import Navbar from '@/components/Navbar.vue';
    import DatePicker from 'vue2-datepicker';

    import {
        mapState,
        mapActions,
        mapGetters
    } from 'vuex';

    // import Datepicker from 'vuejs-datepicker';
    // import format from 'date-fns/format'

    export default {
        name: 'EventsView',
        data() {
            return {
                rate_this_exp_text: "",
                reviewStar: null,
                toggleRating: false,
                start_date: '4/12/2019',
                end_date: '6/12/2019',
                dateFormat: 'D MMM',
                dateOne: '',
                dateTwo: '',
                time: '',
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
                timePickerOptions:{
                    start: '00:00',
                    step: '00:30',
                    end: '23:30'
                }
            }
        },
        components: {
            Navbar,
            DatePicker
            // vuejsDatepicker
        },
        methods: {
            ...mapActions(['getEventsById']),
            ...mapActions(['bookingExperience']),
            ...mapActions(['rateExperience']),
            rateExperienceSubmit(){
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
                } 
            },
            bookExperience: function () {
                if(this.auth) {
                    let data = {
                        experience_id: this.$route.params.id,
                        start_date: this.formatDate(this.time[0]),
                        end_date: this.formatDate(this.time[1])
                    };
                    // console.log(this.formatDate(this.time[0]));
                    this.bookingExperience(data);
                    this.$noty.success("Experience is Booked Succesfully")
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
                this.toggleRating = true;
            }
        },
        computed: {
            ...mapState(['event']),
            ...mapState(['isLoading']),
            ...mapState(['auth']),
            loading() {
                // return
            }
        },
        created: function () {
            this.getEventsById(this.$route.params['id']);
        }
    }
</script>
