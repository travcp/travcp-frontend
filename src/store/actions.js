import axios from 'axios';
let API_BASE = 'https://travvapi.herokuapp.com/api';

export default {
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
    async userRegistration ({commit}, data) {
      // let requestHeaders = {
      //   Authorization: "Bearer TOKEN"
      // }
      await axios.post(`${API_BASE}/auth/register`, 
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
    async userLogin ({commit}, data) {
    	return new Promise((resolve, reject) => {
		      axios.post(`${API_BASE}/auth/login`, {
        		"email" : data.email,
			    "password" : data.password
		      }).then(res => {
		        commit('LOGIN_SUCCESS', res.data)
		        resol
		        router.push("/");
		      }).catch(err => {
		        commit('LOGIN_FAILURE', err.response.data);
		      })
    	});

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
    },
    getEvents: ({commit}, data) => {
      axios.get(`/events`)
      .then(res => {
        commit('GET_EVENTS', res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }
}