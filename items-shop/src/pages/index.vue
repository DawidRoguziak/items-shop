<script setup lang="ts">

import useGetApiLink from '~/composables/useGetApiLink';
import type {Product} from "../../../types/Product";
import type {BaseApiListResponse} from "../../../types/BaseApiListResponse";
import UiSearch from "~/components/ui/UiSearch/UiSearch.vue";

const products = ref<Product[]>([]);

const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('products'));

</script>
<template>
  <div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
      <UiSearch name="navigationSearch" />
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <NuxtImg format="avif,webp" src="Logo.png" sizes="xs:30vw sm:40vw md:50vw"></NuxtImg>
  </div>
</template>
