<script setup lang="ts">
const route = useRoute();
</script>
<template>
    <span class="text-white dark:text-white">{{ route.params.id }}</span>
</template>
