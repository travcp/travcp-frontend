<template>
    <div class="ExpereinceSearchResults">
        <Navbar />
        <section class="filter_area" style="">
            <div class="container">
                <div class="project_inner">
                    <form @submit.prevent="filterExperience">
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-8">
                                <div class="filter_searchbar" style="color: #f81894;height: 54px;">
                                    <input v-model="search" v-validate="'required|min:3'" class="filter_search_input" type="text"
                                           placeholder="Tour & Experiences in Tokyo " />
                                    <!-- |
                                    <img src="../assets/Icons/Calendar.svg" style="margin-top: -8px;margin-left: 31px;height: 28px;" /> -->
                                    <button type="submit" class="filter_search_icon">
                                        <!-- <i class="material-icons">add</i> -->
                                        <img v-if="!isLoading" src="../../assets/icons8-search.svg" style="height: 28px;" />
                                        <img v-if="isLoading" style="height: 20px;" src="../../assets/loader_rolling.gif" />

                                        <!-- <font-awesome-icon icon="user" /> -->
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-2" style="text-align: center;">
                                <!--<router-link to="/dashboard/new-exp">-->
                                    <!--<button type="button" class="btn btn-lg add-new-btn">+</button>-->
                                <!--</router-link>-->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <div class="digital_feature">
            <div class="row">
                <div class="col-lg-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6" v-for="merchant_experience in merchant_experiences" :key="merchant_experience.id">
                                <div class="card mb-3" style="width: 100%;">
                                    <div class="row no-gutters">
                                        <div class="col-md-5">
                                            <img :src="merchant_experience.images.length > 0 ? merchant_experience.images[0].image : require('../../assets/nagoya.png')" class="card-img" style="height: 100%; width:100%" alt="">
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h5 class="card-title"><strong>{{ merchant_experience.title }}</strong>  | {{ merchant_experience.experience_type }}</h5>
                                                <p class="card-text">{{ merchant_experience.city }}</p>
                                                <p><b>{{merchant_experience.rating == null ? 0 : merchant_experience.rating}} *</b> ({{merchant_experience.rating_count == null ? 0 : merchant_experience.rating_count}})</p>
                                                
                                                <p class="card-text"><small class="text-muted">Created {{ merchant_experience.created_at }}</small></p>
                                                <p>{{ merchant_experience.description ?  merchant_experience.description.slice(0, 100) : '' }}</p>
                                                
                                                <p class="card-text"><small class="text-muted">Last updated at {{ merchant_experience.updated_at }}</small></p>
                                                <router-link :to="'/dashboard/merchant/experience/edit/'+ merchant_experience.experience_type + '/' + merchant_experience.id + '/' + merchant_experience.title"><button class="btn btn-info">Edit</button></router-link>

                                                <br> <br>
                                                <router-link :to="'/experience/'+ merchant_experience.id + '/' + merchant_experience.city"><button class="btn btn-primary">View</button></router-link>
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
        <!-- <Footer /> -->
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import EmptyResult from "@/components/EmptyResult.vue";
    import { mapState, mapActions } from 'vuex';
    // import DatePicker from 'vue2-datepicker'
    import SearchResults from '@/components/SearchResults.vue';
    import axios from 'axios'
    import { Circle9 } from 'vue-loading-spinner'

    export default {
        name: 'MerchantExperiences',
        beforeRouteEnter(to, from, next) {
            let checkToken = JSON.parse(localStorage.getItem('auth'))
              if(checkToken.access_token && checkToken.user.role == 'merchant') {
                  return next()
              } else {
                // this.$noty.error("Sign in to access!")
                return next({ path: '/signin' })
              }
              next();
          },
        data: function () {
            return {
                loading: false,
                merchant_experiences: [],
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
            Navbar, SearchResults, EmptyResult, Circle9
        },
        computed: {
            ...mapState(['isLoading']),
            ...mapState(['places']),
        },
        methods: {
            ...mapActions(['getPlaces']),
            ...mapActions(['filterPlacesSearch']),
            filterPlaces: function(){
                let data = {
                    search: this.search,
                    min_price: this.value_1[0],
                    max_price: this.value_1[1]
                }
                let API_BASE = 'https://travvapi.herokuapp.com/api';

                let url = `${API_BASE}/experience_types/2/experiences?locations=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`;

                if(data.search == ''){
                    return this.filterPlacesSearch();
                } else {
                    return this.filterPlacesSearch(url);
                }
                // return this.filterExperiencesSearch(data);
            },
            async getMerchantExperiences() {
                this.loading = true;
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                };
                await axios.get(`${this.$store.state.API_BASE}/merchants/${this.$store.state.auth.user.id}/experiences`, requestHeaders).then(response => {
                    this.merchant_experiences = response.data.data;
                    this.loading = false;
                });
            },
            dntTogle: function(){
                return true;
            },
            stopProp: function(e){
                e.stopPropagation()
            }
        },
        created: function(){
            this.getMerchantExperiences();
        }
    }
</script>

<style scoped>
    a {
        color: inherit;
    }
    header.main_menu_area{
        z-index: -12213;
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
        min-height: 146px;
        padding: 36px 0 36px 0;
        margin-bottom: 57px;
    }

    .filter_btn {
        width: 206px;
        height: 74px;
        border-radius: 8px;
        border: solid 2px #ffffff;
        border: 2px solid #FFF;
        color: #FFF;
        background: transparent;
        font-family: MuseoSans;
        font-size: 21px;
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
        font-size: 20px;
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
</style>