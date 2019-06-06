export default {
    experiences: [],
    experiencesPlacehodler: [],
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
    loading: {
        getExperiences: false,
        getExperienceById: false,
        getRestaurants: false,
        getRestaurantById: false,
        filterRestaurantSearch: false,
        filterExperiencesSearch: false,
        userRegistration: false,
        userLogin: false,
        userLogout: false,
        bookingExperience: false,
        getEvents: false,
        getEventsById: false,
        filterEventsSearch: false,
        getPlaces: false,
        getPlacesById: false,
        filterPlacesSearch: false,
        updateProfile: false,
        getReviewsData: false,
        rateExperience: false,
        getExperienceTypes: false,
        getMyBookings: false,
        merchantSignup: false,
        submitExperience: false,
        bookRestaunrant: false,
        merchantEditExperience: false,
        deleteMenu: false,
        addMenu: false
    },
    loadingExperience: false,
    auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null,
    booking_data: null,
    events: [],
    check_in: null,
    check_out: null,
    event: {},
    places: [],
    place: {},
    editProfileData: null,
    reviews: [],
    editProfileError: null,
    reviewData: null,
    API_BASE:'https://travvapi.herokuapp.com/api',
    emptySearchResult: false,
    experience_types: [],
    homeSearch: null,
    bookings: []
    // user_token: 
}