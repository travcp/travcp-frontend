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
                                <img src="../assets/Icons/filter_(active).svg"
                                    style="height: 25px;" />
                                Filter
                            </button>
                            <div class="dropdown-menu" @click="stopProp" aria-labelledby="dropdownMenuButton">
                                <div class="container">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="travv_drop_filter_section">
                                                    <h3>Category</h3>
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
                                                    </p>
                                                </div>
                                                <div class="travv_drop_filter_section" style="margin-top: 51px">
                                                    <h3>Type</h3>
                                                    <p>
                                                        <input v-model="outdoor_activities" type="checkbox">Outdoor
                                                        activities
                                                    </p>
                                                    <p>
                                                        <input v-model="extended_tours" type="checkbox">Extended tours
                                                    </p>
                                                    <p>
                                                        <input v-model="cultural_tours" type="checkbox">Cultural tours
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="travv_drop_filter_section">
                                                    <h3>Sort by</h3>
                                                    <p>
                                                        <input v-model="popular" type="checkbox">Popular
                                                        <p>
                                                            <input v-model="recent" type="checkbox">Recent
                                                        </p>
                                                </div>
                                                <div class="travv_drop_filter_section" style="margin-top: 114px">
                                                    <p>
                                                        <input v-model="for_kids" type="checkbox">For kids
                                                    </p>
                                                    <p>
                                                        <input v-model="nightlife" type="checkbox">Nightlife
                                                    </p>
                                                    <p>
                                                        <input v-model="sightseeing" type="checkbox">Sightseeing
                                                    </p>
                                                </div>
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
                                <input v-model="search" v-validate="'required|min:3'" class="filter_search_input" type="text"
                                    placeholder="Tour & Experiences in Tokyo " />
                                <!-- |
                                <img src="../assets/Icons/Calendar.svg" style="margin-top: -8px;margin-left: 31px;height: 28px;" /> -->
                                <button type="submit" class="filter_search_icon">
                                    <!-- <i class="material-icons">add</i> -->
                                    <img v-if="!isLoading" src="../assets/icons8-search.svg" style="height: 28px;" />
                                    <img v-if="isLoading" style="height: 20px;" src="../assets/loader_rolling.gif" />

                                    <!-- <font-awesome-icon icon="user" /> -->
                                </button>
                            </div>
                        </div>
                        <div class="col-md-2" style="text-align: center;">
                            <router-link to="/dashboard/new-exp">
                                <button type="button" class="btn btn-lg add-new-btn">+</button>                              
                            </router-link>
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
                            <div class="col-md-12 no-search-results-cont" v-if="allExperiences.length < 1" >
                                <h3>No results</h3>
                                <h5>
                                    We couldn't find anything matching {{ search }}, Try searching other keywords
                                </h5>
                                <hr>
                            </div>

                            <div class="col-md-12 suggestion-cont" v-if="allExperiences.length < 1" >
                                <h3>
                                    Explore any of these
                                </h3>
                            </div>
                            
                            <div class="col-md-4 experience" v-if="allExperiences != null && allExperiences.length < 1" v-for="experience in experiencesPlacehodler" :key="experience.id" style="">
                                <router-link :to="'/experience/'+ experience.id + '/' + experience.city">
                                    <div class="search_items">
                                        <div class="search_items_back_img nagoya"></div>
                                        <div class="search_items_item">
                                            <div class="fetr_places_overlay">
                                                <p>DAY TRIP {{ experience.state }}</p>
                                                <h3> {{ experience.city }}</h3>
                                                <p><b>4.75 *</b> (224)</p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-md-4 experience" v-for="experience in experiences" :key="experience.id" style="">
                                <router-link :to="'/experience/'+ experience.id + '/' + experience.city">
                                    <div class="search_items">
                                        <div class="search_items_back_img nagoya"></div>
                                        <div class="search_items_item">
                                            <div class="fetr_places_overlay">
                                                <p>DAY TRIP {{ experience.state }}</p>
                                                <h3> {{ experience.city }}</h3>
                                                <p><b>4.75 *</b> (224)</p>
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
            Footer
        },
        computed: {
            ...mapState(['isLoading']),
            ...mapGetters(['allExperiences']),
            ...mapState(['auth']),
            ...mapState(['emptySearchResult']),
            ...mapState(['experiencesPlacehodler']),
            checkUserType() {
                if(this.auth) {
                    return this.auth.user.role;                    
                }
                return null
            }
        },
        methods: {
            ...mapActions(['getExperiences']),
            ...mapActions(['filterExperiencesSearch']),
            filterExperience: function() {
                this.emptySearchToggle = false;
                console.log('Searching')
                let data = {
                    search: this.search,
                    min_price: this.value_1[0],
                    max_price: this.value_1[1]
                }
                this.$validator.validateAll().then(result => {
                    if (result){
                            let url = `${this.$store.state.API_BASE}/experiences?location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`;

                            if(data.search == ''){
                                this.filterExperiencesSearch();
                            } else {
                                console.log("Non empty search")
                                this.filterExperiencesSearch(url);
                                
                            }
                        // this.$
                    }
                    else{
                        this.$noty.error("Enter a minimun of 3 words in thre search")
                    }
                });
                
            },
            dntTogle: function(){
                // preventDefault()
                return true;
            },
            stopProp: function(e){
                e.stopPropagation()
            }
        },
        created: function(){
            this.getEvents();
        },
        props: ['experiences'],
    }
</script>
