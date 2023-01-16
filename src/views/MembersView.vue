<script>
export default {
  data() {
    return {
      members: [],
      userActivities: [],
      selectedUser: "",
    };
  },
  async mounted() {
    const response = await fetch(
      "https://api.github.com/orgs/bruh-boys/members"
    );
    const members = await response.json();

    this.members = members.map((member) => {
      return {
        username: member.login,
        avatar: member.avatar_url,
        github: member.html_url,
      };
    });
  },
  methods: {
    async getActivities(username) {
      this.selectedUser = username;
      const response = await fetch(
        `https://api.github.com/users/${username}/events`
      );
      const userActivities_ = await response.json();
      this.userActivities = userActivities_
        .map((activity) => {
          activity.isPinned =
            activity.payload.description &&
            activity.payload.description.includes("pinned");
          return activity;
        })
        .filter((activity) => activity.type === "CreateEvent");
    },
  },
};
</script>

<template>
  <div>
    <div class="flex flex-wrap m-5">
      <div
        v-for="member in members"
        :key="member.username"
        class="w-full sm:w-1/2 lg:w-1/4 p-5"
      >
        <div class="bg-white rounded-md shadow-md">
          <img
            class="h-32 w32 rounded-full mx-auto"
            :src="member.avatar"
            :alt="member.username + ' avatar'"
            @click="getActivities(member.username)"
          />
          <div class="p-5">
            <h3 class="text-center text-lg font-medium">
              {{ member.username }}
            </h3>
            <a
              :href="member.github"
              target="_blank"
              class="text-center block text-sm font-medium text-slate-500"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div
      v-bind:class="{ hidden: !selectedUser }"
      class="fixed right-0 top-0 bottom-0 bg-white sm:w-1/2 lg:w-1/4 p-5 rounded-lg overflow-y-auto"
    >
      <button
        class="float-right bg-white text-gray-500 p-2 rounded-full"
        @click="selectedUser = null"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <h3 class="text-lg font-medium">{{ selectedUser }}'s activities.</h3>
      <ul class="mt-5">
        <li
          v-for="activity in userActivities"
          :key="activity.id"
          class="flex items-center mb-2"
        >
          <span
            :class="{
              'bg-indigo-500 text-white p-2 rounded-full': activity.isPinned,
              'bg-gray-500 text-white p-2 rounded-full': !activity.isPinned,
            }"
          ></span>
          <a
            :href="'https://github.com/' + activity.repo.name"
            target="_blank"
            class="ml-2 text-indigo-500 hover:text-indigo-700"
            >{{ activity.repo.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
