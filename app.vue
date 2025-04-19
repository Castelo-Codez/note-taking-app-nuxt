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
    htmlAttrs: {
        lang: "en-us",
    },
    script: [{src: "/js/setFonts.js", defer: true}],
});

const headers = useRequestHeaders(["cookie"]) as HeadersInit;
const {data} = await useFetch("/api/getCurrentUser/**", {headers});
let {Notes} = data.value;
const notes = useNotes();
notes.value = Notes;
</script>

<template>
    <NuxtLoadingIndicator :throttle="0" :height="2" />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
