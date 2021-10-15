// import StorePrincipal from '../../store/index'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = "http://localhost:5001/api";
Vue.use(VueAxios, axios)
const store = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {}
}