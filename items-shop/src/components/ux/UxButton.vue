<script setup lang="ts">
export type ButtonColor = 'primary' | 'success';
export interface ButtonProps {
  color?: ButtonColor,
}

const {color = 'primary'} = defineProps<ButtonProps>()

console.log(color)

</script>

<template>
<button class="py-0.5 px-1 rounded" :class="[color]">
    <slot></slot>
</button>
</template>

<style scoped lang="scss">
.primary {
  @apply bg-blue-500 text-white;
}
</style>