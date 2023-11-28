<script setup lang="ts">

import useGetApiLink from '~/composables/useGetApiLink';
import type {Product} from "../../../types/Product";
import type {BaseApiListResponse} from "../../../types/BaseApiListResponse";
import UiButton from "~/components/ui/UiButton/UiButton.vue";
import UiInput from "~/components/ui/UiInput/UiInput.vue";

const products = ref<Product[]>([]);

const {data} = await useFetch<BaseApiListResponse<Product>>(useGetApiLink('products'));

</script>
<template>
  <div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="ui-button-group">
      <UiInput label="Search" name="navigationSearch">
        <template #iconStart>
          <span class="material-symbols-outlined text-2xl">
            search
          </span>
        </template>
      </UiInput>
      <UiButton size="medium">
        Search
      </UiButton>
    </div>

    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <NuxtImg format="avif,webp" src="Logo.png" sizes="xs:30vw sm:40vw md:50vw"></NuxtImg>
  </div>
</template>
