<script setup>

</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="w-2/3 text-center">
      <h1 class="text-[#DD524C] font-black text-6xl">Country quiz</h1>
      <p class="text-[#E2E4F3] text-2xl font-medium mt-4">Test your knowledge of countries around the world</p>
      <router-link
        to="/quiz"
        class="inline-block text-[#E2E4F3] bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-lg py-3 px-8 mt-6 text-lg font-medium hover:opacity-85 transition-opacity duration-300"
      >
        Start a quiz
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
