<script setup>
  import QuestionProcessComponent from '../components/QuestionProcessComponent.vue'
  import QuestionComponent from '../components/QuestionComponent.vue'
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="bg-[#343964] w-2/3 rounded-lg py-16 px-12 text-center">
      <h5 class="text-[#8B8EAB] font-medium text-lg">Country quiz</h5>
      <div class="mt-4">
        <question-process-component :total="10" />
      </div>
      <div class="mt-8">
        <question-component />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
