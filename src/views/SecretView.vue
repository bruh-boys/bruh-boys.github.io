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
  <div>
    <button v-if="showButton" class="play-button" @click="playSound">
      don't touch the button
    </button>
    <audio ref="audio" :src="audioSrc" loop></audio>
  </div>
</template>

<style scoped>
.play-button {
  font: inherit;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  padding: 8px 16px;
  color: #000;
  text-shadow: 0 1px 2px hsla(0, 0%, 100%, 0.15);
  background-color: #ad68d9;
  background-image: linear-gradient(#ad68d9, #a960d7);
  box-shadow: inset 0 0 2px hsla(0, 0%, 100%, 0.15);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s ease-out;
}
</style>
