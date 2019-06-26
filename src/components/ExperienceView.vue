<template>
    <div class="ExperienceView">
        <vue-headful
            title = "Experience | TRAV CP"
            description="Description of TRAV CP"
        />
        <Navbar></Navbar>
         <div id='vrview' v-if="experience.vr_video">
                <iframe allowfullscreen="true" scrolling="no" width="100%" height="400" style="border: 0px;" :src="'https://storage.googleapis.com/vrview/2.0/index.html?&images='+ experience.vr_video + '&is_stereo=true'">
                </iframe>
            </div>
        <section class="project_area nagoya" v-if="!experience.vr_video && experience.images && experience.images.length > 0" :style="{background: 'url(' + experience.images[0].image + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}" style="background-repeat: no-repeat;background-size: cover;background-position: center;">
            <div class="container">
            </div>
            <!-- <div class="" style="position:absolute; top:5px; right:5px">
                <button type="button" style="padding:7px; border-radius:7px; border:none; box-shadow: darkgrey 1px 4px 3px 2px;" @click="postFavoriteExeperience(experience.id)"><i class="fa fa-heart"></i> Favourite</button>
            </div> -->
        </section>
        <section class="project_area default_background" style="background-repeat: no-repeat;background-size: cover;background-position: center;" v-else>
            <div class="container">
            </div>
        </section>
        <div class="container">
        <div class="row">
            <div class="col-md-12">
                
            <!-- <div id='vrview'>
                <iframe allowfullscreen="true" scrolling="no" width="100%" height="400" style="border: 0px;" src="https://storage.googleapis.com/vrview/2.0/index.html?&images=https://localhost:8080/vr/converted.jpg&is_stereo=true">
                </iframe>
            </div> -->
            </div>
            <div class="col-md-12" style="text-align: center;">
                <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
                <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
            </div>
        </div>
        <br>
        <div class="digital_feature blog_part">
            <div class="row">
                <div class="col-lg-7" style="text-align: center;" v-if="loading.getExperienceById">
                    <Circle9 />
                </div>
                <div class="col-sm-6 col-md-7 col-lg-7 blog_content" v-else>
                    <h3 style="text-transform: capitalize;;font-size: 30px;">
                        {{ experience.title }} | {{ experience.state }} &nbsp; &nbsp; 
                        <a href="javascript:void(0)" v-if="!FavoritesExperience" title="Add to favourites" style="color: #f81894" @click="postFavoriteExeperience(experience.id)"><i class="far fa-heart"></i>
                            
                        </a>
                        <a href="javascript:void(0)" v-else title="Remove from favourites" style="color: #f81894" @click="removeFavoriteExeperience(experience.id)">
                            <i class="fa fa-heart"></i>
                        </a>
                    </h3>
                    <h1 style="text-transform: capitalize;font-size: 24px;margin-bottom: 10px;">{{ experience.city }}</h1>
                    
                    <router-link :to="'/merchant/profile/' + experience.merchant_id + '/' + experience.contact_email">
                        <h6>
                            <!-- <span style="color: #f81894;">By</span> {{ experience.contact_email }} -->
                        </h6>    
                    </router-link>
                    
                    <h5 style="text-transform: capitalize;"><br>{{ experience.location }}</h5>
                    <p v-if="experience.description">
                        {{ experience.description }}
                    </p>

                    <h5 v-if="experience.about_merchant"><br>About Merchant</h5>
                    <p v-if="experience.about_merchant">
                        {{ experience.about_merchant }}
                    </p>
                    <h5 v-if="experience.offerings">
                    <br>Payment Covers</h5>
                    <p v-if="experience.offerings">{{ experience.offerings }}</p>  
                    
                    
                    <h5 v-if="experience.dining_options"><br>Dining Options</h5>
                    <p v-if="experience.dining_options">{{ experience.dining_options }}</p>  

                    
                    <h5 v-if="experience.drink_types"><br>Drink Options</h5>
                    <p v-if="experience.drink_types">{{ experience.drink_types }}</p>  

                    
                    <h5 v-if="experience.extra_perks"><br>Extra Perks</h5>
                    <p v-if="experience.extra_perks">{{ experience.extra_perks }}</p>  

                    
                    <h5 v-if="experience.has_outdoor_sitting"><br>Has Outdoor Sitting</h5>
                    <p v-if="experience.has_outdoor_sitting">{{ experience.has_outdoor_sitting }}</p>  

                    
                    <h5 v-if="experience.history"><br>History</h5>
                    <p v-if="experience.history">{{ experience.history }}</p>  

                    
                    <h5 v-if="experience.meetup_location"><br>Meetup Location</h5>
                    <p v-if="experience.meetup_location">{{ experience.meetup_location }}</p>   

                    
                    <h5 v-if="experience.tourist_expected_items"><br>Tourist Expected Items</h5>
                    <p v-if="experience.tourist_expected_items">{{ experience.tourist_expected_items }}</p>  
                    <br>
                    <!-- <h6 style="margin-left:20px;"><b>Rate the Experience</b></h6> <br> --> 
                </div>
                <div class="col-sm-6 col-md-5 col-lg-5 sidebar-pd">
                    <div class="travv-sidebar" style="height: auto;">
                        <div class="container">
                            <div class="row sidebar_text">

                                <!--<div class="book_btn" style="padding-top: 10px;text-align: center;">-->
                                    <!--View all Photos-->
                                <!--</div>-->
                                <div class="col-md-12" style="position: absolute;text-align: right;right: 30px;">

                                    <img v-if="experience.security == 'secure'" src="../assets/travv/protected.png" width="56" />
                                    <img v-else src="../assets/travv/caution.png" width="56" />

                                </div>
                                <div class="col-md-12">
                                    <h3>Experience Type</h3>
                                    <!-- v-for="experience_type in experience_types" v-if="experience_type && experience_type.id == experience.experiences_type_id" -->
                                    <h5 style="text-transform: capitalize;" v-if="experience.experience_type">
                                        {{ experience.experience_type }}
                                    </h5>
                                </div>
                                <div class="col-md-12" v-if="experience.country">
                                    <h3>Country</h3>
                                    <h5>{{ experience.country }}</h5>
                                </div>
                                <div class="col-md-12" v-if="experience.duration">
                                    <h3>Duration</h3>
                                    <h5>{{ experience.duration }} hours</h5>
                                </div>
                                <div class="col-md-12" v-if="experience.dollar_price">
                                    <h3>Average Cost</h3>
                                    <h5>$ {{ experience.dollar_price }}</h5>
                                </div>

                                <div class="col-md-12" v-if="experience.number_admittable">
                                    <h3>Number Admittable</h3>
                                    <h5>{{ experience.number_admittable }}</h5>
                                </div>
                                
                                <div class="col-md-12" v-if="experience.language">
                                    <h3>Language</h3>
                                    <h5>{{ experience.language ? experience.language : 'en' }}</h5>
                                </div>
                                <!-- <div class="col-md-12 booking-action" v-if="experience.experience_type == 'restaurants'">
                                    <button type="submit" class="book_btn">
                                        <span v-if="isLoading || loading">
                                            <img style="height: 20px;" src="../assets/loader_rolling.gif" />
                                        </span>
                                        <span v-else>
                                            View Menu
                                        </span>
                                    </button>
                                </div> -->
                                <div class="col-md-12 booking-action">
                                    <form @submit.prevent="bookExperience" v-if="!checkBookingStatus">
                                        
                                        <div v-if="experience.experience_type == 'sourvenirs'">
                                            <input type="text" name="deliveryAddress" v-validate="'required|min:5' ? experience.experience_type == 'sourvenirs' : ''" v-model="delivery_address" placeholder="Address you'd like the item delivered to" class="form-control">
                                            <span>{{ errors.first('deliveryAddress') }}</span>
                                        </div>
                                        <date-picker name="date" v-validate="experience.experience_type == 'restaurants' ? 'required' : ''" v-model="time" range :shortcuts="shortcuts" :lang="lang" v-else></date-picker>
                                        <span>{{ errors.first('date') }}</span>
                                        <!-- <p>Start Date <input id="datepicker" v-model="start_date" type="date" width="276" /> -->
                                        <!-- <date-picker v-model="time" range :shortcuts="shortcuts" :lang="lang"></date-picker> -->
                                        <!-- <p>End Date <input id="datepicker2" v-model="end_date" type="date" width="276" /></p> -->
                                        <div class="row">
                                            <div class="col-md-12" style="">
                                                <div class="row">
                                                    <div :class="[experience.experience_type == 'restaurants' ? 'col-xs-6 col-md-6' : 'col-xs-6 col-md-6']" style="margin: auto">
                                                        <button type="submit" class="book_btn btn-block" :disabled="loading2">
                                                            <span v-if="loading2">
                                                                <img style="height: 20px;" src="../assets/loader_rolling.gif" />
                                                            </span>
                                                            <span v-else>
                                                                Book Now
                                                            </span>
                                                        </button>
                                                    </div>
                                                    
                                                    <div class="col-xs-6 col-md-6" v-if="experience.experience_type == 'restaurants'">
                                                        <button type="button" class="book_btn btn-block"  @click="gotoMenu">View Menu</button>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    You won't be charged yet
                                                    <a href="javascript:void(0)" class="dropdown-item" @click="chatWithMerchant">Chat with merchant</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <date-picker v-model="time1" :first-day-of-week="1"></date-picker> -->
                                    </form>
                                    <div class="book_btn" style="padding-top: 10px;text-align: center;" v-else>
                                        Booked
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-md-12">
                    <h5>Get Direction</h5>
                </div>
                <div class="form-group col-md-12">
                    <input v-model='vm.place.formatted_address' v-gmaps-searchbox=vm placeholder="Enter your current location" class="form-control" style="border: 1px solid #000; border-radius: 3px;padding: 10px;">
                    <!-- <button class="btn btn-primary" @click="getDirection">Get Direction</button> -->
                </div>
                <div class="col-md-12">
                    <iframe v-if="vm.place.formatted_address" height="450" frameborder="0" style="border:0;width:100%;"
:src="'https://www.google.com/maps/embed/v1/directions?origin=' + vm.place.formatted_address.replace(/\s+/g, '+') + '&destination=' + experience.location + '&key=AIzaSyDgnbjMxlLW2BHBPJ4-iFsX_aB9jEHBFCg'" allowfullscreen></iframe>

                        <iframe v-else height="450" frameborder="0" style="border:0;width:100%;"
:src="'https://www.google.com/maps/embed/v1/search?q=' + experience.location + '&key=AIzaSyDgnbjMxlLW2BHBPJ4-iFsX_aB9jEHBFCg'" allowfullscreen></iframe>
                </div>
            </div> <br><br>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        
                    </div>
                    <div class="col-md-5">
                        <div class="average_review_section">
                            <h2>Average Rating <b>{{ experience.rating }}</b></h2>
                            <h5>Based on {{ reviews.meta ? reviews.meta.total : 0}} ratings</h5>
                            <star-rating :rating="parseFloat(experience.rating)" :read-only="true" :increment="0.01" :star-size="32"></star-rating>
                            <br>
                            <div class="row">
                                <div class="col-2"><p class="star_range">5</p></div>
                                <div class="col-8">
                                    <div class="progress" style="height: 2.0rem;">
                                        <!-- { color: activeColor, fontSize: fontSize + 'px' } -->
                                      <div class="progress-bar" role="progressbar" :style="{ width: (ratings[5] / totalRatingCount) * 100 + '%', backgroundColor: '#f81894' }" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" v-if="ratings"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings ? ratings[5] : 0 }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">4</p></div>
                                <div class="col-8">
                                    <div class="progress" style="height: 2.0rem;">
                                      <div class="progress-bar" role="progressbar" :style="{ width: (ratings[4] / totalRatingCount) * 100 + '%', backgroundColor: '#f81894' }" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" v-if="ratings"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings ? ratings[4] : 0 }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">3</p></div>
                                <div class="col-8">
                                    <div class="progress" style="height: 2.0rem;">
                                      <div class="progress-bar" role="progressbar" :style="{ width: (ratings[3] / totalRatingCount) * 100 + '%', backgroundColor: '#f81894' }" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" v-if="ratings"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings ? ratings[3] : 0 }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">2</p></div>
                                <div class="col-8">
                                    <div class="progress" style="height: 2.0rem;">
                                      <div class="progress-bar" role="progressbar" :style="{ width: (ratings[2] / totalRatingCount) * 100 + '%', backgroundColor: '#f81894' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" v-if="ratings"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings ? ratings[2] : 0 }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2"><p class="star_range">1</p></div>
                                <div class="col-8">
                                    <div class="progress" style="height: 2.0rem;">
                                      <div class="progress-bar" role="progressbar" :style="{ width: (ratings[1] / totalRatingCount) * 100 + '%', backgroundColor: '#f81894' }" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" v-if="ratings"></div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <p class="star_range">{{ ratings ? ratings[1] : 0 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="gst_review_content">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2 style="text-align: left;">Reviews</h2>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn" style="border: 2px solid #000;height: 37px;"  data-toggle="modal" data-target="#writeAReviewModal"><i class="fa fa-pencil" style="color: #000;"></i> Write a Review</button>
                                <div class="modal fade" id="writeAReviewModal" tabindex="-1" role="dialog" aria-labelledby="writeAReviewModal" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Write a Review</h5>
                                        <button type="button" class="close" style="width: 40px;" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                      </div>
                                      <div class="modal-body">
                                        
                                        <form  @submit.prevent="rateExperienceSubmit" v-if="auth">
                                            <div class="row">
                                                <!-- div.row -->
                                                <div class="col-md-12" style="margin-bottom: 40px;">
                                                    <h6><b>Rate the Experience</b></h6> 
                                                    <p class="alert alert-warning" v-if="!checkBookingStatus" style="margin:0;">To rate this Experience you need to book first</p>
                                                    <div id="reviewStars-input" @click="toggleRatingBox" v-else>
                                                        <input id="star-4" value=5 v-model="reviewStar" type="radio" name="reviewStars"/>
                                                        <label title="gorgeous" for="star-4"></label>

                                                        <input id="star-3" value=4 v-model="reviewStar" type="radio" name="reviewStars"/>
                                                        <label title="good" for="star-3"></label>

                                                        <input id="star-2" value=3 v-model="reviewStar" type="radio" name="reviewStars"/>
                                                        <label title="regular" for="star-2"></label>

                                                        <input id="star-1" value=2 v-model="reviewStar" type="radio" name="reviewStars"/>
                                                        <label title="poor" for="star-1"></label>

                                                        <input id="star-0" value=1 v-model="reviewStar" type="radio" name="reviewStars"/>
                                                        <label title="bad" for="star-0"></label>
                                                    </div>
                                                </div>
                                                 
                                                <div class="col-md-12" style="margin: auto;">
                                                    <h6><b>Rate Security of the Experience</b></h6>  
                                                    <div id="securityStars-input" @click="toggleSecurityBox">
                                                        <input id="star-2-4" value=5 v-model="securityStar" type="radio" name="securityStars"/>
                                                        <label title="gorgeous" for="star-2-4"></label>

                                                        <input id="star-2-3" value=4 v-model="securityStar" type="radio" name="securityStars"/>
                                                        <label title="good" for="star-2-3"></label>

                                                        <input id="star-2-2" value=3 v-model="securityStar" type="radio" name="securityStars"/>
                                                        <label title="regular" for="star-2-2"></label>

                                                        <input id="star-2-1" value=2 v-model="securityStar" type="radio" name="securityStars"/>
                                                        <label title="poor" for="star-2-1"></label>

                                                        <input id="star-2-0" value=1 v-model="securityStar" type="radio" name="securityStars"/>
                                                        <label title="bad" for="star-2-0"></label>
                                                    </div><br>
                                                </div>
                                            </div>  <br><br>
                                            <div class="form-group col-md-12">
                                                <h6>Review this Experience</h6>
                                                <!-- <label>Rate this Experience</label> -->
                                                <input required type="text" class="form-control edit-prof-input" v-model="rate_this_exp_text">
                                                <button type="submit" class="book_btn">Rate</button>
                                            </div>
                                        </form>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="guest_review_" v-for="review in reviews.data" v-if="!review.video">
                                        <div class="row">
                                            <div class="col-2" style="text-align: center;">
                                                <img :src="review.user.profile_image ? review.user.profile_image.image : require('@/assets/avatar.png')" class="rounded-circle" style="height: 50px;display: inline-block;">
                                            </div>
                                            <div class="col-8">
                                                <p class="" style="font-family: MuseoSans;font-weight: 100;">{{ review.user_name }}</p>
                                                <p class="review_rev" style="margin-bottom: 10px">
                                                    <img v-for="i in review.rating" :key="i.id" src="../assets/review-icon.svg" alt="Review icon" style="height: 15px;">
                                                </p>
                                                <p class="review_date">{{ review.review_body }}</p>
                                            </div>
                                        </div> <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <br> <br>    

                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-9">
                                <h3>Video Reviews</h3>                             
                            </div>
                            <div class="col-md-3">

                                <button type="button" class="btn btn-primary" style="background: #f81894;border:#f81894;"  data-toggle="modal" data-target="#ReviewVideoModal">
                                  Make 5 seconds video review
                                </button>
                            </div>
                        </div>
                        <div class="row" v-if="reviews.data"> 
                            <div class="col-md-4" v-for="review in reviews.data.slice(0, 3)" v-if="review.video"> 
                                <video style="width: 100%" controls>
                                  <source :src="review.video.upload_data" type="video/mp4">
                                  <source :src="review.video.upload_data" type="video/ogg">
                                  <source :src="review.video.upload_data" type="video/webm">
                                  <source :src="review.video.upload_data" type="video/mkv">
                                  Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div><br> <br>    
                <div class="row">
                    <div class="col-md-12" style="margin-bottom: 20px">
                        <h3>
                            Similar Experience
                        </h3>
                    </div>
                    <br>

                    <div class="col-md-3" v-for="data in getSimilarExperienceData.slice(0, 4)" style="margin-bottom: 10px">
                       <a :href="'/experience/'+ data.id + '/' + data.title.toString().toLowerCase().replace( /\s/g, '-')">
                           <div class="featured-card card" style="overflow: hidden;">
                               <img v-if="data.images.length" style="width: 100%;object-fit: cover;height:280px;" :src="data.images[0].image" class="card-img-top featured-card-img" alt="...">
                               <img v-else src="../assets/osaka.png" class="card-img-top featured-card-img" style="width: 100%;object-fit: cover;height: 280px;" alt="...">
                               <div class="featured-card-footer featured_places_overlay_active" style="margin-top: -80px;padding-top: 5px;padding-bottom: 0;">
                                   <div class="row" style="text-transform: capitalize;">
                                       <div class="col-12">
                                           {{ data.city }}
                                       </div>
                                       <div class="col-6">
                                           <p>{{ data.rating }} <i class="fa fa-star"></i></p>
                                       </div>
                                       <div class="col-6 text-center" @click="postFavoriteExeperience(data.id)">
                                           <p>{{ data.number_admittable }} <i class="fa fa-heart"></i></p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </a>
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
    import DatePicker from 'vue2-datepicker';
    import Footer from '@/components/Footer.vue';
    import axios from 'axios'
    import { Circle9 } from 'vue-loading-spinner'
    import {
        mapState,
        mapActions,
        mapGetters
    } from 'vuex';
    import VueGallerySlideshow from 'vue-gallery-slideshow';
    import StarRating from 'vue-star-rating'
    import Axios from 'axios'
    // import Datepicker from 'vuejs-datepicker';
    // import format from 'date-fns/format'

    export default {
        name: 'ExperienceView',
        data() {
            return {
                images: [
                ],
                index: null,
                ratings: [],
                current_location: null,
                rate_this_exp_text: "",
                start_date: '4/12/2019',
                end_date: '6/12/2019',
                dateFormat: 'D MMM',
                dateOne: '',
                dateTwo: '',
                time: '',
                FavoritesExperience: [],
                reviewStar: null,
                toggleRating: false,
                loading2: false,
                checkBookingStatus: null,
                reviews: [],
                securityStar: null,
                delivery_address: null,
                getSimilarExperienceData: [],
                vm: {
                    searchPlace: '',
                    location: {},
                    place: {formatted_address: ''}
                },
                // custom lang
//                 toggleSecurityBox
                securityRating: false,
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
                }
            }
        },
        watch: {
          vm: function() {
            if(this.vm.place){
                this.vm.searchPlace = this.vm.place.formatted_address                
            }
          }
        },
        components: {
            Navbar,
            DatePicker,
            Circle9,
            VueGallerySlideshow,
            StarRating
        },
        methods: {
            ...mapActions(['getExperienceById']),
            ...mapActions(['bookingExperience']),
            ...mapActions(['rateExperience']),
            ...mapActions(['getMyBookings']),
            ...mapActions(['getExperienceTypes']),
            getSimilarExperiences(){
                axios.get(`${this.$store.state.API_BASE}/merchants/${this.experience.merchant_id}/experiences`).then(response => {
                    console.log(response.data.data)
                    this.getSimilarExperienceData = response.data.data
                    this.getSimilarExperienceData.shift()
                    this.loading2 = false;
                    if(response.data.data.length < 3) {
                        axios.get(`${this.$store.state.API_BASE}/experiences?state=${this.experience.state}`).then(response => {
                            this.getSimilarExperienceData = response.data.data
                        }).catch(error => {
                            console.log(error.response.data)
                        })
                    }
                }).catch(err => {
                    this.loading2 = false;
                    console.log(err);
                });
            },
            getDirection(){
                console.log('Hi There')
                if(this.vm.place) {
                    document.getElementsByTagName('iframe')[0].src = 'https://www.google.com/maps/embed/v1/directions?origin=' + this.vm.place.formatted_address + '&destination=' + this.experience.location.replace(/\s+/g, '+') + '&key=AIzaSyDgnbjMxlLW2BHBPJ4-iFsX_aB9jEHBFCg'
                }
            },
            rateExperienceSubmit(){
                if(this.auth) {
                    if (this.toggleRating) {
                        // user_id
                        // experience_id
                        // review_body
                        this.rateExperience({
                            "user_id": this.auth.user.id,
                            "experience_id": this.experience.id,
                            "review_body": this.rate_this_exp_text,
                            "rating": this.reviewStar,
                            "security_rating": this.securityStar
                        }).then(res => {
                            this.$noty.success("Your review has been submitted");
                            this.toggleRating = false;
                            this.rate_this_exp_text = "";
                            this.getExperienceById(this.$route.params['id']);
                            window.location.reload(1);
                        });
                        
                        
                    } 
                } else {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                }
                
            },
            bookExperience: function () {
                
                if(this.auth) {
                    console.log("in Booking")
                    this.$validator.validate().then(valid => {
                        console.log(valid + " was returned")
                        if (valid) {
                            console.log(valid);
                            // if (this.time[0]) {
                                if(this.delivery_address) {
                                    let data = {
                                        // food_menu_ids: ["2", "3", "4"],
                                        // price: this.experience.naira_price,
                                        merchant_id: this.experience.merchant_id,
                                        user_id: this.auth.user.id,
                                        experience_id: this.$route.params.id,
                                        // start_date: this.formatDate(this.time[0]),
                                        // end_date: this.formatDate(this.time[1]),
                                        address: this.delivery_address
                                    };
                                    let requestHeaders = {
                                    headers: { Authorization: "Bearer " + this.$store.state.auth.access_token }
                                    };
                                    console.log('Hi 0n souvernirs ')
                                    console.log(this.experience.experience_type)
                                    // console.log(this.formatDate(this.time[0]));
                                    this.bookingExperience(data).then(response => {
                                        console.log(response)
                                        axios.post(`${this.$store.state.API_BASE}/cart/add`,{
                                                "booking_id": response.id
                                            }, requestHeaders).then(response => {
                                                console.log(response.data.data);
                                            }).catch(error => {
                                                console.log(error)
                                            })
                                        this.checkIfBooked()
                                        this.ratingInfo()
                                        this.$noty.success("This experience has been added to your cart")
                                    });
                                } else {
                                            console.log(this.experience.experience_type)
                                    if(this.time[0]){

                                            let data = {
                                                // food_menu_ids: ["2", "3", "4"],
                                                price: this.experience.naira_price,
                                                merchant_id: this.experience.merchant_id,
                                                user_id: this.auth.user.id,
                                                experience_id: this.$route.params.id,
                                                start_date: this.formatDate(this.time[0]),
                                                end_date: this.formatDate(this.time[1]),
                                                // delivery_address: this.delivery_address
                                            };
                                            let requestHeaders = {
                                            headers: { Authorization: "Bearer " + this.$store.state.auth.access_token }
                                            };
                                            console.log('Experience Type')
                                            console.log(this.experience.experience_type)
                                            if(this.experience.experience_type == 'restaurants'){
                                                console.log("in Resturants")
                                                axios.post(`${this.$store.state.API_BASE}/bookings`, data, requestHeaders)
                                                        .then(response => {
                                                            this.checkIfBooked()
                                                            this.$noty.success("Restaurant Has been added to booking")
                                                            console.log(response.data.data)
                                                        })
                                                        .catch(error => {
                                                            this.$noty.error("Something Went Wrong.")
                                                            console.log(error.response.data)
                                                        })
                                            } else {
                                                // console.log(this.formatDate(this.time[0]));
                                                this.bookingExperience(data).then(response => {
                                                    console.log(response)
                                                    axios.post(`${this.$store.state.API_BASE}/cart/add`,{
                                                            "booking_id": response.id
                                                        }, requestHeaders).then(response => {
                                                            console.log(response.data.data);
                                                        }).catch(error => {
                                                            console.log(error)
                                                        })
                                                    this.checkIfBooked()
                                                    this.$noty.success("This experience has been added to your cart")
                                                });
                                            }
                                        } else {
                                            this.$noty.error("Please enter a check in and check out date");
                                        }
                                    }
                                console.log("in Booking")
                                
                            // } else {
                            //     this.$noty.error("Please enter a check in and check out date");
                            // }
                        }
                    }).catch(err =>  {
                        console.log("A validation error occured")
                    });
                    

                } else {
                    console.log("in Booking")
                    this.$noty.error("Oops, You need to Login to Book and Experience");
                }
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
            toggleRatingBox(){
                if(this.auth) {
                    this.toggleRating = true;
                } else {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                }
            },
            toggleSecurityBox() {
                if(this.auth) {
                    // if (this.checkBookingStatus) {
                        this.toggleRating = true
                        this.securityRating = true
                    // } else {
                        // this.$noty.warning("You need to book this Expereince to rate");
                    // }
                } else {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                }
            },
            ratingInfo() {
                this.loading2 = true;
                // let requestHeaders = {
                //     headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                // };1
                axios.get(`${this.$store.state.API_BASE}/experiences/${this.$route.params.id}/reviews`).then(response => {
                    
                    this.ratings = response.data.rating_info
                    this.loading2 = false;
                    this.reviews = response.data;
                }).catch(err => {
                    this.loading2 = false;
                    console.log(err);
                })
            },
            cofirmForFavorite(){
                axios.get(`${this.$store.state.API_BASE}/favourites?user_id=${this.$store.state.auth.user.id}?experience_id?=${this.$route.params.id}`).then(response => {
                    
                    console.log('Favorites Data')
                    console.log(response.data.data)
                }).catch(err => {
                    // this.loading2 = false;
                    console.log(err.response.data);
                })
            },
            postFavoriteExeperience(placeId){
                this.loading = true
                if(this.auth && this.auth.access_token){
                    let data = {
                        user_id: this.auth.user.id,
                        experience_id: placeId
                    }
                    let requestHeaders = {
                        headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                    }
                    Axios.post(`${this.$store.state.API_BASE}/favourites`,
                                data,
                                requestHeaders).then(response => {
                                    console.log(response.data.data);
                                    this.loading = false
                                    this.$noty.success('Experience has been added to your Favourites list')
                                }).catch(error => {
                                    console.log(error.data)
                                    this.loading = false
                                })
                } else {
                    this.$noty.error('You need to Login to Have a Favourite Experience')
                }
            },
            checkIfBooked () {
                this.loading2 = true;
                let requestHeaders = {
                    headers: {'Authorization' : "Bearer " + this.$store.state.auth.access_token}
                };
                axios.post(`${this.$store.state.API_BASE}/bookings/exists`,{
                    experience_id: this.$route.params.id,
                    user_id: this.$store.state.auth.user.id,
                }, requestHeaders).then(response => {
                    console.log(response.data)
                    this.checkBookingStatus = response.data[0]
                    this.loading2 = false;
                }).catch(err => {
                    this.$noty.error("Oops, You need to Login to Review or Rate an Expereince");
                })
            },
            gotoMenu(){
                this.$router.push({name: "RestaurantMenu", params: {id: this.experience.id, name: this.experience.title.toString().toLowerCase().replace( /\s/g, '-')}});
                window.location.reload(1);
            },
            getUserFavorites(){
                if(this.$store.state.auth){
                    // this.loading = true;
                    Axios.get(`${this.$store.state.API_BASE}/favourites?user_id=${this.$store.state.auth.user.id}&experience_id=${this.$route.params.id}`)
                        .then(response => {
                            console.log('User Fav')
                            console.log(response.data.data);
                            this.FavoritesExperience = response.data.data
                            this.loading = false
                        }).catch(error => {
                            console.log(err.data);
                            // this.loading = false;
                    })    
                    } else {
                        this.$noty.error("Need to Login to Add Favorites")
                        this.$router.push("Login in to add to favorites")
                    } 
            },
            cancelUserFavorites(){
                axios.delete(`${this.$store.state.API_BASE}/`)
            },
            getMerchantExtras(){
                axios.get(`${this.$store.state.API_BASE}/merchant/extras/${this.experience.merchant_id}`)
                     .then(response => {
                        console.log(response.data.data)
                     }).catch(error => {
                        console.log(error.response.data)
                     })
            },
            chatWithMerchant(){
				this.$router.push({name: "Messages", params: {recipient: this.experience.merchant_id}});
			}
        },
        computed: {
            ...mapState(["experience_types"]),
            ...mapState(['experience']),
            ...mapState(['loading']),
            ...mapState(['auth']),
            ...mapState(['bookings']),
            totalRatingCount() {
                // if (this.ratings != null && this.ratings.length > 0){
                    return this.ratings[5] + this.ratings[4] + this.ratings[3] + this.ratings[2] + this.ratings[1]
                // }
                // return 0;
            }

        },
        created: function () {
            this.getUserFavorites()
            this.getExperienceById(this.$route.params['id']).then(response => {
                console.log('In here already')
                console.log(response)
                console.log(this.experience)
                for(let i = 0; i <= this.experience.images.length;i++){
                    // console.log(this.experience.images[i].image)
                    if(this.experience.images.length > 1){
                        this.images.push(this.experience.images[i].image) 
                    }
                }
            });
            // if(this.experience){

            // }
            // this.getMyBookings();
            this.bookings.forEach(book => {
                // console.log(book);
            })
            
            this.ratingInfo()
            this.getExperienceTypes();
            if(this.$store.state.auth) {
                this.checkIfBooked()                
            }
            this.getSimilarExperiences()
            this.loading2 = false;
            this.getUserFavorites()
            player.on('finishRecord', function() {
                // the blob object contains the recorded data that
                // can be downloaded by the user, stored on server etc.
                console.log('finished recording:', player.recordedData);
                // upload recorded data
                upload(player.recordedData);
            });
            let data = JSON.parse(localStorage.getItem('auth'))
            let exp_id = this.$route.params.id
            let _this = this
            function upload(blob) {
                let serverUrl = 'https://travvapi.herokuapp.com/api/reviews';
                let formData = new FormData();
                formData.append('video', blob, blob.name);
                formData.append('user_id', data.user.id);
                formData.append('experience_id', _this.$route.params.id);
                formData.append('rating', '0');
                console.log('upload recording ' + blob.name + ' to ' + serverUrl);
                // start upload
                axios.post(serverUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization' : `Bearer ${data.access_token}`
                }
                }).then(
                    (response) => {
                        console.log(response.data.data)
                        window.location.reload(1);
                    }
                ).catch(
                    error => console.error(error.response.data)
                );
            }
        },
        mounted: function(){
        }
    }
</script>
<style scoped>
.rounded-circle {
    border-radius: 50%!important;
    height: 50px;
    width: 50px;
}
.vue-star-rating-star {
    overflow: visible!important;
    height: 40px;
    width: 40px;
}
</style>

<style>
.vue-star-rating-rating-text{
    display: none;
}
.image {
    width: 100px;
    height: 100px;
    background-size: cover;
    cursor: pointer;
    margin: 5px;
    border-radius: 3px;
    border: 1px solid lightgray;
    object-fit: contain;
}
@media only screen and (max-width: 576px) {
    .project_area {
        margin: 10px 10px 42px 10px !important;
    }
    .digital_feature.blog_part {
        margin: 0px 10px 42px 10px !important;
        color: #555 !important;
    }
    .sidebar-pd{
        /* padding-left: 0 !important; */
    }
    .guest_review {
        display: none;
    }
    .guest_review_for_mobile {
        display: block !important;
        border-top: 2px solid #eee;
        height: 150px;
        padding-top: 20px;
    }
    
    .average_review_section h2 {
        font-weight: bolder;
        font-size: 1.2rem;
    }
    .average_review_section h5 {
        color: #776d6d;
        font-weight: bolder;
        font-size: 1rem
    }
    .gst_review_content h2 {
        font-weight: bolder;
        font-size: 1.5rem;
    }
    .star_range {
        font-size: 1.1rem;
        font-weight: bolder;
        margin-bottom: 5px;
    }
    .progress {
        height: 2rem;
    }
    .guest_review_for_mobile{
        display: none;
    }
    /* .sidebar-pd{
        padding-left: 80px;
    } */
    .nagoya{
        max-height:200px;
        /* background-size:100% 100%; */
        height:200px;
    }
}

@media only screen and (max-width: 800px) {
    .booking-action{
        position:fixed;
        bottom:0;
        background:white;
        z-index:1000;
        width:100%;
        margin:unset;
        padding-top:15px;
        padding-bottom:15px;
        padding-right:10px;
        padding-left:10px;
        left:0;
        right:0;
        border-top:2px solid rgb(235, 235, 235);
    }
    .booking-action button.book_btn,a.book_btn{
        padding: 10px 15px;
        /* width: auto; */
        font-size: 14px;
    }
    .booking-action .mx-datepicker.mx-datepicker-range {
        width: 100%;
    }
}
.average_review_section h2 {
    font-weight: bolder;
    font-size: 1.2rem;
}
.average_review_section h5 {
    color: #776d6d;
    font-weight: bolder;
    font-size: 1rem
}
.gst_review_content h2 {
    font-weight: bolder;
    font-size: 1.5rem;
}
.star_range {
    font-size: 1.1rem;
    font-weight: bolder;
    margin-bottom: 5px;
}
.progress {
    height: 2.5rem;
}
.guest_review_for_mobile{
    display: none;
}
/* .sidebar-pd{
    padding-left: 80px;
} */
.navbar-brand {
    color: #555 !important;
}

.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}

.navbar-brand {
    color: #555 !important;
}

.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}

.project_area {
    height: 400px !important;
    margin: 10px 88px 42px 88px;
    margin-bottom: 57px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.cover_image {
    width: 100%;
}

.default_background {
    background: url('../assets/travvap_img_default.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.project_area:before {
    background: none;
}

.digital_feature.blog_part {
    margin: 0px 88px 42px 88px;
    color: #555 !important;
}

.blog_content h1 {
    font-family: MuseoSans700 !important;
    font-size: 40px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
    margin-top: 5px;
    margin-bottom: 47px;
}

.blog_content h3 {
    font-family: MuseoSans700 !important;
    font-size: 18px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
}

.blog_content h5 {
    font-family: MuseoSans500 !important;
    font-size: 22px;
    /* font-weight: 500; */
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 10px;
}

.blog_content p {
    /* font-family: MuseoSans700 !important; */
    font-size: 16px !important;
    /* font-weight: 500; */
    font-style: normal !important;
    font-stretch: normal !important;
    line-height: normal !important;
    letter-spacing: normal !important;
    color: #555555 !important;
    margin-bottom: 10px !important;

    line-height: 1.5em !important;
    text-align: justify !important;
}

.travv-sidebar {
    border: 1px solid rgb(238, 230, 230);
    background: #FFF !important;
    width: 100%;
    height: 475px;
    padding: 30px 0 30px 25px !important;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.2);
}

.travv-sidebar_text h3 {
    font-family: MuseoSans500 !important;
    font-size: 18px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #f81894;
}

.travv-sidebar_text h5 {
    font-family: MuseoSans500 !important;
    font-size: 16px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #555 !important;
    margin-bottom: 24px;
}

.searchbar {
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
}

.search_input,
.searchbar>.search_input {
    width: 255px;
    height: 100%;
    color: #000;
    padding: 11px 0 11px 29px;
    transition: width .4s linear;
    font-size: 20px;
    margin-left: 25px;
    border-radius: 8px;
    border: solid 1px #979797;
    border-radius: 8px 0 0 8px;
}

.search_input {
    color: #fff;
    border: 0;
    outline: 0;
    background: 0 0;
    caret-color: #000;
}

/* .searchbar>.search_input {
    caret-color: red
} */

input.search_input::placeholder {
    color: #555;
}

input::-webkit-calendar-picker-indicator {
    display: none
}

.searchbar>.search_icon {
    background: #f81894;
    width: 59px;
    height: 47px;
    border-radius: 0 8px 8px 0;
}

.search_icon {
    height: 100%;
    width: 78px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: none
}

.review_content h4 {
    font-family: MuseoSans500 !important;
    font-size: 35px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 49px;
}

.guest_review {
    border-top: 2px solid #eee;
    height: 150px;
    padding-top: 20px;
}

.guest_review_cont h4 {
    font-family: MuseoSans500 !important;
    font-size: 18px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 30px;
}

.guest_review_cont p {
    font-family: MuseoSans !important;
    font-size: 13px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
}

.review_name {
    font-family: MuseoSans !important;
    font-size: 16px !important;
    font-weight: 100;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 15px;
}

.review_date {
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
    margin-bottom: 15px;
}

.review_rev {
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
}
.guest_review_pic{
    width: 100%;
    height: 120px;
    background: url('../assets/avatar.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
@media only screen and (max-width: 576px) {
    .project_area {
        margin: 121px 10px 42px 10px;
    }
    .digital_feature.blog_part {
        margin: 0px 10px 42px 10px;
        color: #555 !important;
    }
}
.mx-datepicker.mx-datepicker-range {
    /* width: 250px; */
    width: 100%;
}
.book_btn {
    margin-top: 14px;
    background: #F81894;
    border: none;        
    font-family: MuseoSans700;
    font-size: 16px;
    /* width: 130px; */
    height: 45px;
    border-radius: 5px;
    background-color: #f81894;
    color: #FFF;
    cursor: pointer;
}

#reviewStars-input input:checked ~ label, #reviewStars-input label, #reviewStars-input label:hover, #reviewStars-input label:hover ~ label {
  background: url('http://positivecrash.com/wp-content/uploads/ico-s71a7fdede6.png') no-repeat;
}

#reviewStars-input {
  
  /*fix floating problems*/
  overflow: hidden;
  *zoom: 1;
  /*end of fix floating problems*/
  
  position: relative;
  float: left;
}

#reviewStars-input input {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  
  width: 43px;
  height: 40px;
  
  position: absolute;
  top: 0;
  z-index: 0;
}

#reviewStars-input input:checked ~ label {
  background-position: 0 -40px;
  height: 40px;
  width: 43px;
}

#reviewStars-input label {
  background-position: 0 0;
  height: 40px;
  width: 43px;
  float: right;
  cursor: pointer;
  margin-right: 10px;
  
  position: relative;
  z-index: 1;
}

#reviewStars-input label:hover, #reviewStars-input label:hover ~ label {
  background-position: 0 -40px;
  height: 40px;
  width: 43px;
}

#reviewStars-input #star-0 {
  left: 0px;
}
#reviewStars-input #star-1 {
  left: 53px;
}
#reviewStars-input #star-2 {
  left: 106px;
}
#reviewStars-input #star-3 {
  left: 159px;
}
#reviewStars-input #star-4 {
  left: 212px;
}
#reviewStars-input #star-5 {
  left: 265px;
}


#securityStars-input input:checked ~ label, #securityStars-input label, #securityStars-input label:hover, #securityStars-input label:hover ~ label {
  background: url('http://positivecrash.com/wp-content/uploads/ico-s71a7fdede6.png') no-repeat;
}

#securityStars-input {
  
  /*fix floating problems*/
  overflow: hidden;
  *zoom: 1;
  /*end of fix floating problems*/
  
  position: relative;
  float: left;
}

#securityStars-input input {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  
  width: 43px;
  height: 40px;
  
  position: absolute;
  top: 0;
  z-index: 0;
}

#securityStars-input input:checked ~ label {
  background-position: 0 -40px;
  height: 40px;
  width: 43px;
}

#securityStars-input label {
  background-position: 0 0;
  height: 40px;
  width: 43px;
  float: right;
  cursor: pointer;
  margin-right: 10px;
  
  position: relative;
  z-index: 1;
}

#securityStars-input label:hover, #securityStars-input label:hover ~ label {
  background-position: 0 -40px;
  height: 40px;
  width: 43px;
}

#securityStars-input #star-2-0 {
  left: 0px;
}
#securityStars-input #star-2-1 {
  left: 53px;
}
#securityStars-input #star-2-2 {
  left: 106px;
}
#securityStars-input #star-2-3 {
  left: 159px;
}
#securityStars-input #star-2-4 {
  left: 212px;
}
#securityStars-input #star-2-5 {
  left: 265px;
}

.sidebar_text h5{
    color: #555 !important;
}
.sidebar_text h5 {
  /*font-family: MuseoSans500 !important;*/
  font-size: 16px !important;
}
.navbar-brand {
    color: #555 !important;
}
.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}
.navbar-brand {
    color: #555 !important;
}

.main_menu_area .navbar .navbar-nav li a {
    color: #555 !important;
}

.project_area {
    height: 400px !important;
    margin: 20px 88px 42px 88px;
    margin-bottom: 57px;
}

.cover_image {
    width: 100%;
}

.nagoya {
    background: url('../assets/nagoya.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.project_area:before {
    background: none;
}

.digital_feature.blog_part {
    margin: 0px 88px 42px 88px;
    color: #555 !important;
}
.blog_content h1{
    font-family: MuseoSans700 !important;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
    margin-top: 5px;
    margin-bottom: 47px;
}
.blog_content h3 {
    font-family: MuseoSans700 !important;
    font-size: 22px;
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    color: #555555;
}
.blog_content h5 {
    font-family: MuseoSans500 !important;
    font-size: 25px;
    /* font-weight: 500; */
    /* font-weight: bold; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 10px;
}
.blog_content p {
    /* font-family: MuseoSans700 !important; */
    font-size: 20px;
    /* font-weight: 500; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 10px;
}
.sidebar{
    background: #000;
    widows: 100%;
    width: 100%;
    height: 475px;
    padding: 61px 0 0 50px;
}
.sidebar_text h3{
    font-family: MuseoSans500 !important;
    font-size: 20px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #f81894;
}
.sidebar_text h5 {
    font-family: MuseoSans500 !important;
    font-size: 20px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 24px;
}
.searchbar {
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
}

.search_input,
.searchbar>.search_input {
    width: 300px;
    height: 100%;
    color: #000;
    padding: 11px 0 11px 29px;
    transition: width .4s linear;
    font-size: 20px;
    margin-left: 25px;
    border-radius: 8px;
    border: solid 1px #979797;
    border-radius: 8px 0 0 8px;
}

.search_input {
    color: #fff;
    border: 0;
    outline: 0;
    background: 0 0;
    caret-color: #000;
}

/* .searchbar>.search_input {
    caret-color: red
} */

input.search_input::placeholder {
    color: #555;
}

input::-webkit-calendar-picker-indicator {
    display: none
}

.searchbar>.search_icon {
    background: #f81894;
    width: 59px;
    height: 47px;
    border-radius: 0 8px 8px 0;
}

.search_icon {
    height: 100%;
    width: 78px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: none
}
.review_content h4 {
    font-family: MuseoSans500 !important;
    font-size: 45px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 49px;
}
.guest_review{
    border-top: 2px solid #eee;
    height: 150px;
    padding-top: 20px;
}
.guest_review_cont h4 {
    font-family: MuseoSans500 !important;
    font-size: 18px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    margin-bottom: 30px;
}
.guest_review_cont p {
    font-family: MuseoSans !important;
    font-size: 13px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
}
.review_name{
    font-family: MuseoSans900 !important;
    font-size: 12px;
    font-weight: bolder;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 15px;
}
.review_date{
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
    margin-bottom: 15px;
}
.review_rev{
    font-family: MuseoSans500 !important;
    font-size: 12px;
    /* font-weight: bolder; */
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
}
.guest_review_pic{
    width: 100%;
    height: 120px;
    background: url('../assets/avatar.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>