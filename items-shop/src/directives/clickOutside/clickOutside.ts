import type {Directive} from "vue";

export const vClickOutside: Directive<HTMLElement & { __ClickOutside: Function }, Function> = {
    mounted(el, binding) {
        el.__ClickOutside = (html: HTMLElement, event: MouseEvent) => {
            if (!event.target) {
                return;
            }

            if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value(event)
            }
        }
        document.body.addEventListener('click', el.__ClickOutside)
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.__ClickOutside)
        el.__ClickOutside = () => {};
    }
}