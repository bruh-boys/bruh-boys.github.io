<template>
  <div :class="{ homeStructure: !darkMode, homeStructure_darkMode: darkMode }">
    <div :class="{ HS_Margin: !darkMode, HS_Margin_darkMode: darkMode }">
      <div :class="{ HS_Title: !darkMode, HS_Title_darkMode: darkMode }">
        <p>Official Members</p>
      </div>

      <div class="HS_CS">
        <div class="HS_CC" v-for="(member, index) of members" :key="index">
          <AddContributor :avatar="member.avatar" :username="member.username" :github="member.github" />
        </div>
      </div>

      <div :class="{ HS_Title: !darkMode, HS_Title_darkMode: darkMode }">
        <p>Contributors</p>
      </div>

      <div class="HS_CS">
        <div class="HS_CC" v-for="(contributor, index) of contributors" :key="index">
          <AddContributor :avatar="contributor.avatar" :username="contributor.username" :github="contributor.github"/>
        </div>
      </div>

      <div :class=" { HS_Title: !darkMode, HS_Title_darkMode: darkMode} "></div>
    </div>
  </div>
</template>

<style scoped>
@import "/css/home.css";
</style>

<script>
import AddContributor from "@/components/AddContributor.vue";
import Header from "@/components/Header.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["darkMode"]),
    ...mapState("contributors", ["contributors"]),
    ...mapState("members", ["members"])
  },
  components: {
    Header,
    AddContributor
  }
};
</script>