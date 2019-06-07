<template>
    <div class="ExpereinceSearchResults">
        <Navbar />
    
        <div class="digital_feature" style="margin-top: 60px">
            <div class="row">
                <div class="col-lg-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12" style="margin-bottom: 60px;">
                                <h3>Favourite Experiences</h3>
                            </div>
                            <div v-if="FavoritesExperience.length < 1 && !loading">
                                <empty-result>
                                    <template v-slot:error-header>Errm</template>
                                    You do not have any Favorite Experience yet. <br> When you love an experience, it will appear here.
                                </empty-result>
                            </div>
                            <div class="col-md-4 experience" v-for="experience in FavoritesExperience" :key="experience.experience.id" style="">
                                <router-link :to="'/experience/'+ experience.experience.id + '/' + experience.experience.title.toString().toLowerCase().replace( /\s/g, '-')">
                                    <div class="search_items">
                                        <div class="search_items_back_img nagoya" v-if="experience.experience.images && experience.experience.images.length > 0" :style="{background: 'url(' + experience.experience.images[0].image + ')'}"></div>
                                        <div class="nagoya" v-else></div>
                                        <div class="search_items_item">
                                            <div class="fetr_places_overlay">
                                                <p>{{ experience.experience.title }} | {{ experience.experience.state }}</p>
                                                <h3> {{ experience.experience.city }}</h3>
                                                
                                                <p><b>{{experience.experience.rating == null ? 0 : experience.experience.rating}} <i class="fa fa-star"></i></b> ({{experience.experience.rating_count == null ? 0 : experience.experience.rating_count}})</p>
                                            </div>
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
    import { mapState, mapGetters, mapActions } from 'vuex';
    import DatePicker from 'vue2-datepicker'
    import Footer from '@/components/Footer.vue';
    import Axios from 'axios';
    import EmptyResult from "@/components/EmptyResult.vue";

    export default {
        name: 'LikedExperiences',
        beforeRouteEnter(to, from, next) {
            let checkToken = JSON.parse(localStorage.getItem('auth'))
              if(checkToken && checkToken.access_token) {
                  return next()
              } else {
                // this.$noty.error("Sign in to access!")
                return next({ path: '/signin' })
              }
              next();
          },
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
                loading: false,
                FavoritesExperience: []
            }
        },
        components: {
            Navbar,
            EmptyResult
        },
        computed: {
            ...mapState(['auth']),
            checkUserType() {
                if(this.auth) {
                    return this.auth.user.role;                    
                }
                return null
            },
        },
        methods: {
            ...mapActions(['getEvents']),
            ...mapActions(['getExperiences']),
            ...mapActions(['filterExperiencesSearch']),

            dntTogle: function(){
                // preventDefault()
                return true;
            },
            stopProp: function(e){
                e.stopPropagation()
            },
            getUserFavorites(){
                this.loading = true;
                Axios.get(`${this.$store.state.API_BASE}/favourites?user_id=${this.$store.state.auth.user.id}`)
                    .then(response => {
                        console.log(response.data.data);
                        this.FavoritesExperience = response.data.data
                        this.loading = false
                    }).catch(error => {
                        console.log(err.data);
                        this.loading = false;
                })
            }
        },
        created: function(){
            this.getUserFavorites();
        }
    }
</script>

<style scoped>
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
        height: 54px;;
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
    .no-search-results-cont{
        text-align: center;
        margin-bottom: 57px;
    }
    .no-search-results-cont h3, .suggestion-cont h3{
        text-transform: initial;
    }
</style>