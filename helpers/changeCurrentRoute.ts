import useCurrentRoute from "~/composables/currentRoute";

export default (newValue: string) => {
    const currentRoute = useCurrentRoute();
    currentRoute.value = newValue;
};
