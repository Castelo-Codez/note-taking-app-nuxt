<script setup lang="ts">
defineProps<{
    labelText: string;
    aboutText: string;
    activeRadio: string;
}>();

</script>
<template>
    <label
        :for="labelText"
        :class="{
            ' bg-lightGray dark:bg-lightGray-dark': activeRadio === labelText,
        }"
        class="flex p-4 cursor-pointer relative border border-border dark:border-border-dark items-center rounded-lg"
    >
        <div class="flex items-center gap-x-4">
            <span
                class="block p-[0.4rem] border border-border dark:border-border-dark rounded-lg"
                :class="{
                    '  bg-card dark:bg-card-dark': activeRadio === labelText,
                }"
            >
                <slot />
            </span>
            <article>
                <h3
                    class="text-text capitalize mb-1 dark:text-text-dark font-[600] text-[0.88rem]"
                >
                    {{ labelText }}
                </h3>
                <p
                    class="text-lighterGray capitalize dark:text-lighterGray-dark text-[0.77rem]"
                >
                    {{ aboutText }}
                </p>
            </article>
        </div>
        <div
            aria-hidden="true"
            :class="[
                activeRadio === labelText
                    ? ' p-[0.33rem] border-4 border-skyBlue dark:border-skyBlue-dark bg-text-dark'
                    : 'border p-[0.55rem]  border-border dark:border-border-dark',
            ]"
            class="absolute top-2/4 -translate-y-2/4 right-8 rounded-full border border-border dark:border-border-dark"
        ></div>
        <input type="radio"  :id="labelText" class="hidden" />
    </label>
</template>
