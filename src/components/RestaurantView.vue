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
                        DAY TRIP | {{ restaurant.location }}
                    </h3>
                    <h1>{{ restaurant.name }}</h1>
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                        {{ restaurant.description  }}
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
                <div class="col-lg-5" style="padding-left: 80px;">
                    <div class="travv-sidebar">
                        <div class="row sidebar_text">
                            <div class="col-md-12">
                                <h3>Location</h3>
                                <h5>{{ restaurant.location }}</h5>
                            </div>
                            <div class="col-md-12">
                                <h3>Duration</h3>
                                <h5>36 hours</h5>
                            </div>
                            <div class="col-md-12">
                                <h3>Cost</h3>
                                <h5>$ {{ restaurant.price_from }} - $ {{ restaurant.price_to }}</h5>
                            </div>
                            <div class="col-md-12">
                                <h3>Payment Covers</h3>
                                <h5>Transportation and Feeding</h5>
                            </div>
                            <div class="col-md-12">
                                <h3>Language</h3>
                                <h5>English</h5>
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
    import { mapState, mapActions, mapGetters } from 'vuex';

    export default {
        name: 'RestaurantView',
        components: {
            Navbar
        },
        methods: {
            ...mapActions(['getRestaurantById']),
        },
        computed: {
            ...mapState(['restaurant']),
        },
        created: function(){
            this.getRestaurantById(this.$route.params['id']);
        }
    }
</script>

<style>
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
        margin-top: 100px;
        height: 518px !important;
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
    .travv-sidebar{
        background: #000;
        widows: 100%;
        width: 100%;
        height: 475px;
        padding: 61px 0 0 50px;
    }
    .travv-sidebar_text h3{
        font-family: MuseoSans500 !important;
        font-size: 20px;
        /* font-weight: bolder; */
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: normal;
        color: #f81894;
    }
    .travv-sidebar_text h5 {
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
        width: 170px;
        height: 100%;
        color: #000;
        padding: 11px 0 11px 29px;
        transition: width .4s linear;
        font-size: 20px;
        margin-left: 5px;
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