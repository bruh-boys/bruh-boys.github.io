<template>
  <footer>
    <div :class="{ FooterStructure: !darkMode, FooterStructure_darkMode: darkMode }">
      <div class="FS_Container">
        <p :class="{ FS_Text: !darkMode, FS_Text_darkMode: darkMode }">This is a hobby organitation, just for fun and learn</p>
        <p :class="{ FS_Text: !darkMode, FS_Text_darkMode: darkMode }">bruh-boys-website</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import '/css/footer.css';
</style>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Footer',
  computed: {
    ...mapState(['darkMode'])
  }
}
</script>