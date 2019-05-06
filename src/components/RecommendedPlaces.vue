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
                        DAY TRIP | {{ experience.state }}
                    </h3>
                    <h1>{{ experience.city }}</h1>
                    <h5>{{ experience.city }}</h5>
                    <p>
                        {{ experience.description }}
                    </p>
                    <h5>Why do we use it?</h5>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it
                        look like readable English. Many desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many
                        web sites still in their infancy. Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
                <div class="col-lg-5 sidebar-pd">
                    <div class="travv-sidebar" style="height: 575px;">
                        <div class="container">
                            <div class="row sidebar_text">
                                <div class="col-md-12">
                                    <h3>Location</h3>
                                    <h5>{{ experience.state }}</h5>
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
                                    <h5>Transportation and Feeding</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3>Language</h3>
                                    <h5>English</h5>
                                </div>
                                <div class="col-md-12">
                                    <h3 style="margin-bottom: 10px;">Book</h3>
                                    
                                    <form @submit.prevent="bookExperience">
                                        <!-- <p>Start Date <input id="datepicker" v-model="start_date" type="date" width="276" /> -->
                                        <date-picker v-model="time" range :shortcuts="shortcuts" :lang="lang"></date-picker>
                                        <!-- <p>End Date <input id="datepicker2" v-model="end_date" type="date" width="276" /></p> -->
                                        <br>
                                        <div class="row">
                                            <div class="col-md-10" style="text-align: center;">
                                                <button type="submit" class="book_btn">Book Now</button>
                                            </div>
                                        </div>
                                        <!-- <date-picker v-model="time1" :first-day-of-week="1"></date-picker> -->
                                    </form>
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
                            <h5>Based on 450 ratings</h5>
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
                                            <!-- <div class="col-4">
                                                <div class="guest_review_cont">
                                                    <h4>Great</h4>
                                                    <p>good quality stickers</p>
                                                </div>
                                            </div> -->
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
        name: 'ExperienceView',
        data() {
            return {
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
            ...mapActions(['getExperienceById']),
            ...mapActions(['bookingExperience']),
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
            }
        },
        computed: {
            ...mapState(['experience']),
            ...mapState(['isLoading']),
            ...mapState(['auth']),
            loading() {
                // return
            }
        },
        created: function () {
            this.getExperienceById(this.$route.params['id']);
        }
    }
</script>
