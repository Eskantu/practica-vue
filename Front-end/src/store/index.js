import Vue from "vue";
import Vuex from "vuex";
import RegistroStore from "../components/Registro/RegistroStore";
import LoginStore from '../components/Login/LoginStore'
import SnackStore from '../components/Snackbar/SnackStore'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
axios.defaults.baseURL = "http://localhost:5000/api/";
Vue.use(VueAxios, axios)
export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUserProfile(state, user) {
      state.user = user
      console.log(user)
    }
  },
  actions: {
  },
  modules: { RegistroStore, SnackStore, LoginStore },
});
