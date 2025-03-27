<script setup lang="ts">
import type { AddInfo } from '~/types/AddInfo.model';

definePageMeta({
  layout: "custom",
});

const { brands } = useCars();

const info = useState<AddInfo>("addInfo", () => {
  return {
    brand: "",
    model: "",
    year: "",
    price: "",
    miles: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: " ",
  };
});

const errorMessage = ref("");

const onChangeInput = (data: string, name: Exclude<keyof AddInfo, "image">) => {
  info.value[name] = data;
};

const onChangeFile = (data: File) => {
  info.value.image = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Price *",
    name: "price",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];


const handleSubmit = async () => {
  const body = {
    ...info.value,
    name: `${info.value.brand} ${info.value.model}`,
    price: parseInt(info.value.price),
    year: parseInt(info.value.year),
    seats: parseInt(info.value.seats),
    miles: parseInt(info.value.miles),
    features: info.value.features,
    image: 'www.example.com',
    listerId: '111'
  };

  try {
    const response = await $fetch("/api/car/listings", {
      method: 'POST',
      body
    });
    console.log('>>> response', response)
    navigateTo('/profile/listings');
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = error.message;
    } else if (typeof error === 'object' && error !== null && 'statusMessage' in error) {
      errorMessage.value = (error as { statusMessage: string }).statusMessage;
    } else {
      errorMessage.value = 'An unknown error occurred';
    }
  }
}
</script>


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAddSelect
        title="Brand *"
        :options="brands"
        name="brand"
        @change-input="onChangeInput"
      />
      <CarAddInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAddTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <CarAddImage @change-input="onChangeFile" />
      <div>
        <button class="bg-green-500 text-white rounded py-2 px-7 mt-2" @click="handleSubmit">
          Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>