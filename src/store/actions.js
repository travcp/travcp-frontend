import Vue from "vue";
import router from "@/router";

import axios from "axios";
let API_BASE = "https://travvapi.herokuapp.com/api";

Vue.use(router);

export default {
  async getExperiences({ commit, state }) {
    // commit("IS_LOADING");
    state.loading.getExperiences = true;
    await axios
      .get(`${API_BASE}/experiences`)
      .then(response => {
        state.experiencesPlacehodler = response.data.data;
        state.loading.getExperiences = false;
        commit("ALL_EXPERIENCE", response.data);
      })
      .catch(err => {
        state.isLoading = false;
        state.loading.getExperiences = false;
      });
  },
  getExperienceById({ commit, state }, id) {
    // commit("IS_LOADING");

    state.loading.getExperienceById = true;
    return new Promise((resolve, reject)=> {
        axios.get(`${API_BASE}/experiences/${id}`).then(response => {
            state.loading.getExperienceById = false;
            commit("EXPERIENCE_BY_ID", response.data);
            resolve(response.data);
        }).catch(error => {
            state.loading.getExperienceById = false
            reject(error.response.data)
        });
    })

  },
  async filterExperiencesSearch(
    { commit, state },
    data = `${API_BASE}/experiences`
  ) {
    
    state.loading.filterExperiencesSearch = true;
    
    await axios
      .get(data)
      .then(response => {
        state.loading.filterExperiencesSearch = false;
        commit("FILTER_EXPERIENCE", response.data.data);

        if (response.data.data.length < 1) {
          // // console.log("an empty search result")
          // state.emptySearchResult = true;
          // state.editProfileData = "Example"
          // commit('EMPTY_SEARCH_RESULTS')
        } else {
          commit("SEARCH_RESULTS");
        }
      })
      .catch(err => {
        console.log(`Error from Experence Search ${err}`);
        state.loading.filterExperiencesSearch = false;
      });
  },
   userRegistration({ commit, state }, data) {
    // commit("REGISTRATION_LOADING");

    state.loading.userRegistration = true;
    return new Promise ((resolve, reject) => {
      axios
        .post(`${API_BASE}/auth/register`, {
          email: data.email,
          password: data.password,
          first_name: data.first_name,
          surname: data.surname
        })
        .then(res => {
          state.loading.userRegistration = false;
          commit("REGISTRATION_SUCCESS", res.data);

          router.push("/");
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          state.loading.userRegistration = false;
          commit("REGISTRATION_ERROR", err.response.data);
          reject(err)
        });
    })
    
  },
  async userLogin({ commit, state }, data) {
    // commit("LOGIN_LOADING");
    state.loading.userLogin = true;

    // return new Promise((resolve, reject) => {
     await axios
        .post(`${API_BASE}/auth/login`, data)
        .then(res => {
          state.loading.userLogin = false;
          commit("LOGIN_SUCCESS", res.data);
          router.push("/");
          window.location.reload(1);
          // resolve(res.data)
        })
        .catch(err => {
          // console.log(`Error ${err}`);
          // console.log(err.response);
          state.loading.userLogin = false;

          commit("LOGIN_FAILURE", err.response.data);
          // reject(err.response.data)
        });
    // });
  },
  userLogout: ({ commit }) => {
    commit("USER_LOGOUT");
  },
  bookingExperience ({ commit, state }, data) {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    // commit("BOOKING_EXPERIENCE_LOADING");
    state.loading.bookingExperience = true;

    return new Promise((resolve, reject) => {
          axios.post(`${API_BASE}/bookings`,
                  data,
                  requestHeaders).then(res => {
                    // console.log(res.data.data);
                    state.loading.bookingExperience = false;
                    
                    commit("BOOKING_EXPERIENCE", res.data);
                    
                    resolve(res.data.data);
                  })
                  .catch(err => {
                    state.loading.bookingExperience = false;
                    commit("BOOKING_EXPERIENCE_FAILURE", err.response);
                    reject(err)
                  });
    })
  },
  async getEvents({ commit, state }) {
    // commit("EVENTS_LOADING");
    state.loading.getEvents = false;

    await axios
      .get(`${API_BASE}/experience_types/2/experiences`)
      .then(res => {
        state.loading.getEvents = false;
        commit("GET_EVENTS", res.data);
      })
      .catch(err => {
        console.log(err);
        state.loading.getEvents = false;

      });
  },
  async getEventsById({ commit, state }, data) {
    // commit("EVENTS_LOADING");
    state.loading.getEventsById = true;

    await axios
      .get(`${API_BASE}/experiences/${data}`)
      .then(res => {
        state.loading.getEventsById = false;
        commit("GET_EVENTS_BY_ID", res.data);
      })
      .catch(err => {
        console.log(err);
        state.loading.getEventsById = true;
      });
  },
  async filterEventsSearch(
    { commit, state },
    data = `${API_BASE}/experience_types/2/experiences`
  ) {
    // commit("FILTER_EXPERIENCE_LOADING");
    state.loading.filterEventsSearch = false;
    // experiences?locations=${data.location}
    await axios
      .get(data)
      .then(response => {
        state.loading.filterEventsSearch = true;
        commit("GET_EVENTS", response.data);
      })
      .catch(({ error }) => {
        state.loading.filterEventsSearch = true;
        console.log(`Error ${error}`);
      });
  },
  async getPlaces({ commit, state }) {
    // commit("IS_LOADING");

    state.loading.getPlaces = false;
    await axios
      .get(`${API_BASE}/experience_types/22/experiences`)
      .then(response => {
        state.loading.getPlaces = true;
        commit("GET_PLACES", response.data);
      })
      .catch(({ error }) => {
        state.loading.getPlaces = true;
        console.log(`Error ${error}`);
      });
  },
  async getRestaurants({ commit, state }) {
    // commit("IS_LOADING");

    state.loading.getRestaurants = false;
    await axios
      .get(`${API_BASE}/experience_types/12/experiences`)
      .then(response => {
        state.loading.getRestaurants = true;
        commit("ALL_RESTAURANTS", response.data);
      })
      .catch(({ error }) => {
        state.loading.getPlaces = true;
        console.log(`Error ${error}`);
      });
  },
  async getPlacesById({ commit, state }, data) {
    // commit("IS_LOADING");

    state.loading.getPlacesById = true;
    await axios
      .get(`${API_BASE}/experiences/${data}`)
      .then(response => {
        state.loading.getPlacesById = false;
        commit("GET_PLACES_BY_ID", response.data);
      })
      .catch(({ error }) => {
        state.loading.getPlacesById = false;
        console.log(`Error ${error}`);
      });
  },
  async filterPlacesSearch(
    { commit, state },
    data = `${API_BASE}/experience_types/22/experiences`
  ) {
    // commit("FILTER_EXPERIENCE_LOADING");

    state.loading.filterPlacesSearch = true;
    // experiences?locations=${data.location}
    await axios
      .get(data)
      .then(response => {
        state.loading.filterPlacesSearch = false;
        commit("GET_PLACES", response.data);
      })
      .catch(({ error }) => {
        state.loading.filterPlacesSearch = false;
        console.log(`Error ${error}`);
      });
  },
  updateProfile({ commit, state }, data) {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    state.loading.updateProfile = true;

    // commit("EDIT_PROFILE_LOADING");
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
          resolve(res.data);
          console.log(res.data);
          state.loading.updateProfile = false;
          commit("EDIT_PROFILE_SUCESS", res.data);
        })
        .catch(error => {
          state.loading.updateProfile = false;
          console.log(`Error ${error.data}`);
          reject(error);
          commit("EDIT_PROFILE_FAIL");
        });
    });
  },
  async getReviewsData({ commit, state }) {
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    // commit("GET_REVIEW_LOADING");
    state.loading.getReviewsData = true;
    await axios
      .get(`${API_BASE}/reviews`)
      .then(res => {
        state.loading.getReviewsData = false;
        commit("GET_REVIEW", res.data);
      })
      .catch(err => {
        state.loading.getReviewsData = false;
        commit("GET_REVIEW_ERROR", err);
      });
  },
  async rateExperience({ commit, state }, data) {
    // commit("REVIEW_LOADING");
    let requestHeaders = {
      headers: { Authorization: "Bearer " + state.auth.access_token }
    };
    state.loading.rateExperience = true;
    await axios
      .post(
        `${API_BASE}/reviews`,
        {
          user_id: data.user_id,
          experience_id: data.experience_id,
          review_body: data.review_body,
          rating: Number(data.rating),
          security_rating: Number(data.security_rating)
        },
        requestHeaders
      )
      .then(response => {
        state.loading.rateExperience = false;
        console.log(response.data);
        commit("REVIEW_SUCCESSFUL", response.data);
        return response;
      })
      .catch(err => {
        state.loading.rateExperience = false;
        commit("REVIEW_ERROR", err.data);
      });
  },
  async getExperienceTypes({ commit, state }) {
    // commit("IS_LOADING");

    state.loading.getExperienceTypes = true;
    axios
      .get(`${API_BASE}/experience_types`)
      .then(response => {
        console.log(response.data.data);
        state.loading.getExperienceTypes = false;
        commit("GET_EXPERIENCE_TYPES", response.data);
      })
      .catch(error => {
        state.loading.getExperienceTypes = false;
        console.log(error);
      });
  },
  async submitExperience({ commit, state }, data) {
    // commit("IS_LOADING");
    state.loading.submitExperience = true;
    let requestHeaders = {
      // headers: {
      //     'Content-Type': 'multipart/form-data'
      // },
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + state.auth.access_token
      }
    };
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_BASE}/experiences`, data, requestHeaders)
        .then(response => {
          resolve(response.data.data);
          console.log(response.data.data);
          state.loading.submitExperience = false;
          // state.isLoading = false;
        })
        .catch(err => {
          console.log(err);
          state.loading.submitExperience = false;
          reject(err);
          // state.isLoading = false;
        });
    });
  },
  async getMyBookings({ commit, state }) {
    // this.loading = true;
    state.loading.getMyBookings = true;
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
        state.loading.getMyBookings = false;
        commit("GET_BOOKINGS", response.data.data);
        // this.bookings = response.data.data;
        // this.loading = false;
      })
      .catch(err => {
        // state.isLoading = false;
        state.loading.getMyBookings = false;
        console.log("There was error fetching my bookings");
      });
  },
  async getVideos({ commit, state }){
      // this.loading = true
      await axios.get(`${state.API_BASE}/videos`).then((response) => {
        console.log(response.data.data)
        // this.loading = false
        this.videoData = response.data.data
      }).catch(error => {
        console.log(error.response.data)
        // this.loading = false
      })
    },
    addMessage: ({ commit, state }, message) => {
      commit('SET_MESSAGES', state.messages.concat(message))
    },

    addMessages: ({ commit, state }, messages) => {
      commit('SET_MESSAGES', messages.concat(state.messages))
    },

    addChannelUser: ({ commit, state }, user) => {
      commit('SET_CHANNEL_USERS', state.channelUsers.concat(user))
    },

    removeChannelUser: ({ commit, state }, user) => {
      commit('SET_CHANNEL_USERS', state.channelUsers.filter(it => it.userId !== user.userId))
    },
    openNav() {
      if(document.getElementById("mySidebar").style.width == "250px"){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      } else {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";

      }
    },
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

};
