<script setup lang="ts">

</script>

<template>
  <button class="flex items-center cursor-pointer justify-center btn primary primary--reverse normal">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  &.normal {
    @apply px-[24px] py-[10px] text-sm leading-4;
  }

  &.medium {
    @apply px-[32px] py-[14px] text-md leading-4;
  }

  &.large {
    @apply px-[40px] py-[16px] text-lg leading-5;
  }

  &.primary {
    @apply bg-shopPrimary text-shopGray-50 rounded-full hover:bg-shopHardPrimary;

    &--ghost {
      @apply text-shopPrimary;
      &:hover {
        background: rgba(44, 116, 47, 0.20);
      }

      background: rgba(86, 172, 89, 0.10);
    }

    &--reverse {
      @apply bg-white text-shopPrimary border-[2px] border-shopPrimary
      hover:border-shopHardPrimary hover:bg-white hover:text-shopHardPrimary
    }
  }


}

</style>