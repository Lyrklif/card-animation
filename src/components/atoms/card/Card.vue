<script lang="ts" setup>
import CardFront from "./CardFront.vue";
import CardBack from "./CardBack.vue";
</script>

<template>
  <div class="card">
    <CardFront />
    <CardBack />
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";
@import "../../../assets/styles/breakpoints";

.card {
  border-radius: $border-radius;
  overflow: hidden;

  width: 118px;
  height: 178px;

  @include md-up {
    width: 185px;
    height: 276px;
  }
}
</style>
