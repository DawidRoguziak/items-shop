<script setup lang="ts">

import UiInput from "~/components/ui/UiInput/UiInput.vue";
import UiButton from "~/components/ui/UiButton/UiButton.vue";

type UiSearch = {
  name: string,
  label?: string
}

withDefaults(defineProps<UiSearch>(), {})

</script>

<template>
  <div class="flex items-stretch">
    <UiInput :name="name" :label="label" class="rounded-r-none w-full">
      <template #iconStart>
        <span class="material-symbols-outlined text-3xl">
          search
        </span>
      </template>
    </UiInput>
    <UiButton size="medium" class="rounded-l-none rounded-r-lg">
      {{ label }}
    </UiButton>
  </div>
</template>