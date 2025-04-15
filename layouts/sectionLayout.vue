<script setup lang="ts">
const props = defineProps<{
    notes: Note[];
}>();
</script>
<template>
    <MainSection>
        <MainNav :-notes="props.notes" class="hidden md:block" />
        <slot />
    </MainSection>
</template>
