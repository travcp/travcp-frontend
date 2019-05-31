<template>
    <div>
        <search-results :experiences="restaurants"></search-results>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue';
    import axios from 'axios';
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex';
    import SearchResults from '@/components/SearchResults.vue';

    export default {
        name: 'ExperiencesSearchResults',
        data: function () {
            return {
                search: '',
                tour_and_experiences: false,
                // restaurants: false,
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
                value_2: [1, 30],
            }
        },
        components: {
            Navbar,
            'search-results': SearchResults
        },
        computed: {
            ...mapState(['isLoading']),
            ...mapGetters(['allRestaurants']),
            ...mapState(['restaurants']),
            // loading: function(){
            //     // return this.isLoading
            // }
        },
        methods: {
           
        },
        created: function () {
        }
    }
</script>

<style scoped>
    header.main_menu_area {
        z-index: -12213;
    }

    input[type=checkbox] {
        margin-right: 10px;
    }
    a{
        color: inherit;
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
        margin-top: 121px;
        height: 146px;
        padding: 36px 0 36px 89px;
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
        font-size: 18px;
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
        font-size: 18px;
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
        text-decoration: none;
        outline: none;
    }

    .search_items {
        height: 393px;
        /* 318 
         75
          3 */
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
        font-size: 24px;
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
</style>