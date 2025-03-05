<script setup lang="ts">
const city = ref('');
const handleSearch = () => {
  if (!city.value) return;

  navigateTo(`/city/${city.value}/car`)
}
</script>

<template>
  <div class="font-serif text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
    <input
      v-model="city"
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus: outline-none"
      placeholder="Search by city..."
      >
    <button class="bg-green-500 px-10 text-white" @click="handleSearch">Search</button>
  </div>
</template>