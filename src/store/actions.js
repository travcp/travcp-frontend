import Vue from "vue";
import router from "@/router";

import axios from "axios";
let API_BASE = "https://travvapi.herokuapp.com/api";

Vue.use(router);

export default {
  async getExperiences({ commit, state }) {
    commit("IS_LOADING");
    await axios.get(`${API_BASE}/experiences`).then(response => {
      commit("ALL_EXPERIENCE", response.data);
      state.experiencesPlacehodler = response.data.data;
    });
  },
  async getExperienceById({ commit }, id) {
    commit("IS_LOADING");
    await axios.get(`${API_BASE}/experiences/${id}`).then(response => {
      commit("EXPERIENCE_BY_ID", response.data);
    });
  },
  async getRestaurants({ commit }) {
    await axios.get(`${API_BASE}/restaurants`).then(response => {
      commit("ALL_RESTAURANTS", response.data);
    });
  },
  async getRestaurantById({ commit }, id) {
    await axios.get(`${API_BASE}/restaurants/${id}`).then(response => {
      commit("RESTAURANTS_BY_ID", response.data);
    });
  },
  async filterRestaurantSearch({ commit }, data = `${API_BASE}/restaurants`) {
    commit("IS_LOADING");
    commit("FILTER_RESTAURANTS_LOADING");
    await axios
      .get(data)
      .then(response => {
        commit("FILTER_RESTAURANTS", response.data);
        commit("NOT_LOADING");
        // }, 5000)
      })
      .catch(({ err }) => {
        commit("NOT_LOADING");
      });
  },
  async filterExperiencesSearch(
    { commit, state },
    data = `${API_BASE}/experiences`
  ) {
    commit("FILTER_EXPERIENCE_LOADING");
    await axios
      .get(data)
      .then(response => {
        commit("FILTER_EXPERIENCE", response.data.data);
        if (response.data.data.length < 1) {
          // console.log("an empty search result")
          // state.emptySearchResult = true;
          // state.editProfileData = "Example"
          // commit('EMPTY_SEARCH_RESULTS')
        } else {
          commit("SEARCH_RESULTS");
        }
      })
      .catch(err => {
        console.log(`Error from Experence Search ${err}`);
      });
  },
  async userRegistration({ commit }, data) {
    commit("REGISTRATION_LOADING");
    await axios
      .post(`${API_BASE}/auth/register`, {
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        surname: data.surname
      })
      .then(res => {
        commit("REGISTRATION_SUCCESS", res.data);
        router.push("/");
      })
      .catch(err => {
        console.log(err);
        commit("REGISTRATION_ERROR", err.response.data);
      });
  },
  async userLogin({ commit }, data) {
    commit("LOGIN_LOADING");
    await axios
      .post(`${API_BASE}/auth/login`, data)
      .then(res => {
        commit("LOGIN_SUCCESS", res.data);
        router.push("/");
      })
      .catch(err => {
        // console.log(`Error ${err}`);
        // console.log(err.response);

        commit("LOGIN_FAILURE", err.response.data);
      });
  },
  userLogout: ({ commit }) => {
    commit("USER_LOGOUT");
  },
  bookingExperience: ({ commit, state }, data) => {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    commit("BOOKING_EXPERIENCE_LOADING");
    axios
      .post(
        `${API_BASE}/bookings`,
        {
          // "food_menu_ids": data.food_menu_ids,
          price: data.price,
          merchant_id: data.merchant_id,
          user_id: data.user_id,
          experience_id: data.experience_id,
          start_date: data.start_date,
          end_date: data.end_date
        },
        requestHeaders
      )
      .then(res => {
        console.lod(res.data.data);
        commit("BOOKING_EXPERIENCE", res.data);
        router.push("/");
        console.log(res.data);
      })
      .catch(err => {
        commit("BOOKING_EXPERIENCE_FAILURE", err.response);
      });
  },
  async getEvents({ commit }) {
    commit("EVENTS_LOADING");
    await axios
      .get(`${API_BASE}/experience_types/2/experiences`)
      .then(res => {
        commit("GET_EVENTS", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async getEventsById({ commit }, data) {
    commit("EVENTS_LOADING");
    await axios
      .get(`${API_BASE}/experiences/${data}`)
      .then(res => {
        commit("GET_EVENTS_BY_ID", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async filterEventsSearch(
    { commit },
    data = `${API_BASE}/experience_types/2/experiences`
  ) {
    commit("FILTER_EXPERIENCE_LOADING");
    // experiences?locations=${data.location}
    await axios
      .get(data)
      .then(response => {
        commit("GET_EVENTS", response.data);
      })
      .catch(({ error }) => {
        console.log(`Error ${error}`);
      });
  },
  async getPlaces({ commit }) {
    commit("IS_LOADING");
    await axios
      .get(`${API_BASE}/experience_types/22/experiences`)
      .then(response => {
        commit("GET_PLACES", response.data);
      })
      .catch(({ error }) => {
        console.log(`Error ${error}`);
      });
  },
  async getPlacesById({ commit }, data) {
    commit("IS_LOADING");
    await axios
      .get(`${API_BASE}/experiences/${data}`)
      .then(response => {
        commit("GET_PLACES_BY_ID", response.data);
      })
      .catch(({ error }) => {
        console.log(`Error ${error}`);
      });
  },
  async filterPlacesSearch(
    { commit },
    data = `${API_BASE}/experience_types/22/experiences`
  ) {
    commit("FILTER_EXPERIENCE_LOADING");
    // experiences?locations=${data.location}
    await axios
      .get(data)
      .then(response => {
        commit("GET_PLACES", response.data);
      })
      .catch(({ error }) => {
        console.log(`Error ${error}`);
      });
  },
  updateProfile({ commit, state }, data) {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    commit("EDIT_PROFILE_LOADING");
    return new Promise((resolve, reject) => {
      axios
        .put(
          `${API_BASE}/users/${data.user_id}`,
          {
            first_name: data.first_name,
            surname: data.surname,
            email: data.email,
            subscribed_to_newsletter: 1,
            // "company": data.company,
            address: data.address,
            city: data.city,
            country: data.country,
            postal_code: data.postal_code
          },
          requestHeaders
        )
        .then(res => {
          commit("EDIT_PROFILE_SUCESS", res.data);
          resolve(res.data);
          console.log(res.data);
        })
        .catch(error => {
          commit("EDIT_PROFILE_FAIL");
          console.log(`Error ${error.data}`);
          reject(error);
        });
    });
  },
  async getReviewsData({ commit }) {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    commit("GET_REVIEW_LOADING");
    await axios
      .get(`${API_BASE}/reviews`)
      .then(res => {
        commit("GET_REVIEW", res.data);
      })
      .catch(err => {
        commit("GET_REVIEW_ERROR", err);
      });
  },
  async rateExperience({ commit, state }, data) {
    commit("REVIEW_LOADING");
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    await axios
      .post(
        `${API_BASE}/reviews`,
        {
          user_id: data.user_id,
          experience_id: data.experience_id,
          review_body: data.review_body
        },
        requestHeaders
      )
      .then(response => {
        console.log(response.data);
        commit("REVIEW_SUCCESSFUL", response.data);
      })
      .catch(err => {
        commit("REVIEW_ERROR", err.data);
      });
  },
  async getExperienceTypes({ commit }) {
    commit("IS_LOADING");
    axios
      .get(`${API_BASE}/experience_types`)
      .then(response => {
        console.log(response.data.data);
        commit("GET_EXPERIENCE_TYPES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  async submitExperience({ commit, state }, data) {
    commit("IS_LOADING");
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_BASE}/experiences`, data, requestHeaders)
        .then(response => {
          resolve(response.data.data);
          console.log(response.data.data);
          state.isLoading = false;
        })
        .catch(err => {
          console.log(err);
          reject(err);
          state.isLoading = false;
        });
    });
  },
  async getMyBookings({ commit, state }) {
    this.loading = true;
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    await axios
      .get(
        `${state.API_BASE}/users/${state.auth.user.id}/bookings`,
        requestHeaders
      )
      .then(response => {
        // state.bookings = response.data.data;
        commit("GET_BOOKINGS", response.data.data);
        // this.bookings = response.data.data;
        // this.loading = false;
      })
      .catch(err => {
        console.log("There was error fetching my bookings");
      });
  }
};
