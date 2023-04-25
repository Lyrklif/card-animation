<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "AppIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#icon-${props.name}`);
    return { symbolId };
  },
});
</script>

<template>
  <svg aria-hidden="true" class="svg">
    <use :href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped>
.svg {
  max-width: 100%;
  max-height: 100%;
}
</style>
