<template>
    <div class="restaurant-menu">
        <Navbar />
        <div class="row">
            <div class="col-md-12">
                <div class="restaurant_heading">
                    <h1>{{ restaurant.title }} - {{ restaurant.state }}</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-md-12">
                            <div class="">
                                <div class="card">
                                    <div class="card-body">
                                    <ul class="nav nav-pills mb-3  nav-fill" id="pills-tab" role="tablist">
                                        <li class="nav-item" v-for="(category, index) in categories" :key="category.id">
                                            <a class="nav-link" v-bind:class="{ active: index == 0 ? true : false }" data-toggle="pill" :href="'#category' + category.id" role="tab" :aria-controls="'#category' + category.id" aria-selected="true">{{ category.name }}</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div v-for="(category, index) in categories" :key="category.id" class="tab-pane" v-bind:class="{ active: index == 0 ? true : false, show : index == 0 ? true : false, fade: index != 0 ? true : false }" :id="'category'+category.id" role="tabpanel" :aria-labelledby="'#category' + category.id">
                                            <!--Category {{ category.id }}-->
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item" v-for="item in menus" :key="item.id">
                                                        <div class="row" v-if="category.id == item.category_id">
                                                            <div class="col-md-6" style="text-align: left;">
                                                                <h6>{{ item.description }}</h6>
                                                            </div>
                                                            <div class="col-md-6" style="text-align: right;">
                                                                <!-- <p>₦ 700.00 + </p> -->
                                                                <p>$ {{ item.price }}</p>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>
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
                </div>
            </div>
            <div class="col-md-4">
                <div class="container">
                    <form @submit.prevent="bookExperience">
                        <div class="card" style="width: 100%;">
                            <div class="card-body">
                            <h5 class="card-title">ORDER FROM</h5>
                                <br>
                            <h5 class="card-title">{{ restaurant.title }}</h5>
                                <p>{{ restaurant.state }}</p>
                                <p>{{ restaurant.opening_and_closing_hours }}</p>
                            <p class="card-text">.</p>
                            <date-picker v-validate="'required'" v-model="time" range :shortcuts="shortcuts" :lang="lang"></date-picker>
                            <div class="booking-action text-center">
                                <button type="submit" class="btn btn-secondary book_btn" :disabled="loading.bookRestaunrant">
                                    <span v-if="loading.bookRestaunrant">
                                        <img style="height: 20px;" src="../assets/loader_rolling.gif" />
                                    </span>
                                    <span v-else>
                                        Book
                                    </span>
                                </button>
                            </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

import DatePicker from 'vue2-datepicker';
import { mapState, mapActions } from 'vuex'
    export default {
        name: "RestaurantMenu",

        data(){
            return {
                menus: [],
                categories: [],
                restaurant: {},
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
                timePickerOptions: {
                    start: '00:00',
                    step: '00:30',
                    end: '23:30'
                },
                time: '',
            }
        },
        components: {
            Navbar,
            DatePicker,
        },
        computed: {
            ...mapState(['loading']),
            ...mapState(['auth'])
        },
        props: ['id', 'name'],
        methods: {
            ...mapActions(['bookingExperience']),
            getMenus(){
                axios.get(`${this.$store.state.API_BASE}/restaurants/${this.id}/menus`).then(res => {
                    this.menus = res.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },
            getCategories() {
                axios.get(`${this.$store.state.API_BASE}/food_classifications`).then(res => {
                    this.categories = res.data;
                    console.log(res.data)
                }).catch(err => {
                    console.log(err);
                })
            },
            bookExperience: function () {
                if(this.auth) {
                    if (this.time[0]) {
                        let data = {
                            // food_menu_ids: ["2", "3", "4"],
                            merchant_id: this.restaurant.merchant_id,
                            user_id: this.auth.user.id,
                            experience_id: this.$route.params.id,
                            start_date: this.formatDate(this.time[0]),
                            end_date: this.formatDate(this.time[1])
                        };
                        // console.log(this.formatDate(this.time[0]));
                        this.bookingExperience(data);
                        // this.checkIfBooked()
                        this.$noty.success("Restaurant is Booked Succesfully")
                    } else {
                        this.$noty.error("Please enter a check in and check out date");
                    }

                } else {
                    this.$noty.error("Oops, You need to Login to Book and Experience");
                }
            },
            async getRestaurantById(){
                await axios.get(`${this.$store.state.API_BASE}/experiences/${this.id}`).then(response => {
                    this.restaurant = response.data.data
                    console.log(response.data.data)
                });
            },
            formatDate (date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = '0' + month;
                if (day.length < 2) day = '0' + day;

                return [year, month, day].join('-');
            },
        },
        created(){
            this.getRestaurantById()
            this.getMenus();
            this.getCategories();
        }
    }
</script>

<style scoped>
.restaurant_heading {
        height: 250px;
        width: 100%;
        margin-top: 10px;
        text-align: center;
        padding: 80px;
        background: url('../assets/shibuya.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 20px;
    }
    .restaurant_heading h1 {
        font-weight: bolder;
        color: #FFF;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        background-color: #f81894;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
        color: #FFF!important;
    }
    .list-group-item {
        padding: 40px;
        color: #9b9898;
        text-transform: capitalize;
        font-family: MuseoSans500;
    }
    li.list-group-item h6 {
        font-weight: bolder;
        color: #606163;
        font-size: 18px;
    }
    .book_btn {
        width: 100%;
    }
</style>