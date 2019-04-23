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
    auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null,
    booking_data: null
    // user_token: 
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
      state.isLoading = false;
    },
    FILTER_RESTAURANTS_LOADING: (state) => {
      state.isLoading = true;
    },
    FILTER_EXPERIENCE: (state, payload) => {
      state.experiences = payload.data;
      state.isLoading = false;
    },
    FILTER_EXPERIENCE_LOADING: (state, payload) => {
      state.isLoading = true;
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
    },
    BOOKING_EXPERIENCE: (state, payload) => {
      state.booking_data = payload;
      state.isLoading = false;
    },
    BOOKING_EXPERIENCE_LOADING: (state) => {
      state.isLoading = true;
    },
    BOOKING_EXPERIENCE_FAILURE: (state, payload) => {
      
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
      commit('FILTER_RESTAURANTS_LOADING');
      axios.get(data).then(response => {
          // console.log(response.data);
        // setTimeout(() => {
          commit('FILTER_RESTAURANTS', response.data);
        // }, 5000)
      }).catch(({err}) => {
          // console.log(err);
      });
    },
    filterExperiencesSearch: ({commit}, data = `${API_BASE}/experiences`) => {
      commit('FILTER_EXPERIENCE_LOADING')
      axios.get(data).then(response => {
          // console.log(response.data);
          commit('FILTER_EXPERIENCE', response.data);
      }).catch(({err}) => {
          // console.log(err);
      });
    },
    userRegistration: ({commit}, data) => {
      // let requestHeaders = {
      //   Authorization: "Bearer TOKEN"
      // }
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
    },
    bookingExperience: ({ commit, state }, data) => {
      let requestHeaders = {
        headers: {'Authorization': "bearer " + state.auth.access_token}
      };
      // var config = {
      //     headers: {'Authorization': "bearer " + token}
      // };
      commit('BOOKING_EXPERIENCE_LOADING')
      axios.post(`${API_BASE}/bookings/experiences/${data.experience_id}`, 
      {
        "start_date": data.start_date,
	      "end_date": data.end_date
      }, requestHeaders).then(res => {
        commit('BOOKING_EXPERIENCE', res.data)
        router.push("/");
        console.log(res.data)
        // console.log(res.data);
      }).catch(err => {
        commit('BOOKING_EXPERIENCE_FAILURE', err.response.data);
        // console.log(err);
      })
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