<script setup lang="ts">

type UiInput = {
  label?: string,
  color?: 'error' | 'warning' | 'success' | 'normal',
  type?: 'text'
  name: string
}

withDefaults(defineProps<UiInput>(), {
  color: 'normal',
  type: 'text',
});

const slots = useSlots();

</script>
<template>
  <div class="ui-input" :class="['ui-input--' + color]">
    <input :name="name" :id="name" class="ui-input__input" :placeholder="label" :type="type">
    <div v-if="slots.iconEnd" class="ui-input__icon-end">
      <slot name="iconEnd" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.ui-input {
  $self: &;
  @apply relative w-fit;

  &__input {
    @apply px-[16px] py-[14px] border-[1px] flex align-middle rounded
    placeholder-shopGray-400
    border-shopGray-100 bg-white font-normal text-md focus:border-shopPrimary outline-0;
  }
  &__icon-end {
    @apply absolute top-1/2 -translate-y-1/2 right-2
  }

  &--success {
    #{$self}__input {
      @apply border-shopPrimary;
      background: linear-gradient(0deg, rgba(32, 181, 38, 0.05) 0%, rgba(32, 181, 38, 0.05) 100%), #FFF;
    }

    #{$self}__icon-end {
      @apply text-shopPrimary
    }
  }

  &--warning {
    #{$self}__input {
      @apply border-shopWarning bg-white;
    }

    #{$self}__icon-end {
      @apply text-shopWarning
    }
  }

  &--error {
    #{$self}__input {
      @apply border-shopDanger bg-white;
    }

    #{$self}__icon-end {
      @apply text-shopDanger
    }
  }

}

</style>