export default {
  namespaced: true,
  state: {
    contributors: []
  },
  mutations: {
    addContributor(state, contributor) {
      state.contributors.push(contributor);
    }
  },
  actions: {
    async fetchContributors({ state, commit }) {
      try {
        const response = await fetch('https://api.github.com/users/bruh-boys/repos');
        const repos = await response.json();

        repos.forEach(async (repo) => {
          const result = await fetch(repo.contributors_url);
          const contributors = await result.json();

          contributors.forEach(async (contributor) => {
            let addNewContributor = true;
            const newContributor = {
              username: contributor.login,
              avatar: contributor.avatar_url,
              github: contributor.html_url
            };

            if (state.contributors.length) state.contributors.forEach((Contributor) => {
              if (Contributor.github === newContributor.github) addNewContributor = false;
            });

            if (this.state.members.members.length) this.state.members.members.forEach((member) => {
              if (member.github === newContributor.github) addNewContributor = false;
            });

            if (addNewContributor) await commit('addContributor', newContributor);
          });
        });
      } catch (err) {
        console.log(err);
      };
    }
  }
};