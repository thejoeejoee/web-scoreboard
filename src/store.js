import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: [0, 0],
        time: 0,
        timeIsRunning: false,
    },
    actions: {

    },
    mutations: {
        setTime(state, value) {
            state.time = Math.max(value, 0);
        },
        setTimeIsRunning(state, value) {
            state.timeIsRunning = value;
        },

        setScore(state, {i, val}) {
            Vue.set(state.score, i, val);
        },
    }
});
