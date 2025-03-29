<script lang="ts" setup>
definePageMeta({
    auth: {unauthenticatedOnly: true, navigateAuthenticatedTo: "/"},
    layout: false,
});
const title = inject("title");
useHead({
    title: `Auth | ${title}`,
});
const changeAuth = ref(false);
</script>
<template>
    <div
        class="min-h-screen flex justify-center items-center bg-tagsBg dark:bg-tagsBg-dark"
    >
        <section
            class="bg-barckground rounded-md dark:bg-barckground-dark w-[95%] sm:w-[70%] max-w-[500px] py-14 px-8 flex flex-col gap-y-4"
        >
            <SignUp
                @change-auth="() => (changeAuth = !changeAuth)"
                v-if="changeAuth"
            />
            <Login @change-auth="() => (changeAuth = !changeAuth)" v-else />
        </section>
    </div>
</template>
