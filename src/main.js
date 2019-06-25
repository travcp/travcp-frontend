import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VuePassword from 'vue-password'
import vueHeadful from 'vue-headful';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import VeeValidate from 'vee-validate';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import vueCountryRegionSelect from 'vue-country-region-select'
import ImageUploader from 'vue-image-upload-resize'
import VueGmaps from 'vue-gmaps'

// import Cloudinary from 'cloudinary-vue';
// Vue.use(Cloudinary, {
//   configuration: {
//     cloudName: "brimatel"
//   }
// });

Vue.use(VueGmaps, {
  key: 'AIzaSyDgnbjMxlLW2BHBPJ4-iFsX_aB9jEHBFCg',
  // libraries: ['places'],
  // version: '3'
})
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

// import { VueperSlides, VueperSlide } from 'vueperslides'

// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
// import 'vueperslides/dist/vueperslides.css'

// import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
// import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// Vue.component(VuePassword)
Vue.component('vue-headful', vueHeadful);
// see docs for available options
const datepickerOptions = {}


Vue.use(ImageUploader);
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

Vue.use(vueCountryRegionSelect)
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('VueSlider', VueSlider);
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
