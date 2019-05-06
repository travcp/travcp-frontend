export default {
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
    booking_data: null,
    events: [],
    check_in: null,
    check_out: null,
    allEvents: []
    // user_token: 
}