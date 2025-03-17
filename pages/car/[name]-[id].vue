<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name as string)
});

const car = await useFetchCarById(route.params.id as string);

if (!car) {
  throw createError({
      statusCode: 404,
      statusMessage: `Car with ID ${route.params.id} does not exist.`
  });
}

definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div v-if="car">
    <CarDetailsHero :car="car" />
    <CarDetailsAttributes :features="car.features" />
    <CarDetailsDescription :description="car.description" />
    <CarDetailsContact />
  </div>
</template>