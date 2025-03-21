<script lang="ts" setup>
const {signOut} = useAuth();
</script>
<template>
    <main
        aria-label="authentication page"
        class="min-h-screen flex justify-center items-center dark:bg-lightGray"
    >
        <div>
            <button @click="signOut()">signout</button>
        </div>
    </main>
</template>
<style></style>
