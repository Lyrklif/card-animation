<script lang="ts" setup>
import AppIcon from "../AppIcon.vue";
import { PropType } from "vue";

// TODO add three more types of cards (in the next version)
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
@import "../../../assets/styles/breakpoints";

.front {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  padding: 10px 4px;
  border-radius: var(--border-radius);
  overflow: hidden;

  @include md-up {
    padding-left: 23px;
    padding-right: 23px;
  }
}

.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;

  @include md-up {
    max-width: 30px;
  }
}

.text {
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2em;

  @include md-up {
    font-size: 48px;
  }
}

.icon {
  height: 30px;
  width: 30px;

  @include md-up {
    height: 47px;
    width: 50px;
  }
}
</style>
