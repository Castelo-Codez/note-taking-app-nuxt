<script setup lang="ts">
const props = defineProps<{
    notes: Note[];
}>();
</script>
<template>
    <MainSection>
        <MainNav :-notes="props.notes"/>
        <slot />
    </MainSection>
</template>
