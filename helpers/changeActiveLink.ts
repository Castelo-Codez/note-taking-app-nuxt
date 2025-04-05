import useActiveLink from "~/composables/activeLink";

export function changeActiveRoute(value: number): void {
    const activeLink = useActiveLink();
    activeLink.value = value;
}
