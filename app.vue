<template>
  <div>
    <header
      class="sticky top-0 z-50 flex justify-between items center space-x-1 border-b bg-white p-4 shadow-md"
    >
      <a href="" class="text-3xl font-mono">Car Trader</a>
    </header>

    <div
      class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url(https://www.hautetime.com/wp-content/uploads/2019/01/Lamborghini-SJV1.jpg)]"
    >
      <div class="z-1 absolute w-full h-full bg-black opacity-50" />
      <div class="z-10 absolute w-full h-full flex justify-center items-center">
        <div class="text-center w-1/2">
          <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>
          <div
            class="font-serif text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
          >
            <input
              type="text"
              class="py-3 px-5 w-full text-2xl rounded-full focus: outline-none"
              placeholder="Search by city..."
            />
            <button class="bg-green-500 px-10 text-white">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
