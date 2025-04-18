<script setup lang="ts">
defineProps<{
    text: string;
}>();
</script>
<template>
    <h1 class="text-text dark:text-text-dark p-3 font-[700] capitalize">
        {{ text }}
    </h1>
</template>
