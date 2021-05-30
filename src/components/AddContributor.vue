<template>
  <div class="HC_Contributor">
    <a :href="github">
      <img :src="avatar" alt="Avatar" class="HC_Avatar" />
      <div class="HC_Username">
        <p>{{ username }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
@import "/css/home.css";
</style>

<script>
export default {
  name: "AddContributor",
  props: {
    avatar: String,
    username: String,
    github: String,
  },
};
</script>