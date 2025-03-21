<script lang="ts" setup>
const {signOut} = useAuth();
setTimeout(() => {
    signOut();
}, 1000);
</script>
<template>
    <main
        aria-label="authentication page"
        class="min-h-screen flex justify-center items-center dark:bg-lightGray"
    >
        <div>

        </div>
    </main>
</template>
<style></style>
