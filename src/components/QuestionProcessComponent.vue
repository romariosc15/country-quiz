<script setup>
  import { useStore } from 'vuex'
  const props = defineProps({
    total: { type: Number, required: true },
  })
  const store = useStore()
  const getCircleClass = (index) => {
    return index <= store.state.currentQuestion ? 'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]' : 'bg-[#393F6E]'
  }
</script>

<template>
  <div class="text-[#E2E4F3] flex flex-row justify-center gap-4">
    <div
      v-for="iteration in Array.from(Array(props.total).keys())"
      :key="iteration"
      class="rounded-full w-10 h-10 flex items-center justify-center"
      :class="getCircleClass(iteration)"
    >
      <span>{{ iteration + 1}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
