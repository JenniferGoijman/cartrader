<script setup lang="ts">
import { useUtilities } from '~/composables/useUtilities';

const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${route.params.brand ? toTitleCase(route.params.brand as string) : 'Cars'} in ${toTitleCase(route.params.city as string)}`
});

definePageMeta({
  layout: 'custom'
});
</script>

<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarFilters />
      <NuxtPage />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600">Sorry, something went wrong</h1>
          <code>{{ error }}</code>
          <button class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white" @click="error.value = null">Go Back</button>
        </div>
    </template></NuxtErrorBoundary>
  </div>
</template>