import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import VeeValidate from 'vee-validate';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
// import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
// import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// see docs for available options
const datepickerOptions = {}

// make sure we can use it in our components
// Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(VueNoty);
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('VueSlider', VueSlider);
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
