<script setup lang="ts">

const options = [
  'Home',
  'Shop',
  'Pages',
  'Blog',
  'About',
  'Contact',
]

</script>

<template>
  <div class="flex  items-center w-full bg-shopGray-800 py-[16px]">
    <div class="layout-left"></div>
    <div class=" layout-middle  text-white flex justify-between ">
      <div class="flex items-center gap-[32px]">
        <div v-for="opt in options" :key="opt" class="">
          {{ opt }}
        </div>
      </div>
      <div>
        (219) 555-0114
      </div>
    </div>
    <div class="layout-right"></div>
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
</style>