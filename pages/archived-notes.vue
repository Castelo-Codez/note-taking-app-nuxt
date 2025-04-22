<script setup lang="ts">
const archivedNotes = useNotes();
const title = inject("title");
useHead({
    title: `Archived Notes | ${title}`,
});

</script>
<template>
    <NuxtLayout
        class="hidden md:grid"
        :name="'desktop-section-layout'"
        :notes="archivedNotes.filter((el) => el.archived)"
    >
        <NuxtPage class="hidden md:grid" />
    </NuxtLayout>
    <NuxtLayout
        :name="'mobile-section-layout'"
        class="md:hidden"
        :notes="archivedNotes.filter((el) => el.archived)"
    >
        <MobileCurrentRouteHeading text="archived Notes" class="text-[1rem]" />
    </NuxtLayout>
</template>
