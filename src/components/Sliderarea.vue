<template>
    <section class="main_slider_area">
        <div id="main_slider" class="rev_slider">
            <div class="main_slider_container">
                <div>
                    <div class="row" style="margin-right: 0px;">
                        <div class="col-md-12">
                            <h1 class="main_slider_text_bg">Discover Places and <br> Experience the Culture</h1> <br>
                            <button type="button" class="btn btn-travv toggle-display-sm">
                                <img src="../assets/Icons/tours-experiences.svg" /> Tours & Experiences
                            </button>
                            <button type="button" class="btn btn-travv toggle-display-sm">
                                <img src="../assets/Icons/restaurants.svg" style="margin-top: -8px;" /> Restaurants
                            </button>
                            <button type="button" class="btn btn-travv toggle-display-sm">
                                <img src="../assets/Icons/places.svg" style="margin-top: -8px;" /> Places / Destination
                            </button>

                            <div class="btn-group btn-group-toggle toggle-display">
                                <label class="btn btn-travv" v-bind:class="{ 'active-travv': Experiences }" data-ExpType="tours">
                                    <img src="../assets/Icons/tours-experiences.svg" /> Tours & Experiences
                                </label>
                                <label class="btn btn-travv active-travv">
                                    |
                                </label>
                                <label class="btn btn-travv" @click="toggleRestColor" v-bind:class="{ 'active-travv': Restaurants }" data-ExpType="restaurants">
                                    <img src="../assets/Icons/restaurants.svg" style="margin-top: -8px;" /> Restaurants
                                </label>
                                <label class="btn btn-travv active-travv">
                                    |
                                </label>
                                <label class="btn btn-travv" v-bind:class="{ 'active-travv': Destination }" data-ExpType="places">
                                    <img src="../assets/Icons/places.svg" style="margin-top: -8px;" /> Places / Destination
                                </label>
                            </div> <br>
                            <div class="btn-group btn-group-toggle" style="margin-right: 31px;margin-top: 20px;">
                                <input type="text" class="whereWould" placeholder="Where would you like to go?">
                                <!-- <label class="btn btn-travv">
                                    Where would you like to go?
                                </label> -->
                                <label class="btn btn-travv active-travv">
                                    |
                                </label>
                                <label class="btn btn-travv">
                                    <img src="../assets/Icons/Calendar.svg" style="margin-top: -14px;height: 54px;" />
                                </label>
                            </div> <button type="button" class="btn btn-lg cont-btn">Continue</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Sliderarea',
        data() {
            return {
                Experiences : false,
                Restaurants : false,
                Destination : false
            }
        },
        methods: {
            toggleRestColor: function(event) {
                console.log(event.target.dataset.ExpType)
                if(event.target.dataset.ExpType == "tours"){
                    this.Experiences = true
                    this.Restaurants = true
                    this.Destination = false
                } else if (event.target.dataset.ExpType == "restaurants") {
                    this.Experiences = false
                    this.Restaurants = true
                    this.Destination = false

                } else if (event.target.dataset.ExpType == "places") {
                    this.Experiences = false
                    this.Restaurants = true
                    this.Destination = false

                }
                // this.Experiences.Destination = event.target.dataset.Destination;

            }
        }
    }
</script>

<style>
    div#main_slider {
        background: url('../assets/hero_image.png') no-repeat;
        background-size: cover;
        height: 100vh;
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
    }

    .cont-btn:focus {
        box-shadow: none;
    }
    .main_slider_container{
        padding-left: 191px;
    }
    .whereWould {
        height: 100%;
        width: 160%;
        border: none;
        background-color: #ffffff;
        font-size: 18px;
        font-weight: bolder;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #555555;
        border-radius: 0.5rem;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        padding: 0 0 0 20px;
        outline: none;
    }
    .whereWould::placeholder {
      color: red;
      color: #555555;
      font-weight: bolder;
    }
</style>