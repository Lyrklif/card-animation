<script lang="ts" setup>
import AppIcon from "../AppIcon.vue";
import { PropType } from "vue";

type TIcons = "clubs";

defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String as PropType<TIcons>,
    required: true,
  },
});
</script>

<template>
  <div class="front">
    <div class="head">
      <span class="text">{{ text }}</span>
      <AppIcon :name="icon" class="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";

.front {
  background-color: $white;
  height: 100%;
  width: 100%;
  padding: 10px 23px;
  border-radius: $border-radius;
  overflow: hidden;
}

.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
}

.text {
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
}

.icon {
  height: 47px;
  width: 50px;
}
</style>
