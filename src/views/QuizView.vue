<script setup>
  import QuestionProcessComponent from '../components/QuestionProcessComponent.vue'
  import QuestionsComponent from '../components/QuestionsComponent.vue'
  import { onMounted, ref } from 'vue'
  import { generateQuestions } from '../utils'

  let questions = ref([])
  let isQuizLoading = ref(true)
  onMounted(async () => {
    questions.value = await generateQuestions(5)
    isQuizLoading.value = false
  })
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div v-if="isQuizLoading">
      <div class="rounded-full border-[6px] border-gray border-t-[#3E9FFF] w-12 h-12 animate-spin"></div>
    </div>
    <div v-else class="bg-[#343964] w-2/3 rounded-lg py-16 px-12 text-center">
      <h5 class="text-[#8B8EAB] font-medium text-lg">Country quiz</h5>
      <div class="mt-4">
        <question-process-component :total="5" />
      </div>
      <div class="mt-8">
        <questions-component :data="questions" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
