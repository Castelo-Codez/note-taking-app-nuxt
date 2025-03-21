<script setup lang="ts">
defineProps<{
    lableName: string;
    type?: string;
}>();
const id = `${Math.floor(Math.random() * 100321231)}`;
</script>
<template>
    <div :aria-label="`${lableName.toLowerCase()} input`" >
        <label :for="id" class="text-text dark:text-text-dark block mb-3">{{
            lableName
        }}</label>
        <input
            :type="type ? type : `${lableName.toLowerCase()}`"
            :id="id"
            class="block p-1 px-3 w-full text-text dark:text-text-dark rounded-md bg-barckground dark:bg-barckground-dark border border-1 border-grayBorder dark:border-grayBorder-dark"
        />
        <slot />
    </div>
</template>
