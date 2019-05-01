import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import router from '@/router';
import mutations from './mutations'
import state from './state'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex);
Vue.use(router)
Vue.use(VueNoty);


let API_BASE = 'https://travvapi.herokuapp.com/api';

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});