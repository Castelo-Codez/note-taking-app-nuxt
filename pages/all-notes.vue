<script setup lang="ts">
import {useNotes} from "~/composables/notes";
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
const allNotes = computed(() => {
    return notes.value.filter((el) => !el.archived);
});
const headers = useRequestHeaders(["cookie"]) as HeadersInit;
const {data} = await useFetch("/api/getCurrentUser/**", {headers});
let Notes = data.value?.Notes;
const notes = useNotes();
notes.value = Notes;
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
    >
        <MobileCurrentRouteHeading text="All Notes" class="text-[1rem]" />
    </NuxtLayout>
</template>
