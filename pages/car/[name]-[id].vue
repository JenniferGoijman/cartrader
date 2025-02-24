<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name)
})

definePageMeta({
    layout: 'custom'
})
</script>

<template>
  <div>
    <CarDetailsHero />
    <CarDetailsAttributes />
    <CarDetailsDescription />
    <CarDetailsContact />
  </div>
</template>