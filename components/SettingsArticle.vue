<script setup lang="ts">
defineProps<{
    settingName: string;
}>();
</script>
<template>
    <article class="flex flex-col gap-y-[.2px]">
        <h2 class="text-text dark:text-text-dark capitalize font-[700]">
            {{ settingName }}
        </h2>
        <p
            class="text-[0.88rem] capitalize text-lighterGray dark:text-lighterGray-dark"
        >
            choose your {{ settingName }}
        </p>
    </article>
</template>
