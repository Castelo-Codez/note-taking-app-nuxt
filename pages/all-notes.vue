<script setup lang="ts">
import useNotes from "~/composables/Notes";
const notes = useNotes();
</script>
<template>
    <NuxtLayout
        name="section-layout"
        :notes="notes.filter((el: Note) => !el.archived)"
    >
        <NuxtPage />
    </NuxtLayout>
</template>
