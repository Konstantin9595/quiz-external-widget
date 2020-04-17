<template>
<div class="quiz-constructor">
  <QuizView :mode="mode" />
  <input type="submit" class="create-quiz" @click="createQuiz">
  <input type="submit" class="edit-quiz" @click="editQuiz">
</div>
</template>

<script lang="ts">
import QuizView from './quiz-view/QuizView.vue';
import Vue from 'vue'

export default Vue.extend({
  name: "QuizConstructor",
  components: {
    QuizView,
  },
  data() {
    return {
      mode: 'completed'
    }
  },
  methods: {
    createQuiz():void {
      this.mode = 'creating';
    },
    editQuiz():void  {
      this.mode = 'editing';
    }
  }
})

</script>
<style>
</style>
