import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import ResultDetails from './views/ResultDetails.vue';
import ExperienceView from './components/ExperienceView.vue';
import RestaurantsView from '@/components/RestaurantView';
import ExperiencesSearchResults from '@/components/ExperiencesSearchResults';
import RestaurantsSearchResults from '@/components/RestaurantsSearchResults';
import Registration from '@/view/Registration.vue'
// 09082984610
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
    // {
    //   path: '/result-details/:id',
    //   name: 'ResultDetails'
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
