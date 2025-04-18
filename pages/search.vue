<script setup lang="ts">
import useMobileCurrentPage from "~/composables/currentPage";

const searchKeyword = useSearch();
const notes = useNotes();
const filterdNotes = ref<Note[]>();
const reactiveObj = reactive({
    notes: notes,
    searchKeyword: searchKeyword,
});
watch(
    reactiveObj,
    (newV) => {
        filterdNotes.value = newV.notes.filter((el: Note) => {
            let allText = `${el.title} ${el.tag} ${el.body}`;
            if (
                allText.includes(newV.searchKeyword) &&
                newV.searchKeyword !== ""
            ) {
                return el;
            }
        });
    },
    {
        immediate: true,
    }
);
const title = inject("title");
useHead({
    title: `Search | ${title}`,
});
const currentPage = useMobileCurrentPage();
const currentActiveNote = useCurrentRoute();
</script>
<template>
    <NuxtLayout
        class="hidden md:grid"
        :name="'desktop-section-layout'"
        :notes="filterdNotes"
    >
        <NuxtPage class="hidden md:block" />
    </NuxtLayout>
    <NuxtLayout
        :name="'mobile-section-layout'"
        class="md:hidden"
        :notes="filterdNotes"
    >
        <MobileCurrentRouteHeading
            :text="currentActiveNote"
            class="text-[1rem]"
        />
        <SearchInput class="p-2" v-if="currentPage === ''" />
    </NuxtLayout>
</template>
