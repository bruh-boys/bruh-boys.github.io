import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      contributors: [],
      members: [],
    };
  },
  mutations: {
    async fetch(state, key, url) {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      state[key] = data;

      return state[key];
    },
    async getContributors(state) {
      if (state.contributors.length > 0) return state.contributors;

      return await this.fetch(
        state, 'contributors', 'https://api.github.com/orgs/bruh-boys/repos'
      );
    },
    async getMembers(state) {
      if (state.members.length > 0) return state.members;

      return await this.fetch(
        state, 'members', 'https://api.github.com/orgs/bruh-boys/members'
      );
    }
  },
});

export default store;
