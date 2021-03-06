import Vue from "vue";
import Vuex from "vuex";
import RegistroStore from "../components/Registro/RegistroStore";
import LoginStore from '../components/Login/LoginStore'
import SnackStore from '../components/Snackbar/SnackStore'
import NewStore from '../views/New/viewStore'
import UserStore from '../views/users/UserStore'
import UploadStore from '../views/uploadFile/UploadStore'
// import auth from '../auth/auth'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
axios.defaults.baseURL = "https://app-mevn-eskantu.herokuapp.com/api/";
Vue.use(VueAxios, axios)
export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUserProfile(state, user) {
      state.user = user
    },

  },
  actions: {
  },
  modules: { RegistroStore, SnackStore, LoginStore, NewStore, UserStore, UploadStore },
});
