<script setup>
const modal = ref({
  location: false,
  brand: false,
  price: false,
});

const city = ref("");
const route = useRoute();

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
      <h3 class="text-green-500 capitalize">Any</h3>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-green-500 capitalize">Any</h3>
    </div>
  </div>
</template>