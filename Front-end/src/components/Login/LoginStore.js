import StorePrincipal from '../../store'
import router from "../../router";
import axios from 'axios'
const store = {
    namespaced: true,
    state: {
        credenciales: { username: 'superUser', password: 'qwerty123' }
    },
    mutations: {

    },
    actions: {
        ObtenerUsuario(credenciales) {
            axios.post("user/buscar", credenciales.state.credenciales).then(res => {
                StorePrincipal.commit("setUserProfile", res.data)
                StorePrincipal.commit("SnackStore/SetSnack", "Login correcto")
                console.log(res)
                router.push({ name: 'Home' })
            }).catch(e => {
                console.log(e)
                StorePrincipal.commit("SnackStore/SetSnack", "Credenciales incorrectas")
            })
        }
    }
}

export default store