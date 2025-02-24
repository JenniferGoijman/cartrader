<script setup>
import { useUtilities } from '~/composables/useUtilities';

const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${route.params.brand ? toTitleCase(route.params.brand) : 'Cars'} in ${toTitleCase(route.params.city)}`
})

definePageMeta({
    layout: 'custom'
})
</script>

<template>
  <div class="mt-32 flex">
    <CarSideBar />

    <NuxtPage />
  </div>
</template>