<template>
    <div class="restaurant-menu">
        <Navbar />
        <div class="row">
            <div class="col-md-12">
                <div class="restaurant_heading">
                    <h1>Genesis Restaurant - Ada George</h1>
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
                                        <li class="nav-item">
                                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Rice</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Protein</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">National</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Swallow</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Sides</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item" v-for="item in menus" :key="item.id">
                                                        <div class="row">
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
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
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
                    <div class="card" style="width: 100%;">
                        <div class="card-body">
                        <h5 class="card-title">ORDER FROM</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ name }}</h6>
                        <p class="card-text">.</p>
                        <div class="booking-action text-center">
                            <button type="button" class="btn btn-secondary book_btn">Book</button>
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
import axios from 'axios';

    export default {
        name: "RestaurantMenu",
        data(){
            return {
                menus: []
            }
        },
        components: {
            Navbar
        },
        props: ['id', 'name'],
        methods: {
            getMenus(){
                axios.get(`${this.$store.state.API_BASE}/restaurants/${this.id}/menus`).then(res => {
                    this.menus = res.data.data;
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        created(){
            this.getMenus();
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
        color: #eee;
        text-transform: capitalize;
        font-family: MuseoSans500;
    }
    li.list-group-item h6 {
        font-weight: bolder;
        color: #606163;
        font-size: 18px;
    }
</style>