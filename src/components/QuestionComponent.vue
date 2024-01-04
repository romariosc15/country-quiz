<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  const chooseAnswer = () => {
    store.commit('nextQuestion')
  }
</script>

<template>
  <div class="text-[#E2E4F3] text-center">
    <h4 class="text-[#E2E4F3] font-medium text-xl">Which country is Lima the capital?</h4>
    <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-40 mt-8">
      <button v-on:click="chooseAnswer" class="inline-block text-[#E2E4F3] bg-[#393F6E] hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] rounded-lg py-3 px-8 text-lg font-medium transition-colors duration-300">
        Sucre
      </button>
      <button v-on:click="chooseAnswer" class="inline-block text-[#E2E4F3] bg-[#393F6E] hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] rounded-lg py-3 px-8 text-lg font-medium transition-colors duration-300">
        Guayaquil
      </button>
      <button v-on:click="chooseAnswer" class="inline-block text-[#E2E4F3] bg-[#393F6E] hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] rounded-lg py-3 px-8 text-lg font-medium transition-colors duration-300">
        Arequipa
      </button>
      <button v-on:click="chooseAnswer" class="inline-block text-[#E2E4F3] bg-[#393F6E] hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8] rounded-lg py-3 px-8 text-lg font-medium transition-colors duration-300">
        Lima
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
