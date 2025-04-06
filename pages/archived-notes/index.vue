<script setup lang="ts">
import useArchivedNotes from "~/composables/archivedNotes";

const title = inject("title");
useHead({
    title: `Archived Notes | ${title}`,
});
const archivedNotes = useArchivedNotes();
</script>
<template>
    <MainSection>
        <MainNav :-notes="archivedNotes.filter((el: Note) => el.archived)" />
    </MainSection>
</template>
