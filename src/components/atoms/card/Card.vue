<script lang="ts" setup>
import CardFront from "./CardFront.vue";
import CardBack from "./CardBack.vue";
import { defineProps } from "vue";

defineProps({
  flip: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card" :class="{ flip: flip }">
    <CardFront text="12" icon="clubs" class="side side-front" />
    <CardBack class="side side-back" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";
@import "../../../assets/styles/breakpoints";

.card {
  position: relative;
  perspective: 1000px;

  width: 118px;
  height: 178px;

  @include md-up {
    width: 185px;
    height: 276px;
  }
}

.side {
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.side-front {
  .card:hover & {
    transform: rotateY(180deg);
  }
}

.side-back {
  transform: rotateY(-180deg);

  .card:hover & {
    transform: rotateY(0deg);
  }
}

.flip {
}
</style>
