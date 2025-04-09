<script setup lang="ts">
import {useArchivedNotes} from "~/composables/archivedNotes";

const archivedNotes = useArchivedNotes();
</script>
<template>
    <NuxtLayout name="section-layout" :notes="archivedNotes">
        <NuxtPage />
    </NuxtLayout>
</template>
