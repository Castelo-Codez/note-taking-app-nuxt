<script setup lang="ts">
const title = inject("title");
useHead({
    title: `Archived Notes | ${title}`,
});
</script>
<template>
    <MainSection>
        <MainNav />
    </MainSection>
</template>
