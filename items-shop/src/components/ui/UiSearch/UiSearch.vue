<script setup lang="ts" generic="T">

import UiInput from "~/components/ui/UiInput/UiInput.vue";
import UiButton from "~/components/ui/UiButton/UiButton.vue";

type UiSearch = {
  name: string,
  label?: string,
  items?: T[]
}

withDefaults(defineProps<UiSearch>(), {
  items: () => [],
});

</script>

<template>
  <div class="flex items-stretch relative">
    <div class="relative flex w-full">
      <UiInput :name="name" :label="label" class="rounded-r-none w-full"
               :class="{'rounded-bl-none': items.length !== 0}">
        <template #iconStart>
          <span class="material-symbols-outlined text-3xl">
            search
          </span>
        </template>
      </UiInput>
      <div class="ui-search__list absolute bottom-0 left-0 translate-y-full w-full base-drop-shadow-not-top z-20
        rounded-b-lg
      ">
        <template v-for="item in items">
          <slot name="searchItem" :item="item"></slot>
        </template>
      </div>
    </div>
    <UiButton size="medium" class="rounded-l-none rounded-r-lg">
      {{ label }}
    </UiButton>
  </div>
</template>
<style lang="scss" scoped>
:deep(.ui-search__list > :last-child) {
  @apply rounded-b-lg;
}
</style>