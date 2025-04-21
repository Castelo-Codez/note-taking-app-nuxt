<script lang="ts" setup>
import useMobileCurrentPage from "~/composables/currentPage";
import {changeActiveRoute} from "~/helpers/changeActiveLink";
import changeCurrentRoute from "~/helpers/changeCurrentRoute";
import {changeMobileRoute} from "~/helpers/changeMobileRoute";
const props = defineProps<{
    Notes: Note[];
}>();
const emit = defineEmits(["create"]);
const currentActiveNote = ref(``);
const router = useRouter();
function goToCreateNewNote() {
    changeActiveRoute(1);
    changeCurrentRoute("All Notes");
    router.replace("/all-notes/create-new-note");
    currentActiveNote.value = ``;
    emit("create");
    changeMobileRoute("createNewNote");
}
const currentMobilePage = useMobileCurrentPage();
const fullPath = router.currentRoute.value.fullPath.match(/\/[-\w]+/);
function goToTargetNote(id: string) {
    currentActiveNote.value = id;
    router.replace(`${fullPath}/${id}`);
    changeMobileRoute(id);
}
watch(currentMobilePage, (newVal) => {
    if (newVal == "") {
        currentActiveNote.value = "";
    }
});
</script>
<template>
    <nav
        class="pb-20 md:py-6 md:px-3 xl:border-r xl:border-border xl:dark:border-border-dark min-h-full"
    >
        <div class="flex flex-wrap flex-col">
            <button
                @click="goToCreateNewNote"
                class="capitalize w-[60px] fixed z-50 bottom-[10rem] sm:bottom-[10rem] right-8 md:static md:flex items-center justify-center gap-x-2 h-[60px] md:h-auto text-[2rem] rounded-full md:w-full md:xl:w-[100%] bg-skyBlue md:p-2 md:rounded-md md:text-[0.99rem] md:text-center text-primaryText-dark dark:text-text-dark"
            >
                + <span class="hidden md:block">create New Note</span>
            </button>
            <ul
                class="md:mt-5 flex gap-x-3 flex-col flex-wrap text-text dark:text-text-dark"
            >
                <li
                    v-for="note in props.Notes"
                    :key="note.id"
                    class="border-b border-border dark:border-border-dark last:border-b-0 py-2"
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
