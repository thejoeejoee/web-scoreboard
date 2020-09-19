import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import Axios from "axios";
import { getField, updateField } from 'vuex-map-fields';
import _ from 'lodash'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: [0, 0], // TODO: remove?

        // time management
        time: 0,
        timeIsRunning: false,

        // graphics & controls stuff
        mode: null,
        showEvents: true,

        // match
        matchUrl: null,
        matchData: {},
        baseApiUrl: 'https://is.handball.cz',
    },
    actions: {
        askForMatchUrl({state, commit}) {
            let url;
            // eslint-disable-next-line no-cond-assign
            if (url = prompt("Match url: ", state.matchUrl)) {
                commit('setMatchUrl', url)

                return Axios.post('/api/api-proxy', {url: url}).then((response) => {
                    if (response.status === 200) {
                        commit('setMatchData', response.data.data)
                    }
                })
            }
        }
    },
    getters: {
        getField,
        lastEvent: (state) => {
            if (!state.matchData.events.length) return null;

            return _.last(_.sortBy(state.matchData.events, 'matchTime'))
        }
    },
    mutations: {
        updateField,
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
