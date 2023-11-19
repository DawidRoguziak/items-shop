<script setup lang="ts">
import BaseMenu from "~/components/layout/BaseMenu/BaseMenu.vue";
</script>
<template>
  <div>
    <div></div>
    <BaseMenu class="sticky top-0"/>
    <main class="grid grid-cols-12 auto-rows-auto	">
      <div class="col-start-1 col-end-3"></div>
      <div>
        <slot></slot>
      </div>
      <div class="col-start-9 col-end-12"></div>
    </main>
    <div>footer</div>
  </div>
</template>
