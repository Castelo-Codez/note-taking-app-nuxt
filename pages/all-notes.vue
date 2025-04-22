<script setup lang="ts">
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
const notes = useNotes();
const headers = useRequestHeaders(["cookie"]) as HeadersInit;
await callOnce(async () => {
    const {data} = await useFetch("/api/getCurrentUser/**", {headers});
    let Notes = data.value?.Notes;
    notes.value = Notes;
});
</script>
<template>
    <NuxtLayout
        class="hidden md:grid"
        :name="'desktop-section-layout'"
        :notes="notes.filter((el) => !el.archived)"
    >
        <NuxtPage class="hidden md:grid" />
    </NuxtLayout>

    <NuxtLayout
        :name="'mobile-section-layout'"
        class="md:hidden"
        :notes="notes.filter((el) => !el.archived)"
    >
        <MobileCurrentRouteHeading text="All Notes" class="text-[1rem]" />
    </NuxtLayout>
</template>
