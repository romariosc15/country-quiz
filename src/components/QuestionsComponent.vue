<script setup>
  import { useStore } from 'vuex'
  import { ref } from 'vue'
  const store = useStore()
  const props = defineProps({
    data: { type: Array, required: true, default: () => [] },
  })
  let rightAnswer = ref('')
  let selectedAnswer = ref('')
  const chooseAnswer = (selectedOption) => {
    selectedAnswer.value = selectedOption
    rightAnswer.value = props.data[store.state.currentQuestion].answer
    if(selectedOption === rightAnswer.value) store.commit('incrementQuizScore')
    setTimeout(() => {
      store.commit('nextQuestion')
      rightAnswer.value = ''
    }, 2000)
  }
</script>

<template>
  <div v-if="props.data.length > 0 && store.state.currentQuestion < props.data.length " class="text-[#E2E4F3] text-center">
    <h4 class="text-[#E2E4F3] font-medium text-xl">{{ props.data[store.state.currentQuestion].question }}</h4>
    <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-40 mt-8">
      <button
        v-on:click="chooseAnswer(option.capital)"
        v-for="option in props.data[store.state.currentQuestion].options"
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
  <div v-else-if="store.state.currentQuestion >= props.data.length">
    <img src="../assets/images/congrats.png" alt="Check" class="w-[200px] h-[200px] inline-block">
    <h3 class="text-[#E2E4F3] text-2xl font-medium mt-4">Congrats! You completed the quiz </h3>
    <p class="text-[#E2E4F3] text-base">You answer {{store.state.quizScore}}/{{props.data.length}} correctly</p>
    <div class="space-x-6">
      <a
        href="/"
        class="inline-block text-[#E2E4F3] bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-lg py-3 px-8 mt-6 text-lg font-medium hover:opacity-85 transition-opacity duration-300"
      >
        Return to home
      </a>
      <a
        href="/quiz"
        class="inline-block text-[#E2E4F3] bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-lg py-3 px-8 mt-6 text-lg font-medium hover:opacity-85 transition-opacity duration-300"
      >
        Play again
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
