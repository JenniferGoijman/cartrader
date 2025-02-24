<script setup>
const route = useRoute();

function toTitleCase(text) {
   return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}

useHead({
  title: `${route.params.brand ? toTitleCase(route.params.brand) : 'Cars'} in ${toTitleCase(route.params.city)}`
})
</script>

<template>
  <div>
    <NavBar />

    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16">
      <div class="mt-32 flex">
        <CarSideBar />

        <NuxtPage />
      </div>
    </div>
  </div>
</template>