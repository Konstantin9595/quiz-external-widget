import { shallowMount, mount, RouterLinkStub } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'

describe('Navigation', () => {
    const wrapper = shallowMount(Navigation, {
        propsData: {
            list: [
                {id: 0, label: 'Главная', link: '/home'},
                {id: 1, label: 'Создать квиз', link: '/create-quiz' }
            ]
        },
        stubs: {
            NuxtLink: RouterLinkStub
        }
    });

    test("expect props", () => {
        expect(wrapper.vm.list instanceof Array).toBe(true);
    });

    test("correctly render data", () => {
        const nav = wrapper.find(".navigation");
        expect(nav.find(".nav-list").exists()).toBe(true);
        expect(nav.find(".nav-item").exists()).toBe(true);
        expect(nav.find(".nav-link").exists()).toBe(true);
        expect(nav.find(RouterLinkStub).exists()).toBe(true);
    });
})
