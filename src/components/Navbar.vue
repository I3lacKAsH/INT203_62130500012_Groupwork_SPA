<template>
  <div
    class="flex flex-col content-center w-full px-6 py-2 font-sans text-center bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline"
  >
    <div class="flex flex-row mb-2 sm:mb-0">
      <div class="self-center w-10 h-10 mr-2">
        <img class="self-center w-10 h-10" src="../assets/Location.png" />
      </div>
      <div>
        <a
          href="/"
          class="font-sans text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark"
        >MTL</a>
        <br />
        <span class="text-xs text-grey-dark">My TimeLine</span>
      </div>
    </div>
    <div class="self-center sm:mb-0">
      <router-link class="px-1 mx-5 text-xl" to="/">Home</router-link>
      <router-link class="px-1 mx-5 text-xl" to="/form">Form</router-link>
      <router-link class="px-1 mx-5 text-xl" to="/timeline">TimeLine</router-link>
    </div>
    <router-view />
  </div>
</template>
  

  <style scoped>
</style>
  