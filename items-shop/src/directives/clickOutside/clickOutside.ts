import type {Directive, DirectiveBinding} from "vue";

interface HTMLElementWithClickOutside extends HTMLElement {
    __ClickOutside: (event: MouseEvent) => void;
}


export const vClickOutside: Directive<HTMLElementWithClickOutside, Function> = {
    mounted(el: HTMLElementWithClickOutside, binding: DirectiveBinding<Function>) {
        el.__ClickOutside = (event: MouseEvent) => {
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

        el.__ClickOutside = () => {
        };
    }
}