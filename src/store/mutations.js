import Vue from 'vue';
import router from '@/router';

Vue.use(router)

export default {
    ALL_EXPERIENCE: (state, payload) => {
      state.experiences = payload.data;
      state.isLoading = false;
    },
    EXPERIENCE_BY_ID: (state, payload) => {
      state.experience = payload.data;      
      state.isLoading = false;
    },
    ALL_RESTAURANTS: (state, payload) => {
      state.restaurants = payload.data;
      state.isLoading = false;
    },
    RESTAURANTS_BY_ID: (state, payload) => {
      state.restaurant = payload.data;
      state.isLoading = false;
    },
    FILTER_RESTAURANTS: (state, payload) => {
      state.restaurants = payload.data;
      state.isLoading = false;
    },
    FILTER_RESTAURANTS_LOADING: (state) => {
      state.isLoading = true;
    },
    FILTER_EXPERIENCE: (state, payload) => {
      state.experiences = payload;
      state.isLoading = false;
    },
    FILTER_EXPERIENCE_LOADING: (state, payload) => {
      state.isLoading = true;
    },
    GET_USER_DATA: (state, payload) => {
      state.user_registration_details = payload;
    },
    REGISTRATION: (payload) => {},
    REGISTRATION_SUCCESS: (state, payload) => {
      state.success = true;
      state.auth = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
      state.isLoading = false;
    },
    REGISTRATION_ERROR: (state, payload) => {
      state.success = false;
      state.user_registration_errors = payload;
      state.isLoading= false;
    },
    REGISTRATION_LOADING: (state) => {
      state.isLoading = true;
    },
    LOGIN_SUCCESS: (state, payload) => {
      state.success = true;
      state.auth = payload;
      localStorage.setItem("auth", JSON.stringify(payload));
      state.isLoading = false;
    },
    LOGIN_LOADING: (state) => {
      state.isLoading = true;
    },
    LOGIN_FAILURE: (state, payload) => {
      state.success = false;
      state.login_errors = payload.error.message;
      state.isLoading = false;
    },
    USER_LOGOUT: (state) => {
      localStorage.removeItem('auth');
      state.auth = null;
      router.push('/signin');
    },
    BOOKING_EXPERIENCE: (state, payload) => {
      state.booking_data = payload;
      state.isLoading = false;
    },
    BOOKING_EXPERIENCE_LOADING: (state) => {
      state.isLoading = true;
    },
    BOOKING_EXPERIENCE_FAILURE: (state, payload) => {
      state.isLoading = false;
    },
    GET_EVENTS: (state, payload) => {
      state.events = payload;
      state.isLoading = false;
    },
    IS_LOADING: (state) => {
      state.isLoading = true;
    },
    NOT_LOADING: (state) => {
      state.isLoading = false;
    },
    GET_EVENTS: (state, payload) => {
      state.events = payload.data;
      state.isLoading = false;
    },
    EVENTS_LOADING: (state, payload) => {
      state.isLoading = true;
    },
    GET_EVENTS_BY_ID: (state, payload) => {
      state.event = payload.data;
    },
    GET_PLACES: (state, payload) => {
      state.places = payload.data;
      state.isLoading = false;
    },
    GET_PLACES_BY_ID: (state, payload) => {
      state.place = payload.data;
      state.isLoading = false;
    },
    EDIT_PROFILE_LOADING: (state) => {
      state.isLoading = true;
    },
    EDIT_PROFILE_SUCESS: (state, payload) => {
      state.editProfileData = payload;
      state.isLoading = false;
      // console.log("payload", payload)
      let newData = JSON.parse(localStorage.getItem('auth'));
      newData.user = payload.data;
      
      // console.log("new data", newData);
      localStorage.setItem("auth", JSON.stringify(newData))
      

      state.auth.user = payload.data;
      // localStorage.setItem("auth", JSON.stringify(payload));
    },
    EDIT_PROFILE_FAIL: (state, payload) => {
      state.isLoading = false;
      state.editProfileError = payload;
    },
    GET_REVIEW_LOADING: (state) => {
      state.isLoading = true;
    },
    GET_REVIEW: (state, payload) => {
      state.reviews = payload.data;
    },
    GET_REVIEW_ERROR: (state, payload) => {
      state.editProfileError = payload.data;
    },
    REVIEW_LOADING: (state, payload) => {
      state.isLoading = true;
    },
    REVIEW_SUCCESSFUL: (state, payload) => {
      state.isLoading = false;
      state.reviewData = payload.data
    },
    REVIEW_ERROR: (state) => {
      state.isLoading = false;
    },
    EMPTY_SEARCH_RESULTS: (state) => {
      // state.emptySearchResult = true;
    },
    GET_EXPERIENCE_TYPES: (state, payload) => {
      state.experience_types = payload.data;
      state.isLoading = false;
    }
    // UPDATE_
}