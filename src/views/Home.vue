<template>
  <nav-bar />
  <div class="flex justify-center w-full h-full font-sans bg-green-100">
    <img
      alt="illustrations Homepage"
      src="../assets/Calendar.png"
      height="800"
      width="800"
      class="relative my-20 mr-20"
    />
    <div class="absolute z-0 my-24 text-3xl tracking-wide text-black">
      <p class="py-0.5">Startup My TimeLine Page</p>
      <p class="py-0.5">Built with TailwindCSS</p>
      <div class="grid gap-2">
        <a href="/form">
          <button
            class="btn"
          >Create</button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
