<script setup lang="ts">
defineProps<{
  open: boolean;
}>();

const emit = defineEmits(['update-modal']);

const city = ref("");
const route = useRoute();

const onChangeLocation = () => {
  if (!city.value) return;
  if(!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format"
    })
  }
  emit('update-modal');
  navigateTo(`/city/${city.value}/car/${route.params.brand}`);
  city.value = "";
}
</script>

<template>
  <div class="p-5 flex justify-between relative cursor-pointer border-b">
    <h3>Location</h3>
    <h3 class="text-green-500 capitalize" @click="emit('update-modal')">{{ route.params.city }}</h3>
    <div v-if="open" class="absolute border shadow left-72 p-5 top-1 -m-1 bg-white">
      <input v-model="city" type="text" class="border p-1 rounder" >
      <button class="bg-green-500 w-full mt-2 rounder text-white p-1" @click="onChangeLocation">Apply</button>
    </div>
  </div>
</template>