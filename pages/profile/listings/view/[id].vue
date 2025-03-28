<script setup lang="ts">
const route = useRoute();

definePageMeta({
  layout: "custom",
});

const { data: messages } = await useFetch(`/api/car/listings/${route.params.id}/message`);

</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message"
     />
  </div>
</template>