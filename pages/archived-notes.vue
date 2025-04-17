<script setup lang="ts">
import {useArchivedNotes} from "~/composables/archivedNotes";

const archivedNotes = useArchivedNotes();
const title = inject("title");
useHead({
    title: `Archived Notes | ${title}`,
});
</script>
<template>
    <NuxtLayout
        class="hidden md:grid"
        :name="'desktop-section-layout'"
        :notes="archivedNotes"
    >
        <NuxtPage class="hidden md:grid" />
    </NuxtLayout>
    <NuxtLayout
        :name="'mobile-section-layout'"
        class="md:hidden"
        :notes="archivedNotes"
    />
</template>
