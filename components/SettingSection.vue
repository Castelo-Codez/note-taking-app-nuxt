<script setup lang="ts">
defineProps<{
    settingName: string;
}>();
</script>
<template>
    <section class="p-10">
        <SettingsArticle :setting-name="settingName" />
        <slot />
    </section>
</template>
