<script setup lang="ts">

import UiSearch from "~/components/ui/UiSearch/UiSearch.vue";
import {UtilsString} from "~/utils/strings"
import useGetApiLink from "~/composables/useGetApiLink";
import {UtilsBackend} from "~/utils/backend";
import type {BaseApiListResponse} from "~/types/BaseApiListResponse";
import type {Product} from "~/types/Product";
import {CollectionProducts} from "~/collections/products";

const products = ref<BaseApiListResponse<Product>>({
  items: [],
  page: 1,
  perPage: 1,
  totalItems: 1,
  totalPages: 1,
});
const search = async () => {
  const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('/products'), {
    params: undefined,
    transform: (resData: BaseApiListResponse<Product>) => {
      const parsedItems = [];
      resData.items.forEach(item => {
        parsedItems.push(CollectionProducts.parseResponseObject(item));
      })
      return {
        ...resData,
        items: parsedItems
      };
    }
  });

  products.value = data.value
  console.log(products.value)
}


</script>

<template>
  <div class="bg-white flex">
    <div class="layout-left">
    </div>
    <div class="layout-middle flex gap-5 justify-between py-[27px]">
      <NuxtImg format="avif,webp" fit="contain" class="object-contain" src="Logo.png" sizes="xs:183px"></NuxtImg>
      <UiSearch name="navigationSearch" class="h-[45px] navigation-search"
                :items="products.items"
                :label="UtilsString.capitalizeFirstLetter($t('search'))"
                @search="search"
      >
        <template #searchItem="{item}">
          <div class="bg-white px-2 py-2 gap-4 flex items-center hover-interactive-element">
            <NuxtImg
                format="avi,webp"
                sizes="100px"
                class="rounded-lg aspect-auto"
                :src="UtilsBackend.getFileUrl({collection: 'products', recordId: item.id, filename: item.images[0] ?? '' })"/>
            <div>
              {{ item.name }}
            </div>
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