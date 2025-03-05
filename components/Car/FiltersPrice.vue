<script setup lang="ts">
defineProps<{
  open: boolean;
}>();

const emit = defineEmits(['update-modal']);

const priceRange = ref({
  min: '',
  max: ''
});
const route = useRoute();
const router = useRouter();


const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return 'Any';
  if (!minPrice && maxPrice) return `< $${maxPrice}`;
  if (minPrice && !maxPrice) return `> $${minPrice}`;
  return `$${minPrice}-$${route.query.maxPrice}`;
});

const onChangePrice = () => {
  emit('update-modal')

  const minPrice = priceRange.value.min;
  const maxPrice = priceRange.value.max;

  if (minPrice && maxPrice && minPrice > maxPrice) return;

  router.push({
    query: {
      minPrice: minPrice,
      maxPrice: maxPrice,
    }
  })
}
</script>

<template>
  <div class="p-5 flex justify-between relative cursor-pointer border-b">
    <h3>Price</h3>
    <h3 class="text-green-500 capitalize" @click="emit('update-modal')">{{ priceRangeText }}</h3>
    <div v-if="open" class="absolute border shadow left-72 p-5 top-1 -m-1 bg-white">
      <input v-model="priceRange.min" type="number" class="border p-1 rounder" placeholder="Min">
      <input v-model="priceRange.max" type="number" class="border p-1 rounder" placeholder="Max">
      <button class="bg-green-500 w-full mt-2 rounder text-white p-1" @click="onChangePrice">Apply</button>
    </div>
  </div>
</template>