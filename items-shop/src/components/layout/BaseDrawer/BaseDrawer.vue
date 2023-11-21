<script setup lang="ts">
import type {HeaderOption} from "~/layouts/default.vue";

type BaseDrawer = {
  options: HeaderOption[],
  size?: 'small' | 'medium' | 'large' | 'full'
}
const props = withDefaults(defineProps<BaseDrawer>(), {
  options: () => [],
  size: 'small'
})

</script>

<template>
  <div class="fixed base-drawer h-full" :class="[props.size]">
    drawer
    {{ size }}
  </div>
</template>

<style scoped lang="scss">
.base-drawer {
  &.small {
    @apply w-3/12
  }

  &.medium {
    @apply w-5/12
  }

  &.large {
    @apply w-8/12
  }

  &.full {
    @apply w-full
  }
}
</style>