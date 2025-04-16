<script setup lang="ts">
const props = defineProps<{
    notes: Note[];
}>();
const currentPage = ref(true);
</script>
<template>
    <MainSection>
        <MainNav
            :-notes="props.notes"
            v-if="currentPage"
            @create="currentPage = !currentPage"
        />
        <NoteHandler @back="currentPage = !currentPage" :isnew="true" v-else />
    </MainSection>
</template>
