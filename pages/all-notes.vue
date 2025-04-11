<script setup lang="ts">
import {useNotes} from "~/composables/notes";
const notes = useNotes();
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
</script>
<template>
    <NuxtLayout
        name="section-layout"
        :notes="notes.filter((el: Note) => !el.archived)"
    >
        <NuxtPage />
    </NuxtLayout>
</template>
