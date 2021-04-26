import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: {},
    },
    getters: {},
    mutations: {
        updateData(state, item) {
            console.log('登录进来', item)
            state.userData = item;
        },
    },
    actions: {

    }
})