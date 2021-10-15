import StorePrincipal from '../../store/index'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = "http://localhost:5001/api";
Vue.use(VueAxios, axios)
const store = {
    namespaced: true,
    state: { usuario: {}, error: '' },
    mutations: {
        SetUsuario(state, usuario) {
            state.usuario = usuario
        }
    },
    actions: {
        CrearUsuario(user) {
            console.log(user.state.usuario)
            axios.post('/user', user.state.usuario).then(res => {
                console.log(res)
                StorePrincipal.commit('SnackStore/SetSnack', { show: true, text: 'Usuario creado' })
            }).catch(e => {
                console.log(e);
                StorePrincipal.commit('SnackStore/SetSnack', { show: true, text: 'Error al crear usuario' })
            })
        },
        ObtenerUsuario(user) {
            axios.post('/user',).then(res => {
                const result = res.find(e => e.username == user.username && e.password == user.password); console.console.log(result);
            }).catch(e => console.log(e))
        }
    },
};
export default store;
