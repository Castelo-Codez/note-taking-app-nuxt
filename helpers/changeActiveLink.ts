import {useActiveLink} from "~/composables/activeLinks";



export function changeActiveRoute(value: number): void {
    const activeLink = useActiveLink();
    activeLink.value = value;
}
