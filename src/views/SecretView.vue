<script>
import audioSrc from "@/assets/Conga.mp3";

export default {
  data() {
    return {
      audioSrc,
      showButton: true,
    };
  },
  methods: {
    playSound() {
      this.$refs.audio.play();
      this.showButton = false;
    },
  },
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <button class="mx-auto text-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:shadow-outline" v-if="showButton" @click="playSound">
      don't touch the button
    </button>
    <audio ref="audio" :src="audioSrc" loop></audio>
  </div>
</template>
