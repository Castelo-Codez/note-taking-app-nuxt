<script setup lang="ts">
interface Props {
    errorMsg: string;
    show: string | boolean;
}
const props = defineProps<Props>();
</script>
<template>
    <span
        aria-label="email errors"
        id="emailErrors"
        class="flex gap-x-1 items-center mt-2 text-sm text-lightRed-dark"
        v-if="show"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                class="stroke-lightRed"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
            />
        </svg>
        <span> {{ props.errorMsg as string }}</span>
    </span>
</template>
