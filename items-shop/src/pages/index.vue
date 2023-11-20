<script setup lang="ts">

import useGetApiLink from '~/composables/useGetApiLink';
import type {Product} from "../../../types/Product";
import type {BaseApiListResponse} from "../../../types/BaseApiListResponse";
import UiButtonDropdown from "~/components/ui/UiButtonDropdown/UiButtonDropdown.vue";

const products = ref<Product[]>([]);

  const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('products'));


</script>
<template>
  <div>
    home
  </div>
</template>
