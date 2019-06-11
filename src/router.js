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
import RestaurantView from '@/views/merchant/restaurant-view.vue';
import MerchantBooking from "@/views/merchant/merchant-bookings.vue";
import RestaurantMenus from "@/views/merchant/restaurant-menus.vue";
import MerchantEditExperience from "@/views/merchant/merchant-edit-experience.vue";

import EventSearchResults from "@/components/EventSearchResults.vue";
import RestaurantMenu from '@/views/RestaurantMenu.vue'

import Careers from '@/views/pages/Careers.vue'
import Press from '@/views/pages/Press.vue'
import Policies from '@/views/pages/Policies.vue'
import Faqs from '@/views/pages/Faqs.vue'

import TrustAndSafety from '@/views/discover/TrustAndSafety.vue'
import TravelCredit from '@/views/discover/TravelCredit.vue'
import GroupTour from '@/views/discover/GroupTour.vue'
import Guidebooks from '@/views/discover/Guidebooks.vue'
import Requirements from '@/views/pages/Requirements.vue';
import Benefits from '@/views/pages/Benefits.vue';

import ForgotPassword from '@/views/pages/ForgotPassword.vue';
import Reset from '@/views/pages/Reset.vue';

import Verify from '@/views/pages/Verify.vue';

import LikedExperiences from '@/views/LikedExperiences.vue';

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
      path: "/careers",
      name: "Careers",
      component: Careers,
    },
    {
      path: "/verify",
      name: "Verify",
      component: Verify
    },
    {
      path: "/press",
      name: "Press",
      component: Press,
    },
    {
      path: "/policies",
      name: "Policies",
      component: Policies,
    },
    {
      path: "/FAQS",
      name: "Faqs",
      component: Faqs,
    },
    {
      path: "/trust-and-safety",
      name: "TrustAndSafety",
      component: TrustAndSafety
    },
    {
      path: "/travel-credit",
      name: "TravelCredit",
      component: TravelCredit
    },
    {
      path: "/group-tour",
      name: "GroupTour",
      component: GroupTour
    },
    {
      path: "/guidebooks",
      name: "Guidebooks",
      component: Guidebooks
    },
    {
      path: "/requirements",
      name: "Requirements",
      component: Requirements
    },
    {
      path: "/benefits",
      name: "Benefits",
      component: Benefits
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
      path: "/experience/restaurant/:id/:name",
      name: "RestaurantMenu",
      component: RestaurantMenu,
      props: true
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
      path: "/dashboard/favourite-experiences",
      name: "LikedExperiences",
      component: LikedExperiences
    },
    {
      path: "/dashboard/merchant-experience",
      name: "MerchantExperience",
      component: MerchantExperience
    },
    {
      path: "/dashboard/merchant/new-experience",
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
      name: "MerchantBooking",
      component: MerchantBooking
    },
    {
      path: "/dashboard/merchant/restaurants",
      name: "RestaurantView",
      component: RestaurantView
    },
    {
      path: "/dashboard/merchant/restaurant/:id/:name",
      name: "RestaurantMenus",
      component: RestaurantMenus
    },
    {
      path: "/dashboard/merchant/experience/edit/:experience_type/:id/:name",
      name: "MerchantEditExperience",
      component: MerchantEditExperience
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
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: ForgotPassword
    },
    {
      path: "/reset",
      name: "Reset",
      component: Reset
    }
  ]
});
