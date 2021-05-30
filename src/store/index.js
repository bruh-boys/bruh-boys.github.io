import { createStore } from 'vuex';

import contributors from './modules/contributors';
import members from './modules/members';

export default createStore({
  state: {
    darkMode: true,
  },
  mutations: {
    switchLight(state, darkMode) {
      state.darkMode = darkMode;
    }
  },
  actions: {
  },
  modules: {
    contributors,
    members
  }
});