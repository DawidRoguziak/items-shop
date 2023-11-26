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
];

const isMobileMenuOpen = ref(false);
const onToggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

</script>

<template>
  <div class="relative">
    <div></div>
    <BaseMenu class="sticky top-0 z-50" :options="options" @toggle-mobile-menu="onToggleMenu"/>
    <main class="layout-base relative">
      <BaseDrawer v-model:is-open="isMobileMenuOpen" render class="top-[56px] bg-white shadow-orange-300" size="small">
        <template v-slot:default="{close}">
            <div>
              <div v-for="opt in options" :key="opt.id" class="flex items-center p-5 border-b-shopGray-300/40 border-b hover-interactive-element">
                {{ opt.label }}
              </div>
              <div class="p-5 flex justify-center items-center text-red-500" @click="close">
                Close
              </div>
            </div>
        </template>
      </BaseDrawer>
      <div class="layout-left"></div>
      <div class="layout-middle">
        <slot>
        </slot>
      </div>
      <div class="layout-right"></div>
    </main>
    <div></div>
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
