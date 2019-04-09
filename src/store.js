import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
// let experienceData;
// axios.get('https://travvapi.herokuapp.com/api/experiences').then(res => {
//   experienceData = res.data.data
// })
let API_BASE = 'https://travvapi.herokuapp.com/api';

export default new Vuex.Store({
  state: {
    experiences: [],
    experience: {},
    restaurants: [],
    restaurant: {}
  },
  mutations: {
    ALL_EXPERIENCE: (state, payload) => {
      state.experiences = payload.data;
    },
    EXPERIENCE_BY_ID: (state, payload) => {
      state.experience = payload.data;      
    },
    ALL_RESTAURANTS: (state, payload) => {
      state.restaurants = payload.data;
    },
    RESTAURANTS_BY_ID: (state, payload) => {
      state.restaurant = payload.data;
    },
    FILTER_RESTAURANTS: (state, payload) => {
      state.restaurants = payload.data;
    }, 
    FILTER_EXPERIENCE: (state, payload) => {
      state.experiences = payload;
    }
  },
  actions: {
    getExperiences: ({ commit }) => {
      axios.get(`${API_BASE}/experiences`).then(response => {
        commit('ALL_EXPERIENCE', response.data);
      });
    },
    getExperienceById: ({commit}, id) =>{
      axios.get(`${API_BASE}/experiences/${id}`).then(response => {
        commit('EXPERIENCE_BY_ID', response.data);
      });
    },
    getRestaurants: ({commit}) => {
      axios.get(`${API_BASE}/restaurants`).then(response => {
        commit('ALL_RESTAURANTS', response.data);
      });
    },
    getRestaurantById: ({commit}, id) => {
      axios.get(`${API_BASE}/restaurants/${id}`).then(response => {
        commit('RESTAURANTS_BY_ID', response.data);
      });
    },
    filterRestaurantSearch: ({commit}, data) => {
      // console.log(data);
      // console.log(`https://travvapi.herokuapp.com/api/restaurants?location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`)
      axios.get(`https://travvapi.herokuapp.com/api/restaurants?location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`).then(response => {
          console.log(response.data);
          commit('FILTER_RESTAURANTS', response.data);
      }).catch(({err}) => {
          console.log(err);
      });
    },
    filterExperiencesSearch: ({commit}, data) => {
      axios.get(`https://travvapi.herokuapp.com/api/restaurants?location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`).then(response => {
          console.log(response.data);
          commit('FILTER_RESTAURANTS', response.data);
      }).catch(({err}) => {
          console.log(err);
      });
    }
  },
  getters: {
    allExperiences: (state) => {
      return state.experiences;
    },
    allRestaurants: (state) => {
      return state.restaurants;
    }
  }
});