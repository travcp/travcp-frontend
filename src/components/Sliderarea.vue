<template>
    <section class="main_slider_area">
        <div id="main_slider" class="rev_slider" style="padding-bottom: 134px;">
            <div class="main_slider_container">
                <div>
                    <div class="row" style="margin-right: 0px;">
                        <div class="col-md-12">
                            <h1 class="main_slider_text_bg">Discover Places and <br> Experience the Culture</h1> <br>
                            <router-link to="/events">
                                <button type="button" class="btn btn-travv toggle-display-sm">
                                    <!-- <img src="../assets/Icons/tours-experiences.svg" /> --> <i class="fa fa-umbrella"></i> Tours & Experiences
                                </button>
                            </router-link>
                            <router-link to="/restaurants">
                                <button type="button" class="btn btn-travv toggle-display-sm">
                                    <img src="../assets/Icons/restaurants.svg" style="margin-top: -8px;" /> Restaurants
                                </button>
                            </router-link>
                            <router-link to="/places">
                                <button type="button" class="btn btn-travv toggle-display-sm">
                                    <!-- <img src="../assets/Icons/places.svg" style="margin-top: -8px;" /> --> 
                                    <i class="fa fa-map-marker-alt"></i> Places / Destination
                                </button>
                            </router-link>
<!-- events places restaurants -->
                            <div class="btn-group btn-group-toggle toggle-display">
                                <router-link to="/events">
                                    <label class="btn btn-travv" @click="toggleColor" v-bind:class="{ 'active-travv': Experiences }" data-ExpType="tours" style="border-bottom-right-radius: 0;border-top-right-radius: 0;">
                                        <i class="fa fa-umbrella"></i> Tours & Experiences
                                    </label>
                                </router-link>
                                <label class="btn btn-travv active-travv">
                                    |
                                </label>
                                <router-link to="/restaurants">
                                    <label class="btn btn-travv" @click="toggleColor" v-bind:class="{ 'active-travv': Restaurants }" data-ExpType="restaurants" style="    border-radius: 0;">
                                        <img src="../assets/Icons/restaurants.svg" style="margin-top: -8px;" /> Restaurants
                                    </label>
                                </router-link>
                                <label class="btn btn-travv active-travv">
                                    |
                                </label>
                                <router-link to="/places">
                                    <label class="btn btn-travv" @click="toggleColor"  v-bind:class="{ 'active-travv': Destination }" data-ExpType="places" style="    border-bottom-left-radius: 0;border-top-left-radius: 0;">
                                        <!-- <img src="../assets/Icons/places.svg" style="margin-top: -8px;" /> --> <i class="fa fa-map-marker-alt"></i> Places / Destination
                                    </label>
                                </router-link>
                            </div> <br>
                            
                            <form @submit.prevent="searchSubmit">
                                <div class="btn-group btn-group-toggle" style="margin-right: 31px;margin-top: 20px;">
                                    <input type="text" class="btn-travv whereWould" v-model='search_text' placeholder="Where would you like to go?">
                                    <!-- <label class="btn btn-travv">
                                        Where would you like to go?
                                    </label> -->
                                    <label class="btn btn-travv active-travv">
                                        |
                                    </label>
                                    <label class="btn btn-travv">
                                        <!-- <img src="../assets/zoom-icon.png" style="margin-top: -10px;height: 24px;" /> -->
                                        <i class="fa fa-search"></i>
                                    </label>
                                </div> <button type="submit" class="btn btn-lg cont-btn">Continue</button>    
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import {mapActions, mapState} from 'vuex';

    export default {
        name: 'Sliderarea',
        data() {
            return {
                Experiences : true,
                Restaurants : false,
                Destination : false,
                search_text: ''
            }
        },
        methods: {
            ...mapActions(['filterExperiencesSearch']),
            searchSubmit(){
                let data = {
                    search: this.search_text
                }
                let API_BASE = 'https://travvapi.herokuapp.com/api';

                let url = `${API_BASE}/experiences?location=${data.search}`;
                this.$store.state.homeSearch = this.search_text
                if(data.search == ''){
                    this.$router.push("/experiences");
                    return this.filterExperiencesSearch();
                } else {
                    this.$router.push("/experiences");
                    return this.filterExperiencesSearch(url);
                }
            },
            toggleColor: function(event) {
                
                // console.log(event.target.dataset.exptype)
                if(event.target.dataset.exptype == "tours"){
                    this.Experiences = true
                    this.Restaurants = false
                    this.Destination = false
                } else if (event.target.dataset.exptype == "restaurants") {
                    this.Experiences = false
                    this.Restaurants = true
                    this.Destination = false

                } else if (event.target.dataset.exptype == "places") {
                    this.Experiences = false
                    this.Restaurants = false
                    this.Destination = true

                }
                // this.Experiences.Destination = event.target.dataset.Destination;

            }
        },
        computed: {
            ...mapState(['homeSearch'])
        }
    }
</script>

<style>
    div#main_slider {
        background: url('../assets/hero_image.png') no-repeat;
        background-size: cover;
        height: 100%;
    }

    .main_slider_container {
        padding-top: 30vh;
    }

    .main_slider_text_bg {
        font-family: MuseoSans700 !important;
        color: #FFF;
        font-size: 50px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom: 5px;
    }

    .active {
        color: #F81894;
    }

    .btn-travv {
        font-family: MuseoSans500 !important;
        /* font-weight: 900;
        color: #555555;
        background-color: #FFF;
        border-color: #FFF;
        font-size: 1.3em; */
        /* padding-left: 30px 10px; */

        padding: 26px;
        height: 74px;
        border-radius: 8px;
        background-color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
    }
    .btn-group.btn-group-toggle{ height:74px; }
    .active-travv {
        color: #F81894;
    }

    .btn {
        border-radius: 0.5rem;
    }

    .btn-travv img {
        height: 25px;
        margin-right: 10px;
        object-fit: contain;
    }

    .cont-btn {
        background: #F81894;
        border: none;
        /* padding: 44px 29px 39px 25px; */
        font-family: MuseoSans700;
        font-size: 18px;
        width: 175px;
        height: 74px;
        border-radius: 8px;
        background-color: #f81894;
        color: #FFF;
        margin-top: 20px;
        cursor: pointer;
    }

    .cont-btn:focus {
        box-shadow: none;
    }
    .main_slider_container{
        padding-left: 191px;
    }
    .whereWould {
        height: 100%;
        width: 260px;
        border: none;
        background-color: #ffffff;
        font-size: 18px;
        font-weight: 100;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
        border-radius: 0.5rem;
        border-bottom-right-radius: 0 !important;
        border-top-right-radius: 0 !important;
        padding: 0 0 0 20px;
        outline: none;
    }
    .whereWould::placeholder {
      color: red;
      color: #555555;
      font-weight: bolder;
    }
</style>