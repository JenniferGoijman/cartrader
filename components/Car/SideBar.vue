<script setup>
const { brands } = useCars();

const modal = ref({
  location: false,
  brand: false,
  price: false,
});

const city = ref("");
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

const updateModal = (key) => {
  modal.value[key] = !modal.value[key]
}

const onChangeLocation = () => {
  if (!city.value) return;
  if(!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format"
    })
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.brand}`);
  city.value = "";
}
const onChangeBrand = (brand) => {
  updateModal("brand");
  navigateTo(`/city/${route.params.city}/car/${brand}`);
}

const onChangePrice = () => {
  updateModal("price");

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
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-green-500 capitalize" @click="updateModal('location')">{{ route.params.city }}</h3>
      <div v-if="modal.location" class="absolute border shadow left-72 p-5 top-1 -m-1 bg-white">
        <input v-model="city" type="text" class="border p-1 rounder" >
        <button class="bg-green-500 w-full mt-2 rounder text-white p-1" @click="onChangeLocation">Apply</button>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-green-500 capitalize" @click="updateModal('brand')">{{ route.params.brand || 'Any' }}</h3>
      <div v-if="modal.brand" class="absolute border shadow left-72 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white">
        <h4 v-for="brand in brands" :key="brand" class="w-1/3" @click="onChangeBrand(brand)">{{ brand }}</h4>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-green-500 capitalize" @click="updateModal('price')">{{ priceRangeText }}</h3>
      <div v-if="modal.price" class="absolute border shadow left-72 p-5 top-1 -m-1 bg-white">
        <input v-model="priceRange.min" type="number" class="border p-1 rounder" placeholder="Min">
        <input v-model="priceRange.max" type="number" class="border p-1 rounder" placeholder="Max">
        <button class="bg-green-500 w-full mt-2 rounder text-white p-1" @click="onChangePrice">Apply</button>
      </div>
    </div>
  </div>
</template>