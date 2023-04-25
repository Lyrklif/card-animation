<script setup lang="ts">
import PlayButton from "../atoms/PlayButton.vue";
import Card from "../atoms/card/Card.vue";
import { ref } from "vue";

const startPlay = ref<boolean>(false);
const play = () => {
  startPlay.value = !startPlay.value;
};
</script>

<template>
  <div class="game">
    <PlayButton class="button" @click="play" />

    <div class="grid">
      <Card />

      <div class="bottom-wrap">
        <Card back class="card-bottom left" />
        <Card
          back
          text="A"
          :flip="startPlay"
          :shadow="startPlay"
          :class="{ top: startPlay }"
          class="card-bottom center"
        />
        <Card back class="card-bottom right" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$card-height: 277px;
$offsets: 50px;

.game {
  margin: 30px auto;
}

.button {
  margin-bottom: 30px;
}

.grid {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  height: $card-height + $card-height + $offsets;
}

.bottom-wrap {
  width: 100%;
}

.card-bottom {
  position: absolute;
  top: $card-height + $offsets;
  transition: all 0.6s ease;
  z-index: 1;

  &.left {
    left: 0;
  }
  &.center {
    left: 50%;
    transform: translateX(-50%);
  }
  &.right {
    right: 0;
  }
}

.top {
  position: absolute;
  top: -10px;
  animation: to-top 1s;
  z-index: 2;
}

@keyframes to-top {
  0% {
    top: $card-height + $offsets;
  }
  60% {
    top: $card-height + $offsets;
  }
  100% {
    top: -10px;
  }
}
</style>
