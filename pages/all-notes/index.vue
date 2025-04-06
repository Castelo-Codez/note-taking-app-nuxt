<script setup lang="ts">
import useNotes from "~/composables/Notes";

const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
const notes = useNotes();
</script>
<template>
    <MainSection>
        <MainNav :-notes="notes.filter((el: Note) => !el.archived)" />
    </MainSection>
</template>
