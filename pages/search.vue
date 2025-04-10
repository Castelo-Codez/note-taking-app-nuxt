<script setup lang="ts">
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
</script>
<template>
    <NuxtLayout name="section-layout" :notes="filterdNotes">
        <NuxtPage />
    </NuxtLayout>
</template>
