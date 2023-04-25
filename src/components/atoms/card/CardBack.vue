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
@import "../../../assets/styles/breakpoints";

.back {
  height: 100%;
  width: 100%;
  padding: 6px 8px;
  background-color: #565762;
  border-radius: var(--border-radius);
  overflow: hidden;

  &__inner {
    background-color: rgba(#000000, 0.1);
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
    width: 100%;

    @include md-up {
      border-radius: 14px;
    }
  }

  &__pattern {
    height: 100%;
    width: 100%;
    display: block;
  }
}
</style>
