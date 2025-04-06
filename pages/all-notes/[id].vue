<script setup lang="ts">
import useNotes from "~/composables/Notes";
const route = useRoute();
const title = inject("title");

const notes = useNotes();
const targetNote = notes.value.find((el: Note) => el.id === route.params.id);
console.log(targetNote);
useHead({
    title: `${targetNote ? targetNote.id : ""} | ${title}`,
});
</script>
<template>
    <MainSection>
        <MainNav :-notes="notes.filter((el: Note) => !el.archived)" />
        <NoteHandler
            v-if="targetNote"
            :key="targetNote.id"
            :isnew="false"
            :id="targetNote.id"
            :archived="targetNote.archived"
            :tag="targetNote.tag"
            :body="targetNote.body"
            :title="targetNote.title"
            :last-updated="targetNote.lastUpdated"
        />
    </MainSection>
</template>
