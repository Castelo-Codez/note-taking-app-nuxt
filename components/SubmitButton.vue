<script setup lang="ts">
interface Props {
    text: string;
}
defineProps<Props>();
</script>

<template>
    <button
        class="block w-full p-1 capitalize rounded-md bg-skyBlue dark:bg-skyBlue-dark text-lightGray"
    >
        {{ text }}
        <slot />
    </button>
</template>
