<script>
import axios from "axios";

export default {
  data() {
    return {
      uniqueContributors: new Set(),
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/orgs/bruh-boys/repos", {
        headers: {
          Authorization: "Bearer <token>",
        },
      })
      .then((response) => {
        const repos = response.data;
        for (let i = 0; i < repos.length; i++) {
          axios.get(repos[i].contributors_url).then((response) => {
            for (let j = 0; j < response.data.length; j++) {
              this.uniqueContributors.add(response.data[j].login);
            }
          });
        }
      });
  },
};
</script>

<template>
  <div>
    <div class="flex flex-wrap m-5">
      <div
        v-for="contributor in uniqueContributors"
        :key="contributor"
        class="w-full sm:w-1/2 lg:w-1/4 p-5"
      >
        <div class="bg-white rounded-md shadow-md">
          <img
            class="h-32 w32 rounded-full mx-auto"
            :src="`https://avatars.githubusercontent.com/${contributor}`"
            alt="Profile image of {{contributor}}"
          />
          <div class="p-5">
            <h3 class="text-center text-lg font-medium">{{ contributor }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
