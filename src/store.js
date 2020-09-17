import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mode: null,
        score: [0, 0],
        time: 0,
        timeIsRunning: false,

        matchUrl: null,
        matchData: {},
    },
    actions: {
        askForMatchUrl({state, commit}) {
            let url;
            // eslint-disable-next-line no-cond-assign
            if (url = prompt("Match url: ", state.matchUrl)) {
                commit('setMatchUrl', url)

                return Axios.post('/api/data-proxy', {url: url}).then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        commit('setMatchData', response.data.data)
                    }
                })
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
        setMatchData(state, matchData) {
            state.matchData = matchData
            state.score = [matchData.homeTeamScore || 0, matchData.guestTeamScore || 0]
        },
        setMode(state, mode) {
            state.mode = mode
        },
    },
    plugins: [createPersistedState()],
});
