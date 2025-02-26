<script setup>
const _props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  car: Object,
})
</script>

<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]" @click="navigateTo(`/car/${car.name}-${car.id}`)">
    <div class="flex h-full">
      <img
        :src="car.url"
        :alt="car.name"
        class="w-[300px] h-full"
      >
      <div class="p-4 flex flex-col">
        <h1 class="text-2xl text-green-700">{{ car.name }}</h1>
        <p class="text-gray-700">{{ car.description }}</p>
      </div>
      <h1 class="mt-auto text-xl">{{ car.price }}</h1>
    </div>
  </div>
</template>