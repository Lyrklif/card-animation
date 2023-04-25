<script setup lang="ts">
import PlayButton from "../atoms/PlayButton.vue";
import Card from "../atoms/card/Card.vue";
import { ref } from "vue";

const startPlay = ref<boolean>(false);
const play = () => {
  startPlay.value = true;
};
</script>

<template>
  <div class="game">
    <PlayButton class="button" @click.once="play" />

    <div class="grid">
      <Card class="card full-size-card" />

      <div class="bottom-wrap">
        <Card back class="card card-bottom left" />
        <Card
          back
          text="A"
          :flip="startPlay"
          :shadow="startPlay"
          :class="[startPlay ? 'top full-size-card' : '']"
          class="card card-bottom center"
        />
        <Card back class="card card-bottom right" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles/breakpoints";

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
  max-width: calc((var(--card-width-min) * 3) + (var(--offsetsX) * 2));
  height: calc(var(--card-height) + var(--card-height-min) + var(--offsetsY));
}

.bottom-wrap {
  width: 100%;
}

.card-bottom {
  position: absolute;
  width: var(--card-width-min);
  height: var(--card-height-min);
  top: calc(var(--card-height) + var(--offsetsY));
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

.full-size-card {
  width: var(--card-width);
  height: var(--card-height);
}

.top {
  position: absolute;
  top: -10px;
  animation: to-top 1s;
  z-index: 2;
  scale: 1.02;
  transform-origin: 0%;
}

@keyframes to-top {
  0% {
    top: calc(var(--card-height) + var(--offsetsY));
  }
  60% {
    top: calc(var(--card-height) + var(--offsetsY));
  }
  100% {
    top: -10px;
  }
}
</style>
