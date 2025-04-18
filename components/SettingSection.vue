<script setup lang="ts">
defineProps<{
    settingName: string;
}>();
</script>
<template>
    <section class="p-2 md:p-10">
        <SettingsArticle :setting-name="settingName" class=" hidden md:block" />
        <slot />
    </section>
</template>
