<script setup lant="ts">
import useSearch from "~/composables/searchKeyword";
const searchKeyword = useSearch();
</script>
<template>
    <section class="px-5 min-h-[calc(100%_-_88px)]">
        {{ searchKeyword }}
    </section>
</template>
