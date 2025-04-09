<script lang="ts" setup>
import {changeActiveRoute} from "~/helpers/changeActiveLink";
const props = defineProps<{
    Notes: Note[];
}>();
const currentActiveNote = ref(``);
const router = useRouter();
function goToCreateNewNote() {
    changeActiveRoute(1);
    currentActiveNote.value = ``;
    router.replace("/all-notes/create-new-note");
}
const fullPath = router.currentRoute.value.fullPath
    .match(/\/(archived-notes|all-notes|\w+)/gi)
    ?.join("");
function goToTargetNote(id: string) {
    currentActiveNote.value = id;
    router.replace(`${fullPath}/${id}`);
}
</script>
<template>
    <nav
        class="md:border-b py-6 px-3 md:dark:border-border-dark xl:border-r xl:border-border xl:dark:border-border-dark min-h-full"
    >
        <div class="flex xl:items-center xl:flex-col">
            <button
                @click="goToCreateNewNote"
                class="capitalize w-[90%] bg-skyBlue p-2 rounded-md text-[0.9rem] text-center text-text dark:text-text-dark"
            >
                + create New Note
            </button>
            <ul class="mt-5 text-text dark:text-text-dark">
                <li v-for="note in props.Notes" :key="note.id">
                    <NuxtLink
                        @click="goToTargetNote(note.id)"
                        :class="[
                            currentActiveNote == note.id ? ' text-red-500' : '',
                        ]"
                        class="cursor-pointer"
                    >
                        {{ note.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
