<script lang="ts" setup>
</script>

<template>
    <div class="flex justify-center">
        <Logo />
    </div>
    <h1
        class="text-text dark:text-text-dark text-center text-[1.7rem] font-[700]"
    >
        Welcome to Note!
    </h1>
    <h2
        class="text-lighterGray dark:text-lighterGray-dark text-sm text-center mt-[-10px]"
    >
        Please log in to continue
    </h2>
    <LoginForm />
    <div
        class="flex justify-center gap-x-4 text-lighterGray dark:text-lighterGray-dark text-sm"
    >
        <button class="underline" @click="$emit('changeAuth')">
            Don't Have An Account ? Sign up
        </button>
    </div>
</template>
