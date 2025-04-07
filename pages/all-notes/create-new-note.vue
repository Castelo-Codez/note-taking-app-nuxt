<script setup lang="ts">
import useNotes from "~/composables/Notes";

const title = inject("title");
useHead({
    title: `Create New Note | ${title}`,
});
const notes = useNotes();
</script>
<template>
    <NoteHandler :isnew="true" />
</template>
