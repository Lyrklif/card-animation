<script setup lang="ts">
import CardStacks from "../molecules/CardStacks.vue";
import OpenedCards from "../molecules/OpenedCards.vue";
import PlayButton from "../atoms/PlayButton.vue";
import { ref } from "vue";

const startPlay = ref<boolean>(false);
const play = () => {
  startPlay.value = true;
};
</script>

<template>
  <div class="game">
    <PlayButton class="button" @click.once="play" />
    <OpenedCards class="opened-cards" />
    <CardStacks :move="startPlay" />
  </div>
</template>

<style scoped lang="scss">
.game {
  margin: 60px auto;
}

.button {
  margin-bottom: 40px;
}

.opened-cards {
  margin-bottom: 50px;
}
</style>
