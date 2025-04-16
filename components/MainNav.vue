<script lang="ts" setup>
import {changeActiveRoute} from "~/helpers/changeActiveLink";
import changeCurrentRoute from "~/helpers/changeCurrentRoute";
const props = defineProps<{
    Notes: Note[];
}>();
const currentActiveNote = ref(``);
const router = useRouter();
function goToCreateNewNote() {
    changeActiveRoute(1);
    changeCurrentRoute("All Notes");
    router.replace("/all-notes/create-new-note");
    currentActiveNote.value = ``;
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
        class="py-6 px-3 xl:border-r xl:border-border xl:dark:border-border-dark min-h-full"
    >
        <div class="flex flex-wrap xl:flex-col">
            <button
                @click="goToCreateNewNote"
                class="capitalize w-[60px] absolute -bottom-[40rem] sm:-bottom-[35rem] right-8 md:static md:flex items-center justify-center gap-x-2 h-[60px] md:h-auto text-[2rem] rounded-full md:w-full md:xl:w-[95%] bg-skyBlue md:p-2 md:rounded-md md:text-[0.99rem] md:text-center text-primaryText-dark dark:text-text-dark"
            >
                + <span class="hidden md:block">create New Note</span>
            </button>
            <ul
                class="mt-5 flex gap-x-3 xl:flex-col flex-wrap text-text dark:text-text-dark"
            >
                <li
                    v-for="note in props.Notes"
                    :key="note.id"
                    class="xl:border-b xl:border-border xl:dark:border-border-dark xl:last:border-b-0 py-2"
                >
                    <NuxtLink
                        @click="goToTargetNote(note.id)"
                        class="cursor-pointer p-3 rounded-md flex gap-y-2 flex-col hover:bg-lightGray hover:dark:bg-lightGray-dark"
                        :class="[
                            currentActiveNote === note.id
                                ? 'bg-lightGray dark:bg-lightGray-dark'
                                : '',
                        ]"
                    >
                        <span class="font-[800] text-text dark:text-text-dark">
                            {{ note.title }}
                        </span>
                        <span
                            class="text-[0.78rem] px-2 rounded-md w-fit bg-lighterGray-dark dark:bg-lighterGray text-lightText dark:text-text-dark"
                        >
                            {{ note.tag }}
                        </span>
                        <span class="text-[0.66rem]">
                            {{ note.lastUpdated }}
                        </span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>
