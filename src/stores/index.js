import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      currentQuestion: 0,
      quizScore: 0,
    }
  },
  mutations: {
    nextQuestion (state) {
      state.currentQuestion++
    },
    incrementQuizScore (state) {
      state.quizScore++
    },
  }
})

export { store }