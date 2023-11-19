<script setup lang="ts">
type HeaderOption = {
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
    hiddeBreakPoint: 500
  },
  {
    label: 'About',
    id: 'about',
    hiddeBreakPoint: 1000
  },
  {
    label: 'Contact',
    id: 'contact',
    hiddeBreakPoint: 1000
  },
]

const pageWidth = ref<number>(0);

const visibleElements = computed(() => {
  return [...options].filter(opt => opt.hiddeBreakPoint < pageWidth.value)
});

const hiddenElements = computed(() => {
  return [...options].filter(opt => pageWidth.value < opt.hiddeBreakPoint)
});

const onPageResize = () => {
  pageWidth.value = window.innerWidth;
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
  <div class="flex  items-center w-full bg-shopGray-800 py-[16px]">
    <div class="layout-left"></div>
    <div class=" layout-middle max-xs:px-2 text-white flex justify-between w-full ">
      <div class="flex items-center  gap-[32px]">
        <div v-for="opt in visibleElements" :key="opt.id" class="">
          {{ opt.label }}
        </div>
<!--        <div v-for="opt in hiddenElements" :key="opt.id" class="text-red-600">-->
<!--          {{ opt.label }}-->
<!--        </div>-->
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