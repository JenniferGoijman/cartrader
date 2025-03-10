<script setup lang="ts">
const props = defineProps<{
  title: string,
  name: string,
  placeholder: string,
}>();

const emits = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>

<template>
  <div class="flex flex-col w-[100%] mt-2">
    <label for="" class="text-green-500 mb-1 text-sm">{{ title }}</label>
    <textarea
      v-model="state"
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      :name="name"
      @input="onChange"
    />
  </div>
</template>