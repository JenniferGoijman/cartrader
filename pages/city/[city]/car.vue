<script setup>
const route = useRoute();

function toTitleCase(text) {
   return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

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