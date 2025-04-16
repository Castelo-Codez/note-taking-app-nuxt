<script setup lang="ts">
import {useArchivedNotes} from "~/composables/archivedNotes";

const archivedNotes = useArchivedNotes();
const title = inject("title");
useHead({
    title: `Archived Notes | ${title}`,
});
</script>
<template>
    <NuxtLayout name="section-layout" :notes="archivedNotes">
        <NuxtPage class="hidden md:block" />
    </NuxtLayout>
</template>
