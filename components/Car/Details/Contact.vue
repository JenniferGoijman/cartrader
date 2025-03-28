<script setup lang="ts">
const route = useRoute();

const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const message = ref(initialState);

const successMessage = ref("");
const errorMessage = ref("");

const handleSubmit = async () => {
  const body = {
    ...message.value,
  };

try {
    await $fetch(`/api/car/listings/${route.params.id}/message`, {
      method: 'POST',
      body
    });

    message.value = initialState;
    errorMessage.value = "";
    successMessage.value = "Message created successfully!"
  } catch (error) {
    errorMessage.value = errorHandler(error);
  }
}
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input v-model="message.name" type="text" class="border p-1" placeholder="Name" >
      <input v-model="message.email" type="text" class="border p-1" placeholder="Email" >
      <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" >
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message" />
    </div>
    <button class="bg-green-400 text-white px-10 py-3 rounded mt-4" @click="handleSubmit">
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-3 text-green-400">{{ successMessage }}</p>
  </div>
</template>