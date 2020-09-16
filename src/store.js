import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: [0, 0],
        time: 0,
    },
    actions: {

    },
    mutations: {
        setTime(state, value) {
            state.time = value;
        },

        setScore(state, {i, val}) {
            Vue.set(state.score, i, val);
        },
    }
});
