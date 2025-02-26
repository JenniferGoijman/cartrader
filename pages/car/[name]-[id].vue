<script setup>
const route = useRoute();
const { cars } = useCars();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.name)
})

const car = computed(() => {
  return cars.find(({ id }) => id === parseInt(route.params.id))
});

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