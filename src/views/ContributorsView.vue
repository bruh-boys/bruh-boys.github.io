<script>
import axios from "axios";

export default {
  data() {
    return {
      contributors: new Set(),
    };
  },
  created() {
    axios
      .get(`https://api.github.com/orgs/bruh-boys/repos?per_page=1000`)
      .then((response) => {
        response.data.forEach((repo) => {
          axios.get(repo.contributors_url).then((response) => {
            response.data.forEach((contributor) => {
              this.contributors.add(contributor);
            });
          });
        });
      });
  },
};
</script>

<template>
  <div>
    <h1>Contribuidores de la organización</h1>
    <ul>
      <li v-for="contributor in contributors" :key="contributor.login">
        {{ contributor.login }}
      </li>
    </ul>
  </div>
</template>
