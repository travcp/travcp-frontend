<template>
    <div class="home">
        <Navbar />
        <section class="filter_area" style="">
            <div class="container">
                <div class="project_inner">
                    <div class="row">
                        <div class="col-md-2">
                            <button class="btn filter_btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/Icons/filter_(active).svg" style="margin-left: -39px;margin-right: 13px;" />

                                Filter
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="travv_drop_filter_section">
                                                <h3>Category</h3>
                                                <p>
                                                    <input type="checkbox">Tours
                                                    and Experiences
                                                </p>
                                                <p>
                                                    <input type="checkbox">Restaurants
                                                </p>
                                                <p>
                                                    <input type="checkbox">Places / Destinations
                                                </p>
                                            </div>
                                            <div class="travv_drop_filter_section" style="margin-top: 51px">
                                                <h3>Type</h3>
                                                <p>
                                                    <input type="checkbox">Outdoor activities
                                                </p>
                                                <p>
                                                    <input type="checkbox">Extended tours
                                                </p>
                                                <p>
                                                    <input type="checkbox">Cultural tours
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="travv_drop_filter_section">
                                                <h3>Sort by</h3>
                                                <p>
                                                    <input type="checkbox">Popular
                                                    <p>
                                                        <input type="checkbox">Recent
                                                    </p>
                                            </div>
                                            <div class="travv_drop_filter_section" style="margin-top: 114px">
                                                <p>
                                                    <input type="checkbox">For kids
                                                </p>
                                                <p>
                                                    <input type="checkbox">Nightlife
                                                </p>
                                                <p>
                                                    <input type="checkbox">Sightseeing
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="price_range_section">
                                                <h3>Price Range</h3>
                                                <vue-slider v-model="value_1" :marks="marks1"></vue-slider>
                                            </div>
                                            <div class="duration_section">
                                                <h3>Duration</h3>
                                                <vue-slider v-model="value_2" :marks="marks2"></vue-slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-8">
                            <div class="filter_searchbar" style="color: #f81894;">
                                <input class="filter_search_input" type="text" placeholder="Tour & Experiences in Tokyo " />
                                |
                                <img src="../assets/Icons/Calendar.svg" style="margin-top: -8px;margin-left: 31px;" />
                                <a href="javascript:void(0)" class="filter_search_icon">
                                    <!-- <i class="material-icons">add</i> -->
                                    <img src="../assets/icons8-search.svg" />
                                    <!-- <font-awesome-icon icon="user" /> -->
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="digital_feature">
            <div class="row">
                <div class="col-lg-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4" style="padding-right: 24px; padding-left: 0px;">
                                <div class="search_items">
                                    <div class="search_items_back_img nagoya"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>DAY TRIP TOKYO</p>
                                            <h3>Nagoya Street</h3>
                                            <p><b>4.75 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4"
                                style="padding-right: 24px;padding-left: 24px;border-left-width: 24px;">
                                <div class="search_items">
                                    <div class="search_items_back_img niigata2"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>GUIDED RIDE | MOSCOW</p>
                                            <h3>Niigata Snow Houses</h3>
                                            <p><b>5.00 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px;padding-left: 24px;">
                                <div class="search_items">
                                    <div class="search_items_back_img osaka"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>CONCERT | VEGAS</p>
                                            <h3>Osaka London</h3>
                                            <p><b>5.00 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px; padding-left: 0px;">
                                <div class="search_items">
                                    <div class="search_items_back_img nagoya"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>DAY TRIP TOKYO</p>
                                            <h3>Nagoya Street</h3>
                                            <p><b>4.75 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px;padding-left: 24px;">
                                <div class="search_items">
                                    <div class="search_items_back_img niigata2"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>GUIDED RIDE | MOSCOW</p>
                                            <h3>Niigata Snow Houses</h3>
                                            <p><b>5.00 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px;padding-left: 24px;">
                                <div class="search_items">
                                    <div class="search_items_back_img osaka"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>CONCERT | VEGAS</p>
                                            <h3>Osaka London</h3>
                                            <p><b>5.00 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px; padding-left: 0px;">
                                <div class="search_items">
                                    <div class="search_items_back_img nagoya"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>DAY TRIP TOKYO</p>
                                            <h3>Nagoya Street</h3>
                                            <p><b>4.75 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px;padding-left: 24px;">
                                <div class="search_items">
                                    <div class="search_items_back_img niigata2"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>GUIDED RIDE | MOSCOW</p>
                                            <h3>Niigata Snow Houses</h3>
                                            <p><b>5.00 *</b> (224)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" style="padding-right: 24px;padding-left: 24px;">
                                <div class="search_items">
                                    <div class="search_items_back_img osaka"></div>
                                    <div class="search_items_item">
                                        <div class="fetr_places_overlay">
                                            <p>CONCERT | VEGAS</p>
                                            <h3>Osaka London</h3>
                                            <p><b>5.00 *</b> (224)</p>
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

    export default {
        name: 'SearchResults',
        data: function () {
            return {
                value: 0,
                value_1: [0, 100],
                marks1: {
                    '0': {
                        label: '$10',
                        style: {
                            width: '8px',
                            height: '8px',
                            display: 'block',
                            backgroundColor: '#555',
                            transform: 'translate(-2px, -2px)'
                        },
                    },
                    '100': {
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
                value_2: [0, 100],
                marks2: {
                    '0': {
                        label: '1 day',
                        style: {
                            width: '8px',
                            height: '8px',
                            display: 'block',
                            backgroundColor: '#555',
                            transform: 'translate(-2px, -2px)'
                        },
                    },
                    '100': {
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
            Navbar
        }
    }
</script>

<style scoped>
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
</style>