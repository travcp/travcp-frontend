<template>
  <div class="home">
    <vue-headful
      title="Homepage | TravCP"
      description="Find experiences, places and travel destinations"
    />
    <HomeNavbar />
    <Sliderarea class="toggle-sec-nav" />

    <section class="creative_feature_area">
      <SecondNav />
      <div>
        <div class="c_feature_box">
          <h2 class="text-lg">Prepare for your trip/experience</h2>
          <div class="container">
            <div class="row">
              <div class="col-lg-4" style="text-align: center;" @click="verifyUserType()">
                <!-- <router-link to="/dashboard/merchant/new-experience"> -->
                <!-- <img src="../assets/Icons/add-listing.svg" style="height: 125px; width: 125px;" /> -->
                <i class="fa fa-plus-circle home-large-icon"></i>
                <p class="title">Add Listing</p>
                <!-- </router-link> -->
                <!-- <div class="c_box_item">
                </div>-->
                <div></div>
              </div>
              <div class="col-lg-4" style="text-align: center;">
                <router-link to="/experiences">
                  <!-- <img src="../assets/Icons/compass.svg" style="height: 125px;" /> -->
                  <i class="far fa-compass home-large-icon"></i>
                  <p class="title">Explore Places</p>
                </router-link>

                <div></div>
              </div>
              <div class="col-lg-4 no-pad-r" style="text-align: center;">
                <router-link to="/videos">
                  <!-- <img src="../assets/travv/play.png" style="height: 125px;" /> -->
                  <i class="far fa-play-circle home-large-icon"></i>
                  <p class="title">Videos</p>
                </router-link>
                <!-- <div class="c_box_item">
                    <p class="title">Get Security Updates</p>
                </div>-->
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="digital_feature p_100">
          <div class="row">
            <div class="col-lg-8">
              <div class="d_feature_text">
                <div class="main_title">
                  <h2>Recommended for you</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <router-link to="/experiences">
                <button type="button" class="btn view_all_btn">VIEW ALL</button>
              </router-link>
            </div>
            <div class="col-lg-12">
              <div id="carousel-2" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-interval="10000">
                    <div class="recom4uimages-up mount_fuji">
                      <p>Mount Fuji</p>
                    </div>
                  </div>
                  <div class="carousel-item" data-interval="20000">
                    <div class="recom4uimages-up mount_fuji">
                      <p>Kyoto</p>
                    </div>
                  </div>
                  <div class="carousel-item" data-interval="20000">
                    <div class="recom4uimages-up mount_fuji">
                      <p>Tokyo</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="recom4uimages-up mount_fuji">
                      <p>Niigata</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="recom4uimages-up mount_fuji">
                      <p>Saporo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- // For Recommended Places -->
            <div class="col-lg-12 toggleCarousel">
              <div class="row" v-if="loading.getExperiences">
                <div class="col-md-12">
                  <content-loader
                    :height="350"
                    :width="800"
                    :speed="2"
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                  ></content-loader>
                </div>
              </div>
              <div class="row" v-if="!loading.getExperiences">
                <div class="col-md-6" style="padding-right: 5px;" v-if="getExp1">
                  <router-link :to="'/experience/'+ getExp1.id + '/' + getExp1.slug">
                    <div class="recom4uimages-up mount_fuji">
                      <p>{{ getExp1.city }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-6" style="padding-left: 5px;" v-if="getExp2">
                  <router-link :to="'/experience/'+ getExp2.id + '/' + getExp2.slug">
                    <div class="recom4uimages-up kyoto">
                      <p>{{ getExp2.city }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4" style="padding-right: 5px;" v-if="getExp3">
                  <router-link :to="'/experience/'+ getExp3.id + '/' + getExp3.slug">
                    <div class="recom4uimages-dwn tokyo">
                      <p>{{ getExp3.city }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4" style="padding-left: 5px;padding-right: 5px;" v-if="getExp4">
                  <router-link :to="'/experience/'+ getExp4.id + '/' + getExp4.slug">
                    <div class="recom4uimages-dwn niigata">
                      <p>{{ getExp4.city }}</p>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4" style="padding-left: 5px;" v-if="getExp4">
                  <router-link :to="'/experience/'+ getExp4.id + '/' + getExp4.slug">
                    <div class="recom4uimages-dwn saporo">
                      <p>{{ getExp5.city }}</p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <transition v-if="!loading.getExperiences" name="fade">
          <FeaturedEvents :events="events.slice(0, 3)" />
        </transition>-->
        <!-- <div v-if="loading.getEvents">
          <content-loader
            :height="350"
            :width="800"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="-1.38" y="46.67" rx="0" ry="0" width="800.94" height="288.69" />
            <rect x="-3.38" y="11.42" rx="0" ry="0" width="305.54" height="25.38" />
            <rect x="641.63" y="12.42" rx="0" ry="0" width="160.37" height="25.38" />
          </content-loader>
        </div>
        <FeaturedEvents v-else :events="events.slice(0, 3)" /> -->
        <FeaturedEvents :events="events.slice(0, 3)" />

        <!-- <div v-if="loading.getPlaces">
          <content-loader
            :height="350"
            :width="800"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="-1.38" y="46.67" rx="0" ry="0" width="800.94" height="288.69" />
            <rect x="-3.38" y="11.42" rx="0" ry="0" width="305.54" height="25.38" />
            <rect x="641.63" y="12.42" rx="0" ry="0" width="160.37" height="25.38" />
          </content-loader>
        </div>
        <FeaturedPlaces v-else :places="places.slice(0, 3)" /> -->
        <FeaturedPlaces :places="places.slice(0, 3)" />

        <!-- <div v-if="loading.getRestaurants">
          <content-loader
            :height="350"
            :width="800"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="-1.38" y="46.67" rx="0" ry="0" width="800.94" height="288.69" />
            <rect x="-3.38" y="11.42" rx="0" ry="0" width="305.54" height="25.38" />
            <rect x="641.63" y="12.42" rx="0" ry="0" width="160.37" height="25.38" />
          </content-loader>
        </div>
        <FeaturedRest v-else :restaurants="restaurants.slice(0, 3)" /> -->
        <FeaturedRest :restaurants="restaurants.slice(0, 3)" />

        <!-- <SuggestedExperiences :experiences  v  "experiences_around_me.slice(0, 3)" /> -->
        <FeaturedVideo />
      </div>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedPlaces from "@/components/FeaturedPlaces.vue";
import FeaturedRest from "@/components/FeaturedRest.vue";
import FeaturedEvents from "@/components/FeaturedEvents.vue";
import TopRatedExp from "@/components/TopRatedExp.vue";
import FeaturedVideo from "@/components/FeaturedVideo.vue";
import LatestPosts from "@/components/LatestPosts.vue";
import SuggestedExperiences from "@/components/SuggestedExperiences.vue";
import HomeNavbar from "@/components/HomeNavbar.vue";
import Sliderarea from "@/components/Sliderarea.vue";
import SecondNav from "@/components/SecondNav.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { transition } from "vue2-transitions";
import { ContentLoader } from "vue-content-loader";
// import FeaturedRest from '@/components/FeaturedRest.vue'

import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  components: {
    HomeNavbar,
    Sliderarea,
    FeaturedPlaces,
    FeaturedRest,
    TopRatedExp,
    FeaturedVideo,
    LatestPosts,
    SecondNav,
    FeaturedEvents,
    Footer,
    SuggestedExperiences,
    ContentLoader
  },
  data: function() {
    return {
      // experiences: []
      random_experiences: [],
      merchantIsApproved: false,
      events: [],
      places: [],
      restaurants: []
      // experiences_around_me: []
    };
  },
  methods: {
    ...mapActions(["getExperiences"]),
    ...mapActions(["getRestaurants"]),
    ...mapActions(["getEvents"]),
    ...mapActions(["getPlaces"]),
    getRandomExperiences() {
      axios
        .get(`${this.$store.state.API_BASE}/experiences/random/5`)
        .then(response => {
          this.random_experiences = response.data.data;
          console.log(response.data.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    verifyUserType() {
      console.log("Here");
      if (!this.$store.state.auth) {
        this.$noty.warning(
          "You need to register and then become a Merchant to Add Listing"
        );
        return this.$router.push("/benefits");
        // return false;
      } else if (
        this.$store.state.auth &&
        this.$store.state.auth.length &&
        this.$store.state.auth.user.role !== "user"
      ) {
        this.$noty.warning("You need to register as a Merchant to Add Listing");
        return this.$router.push("/benefits");
      } else if (!this.merchantIsApproved) {
        this.$noty.warning(
          "Your request to become a merchant is still pending, you will be able to add a listing when it is approved"
        );
        return;
      } else if (this.merchantIsApproved) {
        return this.$router.push("/dashboard/merchant/new-experience");
      }
    },

    checkIfMerchantIsApproved() {
      // console.log("I'm in the method oh!!")
      // console.log(this.$store.state.auth.length, this.$store.state.auth.user.role)
      if (
        this.$store.state.auth &&
        this.$store.state.auth.user.role == "merchant"
      ) {
        let user_id = this.$store.state.auth.user.id;
        axios
          .get(`${this.$store.state.API_BASE}/merchant_extras/${user_id}`)
          .then(response => {
            // console.log("check if merchant approved", response);
            if (response.status) {
              let returned = response.data;
              this.merchantIsApproved = returned.approved == 1;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    getAllHomepageFeaturedExperiences() {
      this.events = this.getHomepageFeaturedExperiences("Event");
      this.restaurants = this.getHomepageFeaturedExperiences("restaurants");
      this.places = this.getHomepageFeaturedExperiences("places");
    },

    getHomepageFeaturedEvents() {
      axios
        .get(
          `${this.$store.state.API_BASE}/experiences/featured?experience_type=Event`
        )
        .then(response => {
          console.log("Featured events", response);
          this.events = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getHomepageFeaturedRestaurants() {
      axios
        .get(
          `${this.$store.state.API_BASE}/experiences/featured?experience_type=restaurants`
        )
        .then(response => {
          console.log("Featured restaurants", response);
          this.restaurants = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getHomepageFeaturedPlaces() {
      axios
        .get(
          `${this.$store.state.API_BASE}/experiences/featured?experience_type=places`
        )
        .then(response => {
          console.log("Featured places", response);
          this.places = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getHomepageFeaturedExperiences(experience_type) {
      axios
        .get(
          `${this.$store.state.API_BASE}/experiences/featured?experience_type=${experience_type}`
        )
        .then(response => {
          console.log("Featured " + experience_type, response);
          return response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapState(["experiences", "loading"]),
    ...mapState(["experiences_around_me"]),
    ...mapGetters(["allExperiences"]),
    // ...mapState(["restaurants"]),
    // ...mapState(["events"]),
    // ...mapState(["places"]),
    // ...mapState(["restaurants", "auth"]),
     ...mapState(["auth"]),
    ...mapGetters(["getExp1", "getExp2", "getExp3", "getExp4", "getExp5"]),

    getVideoParam(url) {
      var url_string = url; //window.location.href
      var url = new URL(url_string);
      // var c = url.searchParams.get("c");
      return url.pathname.slice(7);
    },
    topRatedExp: function() {
      // let exp = this.allExperiences;
      return this.experiences.slice(0, 3);
    },
    featuredrest: function() {
      return this.restaurants.slice(0, 3);
    }
    // genRandomExperience: function(){
    //   return this.experiences[Math.floor(Math.random()*this.experiences.length)];
    // }
  },
  created: function() {
    // this.getLocation()
    this.getRandomExperiences();
    this.checkIfMerchantIsApproved();
    this.getHomepageFeaturedEvents();
    this.getHomepageFeaturedRestaurants();
    this.getHomepageFeaturedPlaces();
  }
};
</script>

<style>
.digital_feature {
  margin-top: 40px;
}
.home-large-icon {
  font-size: 125px;
  color: #f81894;
}
.creative_feature_area {
  margin-left: 89px;
  margin-right: 89px;
  background: #fff;
}

header.main_menu_area {
  z-index: 12213;
}

.toggleFirstNav {
  display: none;
}

.main_menu_area .navbar .navbar-nav {
  width: 100%;
}

.main_menu_area .navbar .navbar-nav li a {
  color: #fff !important;
}

.navbar-brand {
  color: #fff !important;
}

.carousel1 {
  display: none;
}

.carousel {
  display: none;
}

.secondNav {
  width: 100%;
  height: 124px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(190, 190, 190, 0.5);
  background-color: #fff;
  padding: 30px 29px 19px 29px;
}

.secondNav-img {
  width: 43px;
  margin-bottom: 8px;
}

.secondNav-txt {
  font-family: MuseoSans500 !important;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
}

.tab {
  padding-left: 18px;
  padding-right: 18px;
  text-align: center;
}

.secondNavTitle {
  width: 100%;
  text-align: center;
}

.secondNavTitle h3,
.secondNavTitle h3 span {
  font-family: MuseoSans700 !important;
  font-size: 23px;
  font-weight: bolder;
  font-style: normal;
  font-stretch: normal;
}

.navbar-brand {
  color: #fff !important;
}

.vertical-divider {
  width: 1px;
  height: 21px;
  background: #f81894;
  position: relative;
  top: -40px;
  float: right;
  left: 100px;
}

.main_menu_area .navbar .navbar-nav li a {
  color: #fff !important;
}

.title {
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  color: #000000;
  margin-top: 38px;
  /*margin-right: -35px;*/
}

.c_feature_box {
  margin-top: -70px;
  padding-top: 50px;
  padding-bottom: 60px;
  padding-right: 15px;
  padding-left: 15px;
}

.toggle-display-sm {
  display: none;
}

@media only screen and (max-height: 622px) {
  .p_100 {
    padding: 0;
  }
  .carousel-item {
    min-height: 0;
  }
  .digital_feature {
    margin-top: 0px !important;
  }
  .navbar-toggler {
    width: 45px;
  }

  .c_feature_box {
    margin-top: 20px !important;
  }

  .main_slider_text_bg {
    font-family: MuseoSans700 !important;
    color: #fff;
    font-size: 40px;
    margin-bottom: 0px;
  }
}

@media only screen and (max-width: 1007px) {
  .main_slider_container {
    padding-top: 25vh !important;
    padding-left: 85px !important;
  }

  .btn-travv {
    font-family: MuseoSans500 !important;
    padding: 16px;
    height: 54px;
    border-radius: 8px;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555555;
    /* box-sizing: border-box; */
  }

  .cont-btn {
    background: #f81894;
    border: none;
    /* padding: 44px 29px 39px 25px; */
    font-family: MuseoSans700;
    font-size: 21px;
    width: 100%;
    height: 54px;
    border-radius: 8px;
    background-color: #f81894;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .no-pad-l {
    padding-left: 0px !important;
    margin-bottom: 10px;
    padding: 0;
  }

  .no-pad-r {
    padding-right: 0px !important;
    margin-top: 10px;
    padding: 0;
  }

  .left_feature_place {
    padding-right: 5px;
    padding-left: 0px;
  }

  .middle_feature_place {
    padding-right: 5px;
    padding-left: 5px;
  }

  .right_feature_place {
    padding-left: 5px;
    padding-right: 0px;
  }

  .recom4uimages-dwn {
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 576px) {
  .main_menu_area .navbar .navbar-nav li a.nav-item-color {
    color: #fff !important;
  }
  .toggle-sec-nav {
    display: block;
  }

  .toggleFirstNav {
    display: none;
  }

  header.main_menu_area {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .main_slider_container {
    padding-top: 15vh !important;
    padding-left: 25px !important;
  }

  .toggle-display {
    display: none;
  }

  .main_slider_text_bg {
    margin-bottom: 2px;
  }

  .btn-group.btn-group-toggle {
    margin-bottom: 10px;
    margin-right: 0 !important;
  }

  .creative_feature_area {
    margin-left: 10px;
    margin-right: 10px;
  }

  .c_feature_box {
    margin-top: -1px;
  }

  .toggle-display-sm {
    display: block;
    margin-bottom: -20px;
  }

  .right_feature_place {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-bottom: 10px;
  }

  .middle_feature_place {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-bottom: 10px;
  }

  .left_feature_place {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-bottom: 10px;
  }

  .latest_post_1,
  .latest_post_2 {
    height: 120px;
  }

  .app-store {
    margin-bottom: 0px !important;
  }

  .c_feature_box {
    display: block;
  }

  .carousel {
    display: block !important;
  }

  .toggleCarousel {
    display: none;
  }

  .carousel {
    display: block;
  }

  /* .col-md-4.featured_places{
      display: none;
    } */
}

@media only screen and (max-width: 375px) {
  .main_slider_container {
    padding-top: 10vh !important;
    padding-left: 25px !important;
  }
}

@media only screen and (max-width: 1070px) {
  .main_slider_container {
    padding-left: 121px;
  }
}

.c_box_item:before {
  background: none;
}

.text-lg {
  /* font-family: MuseoSans900 !important;
    color: #555555; */
  height: 42px;
  font-family: MuseoSans500 !important;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #555555;
  margin-bottom: 60px;
}

.c_box_item a h4 img {
  height: 80px;
}

.c_box_item a h4 {
  font-family: MuseoSans300;
  font-weight: bolder;
}

.c_box_item {
  text-align: center;
  left: 18px;
  /* font-family: MuseoSans900 !important; */
  /* font-weight: bolder; */
}

.c_box_item button {
  font-family: MuseoSans900 !important;
  color: #f81894;
  font-weight: bolder;
  font-size: 1.2em;
  background: transparent;
  cursor: pointer;
}

.c_box_item button:focus {
  box-shadow: none;
}

.main_title h2 {
  font-family: MuseoSans500 !important;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #555555;
  margin-bottom: 49px;
  padding-bottom: 0;
}

.view_all_btn {
  font-family: MuseoSans700 !important;
  background: transparent;
  cursor: pointer;
  float: right;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #f81894;
  text-align: right;
}

/* .img-round {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 50%;
  }

  .img-round>img {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  } */

/*.stories_background {
    background: url('../assets/image_5.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
*/
.more_stories_content {
  padding-top: 70px;
  padding-bottom: 12px;
  padding-left: 15px;
}

.more_stories_content h4 {
  font-family: MuseoSans500 !important;
  font-weight: bolder;
  font-size: 24px;
  font-weight: 500;
}

.more_stories_content h6 {
  font-family: MuseoSans500 !important;
  margin-top: 12px;
  margin-bottom: 31px;
  /* font-weight: bolder; */
  font-size: 12px;
  color: #f81894;

  /* font-size: 14px;
    font-weight: 500; */
}

.col-lg-6.col-md-6.latest-post {
  position: relative;
  height: 457px;
  box-shadow: 0 2px 13px 0 rgba(204, 204, 204, 0.5);
  background-color: #ffffff;
  background: #fff;
}

/* .col-lg-6.col-md-6.latest-post:first-child{
    margin-right: 1px;
  } */
.pl-0 {
  padding-left: 0;
}

.top_rated_image {
  height: 120px;
  width: 100%;
  border: 1px solid #000;
}

.recom4uimages-up {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 354px;
  width: 100%;
  color: #fff;
  padding: 0 0 30px 29px;
  margin-bottom: 10px;
}

.recom4uimages-up p {
  font-family: MuseoSans;
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
}

.recom4uimages-dwn {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 238px;
  width: 100%;
  padding: 0 0 30px 29px;
}

.recom4uimages-dwn p {
  font-family: MuseoSans;
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
}

.featured_places {
  height: 357px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.featured_places_overlay {
  width: 100%;
  height: 55px;
  background-color: rgba(21, 24, 36, 0.6);
}

.featured_places_overlay_active {
  background: rgba(248, 24, 148, 0.71) !important;
}

.ftr_places_title {
  height: 24px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #ffffff;
  padding: 16px 0 15px 25px;
}

button.btn.btn-travv.toggle-display-sm {
  margin-bottom: 4px;
  width: 100%;
}

.feature_video_lg {
  width: 100%;
  height: 390px;
}

.feature_video_sm {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 150px;
  /* background-color: rgba(248, 24, 148, 0.4); */
  margin-bottom: 4px;
}
.feature_video_sm_title {
  margin-bottom: 30px;
  font-size: 12px;
  line-height: initial;
}
.feature_video_sm_title h6 {
  font-weight: bolder;
  font-size: 14px;
}
/* @media(max-width: ) */
.mount_fuji {
  background: url("../assets/mount_fuji.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.kyoto {
  background: url("../assets/Kyoto.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.saporo {
  background: url("../assets/Saporo.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.tokyo {
  background: url("../assets/Tokyo.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.niigata {
  background: url("../assets/Niigata.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/*
  .niigata2 {
    background: url('../assets/niigata2.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }



  .nagoya {
    background: url('../assets/nagoya.png');
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

  .shibuya {
    background: url('../assets/shibuya.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .saitama {
    background: url('../assets/saitama.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .ueno {
    background: url('../assets/ueno.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }*/

.feature_video_lg {
  background: url("../assets/feature_video_lg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.feature_video_lg {
  background: url("../assets/feature_video_lg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.ft_video_sm_1 {
  background: url("../assets/ft_video_sm_1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.ft_video_sm_2 {
  background: url("../assets/ft_video_sm_2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.ft_video_sm_3 {
  background: url("../assets/ft_video_sm_3.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.ft_video_sm_4 {
  background: url("../assets/ft_video_sm_4.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/*  .latest_post_1 {
    background: url('../assets/latest_post_1.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .latest_post_2 {
    background: url('../assets/latest_post_2.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }*/

.c_box_item img {
  height: 120px;
  width: 120px;
}

/* feature_video_lg.png  ft_video_sm_2*/
</style>