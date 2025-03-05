<script setup lang="ts">
defineProps<{
  description: string
}>();
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>