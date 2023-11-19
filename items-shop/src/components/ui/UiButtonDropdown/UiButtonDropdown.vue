<script setup lang="ts">

import {vClickOutside} from "~/directives/clickOutside/clickOutside";

export type DropdownOptions = {
  options?: string[];
}

const {options = []} = defineProps<DropdownOptions>();

const visible = ref<boolean>(true)

const onClickOutSide = () => {
  console.log('outside')
}

</script>

<template>
  <div class="relative" v-click-outside="onClickOutSide">
    <slot></slot>
    <div v-show="visible" class="absolute top-full">
      <slot name="option-list">
        <ul class="">
          <li v-for="opt in options" :key="'dropdown-id-' + opt">
            {{ opt }}
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>