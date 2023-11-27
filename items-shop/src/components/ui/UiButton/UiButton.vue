<script setup lang="ts">

</script>

<template>
  <button class="flex items-center cursor-pointer justify-center px-5 py-4 rounded btn primary btn--rounded">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  &.primary {
    @apply bg-shopPrimary text-shopGray-50 hover:brightness-75
  }

  &--rounded {
    @apply rounded-full px-11
  }
}

</style>