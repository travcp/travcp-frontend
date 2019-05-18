export default {
  allExperiences: state => {
    return state.experiences;
  },
  allRestaurants: state => {
    return state.restaurants;
  },
  allEvents: state => {
    return state.events;
  },
  getExp1: state => {
    return state.experiencesPlacehodler[
      Math.floor(Math.random() * state.experiencesPlacehodler.length)
    ];
  },
  getExp2: state => {
    return state.experiencesPlacehodler[
      Math.floor(Math.random() * state.experiencesPlacehodler.length)
    ];
  },
  getExp3: state => {
    return state.experiencesPlacehodler[
      Math.floor(Math.random() * state.experiencesPlacehodler.length)
    ];
  },
  getExp4: state => {
    return state.experiencesPlacehodler[
      Math.floor(Math.random() * state.experiencesPlacehodler.length)
    ];
  },
  getExp5: state => {
    return state.experiencesPlacehodler[
      Math.floor(Math.random() * state.experiencesPlacehodler.length)
    ];
  }
};
