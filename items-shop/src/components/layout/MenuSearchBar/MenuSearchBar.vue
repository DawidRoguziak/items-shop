<script setup lang="ts">

import UiSearch from "~/components/ui/UiSearch/UiSearch.vue";
import {UtilsString} from "~/utils/strings"
import type {BaseApiListResponse} from "../../../../../types/BaseApiListResponse";
import type {Product} from "../../../../../types/Product";
import useGetApiLink from "~/composables/useGetApiLink";

const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('/products'));

</script>

<template>
  <div class="bg-white flex">
    <div class="layout-left">
    </div>
    <div class="layout-middle flex gap-5 justify-between py-[27px]">
      <NuxtImg format="avif,webp" fit="contain" class="object-contain" src="Logo.png" sizes="xs:183px"></NuxtImg>
      <UiSearch name="navigationSearch" class="h-[45px] navigation-search"
                :items="data.records.items ?? []"
                :label="UtilsString.capitalizeFirstLetter($t('search'))">
        <template #searchItem="{item}">
          <div class="bg-white px-2 py-1">
            {{ item.name }}
          </div>
        </template>
      </UiSearch>
      <div>koszyk</div>
    </div>
    <div class="layout-right">

    </div>
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

.navigation-search {
  width: clamp(100px, 600px, 1000px);
}
</style>