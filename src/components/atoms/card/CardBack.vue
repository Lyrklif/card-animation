<script lang="ts" setup>
import AppIcon from "../AppIcon.vue";
</script>

<template>
  <div class="back">
    <div class="back__inner">
      <AppIcon name="pattern" class="back__pattern" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";

.back {
  height: 100%;
  width: 100%;
  padding: 6px 8px;
  background-color: #565762;
  border-radius: $border-radius;
  overflow: hidden;

  &__inner {
    background-color: rgba(#000000, 0.1);
    border-radius: 14px;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  &__pattern {
    height: 100%;
    width: 100%;
    display: block;
  }
}
</style>
