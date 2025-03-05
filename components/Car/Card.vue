<script setup lang="ts">
import type { CarModel } from '~/types/Car.model';
import heartFilled from '@/assets/heartFilled.png';
import heartOutline from '@/assets/heartOutline.png';

defineProps<{
  car: CarModel;
  favored: boolean;
}>();
const emit = defineEmits(['favor']);
</script>

<template>
  <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img
      class="absolute w-7 right-5 top-2 z-20"
      :src="favored ? heartFilled : heartOutline"
      alt=""
      @click="emit('favor', car.id)"
    >
    <div class="flex h-full" @click="navigateTo(`/car${car.name}-${car.id}`)">
      <NuxtImg
        :src="car.url"
        :alt="car.name"
        class="w-[300px] h-full"
      />
      <div class="p-4 flex flex-col">
        <h1 class="text-2xl text-green-700">{{ car.name }}</h1>
        <p class="text-gray-700">{{ car.description }}</p>
      </div>
      <h1 class="mt-auto text-xl">{{ car.price }}</h1>
    </div>
  </div>
</template>