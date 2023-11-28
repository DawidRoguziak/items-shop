<script setup lang="ts">

import useGetApiLink from '~/composables/useGetApiLink';
import type {Product} from "../../../types/Product";
import type {BaseApiListResponse} from "../../../types/BaseApiListResponse";
import UiButton from "~/components/ui/UiButton/UiButton.vue";

const products = ref<Product[]>([]);

const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('products'));

</script>
<template>
  <div>

    <UiButton size="medium">
      Search
    </UiButton>

    <div></div>
    <div></div>
    <div></div>

    <NuxtImg format="avif,webp" src="Logo.png" sizes="xs:30vw sm:40vw md:50vw"></NuxtImg>
  </div>
</template>
