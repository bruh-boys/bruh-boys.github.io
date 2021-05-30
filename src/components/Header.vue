<template>
  <header>
    <div :class="{ headerStructure: !darkMode, headerStructure_darkMode: darkMode }">
      <div :class="{ HS_Container: !darkMode, HS_Container_darkMode: darkMode }">
        <div class="HS_LogoStructure">
          <img src="/img/bruh_boys.png" class="HS_Logo" />
        </div>
        <div class="HS_NameStructure">
          <a href="https://github.com/bruh-boys" :class="{ HS_Name: !darkMode, HS_Name_darkMode: darkMode }">bruh-boys-website</a>
        </div>
        <div class="HS_ButtonStructure">
          <button @click="switchLight(!darkMode)" :class="{ HL_Button: !darkMode, HL_Button_darkMode: darkMode }">&#9728;</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import '/css/header.css';
</style>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['darkMode'])
  },
  methods: {
    ...mapMutations(['switchLight'])
  }
}
</script>