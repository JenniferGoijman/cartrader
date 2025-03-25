<script setup lang="ts">
import type { QueryParams } from '~/server/api/cars/[city].get';

const route = useRoute();
const queryParams = route.query as QueryParams;

const cars = await useFetchCars(route.params.city as string, {
  minPrice: queryParams?.minPrice,
  maxPrice: queryParams?.maxPrice,
  brand: queryParams?.brand,
});

watch(
  () => route.query,
  () => window.location.reload()
);

</script>

<template>
  <div>
    <CarCards v-if="cars && cars.length > 0" :cars="cars" />
    <h1 v-else>No cars found</h1>
  </div>
</template>