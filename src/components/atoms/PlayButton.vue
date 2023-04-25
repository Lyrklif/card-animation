<script setup lang="ts"></script>

<template>
  <button class="button">Play</button>
</template>

<style scoped lang="scss">
.button {
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(180deg, #4457ff 0%, #3c4de1 100%);
  border: 1px solid #4456fe;
  border-radius: 12px;
  min-height: 50px;
  min-width: 200px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
