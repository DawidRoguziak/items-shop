<script setup lang="ts">
import BaseMenu from "~/components/layout/BaseMenu/BaseMenu.vue";
import BaseDrawer from "~/components/layout/BaseDrawer/BaseDrawer.vue";
import {headerOptions} from "~/data/headerOptions";
import MenuSearchBar from "~/components/layout/MenuSearchBar/MenuSearchBar.vue";

const isMobileMenuOpen = ref(false);
const onToggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

</script>

<template>
  <div class="relative font-medium">
    <div></div>
    <MenuSearchBar />
    <BaseMenu class="sticky top-0 z-50" :options="headerOptions" @toggle-mobile-menu="onToggleMenu"/>
    <main class="layout-base relative">
      <BaseDrawer v-model:is-open="isMobileMenuOpen" render class="top-[56px] bg-white shadow-orange-300" size="small">
        <template v-slot:default="{close}">
          <div>
            <div v-for="opt in headerOptions" :key="opt.id"
                 class="flex items-center p-5 border-b-shopGray-300/40 border-b hover-interactive-element">
              <span class="first-letter:uppercase">{{ $t(opt.label) }}</span>
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
