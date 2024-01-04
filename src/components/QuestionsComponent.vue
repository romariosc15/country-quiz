<script setup>
  import { useStore } from 'vuex'
  import { onMounted, ref } from 'vue'
  import { generateQuestions } from '../utils'
  const store = useStore()
  let questions = ref([])
  let rightAnswer = ref('')
  let selectedAnswer = ref('')
  const chooseAnswer = (selectedOption) => {
    selectedAnswer.value = selectedOption
    rightAnswer.value = questions.value[store.state.currentQuestion].answer
    setTimeout(() => {
      store.commit('nextQuestion')
      rightAnswer.value = ''
    }, 3000)
  }
  onMounted(async () => {
    questions.value = await generateQuestions(5)
  })
</script>

<template>
  <div v-if="questions.length > 0" class="text-[#E2E4F3] text-center">
    <h4 class="text-[#E2E4F3] font-medium text-xl">{{ questions[store.state.currentQuestion].question }}</h4>
    <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-40 mt-8">
      <button
        v-on:click="chooseAnswer(option.capital)"
        v-for="option in questions[store.state.currentQuestion].options"
        :key="option"
        class="inline-block text-[#E2E4F3] bg-[#393F6E] rounded-lg py-3 px-8 text-lg font-medium transition-colors duration-300"
        :class="`${selectedAnswer === option.capital ? 'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]' : ''} ${rightAnswer === '' ? 'hover:bg-gradient-to-r hover:from-[#E65895] hover:to-[#BC6BE8]' : ''}`"
        :disabled="rightAnswer !== ''"
      >
        {{ option.capital }}
        <img v-if="rightAnswer === option.capital" src="../assets/images/icons/Check_round_fill.svg" alt="Check" class="w-5 h-5 inline-block ml-4">
        <img v-else-if="rightAnswer !== ''" src="../assets/images/icons/Close_round_fill.svg" alt="Check" class="w-5 h-5 inline-block ml-4">
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
