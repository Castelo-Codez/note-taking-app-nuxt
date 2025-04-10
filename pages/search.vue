<script setup lang="ts">
const searchKeyword = useSearch();
const notes = useNotes();
const filterdNotes = ref<Note[]>();
watch(
    searchKeyword,
    (newVal: string) => {
        filterdNotes.value = notes.value.filter((el: Note) => {
            let allText = `${el.title} ${el.tag} ${el.body}`;
            if (allText.includes(newVal) && newVal !== "") {
                return el;
            }
        });
        console.log(filterdNotes.value);
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
