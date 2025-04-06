<script lang="ts" setup>
const props = defineProps<{
    Notes: Note[];
}>();
import {changeActiveRoute} from "~/helpers/changeActiveLink";
const router = useRouter();
function goToCreateNewNote() {
    changeActiveRoute(1);
    router.replace("/all-notes/create-new-note");
}
function goToTargetNote(id: any) {
    const targetNote = props.Notes.find((el: Note) => el.id == id);
    if (targetNote?.archived) {
        router.replace(`/archived-notes/${id}`);
    } else {
        router.replace(`/all-notes/${id}`);
    }
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
                        class="cursor-pointer"
                    >
                        {{ note.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
