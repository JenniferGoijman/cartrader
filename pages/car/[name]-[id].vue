<script setup lang="ts">
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name as string)
});

const car = computed(() =>  cars.find(({ id }) => id === parseInt(route.params.id as string)));

if (!car.value) {
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