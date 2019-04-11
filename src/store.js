import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import router from '@/router';
Vue.use(Vuex);
Vue.use(router)
Vue.use(VueNoty);
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
    restaurant: {},
    user_registration_details: {},
    success: null,
    user_token: null,
    user_data: null,
    login_errors: null,
    user_registration_errors: null,
    isLoading: false,
    auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null
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
    },
    GET_USER_DATA: (state, payload) => {
      state.user_registration_details = payload;
    },
    REGISTRATION: (payload) => {
      
    },
    REGISTRATION_SUCCESS: (state, payload) => {
      state.success = true;
      state.auth = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
    },
    REGISTRATION_ERROR: (state, payload) => {
      state.success = false;
      state.user_registration_errors = payload;
    },
    LOGIN_SUCCESS: (state, payload) => {
      state.success = true;
      state.auth = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
    },
    LOGIN_FAILURE: (state, payload) => {
      state.success = false;
      state.login_errors = payload.error.message;
    },
    USER_LOGOUT: (state) => {
      localStorage.removeItem('auth');
      state.auth = null;
      router.push('/login');
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
    filterRestaurantSearch: ({commit}, data = `${API_BASE}/restaurants`) => {
      // console.log(data);
      // console.log(`https://travvapi.herokuapp.com/api/restaurants?location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`)
      axios.get(data).then(response => {
          // console.log(response.data);
          commit('FILTER_RESTAURANTS', response.data);
      }).catch(({err}) => {
          // console.log(err);
      });
    },
    filterExperiencesSearch: ({commit}, data) => {
      axios.get(`${API_BASE}/restaurants?location=${data.search}&min_price=${data.min_price}&max_price=${data.max_price}`).then(response => {
          // console.log(response.data);
          commit('FILTER_RESTAURANTS', response.data);
      }).catch(({err}) => {
          // console.log(err);
      });
    },
    userRegistration: ({commit}, data) => {
      axios.post(`${API_BASE}/auth/register`, 
      {
        "email" : data.email,
        "password" : data.password,
        "first_name" : data.first_name,
        "surname" : data.surname
      }).then(res => {
        commit('REGISTRATION_SUCCESS', res.data);
        router.push("/");
        // console.log(res.data);
      }).catch(err => {
        commit('REGISTRATION_ERROR', err.response.data);
        // this.$noty.error("Oops, something went wrong!")
        // console.log(err.response.data)
        // console.log(err);
      });
    },
    userLogin: ({commit}, data) => {
      axios.post(`${API_BASE}/auth/login`, {
        "email" : data.email,
	      "password" : data.password
      }).then(res => {
        commit('LOGIN_SUCCESS', res.data)
        router.push("/");

        // console.log(res.data);
      }).catch(err => {
        commit('LOGIN_FAILURE', err.response.data);
        // console.log(err);
      })
    },
    userLogout: ({ commit }) => {
      commit('USER_LOGOUT');
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