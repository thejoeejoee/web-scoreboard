import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import Axios from "axios";
import {getField, updateField} from 'vuex-map-fields';
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
        matchData: {events: []},
        baseApiUrl: 'https://is.handball.cz',

        // timer ID for fetching data
        dataTimerId: null,

        // custom teams data
        homeTeamShort: '',
        guestTeamShort: '',
    },
    actions: {
        askForMatchUrl({state, commit, dispatch}) {
            let url;
            // eslint-disable-next-line no-cond-assign
            if (url = prompt("Match url: ", state.matchUrl)) {
                commit('setMatchUrl', url)
                dispatch('loadMatchData');
            }
        },

        loadMatchData({state, commit}) {
            return Axios.post('/api/api-proxy', {url: state.matchUrl}).then((response) => {
                if (response.status === 200) {
                    commit('setMatchData', response.data.data)
                }
            })
        },

        startDataTimer({commit, dispatch}) {
            const timer = setInterval(() => {
                dispatch('loadMatchData');
            }, 3000);
            commit('setDataTimerId', timer);
        },
        stopDataTimer({commit, state}) {
            state.dataTimerId && clearInterval(state.dataTimerId);
            commit('setDataTimerId', null);
        },
    },
    getters: {
        getField,
        lastEvent: (state) => {
            if (!state.matchData.events.length) return null;

            // return JSON.parse("{\"id\":\"f745994a-3c11-4bb2-8542-5aacd8fa9c5c\",\"matchTime\":\"00:19:45\",\"periodTypeId\":1,\"competitionTeamId\":\"3a366e3d-58ce-4c62-8906-d5cda8bf0504\",\"competitionMatchEventTypeId\":9,\"competitionMatchParticipantId\":\"2e52b41f-204b-4e05-a426-4bf6d156768c\",\"playerName\":\"Bednárik Vít\",\"playerNumber\":null,\"guestTeamScore\":10,\"homeTeamScore\":10}");

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
        setDataTimerId(state, timerId) {
            state.dataTimerId = timerId;
        }
    },
    plugins: [createPersistedState()],
});
