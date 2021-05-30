<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
@import "/css/main.css";
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapMutations, mapState } from 'vuex';

export default {
  methods: {
    ...mapMutations(['switchLight'])
  },
  async created() {
    await this.$store.dispatch("members/fetchMembers", null, {
      root: true
    });
  },
  components: {
    Header,
    Footer
  }
};
</script>