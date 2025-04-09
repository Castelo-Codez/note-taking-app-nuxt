<script setup lang="ts">
const props = defineProps<{
    notes: Note[];
}>();
const title = inject("title");
useHead({
    title: `All Notes | ${title}`,
});

</script>
<template>
    <MainSection>
        <MainNav :-notes="props.notes" />
        <slot />
    </MainSection>
</template>
