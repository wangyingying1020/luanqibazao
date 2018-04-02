import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        author: '',
        isShow: false,
    },
    mutations: {
        newauthor: function(state, msg) {
            state.author = msg;
        },
        newisShow: function(state, msg) {
            state.isShow = msg;
        }
    }
})

export default store