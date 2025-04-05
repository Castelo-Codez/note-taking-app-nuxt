<script setup lang="ts">
const title = inject("title");
useHead({
    title: `Create New Note | ${title}`,
});
</script>
<template>
    <MainSection>
        <MainNav />
    </MainSection>
</template>
