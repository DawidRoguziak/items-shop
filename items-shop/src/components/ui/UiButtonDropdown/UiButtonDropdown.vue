<script setup lang="ts">

import {vClickOutside} from "~/directives/clickOutside/clickOutside";

export type DropDownOption = {
  label: string, // label is used as key
  value: unknown,
}

export type DropdownOptions = {
  options?: DropDownOption[];
}

const props = withDefaults(defineProps<DropdownOptions>(), {
  options: () => []
});
const emit = defineEmits<{
  optionClicked: [option: unknown]
}>()

const visible = ref<boolean>(false)
const show = () => {
  visible.value = true;
}

const hide = () => {
  visible.value = false;
}

const onOptionClick = (value: unknown) => {
  emit('optionClicked', value);
  visible.value = false;
}


</script>

<template>
  <div class="relative w-fit" v-click-outside="hide">
    <div @click="show">
      <slot></slot>
    </div>
    <div v-show="visible" class="absolute top-full bg-white base-drop-shadow rounded w-fit">
      <slot name="option-list">
        <ul class="rounded">
          <li v-for="{label, value} in options" :key="'dropdown-id-' + label"
              @click="onOptionClick(value)"
              class="px-2 py-1 text-black hover-interactive-element">
            {{ label }}
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>