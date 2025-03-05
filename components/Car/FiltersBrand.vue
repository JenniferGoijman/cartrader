<script setup lang="ts">
const { brands } = useCars();

defineProps<{
  open: boolean;
}>();

const emit = defineEmits(['update-modal']);

const route = useRoute();

const onChangeBrand = (brand: string) => {
  emit('update-modal');
  navigateTo(`/city/${route.params.city}/car/${brand}`);
}
</script>

<template>
  <div class="p-5 flex justify-between relative cursor-pointer border-b">
    <h3>Brand</h3>
    <h3 class="text-green-500 capitalize" @click="emit('update-modal')">{{ route.params.brand || 'Any' }}</h3>
    <div v-if="open" class="absolute border shadow left-72 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white">
      <h4 v-for="brand in brands" :key="brand" class="w-1/3" @click="onChangeBrand(brand)">{{ brand }}</h4>
    </div>
  </div>
</template>