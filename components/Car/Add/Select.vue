<script setup lang="ts">
const props = defineProps<{
  title: string,
  name: string,
  options: string[],
}>();

const emits = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-green-500 mb-1 text-sm">{{ title }}</label>
    <select
      id=""
      v-model="state"
      name=""
      class="p-2 border w-100 rounded"
      @change="onChange"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>