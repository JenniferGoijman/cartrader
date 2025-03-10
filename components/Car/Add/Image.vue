<script setup lang="ts">
interface ImageState {
  preview: string | null;
  image: File | null;
}

const image = ref<ImageState>({
  preview: null,
  image: null,
});

const emits = defineEmits(["changeInput"]);

const onImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {
        image.value.preview = e.target.result as string;
      }
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits('changeInput', input.files[0], 'image');
  }
};
</script>

<template>
  <div class="col-md-5 offset-md-1 mt-2 w-[100%]">
    <label for="" class="text-green-500 mb-1 text-sm">Image*</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            accept="image/*"
            class="opacity-0 absolute cursor-pointer"
            @change="onImageUpload"
          >
          <span class="cursor-pointer">Browser File</span>
        </div>
        <div v-if="image.preview" class="border p-2 mt-3 w-56">
          <img :src="image.preview" alt="Preview" class="img-fluid" >
        </div>
      </div>
    </form>
  </div>
</template>