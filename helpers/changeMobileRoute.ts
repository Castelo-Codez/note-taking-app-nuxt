import useMobileCurrentPage from "~/composables/currentPage";

export function changeMobileRoute(newVal: string): void {
    const currentPage = useMobileCurrentPage();
    currentPage.value = newVal;
}
