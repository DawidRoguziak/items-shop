<script setup lang="ts">

import useGetApiLink from '~/composables/useGetApiLink';
import type { Product } from '~~/types/Product';
import type { BaseApiListResponse } from '~~/types/BaseApiListResponse';

const products = ref<Product[]>([]);
if(process.client) {
  const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('products'));

}

</script>
<template>
  <div>
    home
  </div>
</template>
