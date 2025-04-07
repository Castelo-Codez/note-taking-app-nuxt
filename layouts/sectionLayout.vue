<script setup lang="ts">
import useNotes from "~/composables/Notes";
const props = defineProps<{
    notes: Note[];
}>();
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});
const notes = useNotes();
</script>
<template>
    <MainSection>
        <MainNav :-notes="props.notes" />
        <slot />
    </MainSection>
</template>
