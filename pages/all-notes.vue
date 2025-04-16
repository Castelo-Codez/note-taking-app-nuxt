<script setup lang="ts">
import {useNotes} from "~/composables/notes";
const notes = useNotes();
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
</script>
<template>
    <NuxtLayout
        class="hidden md:grid"
        :name="'desktop-section-layout'"
        :notes="notes"
    >
        <NuxtPage class="hidden md:block" />
    </NuxtLayout>
    <NuxtLayout :name="'mobile-section-layout'" class="md:hidden" />
</template>
