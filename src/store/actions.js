import Vue from 'vue';
import router from '@/router';

import axios from 'axios';
let API_BASE = 'https://travvapi.herokuapp.com/api';

Vue.use(router);

export default {
	 async getExperiences({ commit }) {
      commit('IS_LOADING');
      await axios.get(`${API_BASE}/experiences`).then(response => {
        commit('ALL_EXPERIENCE', response.data);
      });
    },
    async getExperienceById ({commit}, id) {
      commit('IS_LOADING');
      await axios.get(`${API_BASE}/experiences/${id}`).then(response => {
        commit('EXPERIENCE_BY_ID', response.data);
      });
    },
    async getRestaurants ({commit}) {
      await axios.get(`${API_BASE}/restaurants`).then(response => {
        commit('ALL_RESTAURANTS', response.data);
      });
    },
    async getRestaurantById ({commit}, id)  {
      await axios.get(`${API_BASE}/restaurants/${id}`).then(response => {
        commit('RESTAURANTS_BY_ID', response.data);
      });
    },
    async filterRestaurantSearch ({commit}, data = `${API_BASE}/restaurants`) {
      commit('IS_LOADING');
      commit('FILTER_RESTAURANTS_LOADING');
      await axios.get(data).then(response => {

          commit('FILTER_RESTAURANTS', response.data);
          commit('NOT_LOADING')
        // }, 5000)
      }).catch(({err}) => {
          commit('NOT_LOADING')
      });

    },
    filterExperiencesSearch: ({commit}, data = `${API_BASE}/experiences`) => {
      commit('FILTER_EXPERIENCE_LOADING')
      axios.get(data).then(response => {

          commit('FILTER_EXPERIENCE', response.data);
      }).catch(({err}) => {

      });
    },
    async userRegistration ({commit}, data) {
      commit('REGISTRATION_LOADING');
      await axios.post(`${API_BASE}/auth/register`, 
      {
        "email" : data.email,
        "password" : data.password,
        "first_name" : data.first_name,
        "surname" : data.surname
      }).then(res => {
        commit('REGISTRATION_SUCCESS', res.data);
        router.push("/");
      }).catch(err => {
        console.log(err);
        commit('REGISTRATION_ERROR', err.response.data);
      });
    },
    async userLogin ({commit}, data) {
      commit('LOGIN_LOADING');
		  await axios.post(`${API_BASE}/auth/login`, data).then(res => {
		        commit('LOGIN_SUCCESS', res.data)
		        router.push("/");
		      }).catch(err => {
            // console.log(`Error ${err}`);
            // console.log(err.response);

		        commit('LOGIN_FAILURE', err.response.data);
		      })
    },
    userLogout: ({ commit }) => {
      commit('USER_LOGOUT');
    },
    bookingExperience: ({ commit, state }, data) => {
      let requestHeaders = {
        headers: {'Authorization': "Bearer " + state.auth.access_token}
      };
      commit('BOOKING_EXPERIENCE_LOADING')
      axios.post(`${API_BASE}/bookings/experiences/${data.experience_id}`, 
      {
        "start_date": data.start_date,
	      "end_date": data.end_date
      }, requestHeaders).then(res => {
        commit('BOOKING_EXPERIENCE', res.data)
        router.push("/");
        console.log(res.data)
      }).catch(err => {
        commit('BOOKING_EXPERIENCE_FAILURE', err.response.data);
      })
    },
    async getEvents ({commit}) {
      commit('EVENTS_LOADING')
      await axios.get(`${API_BASE}/experience_types/2/experiences`)
            .then(res => {
              commit('GET_EVENTS', res.data)
            })
            .catch(err => {
              console.log(err);
            })
    },
    async getEventsById ({ commit }, data) {
      commit('EVENTS_LOADING')
      await axios.get(`${API_BASE}/experiences/${data}`)
            .then(res => {
              commit('GET_EVENTS_BY_ID', res.data)
            })
            .catch(err => {
              console.log(err);
            })
    },
    async filterEventsSearch ({commit}, data = `${API_BASE}/experience_types/2/experiences`) {
      commit('FILTER_EXPERIENCE_LOADING')
      // experiences?locations=${data.location}
      await axios.get(data).then(response => {
                commit('GET_EVENTS', response.data);
            }).catch(({error}) => {
                console.log(`Error ${error}`)
            });
    },
    async getPlaces({ commit }) {
      commit('IS_LOADING');
      await axios.get(`${API_BASE}/experience_types/2/experiences`)
                  .then((response) => {
                    commit('GET_PLACES', response.data);
                  }).catch(({error}) => {
                    console.log(`Error ${error}`)
                  })
    },
    async getPlacesById ({ commit }, data) {
      commit('IS_LOADING');
      await axios.get(`${API_BASE}/experiences/${data}`)
                  .then((response) => {
                    commit('GET_PLACES_BY_ID', response.data);
                  }).catch(({error}) => {
                    console.log(`Error ${error}`);
                  })
    },
    async filterPlacesSearch ({commit}, data = `${API_BASE}/experience_types/22/experiences`) {
      commit('FILTER_EXPERIENCE_LOADING')
      // experiences?locations=${data.location}
      await axios.get(data).then(response => {
                commit('GET_PLACES', response.data);
            }).catch(({error}) => {
                console.log(`Error ${error}`)
            });
    },
    async updateProfile ({ commit, state }, data) {
      let requestHeaders = {
        headers: {'Authorization': "Bearer " + state.auth.access_token}
      };
      commit('EDIT_PROFILE_LOADING');
      await axios.put(`${API_BASE}/users/${data.user_id}`, {
                    "first_name": data.first_name,
                    "surname": data.surname,
                    "email": data.email,
                    "subscribed_to_newsletter": 1,
                    "role": data.role
                  }, requestHeaders)
                  .then((res) => {
                    commit('EDIT_PROFILE_SUCESS', res.data)
                    console.log(res.data)
                  }).catch((error) => {
                    commit('EDIT_PROFILE_FAIL')
                      console.log(`Error ${error}`)
                  })
    }
}