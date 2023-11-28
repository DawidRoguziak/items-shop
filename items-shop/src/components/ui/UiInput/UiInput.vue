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
  <div class="ui-input relative w-fit focus-within:border-shopPrimary
  px-[16px] py-[14px] border-[1px] flex align-middle rounded-lg
  border-shopGray-100 bg-white"
       :class="['ui-input--' + color]">
    <div v-if="slots.iconStart" class="ui-input__icon-start">
      <slot name="iconStart"/>
    </div>
    <input :name="name" :id="name" class="ui-input__input" :placeholder="label" :type="type">
    <div v-if="slots.iconEnd" class="ui-input__icon-end">
      <slot name="iconEnd"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.ui-input {
  $self: &;

  &__input {
    @apply placeholder-shopGray-400
    font-normal text-[14px]  outline-0;
  }

  :deep(#{$self}__icon-start) {
    @apply flex align-middle items-center mr-2;
  }

  :deep(#{$self}__icon-end) {
    @apply flex align-middle items-center ml-2;
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