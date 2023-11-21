<script setup lang="ts">

import type {HeaderOption} from "~/layouts/default.vue";

const {options} = defineProps<{ options: HeaderOption[] }>()


const pageWidth = ref<number>(0);

const visibleElements = computed(() => {
  return [...options].filter(opt => opt.hiddeBreakPoint < pageWidth.value)
});

const hiddenElements = computed(() => {
  return [...options].filter(opt => pageWidth.value < opt.hiddeBreakPoint)
      .map(opt => ({value: opt.label, label: opt.label}))
});

const onPageResize = () => {
  pageWidth.value = window.innerWidth;
}

const onOptionClick = (option: unknown) => {
  console.log(option)
}

onMounted(() => {
  pageWidth.value = window.innerWidth;
  window.addEventListener('resize', onPageResize)
});


onUnmounted(() => {
  window.removeEventListener('resize', onPageResize)
});
</script>

<template>
  <div class="flex  items-center w-full bg-shopGray-800 py-[16px] h-[56px]">
    <div class="layout-left"></div>
    <div class=" layout-middle max-xs:px-2 text-white flex justify-between w-full">
      <template v-if="500 < pageWidth">
        <div class="flex items-center  gap-[32px]">
          <div v-for="opt in visibleElements" :key="opt.id" class="cursor-pointer">
            {{ opt.label }}
          </div>
          <UiUiButtonDropdown v-if="hiddenElements.length !== 0"
                              class="max-[500px]:hidden"
                              :options="hiddenElements"
                              @option-clicked="onOptionClick"
          >
            <div class="flex items-center">
              More
              <span class="material-symbols-outlined">
                expand_more
              </span>
            </div>
          </UiUiButtonDropdown>
        </div>
        <div>
          <span class="max-[500px]:hidden flex items-center">
            <span class="material-symbols-outlined mr-0.5">
              phone_in_talk
            </span>
            (219) 555-0114
          </span>
        </div>
      </template>
      <template v-else>
        <div class="flex items-center">
          <span class="material-symbols-outlined">
            menu
          </span>
        </div>
      </template>
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