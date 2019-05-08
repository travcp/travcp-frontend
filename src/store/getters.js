export default {
    allExperiences: (state) => {
      return state.experiences;
    },
    allRestaurants: (state) => {
      return state.restaurants;
    },
    allEvents: (state) => {
    	return state.events;
    },
    getExp1: (state) => {
    	return state.experiences[Math.floor(Math.random()*state.experiences.length)]
    },
    getExp2: (state) => {
    	return state.experiences[Math.floor(Math.random()*state.experiences.length)]
    },
    getExp3: (state) => {
    	return state.experiences[Math.floor(Math.random()*state.experiences.length)]
    },
    getExp4: (state) => {
    	return state.experiences[Math.floor(Math.random()*state.experiences.length)]
    },
    getExp5: (state) => {
    	return state.experiences[Math.floor(Math.random()*state.experiences.length)]
    }
}