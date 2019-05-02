import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import ResultDetails from './views/ResultDetails.vue';
import ExperienceView from './components/ExperienceView.vue';
import RestaurantsView from '@/components/RestaurantView';
import ExperiencesSearchResults from '@/components/ExperiencesSearchResults';
import RestaurantsSearchResults from '@/components/RestaurantsSearchResults';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import NotFound from '@/views/NotFound.vue';
import Signin from '@/views/Signin.vue';
import Review from '@/views/Review.vue';


Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
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
      path: '/experiences/:id/:name',
      name: 'ExperienceView',
      component: ExperienceView
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
    }
  ]
});
