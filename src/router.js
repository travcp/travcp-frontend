import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
// import SearchResults from '@/views/SearchResults.vue';
// import ResultDetails from "@/views/ResultDetails.vue";
import ExperienceView from "@/components/ExperienceView.vue";
// import RestaurantsView from '@/components/RestaurantView';
import ExperiencesSearchResults from "@/components/ExperiencesSearchResults";
import RestaurantsSearchResults from "@/components/RestaurantsSearchResults";
// import Registration from "@/views/Registration.vue";
// import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import NotFound from "@/views/NotFound.vue";
import Signin from "@/views/Signin.vue";
import Review from "@/views/Review.vue";
import EditProfile from "@/views/EditProfile.vue";
import MerchantExperience from "@/views/MerchantExperience.vue";
import NewExperience from "@/views/NewExperience.vue";
import RecommendedPlaces from "@/components/RecommendedPlaces.vue";
// import EventsView from '@/components/EventsView.vue';
// import PlacesView from '@/components/PlacesView.vue';
import PlacesSearchResults from "@/components/PlacesSearchResults.vue";
import MyBooking from "@/views/MyBooking.vue";
import Profile from "@/views/Profile";
import Messages from "@/views/Messages";
import Video from "@/views/Video.vue";
import AboutUs from "@/views/AboutUs";
import Notifications from "@/views/Notifications";
import MyCart from "@/views/MyCart";
import AddNew from "@/views/AddNew";
// import RecommendedPlaces from '@/components/RecommendedPlaces.vue';
import MerchantExperiences from "@/views/merchant/merchant-experiences.vue";
import MerchantReview from "@/views/merchant/merchant-review.vue";

import MerchantBooking from "@/views/merchant/merchant-bookings.vue";

import EventSearchResults from "@/components/EventSearchResults.vue";

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/experiences",
      name: "ExperiencesSearchResults",
      component: ExperiencesSearchResults
    },
    {
      path: "/experience/:id/:name",
      name: "ExperienceView",
      component: ExperienceView
    },
    {
      path: "/events",
      name: "EventSearchResults",
      component: EventSearchResults
    },
    {
      path: "/restaurants",
      name: "RestaurantsSearchResults",
      component: RestaurantsSearchResults
    },
    {
      path: "/places",
      name: "PlacesSearchResults",
      component: PlacesSearchResults
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/dashboard/review",
      name: "Review",
      component: Review
    },
    {
      path: "/dashboard/edit-profile",
      name: "EditProfile",
      component: EditProfile
    },
    {
      path: "/dashboard/merchant-experience",
      name: "MerchantExperience",
      component: MerchantExperience
    },
    {
      path: "/dashboard/new-exp",
      name: "NewExperience",
      component: NewExperience
    },
    {
      path: "/dashboard/messages",
      name: "Messages",
      component: Messages
    },
    {
      path: "/dashboard/my-bookings",
      name: "MyBooking",
      component: MyBooking
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/dashboard/merchant/experiences",
      name: "MerchantExperiences",
      component: MerchantExperiences
    },
    {
      path: "/dashboard/merchant/review",
      name: "MerchantReview",
      component: MerchantReview
    },
    {
      path: "/dashboard/merchant/bookings",
      name: "MerchantReview",
      component: MerchantReview
    },
    {
      path: "/videos",
      name: "Video",
      component: Video
    },
    {
      path: "/about-us",
      name: "AboutUs",
      component: AboutUs
    },
    {
      path: "/notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "/dashboard/my-cart",
      name: "MyCart",
      component: MyCart
    },
    {
      path: "/add-new",
      name: "AddNew",
      component: AddNew
    }
  ]
});
