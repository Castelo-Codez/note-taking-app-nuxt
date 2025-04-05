<script setup lang="ts">
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
</script>
<template>
    <MainSection>
        <MainNav />
    </MainSection>
</template>
