<script setup lang="ts">
import BaseMenu from "~/components/layout/BaseMenu/BaseMenu.vue";
import BaseDrawer from "~/components/layout/BaseDrawer/BaseDrawer.vue";
export type HeaderOption = {
  label: string;
  url?: string;
  id: string;
  hiddeBreakPoint: number
}

const options: HeaderOption[] = [
  {
    label: 'Home',
    id: 'home',
    hiddeBreakPoint: 500
  },
  {
    label: 'Shop',
    id: 'shop',
    hiddeBreakPoint: 500
  },
  {
    label: 'Pages',
    id: 'pages',
    hiddeBreakPoint: 500
  },
  {
    label: 'Blog',
    id: 'blog',
    hiddeBreakPoint: 900
  },
  {
    label: 'About',
    id: 'about',
    hiddeBreakPoint: 1050
  },
  {
    label: 'Contact',
    id: 'contact',
    hiddeBreakPoint: 1050
  },
]

</script>
<template>
  <div>
    <div></div>
    <BaseMenu class="sticky top-0" :options="options"/>
    <main class="layout-base">
      <BaseDrawer class="top-[56px] bg-red-600" :options="options" />
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
