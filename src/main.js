import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import VeeValidate from 'vee-validate';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.use(VueNoty);
Vue.use(VeeValidate);
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('VueSlider', VueSlider);
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
