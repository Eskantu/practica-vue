const store = {
    namespaced: true,
    state: { viewSnack: false, textSnack: 'Im a snackbar' },
    mutations: {
        SetSnack(state, properties) {
            state.viewSnack = properties.show
            state.textSnack = properties.text
        }
    },
    actions: {
        showHidenSnack({ commit }, properties) {
            commit('SetSnack', properties)
        },
        setShow({ state }, show) {
            state.viewSnack = !show
        }
    }
}

export default store
