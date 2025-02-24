<script setup>
const route = useRoute();

function toTitleCase(text) {
   return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

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