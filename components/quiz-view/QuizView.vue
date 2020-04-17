<template>
    <div class="quiz-view">
        <template v-if="mode === 'creating'">
            <QuizViewCreating />
        </template>
        <template v-else-if="mode === 'editing'">
            <QuizViewEditing />
        </template>
        <template v-else>
            <QuizViewComplited />
        </template>
    </div>
</template>
<script>
import QuizViewComplited from '~/components/quiz-view/QuizViewComplited.vue';
import QuizViewCreating from '~/components/quiz-view/QuizViewCreating.vue';
import QuizViewEditing from '~/components/quiz-view/QuizViewEditing.vue';

export default {
    name: 'QuizView',
    components: {
        QuizViewComplited,
        QuizViewCreating,
        QuizViewEditing
    },
    props: {
        mode: String,
    }

}
</script>