<script setup lang="ts">

import type {HeaderOption} from "~/layouts/default.vue";
import UiButtonDropdown from "~/components/ui/UiButtonDropdown/UiButtonDropdown.vue";

const props = withDefaults(defineProps<{ options: HeaderOption[] }>(), {
  options: () => []
});

const emit = defineEmits<{
  toggleMobileMenu: []
}>();

const pageWidth = ref<number>(0);

const visibleElements = computed(() => {
  return [...props.options].filter(opt => opt.hiddeBreakPoint < pageWidth.value)
});

const hiddenElements = computed(() => {
  return [...props.options].filter(opt => pageWidth.value < opt.hiddeBreakPoint)
      .map(opt => ({value: opt.label, label: opt.label}))
});

const onPageResize = () => {
  pageWidth.value = window.innerWidth;
}

const onOptionClick = (option: unknown) => {
  console.log(option)
}

const toggleMobileMenu = () => {
  emit('toggleMobileMenu')
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
          <div v-for="opt in visibleElements" :key="opt.id" class="hover-interactive-element py-1 px-2 rounded">
            <span class="capitalize">{{ $t(opt.label) }}</span>
          </div>
          <UiButtonDropdown v-if="hiddenElements.length !== 0"
                            class="max-[500px]:hidden"
                            li-classes="capitalize"
                            :options="hiddenElements"
                            @option-clicked="onOptionClick"
          >
            <div class="flex items-center">
              <span class="capitalize">{{ $t('more') }}</span>
              <span class="material-symbols-outlined">
                expand_more
              </span>
            </div>
          </UiButtonDropdown>
        </div>
        <div>
          <span class="max-[500px]:hidden flex items-center">
            <span class="material-symbols-outlined mr-0.5">
              phone_in_talk
            </span>
            <span class="whitespace-nowrap">(219) 555-0114</span>
          </span>
        </div>
      </template>
      <template v-else>
        <div class="flex items-center" @click="toggleMobileMenu">
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