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
                                <div class="container">
                                    <div class="restaurant_content">
                                        <!-- <h6>₦ Min. order ₦1,500.00 Min. delivery fee ₦350.00</h6> -->
                                    </div>    
                                </div>
                            </div>
                            <br>
                            <div class="col-md-12">
                                <div class="container">
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
                                                          <li class="list-group-item">
                                                            <div class="row">
                                                                <div class="col-md-6" style="text-align: left;">
                                                                    <h6>Chinese Rice</h6>
                                                                </div>    
                                                                <div class="col-md-6" style="text-align: right;">
                                                                    <p>₦ 700.00 + </p>
                                                                </div>    
                                                            </div>
                                                          </li>
                                                          <li class="list-group-item">
                                                            <div class="row">
                                                                <div class="col-md-6" style="text-align: left;">
                                                                    <h6>Fried rice</h6>
                                                                </div>    
                                                                <div class="col-md-6" style="text-align: right;">
                                                                    <p>₦ 600.00 +</p>
                                                                </div>    
                                                            </div>
                                                        </li>
                                                          <li class="list-group-item">
                                                            <div class="row">
                                                                <div class="col-md-6" style="text-align: left;">
                                                                    <h6>Jollof rice</h6>
                                                                </div>    
                                                                <div class="col-md-6" style="text-align: right;">
                                                                    <p>₦ 600.00 </p>
                                                                </div>    
                                                            </div>
                                                          </li>
                                                           <li class="list-group-item">
                                                            <div class="row">
                                                                <div class="col-md-6" style="text-align: left;">
                                                                    <h6>Genesis special rice</h6>
                                                                </div>    
                                                                <div class="col-md-6" style="text-align: right;">
                                                                    <p>₦ 700.00 </p>
                                                                </div>    
                                                            </div>
                                                          </li>
                                                           <li class="list-group-item">
                                                            <div class="row">
                                                                <div class="col-md-6" style="text-align: left;">
                                                                    <h6>Coconut rice</h6>
                                                                </div>    
                                                                <div class="col-md-6" style="text-align: right;">
                                                                    <p>₦ 600.00 </p>
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
                            <h6 class="card-subtitle mb-2 text-muted">Genesis Restaurant - Ada George</h6>
<br><br>
                            <h5 class="card-title">ESTIMATED DELIVERY TIME</h5>
                            <h6 class="card-subtitle mb-2 text-muted">35-45 minutes</h6>
            <br> <br>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-secondary btn-lg btn-block">Proceed to Checkout</button>
                            <!-- <a href="#" class="card-link">Another link</a> -->
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
        name: "RestaurantMenu",
        components: {
            Navbar
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