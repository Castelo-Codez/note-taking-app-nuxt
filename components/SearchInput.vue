<script lang="ts" setup>
import {useSearch} from "~/composables/searchKeyword";
import {changeActiveRoute} from "~/helpers/changeActiveLink";

const searchKeyword = useSearch();

watch(searchKeyword, (newVal) => {
    changeActiveRoute(0);
    if (newVal == "") {
        searchKeyword.value = "";
    }
    navigateTo(`/search`);
});
</script>

<template>
    <form class="min-w-[300px] max-w-[400px]">
        <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
        >
        <div class="relative">
            <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
                <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="search"
                id="default-search"
                v-model="searchKeyword"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 bg-barckground dark:bg-barckground-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-[0.66rem]"
                placeholder="Search by title, content, or tags..."
                required
            />
        </div>
    </form>
</template>
