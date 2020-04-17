import { shallowMount, mount } from '@vue/test-utils'
import QuizView from '@/components/quiz-view/QuizView.vue'
import QuizViewComplited from '@/components/quiz-view/QuizViewComplited.vue';
import QuizViewCreating from '@/components/quiz-view/QuizViewCreating.vue';
import QuizViewEditing from '@/components/quiz-view/QuizViewEditing.vue';

describe('QuizView', () => {
    test("correct render elements", async () => {
        const wrapper = mount(QuizView, {
            propsData: {
                mode: 'creating'
            }
        });

        expect(wrapper.contains(QuizViewCreating)).toBe(true);

        wrapper.setProps({mode: 'editing'})
        await wrapper.vm.$nextTick();
        expect(wrapper.contains(QuizViewEditing)).toBe(true);

        wrapper.setProps({mode: 'complited'})
        await wrapper.vm.$nextTick();
        expect(wrapper.contains(QuizViewComplited)).toBe(true);
    });
})
