import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mode: null,
        score: [0, 0],
        time: 0,
        timeIsRunning: false,

        matchUrl: null,
    },
    actions: {
        askForMatchUrl({commit}) {
            let url;
            // eslint-disable-next-line no-cond-assign
            if (url = prompt("Match url: ")) {
                commit('setMatchUrl', url)
            }
        }
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

        setMatchUrl(state, url) {
            state.matchUrl = url
        },
        setMode(state, mode) {
            state.mode = mode
        },
    }
});
