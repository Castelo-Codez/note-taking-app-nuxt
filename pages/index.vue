<script lang="ts" setup>
const {signOut} = useAuth();
</script>
<template>
    <div>
        <button @click="signOut()">signout</button>
    </div>
</template>
