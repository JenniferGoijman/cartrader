<script setup lang="ts">
import type { Filters } from '~/types/Filters.model';

const modal = ref({
  location: false,
  brand: false,
  price: false,
});

const updateModal = (key: Filters) => {
  modal.value[key] = !modal.value[key]
}
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <CarFiltersLocation :open="modal.location" @update-modal="updateModal('location')" />
    <CarFiltersBrand :open="modal.brand" @update-modal="updateModal('brand')" />
    <CarFiltersPrice :open="modal.price" @update-modal="updateModal('price')" />
  </div>
</template>