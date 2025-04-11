<script setup lang="ts">
import {useNotes} from "~/composables/notes";
const notes = useNotes();
const tagedNotes = useTagedNotes();const title = inject("title");
useHead({
    title: `Taged | ${title}`,
});
</script>
<template>
    <NuxtLayout
        name="section-layout"
        :notes="notes.filter((el: Note) => el.tag == tagedNotes)"
    >
        <NuxtPage />
    </NuxtLayout>
</template>
