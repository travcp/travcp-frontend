<template>
    <div class="ExpereinceSearchResults">
        <Navbar />
        <section class="filter_area" style="">
            <div class="container">
                <div class="project_inner">
                    <form @submit.prevent="filterExperience">
                        <div class="row">
                            <div class="col-md-2">
                                <button class="btn filter_btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="../assets/Icons/filter_(active).svg" style="height: 25px;" />
                                    Filter
                                </button>
                                <div class="dropdown-menu" @click="stopProp" aria-labelledby="dropdownMenuButton">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="travv_drop_filter_section">
                                                    <h3>Type</h3>
                                                    <p v-for="(type, index) in experience_types" :key="index">
                                                        <input v-model="selected_types" type="checkbox" :name="type.name" :value="type.id">
                                                        <label :value="type.name" :for="type.name">{{type.name}}</label>
                                                    </p>
                                                    <!-- <h3>Category</h3>
                                                    <p>
                                                        <input v-model="tour_and_experiences" type="checkbox">Tours
                                                        and Experiences
                                                    </p>
                                                    <p>
                                                        <input v-model="restaurants" type="checkbox">Restaurants
                                                    </p>
                                                    <p>
                                                        <input v-model="places_destinations" type="checkbox">Places /
                                                        Destinations
                                                    </p> -->
                                                </div>
                                                <!-- <div class="travv_drop_filter_section" style="margin-top: 51px">
                                                    <h3>Type</h3>
                                                    <p v-for="(type, index) in experience_types" :key="index">
                                                        <input v-model="selected_types" type="checkbox" :name="type.name" :value="type.id">
                                                        <label :value="type.name" :for="type.name">{{type.name}}</label>
                                                    </p>
                                                </div> -->
                                            </div>
                                            <div class="col-md-3">
                                                <div class="travv_drop_filter_section">
                                                    <h3>Sort by</h3>
                                                    <p>
                                                        <input v-model="sort_option" type="radio" id="highest_ranked" value="highest_ranked">
                                                        <label for="highest_ranked"> Highest Ranked</label>
                                                        <p>
                                                            <input v-model="sort_option" type="radio" id="most_recent" value="most_recent">
                                                            <label for="most_recent"> Most Recent</label>
                                                        </p>
                                                </div>
                                                <!-- <div class="travv_drop_filter_section" style="margin-top: 114px">
                                                    <p>
                                                        <input v-model="for_kids" type="checkbox">For kids
                                                    </p>
                                                    <p>
                                                        <input v-model="nightlife" type="checkbox">Nightlife
                                                    </p>
                                                    <p>
                                                        <input v-model="sightseeing" type="checkbox">Sightseeing
                                                    </p>
                                                </div> -->
                                            </div>
                                            <div class="col-md-5">
                                                <div class="price_range_section">
                                                    <h3>Price Range</h3>
                                                    <vue-slider v-model="value_1" :marks="marks1" :min="value_1_min"
                                                        :max="value_1_max"></vue-slider>
                                                </div>
                                                <div class="duration_section">
                                                    <h3>Duration</h3>
                                                    <vue-slider v-model="value_2" :marks="marks2" :min="value_2_min"
                                                        :max="value_2_max"></vue-slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1">
                            </div>
                            <div class="col-md-7">
                                <div class="filter_searchbar" style="color: #f81894;">
                                    <input v-model="search" v-validate="'required|min:3'" class="filter_search_input"
                                        type="text" placeholder="Search" />
                                    <!-- |
                                <img src="../assets/Icons/Calendar.svg" style="margin-top: -8px;margin-left: 31px;height: 28px;" /> -->
                                    <button type="submit" class="filter_search_icon">
                                        <!-- <i class="material-icons">add</i> -->
                                        <img v-if="!loading.filterExperiencesSearch" src="../assets/icons8-search.svg"
                                            style="height: 28px;" />
                                        <img v-if="loading.filterExperiencesSearch" style="height: 20px;"
                                            src="../assets/loader_rolling.gif" />

                                        <!-- <font-awesome-icon icon="user" /> -->
                                    </button>
                                </div>
                            </div>
                            <!--<div class="col-md-2" style="text-align: center;">-->
                            <!--<router-link to="/dashboard/new-exp">-->
                            <!--<button type="button" class="btn btn-lg add-new-btn">+</button>                              -->
                            <!--</router-link>-->
                            <!--</div>-->
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <div class="digital_feature">
            <div class="row">
                <div class="col-lg-12">
                    <div class="container">
                        <div class="row" v-if="loading.filterExperiencesSearch || loading.getExperiences">

                            <div class="col-md-4">
                                <content-loader :height="380" :width="350" :speed="2" primaryColor="#f3f3f3"
                                    secondaryColor="#ecebeb">

                                </content-loader>
                            </div>
                            <div class="col-md-4">
                                <content-loader :height="380" :width="350" :speed="2" primaryColor="#f3f3f3"
                                    secondaryColor="#ecebeb">

                                </content-loader>
                            </div>
                            <div class="col-md-4">
                                <content-loader :height="380" :width="350" :speed="2" primaryColor="#f3f3f3"
                                    secondaryColor="#ecebeb">

                                </content-loader>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 no-search-results-cont"
                                v-if="allExperiences && allExperiences.length < 1 && !loading.filterExperiencesSearch && !loading.getExperiences">
                                <h3>No results</h3>
                                <h5>
                                    We couldn't find anything matching {{ search }}, Try searching other keywords
                                </h5>
                                <hr>
                            </div>

                            <div class="col-md-12 suggestion-cont"
                                v-if="allExperiences.length < 1 && !loading.filterExperiencesSearch && !loading.getExperiences">
                                <h3>
                                    Explore any of these
                                </h3>
                                <br>
                            </div>
                            <div class="col-md-4 experience" v-if="allExperiences != null && allExperiences.length < 1"
                                v-for="experience in experiencesPlacehodler" :key="experience.id" style="">
                                <router-link
                                    :to="'/experience/'+ experience.id + '/' + experience.title.toString().toLowerCase().replace( /\s/g, '-')">
                                    <!-- <div class="search_items"> -->
                                    <div class="featured-card card" style="margin-bottom: 20px;">


                                        <img v-if="experience.images.length" :src="experience.images[0].image"
                                            style="width: 100%;object-fit: cover;height:300px;"
                                            class="card-img-top featured-card-img" alt="...">
                                        <img v-else src="../assets/osaka.png"
                                            style="width: 100%;object-fit: cover;height:300px;"
                                            class="card-img-top featured-card-img" alt="...">
                                        <div class="card-body">
                                            <p class="card-text" style="color: #f81894">{{ experience.title }} |
                                                {{ experience.state }}</p>
                                            <h5 class="card-title" style="text-transform: capitalize;">
                                                {{ experience.city }} <i class="fa fa-heart"
                                                    @click="postFavoriteExeperience(experience.id)"></i></h5>
                                            <star-rating :rating="parseFloat(experience.rating)" :read-only="true"
                                                :increment="0.01" :star-size="18"></star-rating>
                                            <p class="card-text" style="color: #f81894">
                                                <b>{{experience.rating == null ? 0 : experience.rating}} <i
                                                        class="fa fa-star"></i></b>
                                                ({{experience.rating_count == null ? 0 : experience.rating_count}})</p>

                                            <i class="far fa-heart"
                                                style="position: relative;font-size: 18px;color: rgb(248, 24, 148);z-index: 1221;left: 90%;top: -40px;"
                                                @click="postFavoriteExeperience(experience.id)"></i>

                                        </div>
                                    </div>
                                    <!-- </div> -->
                                </router-link>
                            </div>
                            <div class="col-md-4 experience" v-for="experience in experiences" :key="experience.id"
                                style="">
                                <router-link
                                    :to="'/experience/'+ experience.id + '/' + experience.title.toString().toLowerCase().replace( /\s/g, '-')">
                                    <div class="featured-card card" style="margin-bottom: 20px;">



                                        <img v-if="experience.images.length" :src="experience.images[0].image"
                                            style="width: 100%;object-fit: cover;height:300px;"
                                            class="card-img-top featured-card-img" alt="...">
                                        <img v-else src="../assets/osaka.png"
                                            style="width: 100%;object-fit: cover;height:300px;"
                                            class="card-img-top featured-card-img" alt="...">
                                        <div class="card-body">
                                            <p class="card-text" style="color: #f81894">{{ experience.title }} |
                                                {{ experience.state }}</p>
                                            <h5 class="card-title" style="text-transform: capitalize;">
                                                {{ experience.city }}
                                            </h5>
                                            <star-rating :rating="parseFloat(experience.rating)" :read-only="true"
                                                :increment="0.01" :star-size="18"></star-rating>
                                            <p class="card-text" style="color: #f81894">
                                                <b>{{experience.rating == null ? 0 : experience.rating}} <i
                                                        class="fa fa-star"></i></b>
                                                ({{experience.rating_count == null ? 0 : experience.rating_count}})</p>

                                            <i class="far fa-heart"
                                                style="position: relative;font-size: 18px;color: rgb(248, 24, 148);z-index: 1221;left: 90%;top: -40px;"
                                                @click="postFavoriteExeperience(experience.id)"></i>

                                        </div>
                                    </div>

                                </router-link>
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
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex';
    import DatePicker from 'vue2-datepicker'
    import Footer from '@/components/Footer.vue';
    import StarRating from 'vue-star-rating'
    import {
        Circle9
    } from 'vue-loading-spinner'
    import Axios from 'axios'
    import {
        ContentLoader
    } from "vue-content-loader"

    export default {
        name: 'SearchResults',
        data: function () {
            return {
                emptySearchToggle: false,
                search: '',
                tour_and_experiences: false,
                restaurants: false,
                places_destinations: false,
                outdoor_activities: false,
                extended_tours: false,
                cultural_tours: false,
                popular: false,
                recent: false,
                for_kids: false,
                nightlife: false,
                sightseeing: false,
                value: 0,
                value_1_min: 10,
                value_1_max: 5000,
                value_2_min: 1,
                value_2_max: 30,
                value_1: [10, 5000],
                sort_option:"",
                experience_types: [],
                selected_types: [],
                marks1: {
                    '10': {
                        label: '$10',
                        style: {
                            width: '8px',
                            height: '8px',
                            display: 'block',
                            backgroundColor: '#555',
                            transform: 'translate(-2px, -2px)'
                        },
                    },
                    '5000': {
                        label: '$5000',
                        style: {
                            width: '8px',
                            height: '8px',
                            display: 'block',
                            backgroundColor: '#555',
                            transform: 'translate(-2px, -2px)'
                        },
                    },
                },
                value_2: [1, 30],
                marks2: {
                    '1': {
                        label: '1 day',
                        style: {
                            width: '8px',
                            height: '8px',
                            display: 'block',
                            backgroundColor: '#555',
                            transform: 'translate(-2px, -2px)'
                        },
                    },
                    '30': {
                        label: '30 days',
                        style: {
                            width: '8px',
                            height: '8px',
                            display: 'block',
                            backgroundColor: '#555',
                            transform: 'translate(-2px, -2px)'
                        },
                    },
                }
            }
        },
        components: {
            Navbar,
            Footer,
            StarRating,
            Circle9,
            ContentLoader
        },
        computed: {
            ...mapState(['loading']),
            ...mapGetters(['allExperiences']),
            ...mapState(['auth']),
            ...mapState(['emptySearchResult']),
            ...mapState(['experiencesPlacehodler']),
            checkUserType() {
                if (this.auth) {
                    return this.auth.user.role;
                }
                return null
            }
        },
        methods: {
            ...mapActions(['getEvents']),
            ...mapActions(['getExperiences']),
            ...mapActions(['filterExperiencesSearch']),
            filterExperience: function () {
                this.emptySearchToggle = false;
                console.log('Searching')
                let data = {
                    search: this.search,
                    min_price: this.value_1[0],
                    max_price: this.value_1[1]
                }
                
// restaurants
// places_destinations
                // let experince_type_id = null;

                // if(this.tour_and_experiences){
                //     experince_type_id = 2
                // }
                
                // if(this.restaurants){
                //     experince_type_id = 12
                // }
                
                // if(this.places_destinations){
                //     experince_type_id = 22
                // }
                let experience_types = JSON.stringify(this.selected_types);
                this.$validator.validateAll().then(result => {
                    if (result) {
                        let url =
                            `${this.$store.state.API_BASE}/experiences?city=${data.search}&country=${data.search}&title=${data.search}&location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}&experience_types=${experience_types}&sort_option=${this.sort_option}`;

                        if (data.search == '') {
                            this.filterExperiencesSearch();
                        } else {
                            console.log("Non empty search")
                            this.filterExperiencesSearch(url);

                        }
                        // this.$
                    } else {
                        this.$noty.error("Enter a minimum of 3 letters in the search")
                    }
                });

            },

            dntTogle: function () {
                // preventDefault()
                return true;
            },
            stopProp: function (e) {
                e.stopPropagation()
            },
            postFavoriteExeperience(Id) {
                this.loading = true
                if (this.auth && this.auth.access_token) {
                    let data = {
                        user_id: this.auth.user.id,
                        experience_id: Id
                    }
                    let requestHeaders = {
                        headers: {
                            'Authorization': "Bearer " + this.$store.state.auth.access_token
                        }
                    }
                    Axios.post(`${this.$store.state.API_BASE}/favourites`,
                        data,
                        requestHeaders).then(response => {
                        console.log(response.data.data);
                        this.loading = false
                        this.$noty.success('Added to Favorites')
                    }).catch(error => {
                        console.log(error.data)
                        this.loading = false
                    })
                } else {
                    this.$noty.error('You need to Login to Have a Favourite Experience')
                }
            },

            fetch_experience_types() {
                Axios
                .get(`${this.$store.state.API_BASE}/experience_types`)
                .then( response => {
                    console.log(response);
                    this.experience_types = response.data.data
                }).catch( error => {
                    console.log(error.data)
                })
            }
        },
        created: function () {
            this.getEvents();
            this.fetch_experience_types();
        },
        props: ['experiences'],
    }
</script>

<style scoped>
    .vue-star-rating-rating-text {
        display: none;
    }

    .spinner.spinner--circle-9 {
        margin: auto;
    }

    .vue-star-rating-star {
        overflow: visible !important;
        height: 20px;
        width: 20px;
    }

    .vue-star-rating-rating-text[data-v-34cbeed1] {
        margin-top: -5px;
        margin-left: 7px;
    }

    .add-new-btn {
        background: #F81894;
        border: none;
        font-family: MuseoSans700;
        font-size: 18px;
        width: 60px;
        height: 54px;
        border-radius: 8px;
        color: #FFF;
        /*margin-top: 20px;
        margin-left: 15px;*/
    }

    a {
        color: inherit;
    }

    input[type=checkbox] {
        margin-right: 10px;
    }

    .price_range_section h3 {
        font-family: MuseoSans500;
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: normal;
        color: #f81894;
        margin-bottom: 27px;
    }

    .duration_section h3 {
        font-family: MuseoSans500;
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: normal;
        color: #f81894;
        margin-top: 97px;
        margin-bottom: 36px;
    }

    .vue-slider-process {
        background-color: #f81894 !important;
    }

    .navbar-brand {
        color: #555 !important;
    }

    .main_menu_area .navbar .navbar-nav li a {
        color: #555 !important;
    }

    .filter_area {
        background: #000;
        margin-top: 10px;
        min-height: auto;
        padding: 30px 0 30px 89px;
        margin-bottom: 57px;
    }

    .filter_btn {
        width: 160px;
        height: 54px;
        ;
        border-radius: 8px;
        border: solid 2px #ffffff;
        border: 2px solid #FFF;
        color: #FFF;
        background: transparent;
        font-family: MuseoSans;
        font-size: 16px;
        font-weight: bold;
    }

    .filter_searchbar {
        height: 100%;
        border-radius: 8px;
        background-color: #ffffff;
    }

    .filter_search_input,
    .filter_searchbar>.filter_search_input {
        width: 75%;
        height: 100%;
        color: #000;
        padding: 0 10px;
        transition: width .4s linear;
        font-size: 16px;
        padding-left: 48px;
    }

    .filter_search_input {
        color: #fff;
        border: 0;
        outline: 0;
        background: 0 0;
        caret-color: #000;
    }

    /* .searchbar>.search_input {
        caret-color: red
    } */

    input.filter_search_input::placeholder {
        color: #555;
    }

    input::-webkit-calendar-picker-indicator {
        display: none
    }

    .filter_searchbar>.filter_search_icon {
        background: #f81894;
        border: none;
    }

    .filter_search_icon {
        height: 100%;
        width: 78px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        text-decoration: none
    }

    .search_items {
        height: 393px;
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin-bottom: 43px;
    }

    .search_items_back_img {
        width: 100%;
        height: 318px;
    }

    .search_items_item p {
        font-family: MuseoSans;
        font-size: 14px;
        font-weight: bold;
    }

    .search_items_item h3 {
        font-family: MuseoSans;
        font-size: 30px;
        font-weight: bold;
        font-style: normal;
    }

    .search_items_item p b {
        color: #f81894;
        font-family: MuseoSans;
        font-size: 14px;
        font-weight: bold;
    }

    .nagoya {
        background: url('../assets/nagoya.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .niigata2 {
        background: url('../assets/niigata2.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .osaka {
        background: url('../assets/osaka.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .dropdown-toggle::after {
        border-right: 0 solid transparent;
        border-bottom: 0;
        border-left: 0 solid transparent;
    }

    .dropdown-menu {
        width: 1218px;
        margin-top: 17px;
        padding: 57px 151px 120px 134px;
        margin-left: -5px;
        box-shadow: 4px 4px 4px 0 rgba(74, 74, 74, 0.49);
    }

    .travv_drop_filter_section h3 {
        font-family: MuseoSans500;
        font-size: 20px;
        font-weight: bolder;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: normal;
        color: #f81894;
        margin-bottom: 23px;
    }

    button#dropdownMenuButton:focus {
        background: #FFF;
        color: #f81894;
    }

    @media only screen and (max-width: 576px) {
        .experience {
            padding-right: 15px !important;
            padding-left: 15px !important;
        }

        .filter_area {
            padding: 10px 0 36px 1px !important;
        }

        .filter_searchbar[data-v-350f5dd6] {
            height: 60px;
        }

        .filter_search_input,
        .filter_searchbar>.filter_search_input {
            width: 55%;
        }

        .main_menu_area .navbar .navbar-toggler span {
            background: #555;
        }
    }

    .no-search-results-cont {
        text-align: center;
        margin-bottom: 57px;
    }

    .no-search-results-cont h3,
    .suggestion-cont h3 {
        text-transform: initial;
    }
</style>