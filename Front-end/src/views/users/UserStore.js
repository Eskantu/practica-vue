import axios from 'axios'

const store = {
    namespaced: true,
    state: {
        userList: [], loading: true, userSelect: {}, search: '', headers: [
            { text: 'Nombre', value: 'username' },
            { text: 'Activo', value: 'isActive', sortable: false },
            { text: 'Creado por', value: 'createdFor' },
            { text: 'Modulos', value: 'modules' },
            { text: 'Fecha Creacion', value: 'created' },
        ]
    },
    mutations: {
        setUserList(state, items) {
            state.userList = items
        },
    },
    actions: {
        ObtenerUsuarios({ commit }) {
            axios.get('/user').then(res => commit("setUserList", res.data)).catch(e => console.log(e))
        },
        SetSearch({ state }, search) {
            state.search = search
        }
    }
}

export default store