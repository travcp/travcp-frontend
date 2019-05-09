import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from '@/views/SearchResults.vue';
import ResultDetails from '@/views/ResultDetails.vue';
import ExperienceView from '@/components/ExperienceView.vue';
import RestaurantsView from '@/components/RestaurantView';
import ExperiencesSearchResults from '@/components/ExperiencesSearchResults';
import RestaurantsSearchResults from '@/components/RestaurantsSearchResults';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import NotFound from '@/views/NotFound.vue';
import Signin from '@/views/Signin.vue';
import Review from '@/views/Review.vue';
import EditProfile from '@/views/EditProfile.vue';
import MerchantExperience from '@/views/MerchantExperience.vue';
import NewExperience from '@/views/NewExperience.vue';
import RecommendedPlaces from '@/components/RecommendedPlaces.vue';
import EventsView from '@/components/EventsView.vue';
import PlacesView from '@/components/PlacesView.vue';
import PlacesSearchResults from '@/components/PlacesSearchResults.vue';
import MyBooking from '@/views/MyBooking.vue';
import Profile from '@/views/Profile';
// import RecommendedPlaces from '@/components/RecommendedPlaces.vue';

import EventSearchResults from '@/components/EventSearchResults.vue';

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults,
      // children: [
      //   {
      //     path: '/top-rated-exp',
      //     name: 'SearchResults',
      //     component: SearchResults
      //   }
      // ]
    },
    {
      path: '/experiences',
      name: 'ExperiencesSearchResults',
      component: ExperiencesSearchResults
    },
    {
      path: '/experience/:id/:name',
      name: 'ExperienceView',
      component: ExperienceView
    },
    {
      path: '/events',
      name: 'EventSearchResults',
      component: EventSearchResults
    },
    {
      path: '/restaurants',
      name: 'RestaurantsSearchResults',
      component: RestaurantsSearchResults
    },
    {
      path: '/result-details',
      name: 'ResultDetails',
      component: ResultDetails,
      children: [
        {
          path: ':id',
          name: 'ResultDetails',
          component: ResultDetails
        }
      ]
    },
    {
      path: '/event/:id/:name',
      name: 'EventsView',
      component: EventsView
    },
    {
      path: '/place/:id/:name',
      name: 'PlacesView',
      component: PlacesView
    },
    {
      path: '/places',
      name: 'PlacesSearchResults',
      component: PlacesSearchResults
    },
    {
      path: '/restaurants/:id/:name',
      name: 'RestaurantsView',
      component: RestaurantsView
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/result-details/:id',
    //   name: 'ResultDetails'
    // },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/dashbaord/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/dashboard/edit-profile',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/dashboard/merchant-experience',
      name: 'MerchantExperience',
      component: MerchantExperience
    },
    {
      path: '/dashboard/new-exp',
      name: 'NewExperience',
      component: NewExperience
    },
    {
      path: '/dashbaord/my-bookings',
      name: 'MyBooking',
      component: MyBooking
    },
    {
      path: '/dashboard/profile',
      name: "Profile",
      component: Profile
    },
  ]
});
