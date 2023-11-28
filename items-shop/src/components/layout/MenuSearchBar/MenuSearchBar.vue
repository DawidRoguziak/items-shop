<script setup lang="ts">

import UiSearch from "~/components/ui/UiSearch/UiSearch.vue";
</script>

<template>
  <div class="bg-white flex">
    <div class="layout-left">
    </div>
    <div class="layout-middle flex gap-5 justify-between py-[27px]">
      <NuxtImg format="avif,webp" fit="contain" class="object-contain" src="Logo.png" sizes="xs:183px"></NuxtImg>
      <UiSearch name="navigationSearch" class="h-[45px] navigation-search" label="Search"/>
      <div>koszyk</div>
    </div>
    <div class="layout-right">

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/layout-base";

.layout-left {
  @include layoutBaseLeft();
}

.layout-right {
  @include layoutBaseRight();
}

.layout-middle {
  @include layoutBaseMiddle();
}

.navigation-search {
  width: clamp(100px, 400px, 600px);
}
</style>