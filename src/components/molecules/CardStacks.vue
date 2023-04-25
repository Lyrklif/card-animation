<script setup lang="ts">
import Card from "../atoms/card/Card.vue";

defineProps({
  move: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="cards">
    <Card back class="card" />
    <Card back class="card" :flip="move" />
    <Card back class="card" />
  </div>
</template>

<style scoped lang="scss">
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  margin-left: 20px;
  margin-right: 20px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
