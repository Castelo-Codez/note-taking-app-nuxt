<script setup lang="ts">
const route = useRoute();
const title = inject("title");

const archived = archivedNotes();
const targetNote = archived.value.find((el: Note) => el.id === route.params.id);
useHead({
    title: `${targetNote ? targetNote.id : ""} | ${title}`,
});
</script>
<template>
    <MainSection>
        <MainNav :-notes="archived.filter((el: Note) => el.archived)" />
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
