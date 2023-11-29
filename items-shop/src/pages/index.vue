<script setup lang="ts">

import useGetApiLink from '~/composables/useGetApiLink';
import type {BaseApiListResponse} from "~/types/BaseApiListResponse";
import type {Product} from "~/types/Product";

const products = ref<Product[]>([]);

const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('products'));

</script>
<template>
  <div>
  </div>
</template>
