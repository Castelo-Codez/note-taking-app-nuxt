<script setup lang="ts">
import {useNotes} from "~/composables/notes";
const notes = useNotes();
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
const allNotes = computed(() => {
    return notes.value.filter((el) => !el.archived);
});
</script>
<template>
    <NuxtLayout
        class="hidden md:grid"
        :name="'desktop-section-layout'"
        :notes="allNotes"
    >
        <NuxtPage class="hidden md:grid" />
    </NuxtLayout>
    <NuxtLayout
        :name="'mobile-section-layout'"
        class="md:hidden"
        :notes="allNotes"
    />
</template>
