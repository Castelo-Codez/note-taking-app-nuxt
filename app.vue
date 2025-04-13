<script setup lang="ts">
const title = "Note Taking App";
provide("title", title);

useHead({
    title: `${title}`,
    meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1.0"},
        {name: "charset", content: "utf-8"},
        {
            name: "description",
            content: "note talking app | front end mentor challenges",
        },
    ],

});

const notes = useNotes();
const archiveNotes = useArchivedNotes();
watch(notes, (newVal) => {
    archiveNotes.value = newVal.filter((el) => el.archived);
});
 
 onMounted(() => {
    if(window.localStorage.getItem("data-fonts")){
  document.body.dataset.fonts = window.localStorage.getItem("data-fonts") as string
    }
 })
</script>

<template>
    <NuxtLoadingIndicator :throttle="0" :height="2" />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
