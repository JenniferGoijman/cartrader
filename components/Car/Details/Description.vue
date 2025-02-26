<script setup>
const _props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  description: String
});
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
</template>