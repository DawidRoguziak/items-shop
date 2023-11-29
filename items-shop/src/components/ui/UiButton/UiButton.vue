<script setup lang="ts">

type UiButton = {
  size?: 'normal' | 'medium' | 'large',
  color?: 'primary',
  reverse?: boolean,
  ghost?: boolean,
}

const props = withDefaults(defineProps<UiButton>(), {
  size: 'normal',
  color: 'primary',
  reverse: false,
  ghost: false
});

const getAdditionalClasses = () => {
  const classes = [];
  if (props.ghost) {
    classes.push(`${props.color}--ghost`);
  }

  if (props.reverse) {
    classes.push(`${props.color}--reverse`);
  }

  return classes;
}

</script>

<template>
  <button class="flex items-center cursor-pointer justify-center
  ui-btn bg-shopPrimary text-shopGray-50 rounded-full hover:bg-shopHardPrimary"
          :class="[size,color, ...getAdditionalClasses()]"
  >
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.ui-btn {
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