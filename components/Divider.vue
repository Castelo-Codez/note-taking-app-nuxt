<script setup lang="ts">
defineProps<{
    withOrWord: boolean;
}>();
</script>

<template>
    <div
        v-if="withOrWord"
        class="py-3 mt-[-1] flex items-center text-sm text-text dark:text-text-dark before:flex-1 before:border-t before:border-grayBorder before:me-6 after:flex-1 after:border-t after:border-grayBorder after:ms-6 dark:before:border-grayBorder-dark dark:after:border-grayBorder-dark"
    >
        Or
    </div>
    <div v-else class="w-full mt-8 h-[1px] bg-border dark:bg-border-dark"></div>
</template>
