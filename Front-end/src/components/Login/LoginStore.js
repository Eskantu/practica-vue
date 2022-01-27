import StorePrincipal from '../../store'
import router from "../../router";
import auth from '../../auth/auth'
const store = {
    namespaced: true,
    state: {
        cargando: false,
        credenciales: { username: 'superUser', password: 'qwerty123' }
    },
    mutations: {

    },
    actions: {
        ObtenerUsuario(credenciales) {
            auth.Login(credenciales).then(res => {
                StorePrincipal.commit("setUserProfile", res.data)
                StorePrincipal.commit("SnackStore/SetSnack", "Login correcto")
                console.log(res.data)
                auth.setUserLogged(res.data)
                this.cargando = false
                router.push({ name: 'Home' })
            }).catch(e => {
                console.log(e)
                StorePrincipal.commit("SnackStore/SetSnack", "Credenciales incorrectas")
            })

        },
        setLoading({ state }, value) {
            console.log("setLoading", state.cargando);
            state.cargando = value
            console.log("setLoading", state.cargando);
        }
    }
}

export default store