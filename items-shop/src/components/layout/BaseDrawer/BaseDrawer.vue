<script setup lang="ts">
type BaseDrawerSizes = 'small' | 'medium' | 'large' | 'full';
type BaseDrawerDirection = 'left' | 'right';

type BaseDrawer = {
  size?: BaseDrawerSizes;
  direction?: BaseDrawerDirection;
  render?: boolean;
  isOpen?: boolean;
}

const props = withDefaults(defineProps<BaseDrawer>(), {
  size: 'small',
  direction: 'left',
  render: false,
  isOpen: false,
});

const isRendered = ref<boolean>(props.render);
const sizeClass = ref<BaseDrawerSizes | null>(null)
const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>();

watch(
    () => props.isOpen,
    (newValue) => {
      if (newValue) {
        isRendered.value = true;
        nextTick(() => {
          sizeClass.value = props.size;
        });
      } else {
        isRendered.value = props.render;
        nextTick(() => {
          sizeClass.value = null;
        });
      }
    },
    {
      immediate: true,
      flush: 'post'
    }
)

const close = () => {
  emit('update:isOpen', false);
}

</script>

<template>
  <div v-if="isRendered" class="fixed base-drawer h-full w-[0px] overflow-hidden"
       :class="[sizeClass, {'left-0': direction === 'left', 'right-0': direction === 'right'}]">
    <div class="w-full  whitespace-nowrap">
      <slot :close="close">

      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-drawer {
  $self: &;

  &.small {
    @apply w-3/12;

    @media (max-width: 1000px) {
      @apply w-5/12;
    }

    @media (max-width: 700px) {
      @apply w-full;
    }
  }

  &.medium {
    @apply w-5/12;

    @media (max-width: 1000px) {
      @apply w-8/12;
    }

    @media (max-width: 700px) {
      @apply w-full;
    }
  }

  &.large {
    @apply w-8/12;

    @media (max-width: 700px) {
      @apply w-full;
    }
  }

  &.full {
    @apply w-full;
  }

  transition: width 1s ease;
}
</style>