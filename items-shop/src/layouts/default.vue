<script setup lang="ts">
import BaseMenu from "~/components/layout/BaseMenu/BaseMenu.vue";
</script>
<template>
  <div>
    <div></div>
    <BaseMenu class="sticky top-0"/>
    <main class="layout-base">
      <div class="layout-left"></div>
      <div class="layout-middle">
        <slot></slot>
      </div>
      <div class="layout-right"></div>
    </main>
    <div>footer</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/layout-base";

.layout-base {
  @include layoutBaseContainer();
}

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
