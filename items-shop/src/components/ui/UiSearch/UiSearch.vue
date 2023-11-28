<script setup lang="ts">

import UiInput from "~/components/ui/UiInput/UiInput.vue";
import UiButton from "~/components/ui/UiButton/UiButton.vue";

type UiSearch = {
  name: string
}

withDefaults(defineProps<UiSearch>(), {})

</script>

<template>
  <div class="flex items-stretch">
    <UiInput label="Search" :name="name" class="rounded-r-none">
      <template #iconStart>
        <span class="material-symbols-outlined text-2xl">
          search
        </span>
      </template>
    </UiInput>
    <UiButton size="medium" class="rounded-l-none rounded-r-lg">
      Search
    </UiButton>
  </div>
</template>