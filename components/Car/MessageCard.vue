<script setup lang="ts">
import type { Message } from '~/types/Message.model';

defineProps<{
  message: Message;
}>();
</script>

<template>
  <div class="even:bg-gray-100 p-4">
    <h1 class="font-fold text-2xl">{{ message.name }}</h1>
    <p class="text-gray-700">
      {{ message.message }}
    </p>
    <div class="flex items-center mt-4">
      <p class="text-green-700 mr-10">{{ message.email }}</p>
      <p class="text-green-500">{{ message.phone }}</p>
    </div>
  </div>
</template>