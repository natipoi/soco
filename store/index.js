
const https = require("https");
import Vuex from 'vuex'



export const state = () => ({
  mode: false
});

export const mutations = {
    changeMode(state, selectMode) { state.mode = selectMode }
};

export const actions = {
  changeDayNightMode({commit}, selectMode) {
    commit("changeMode", selectMode)
  }
};
