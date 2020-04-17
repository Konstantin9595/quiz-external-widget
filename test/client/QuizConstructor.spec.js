import { shallowMount, mount } from '@vue/test-utils'
import QuizConstructor from '@/components/QuizConstructor.vue'
import QuizViewComplited from '@/components/quiz-view/QuizViewComplited.vue';
import QuizViewCreating from '@/components/quiz-view/QuizViewCreating.vue';
import QuizViewEditing from '@/components/quiz-view/QuizViewEditing.vue';

describe('QuizConstructor', () => {
    const wrapper = mount(QuizConstructor, {
        data() {
            return {
                mode: 'completed' // completed, creating, editing 
            }
        }
    });

    const quizConstructor = wrapper.find('.quiz-constructor');
    const createQuizButton = quizConstructor.find('.create-quiz');
    const editQuizButton = quizConstructor.find('.edit-quiz');
    
    test("correct render elements", () => {

        expect(quizConstructor.exists()).toBe(true);
        expect(createQuizButton.exists()).toBe(true);
        expect(editQuizButton.exists()).toBe(true);
    });

    test("correct change state mode", async() => {
        expect(wrapper.vm.mode).toBe('completed');
        expect(wrapper.find(QuizViewComplited).exists()).toBe(true);

        createQuizButton.trigger("click");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.mode).toBe('creating');
        expect(wrapper.find(QuizViewCreating).exists()).toBe(true);

        editQuizButton.trigger("click");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.mode).toBe('editing');
        expect(wrapper.find(QuizViewEditing).exists()).toBe(true);
    });
})
