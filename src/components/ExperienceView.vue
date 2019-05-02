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
                    <h5>{{ experience.title }}</h5>
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
        <!-- <div class="digital_feature blog_part">
            <div class="row">
                <div class="col-md-12 review_content">
                    <h4>
                        Guest Reviews
                    </h4>
                </div>
                <div class="col-md-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="guest_review">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="guest_review_pic">

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="review_name">Christopher Acebo</p>
                                                    <p class="review_date">Jan 31, 2016</p>
                                                    <p class="review_rev">* 1 Review</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="guest_review_cont">
                                                <h4>Great</h4>
                                                <p>good quality stickers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="guest_review">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="guest_review_pic">

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="review_name">Christopher Acebo</p>
                                                    <p class="review_date">Jan 31, 2016</p>
                                                    <p class="review_rev">* 1 Review</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="guest_review_cont">
                                                <h4>Great</h4>
                                                <p>good quality stickers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="guest_review">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="guest_review_pic">

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="review_name">Christopher Acebo</p>
                                                    <p class="review_date">Jan 31, 2016</p>
                                                    <p class="review_rev">* 1 Review</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="guest_review_cont">
                                                <h4>Great</h4>
                                                <p>good quality stickers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="guest_review_for_mobile">
                        <div class="row">
                            <div class="col-3">
                                <div class="guest_review_pic"></div>
                            </div>
                            <div class="col-3">
                                <p class="review_name">Christopher Acebo</p>
                                <p class="review_date">Jan 31, 2016</p>
                                <p class="review_rev">* 1 Review</p>
                            </div>
                            <div class="col-4">
                                <div class="guest_review_cont">
                                    <h4>Great</h4>
                                    <p>good quality stickers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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

<style>
  @media only screen and (max-width: 576px) {
    .project_area {
        margin: 121px 10px 42px 10px !important;
    }
    .digital_feature.blog_part {
        margin: 0px 10px 42px 10px !important;
        color: #555 !important;
    }
    .sidebar-pd{
        padding-left: 0 !important;
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
  }
    .average_review_section h2 {
        font-weight: bolder;
    }
    .average_review_section h5 {
        color: #776d6d;
        font-weight: bolder;
    }
    .gst_review_content h2 {
        font-weight: bolder;
    }
    .progress {
        height: 1.5rem;
    }
    .guest_review_for_mobile{
        display: none;
    }
    .sidebar-pd{
        padding-left: 80px;
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
        margin-top: 121px;
        height: 518px !important;
        margin: 121px 88px 42px 88px;
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
        background: #000;
        widows: 100%;
        width: 100%;
        height: 475px;
        padding: 61px 0 0 25px;
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
        font-size: 16px !important;
        font-weight: bold;
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
        background-size: cover;
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
        margin-top: 24px;
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
</style>