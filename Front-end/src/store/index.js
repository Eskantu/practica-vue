import Vue from "vue";
import Vuex from "vuex";
import RegistroStore from "../components/Registro/RegistroStore";
import SnackStore from '../components/Snackbar/SnackStore'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
axios.defaults.baseURL = "http://localhost:5001/api/";
Vue.use(VueAxios, axios)
export default new Vuex.Store({
  state: {},
  mutations: {
  },
  actions: {
  },
  modules: { RegistroStore, SnackStore },
});
