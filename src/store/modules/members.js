export default {
  namespaced: true,
  state: {
    members: []
  },
  mutations: {
    addMember(state, member) {
      state.members.push(member);
    }
  },
  actions: {
    async fetchMembers({state, commit, dispatch}) {
      try {
        const response = await fetch("https://api.github.com/orgs/bruh-boys/members");
        const members = await response.json();
        
        members.forEach(async (member) => {
          const newMember = {
            username: member.login,
            avatar: member.avatar_url,
            github: member.html_url
          };

          await commit('addMember', newMember);
        });
        
      } catch (err) {
        console.log(err);
      } finally {
        await dispatch("contributors/fetchContributors", null, {
          root: true
        });
      };
    }
  }
};