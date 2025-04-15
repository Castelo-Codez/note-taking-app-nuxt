<script setup lang="ts">
const activeLink = useActiveLink();
const {mobile = false} = defineProps<{
    text?: string;
    activeLinkNum?: number;
    mobile?: boolean;
}>();
</script>
<template>
    <NuxtLink
        class="flex items-center relative gap-x-2 group p-2 rounded-lg cursor-pointer hover:bg-lightGray dark:hover:bg-lightGray-dark"
        :class="{
            ' bg-lightGray dark:bg-lightGray-dark':
                activeLink === activeLinkNum,
        }"
    >
        <slot />
        <span v-if="text" class="text-[0.88rem] md:text-[1rem]">
            {{ text }}
        </span>
        <div
            class="absolute right-3"
            v-if="activeLink === activeLinkNum && mobile !== true"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                class="ml-auto flex"
                color="#FFF"
            >
                <path
                    class="fill-text dark:fill-text-dark"
                    fill-rule="evenodd"
                    d="M9.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </div>
    </NuxtLink>
</template>
