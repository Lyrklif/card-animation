<script lang="ts" setup>
import CardFront from "./CardFront.vue";
import CardBack from "./CardBack.vue";
import { defineProps } from "vue";

defineProps({
  flip: {
    type: Boolean,
    default: false,
  },
  back: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "12",
  },
});
</script>

<template>
  <div class="card" :class="{ flip: flip }">
    <CardFront
      :text="text"
      icon="clubs"
      class="side side-front"
      :class="[back ? 'hide' : 'show', shadow ? 'shadow' : '']"
    />
    <CardBack
      class="side side-back"
      :class="[back ? 'show' : 'hide', shadow ? 'shadow' : '']"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/breakpoints";

.card {
  position: relative;
  perspective: 1000px;
  user-select: none;
  width: inherit;
  height: inherit;
}

.side {
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;

  &.shadow {
    box-shadow: 0px 8px 8px -2px rgba(34, 60, 80, 0.3);
  }
}

.show {
  .flip & {
    transform: rotateY(180deg);
  }
}

.hide {
  transform: rotateY(-180deg);

  .flip & {
    transform: rotateY(0deg);
  }
}
</style>
