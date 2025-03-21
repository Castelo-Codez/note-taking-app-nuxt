<script lang="ts" setup>
definePageMeta({
    auth: {unauthenticatedOnly: true, navigateAuthenticatedTo: "/"},
});
const title = inject("title");
useHead({
    title: `Auth | ${title}`,
});
const changeAuth = ref(false);
const {signIn} = useAuth();


</script>
<template>
    <main
        aria-label="authentication page"
        class="min-h-screen flex justify-center px-[10px] items-center bg-lightGray dark:bg-lightGray-dark"
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
    </main>
</template>
