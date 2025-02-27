<script setup>
const { cars } = useCars();

const favorites = useLocalStorage('favorites', {});

const handleLikes = (id) => {
  if (id in favorites.value) {
    const { [id]: _, ...rest } = favorites.value;
    favorites.value = rest;
  } else {
    favorites.value = {
      ...favorites.value,
      [id]: true,
    }
  }
}
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      :favored="car.id in favorites"
      @favor="handleLikes"
      />
    </ClientOnly>
  </div>
</template>