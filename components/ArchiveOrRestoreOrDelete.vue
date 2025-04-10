<script lang="ts" setup>
import {useNotes} from "~/composables/notes";
import {changeActiveRoute} from "~/helpers/changeActiveLink";
import changeCurrentRoute from "~/helpers/changeCurrentRoute";
const router = useRouter();
const prevRoute = router.currentRoute.value.fullPath.match(/\/[-\w]+/);
const notes = useNotes();
const props = defineProps<{
    archived: boolean;
    id?: string;
}>();
function removeNote() {
    const noteToDelete = notes.value.find((el: Note) => el.id == props.id);
    if (noteToDelete) {
        notes.value.splice(notes.value.indexOf(noteToDelete), 1);
    }
    if (noteToDelete?.archived) {
        changeActiveRoute(2);
        changeCurrentRoute("archived notes");
        router.replace(`${prevRoute?.join("")}`);
    }
    if (!noteToDelete?.archived) {
        changeActiveRoute(1);
        changeCurrentRoute("all notes");
        router.replace(`${prevRoute?.join("")}`);
    }
}
function archiveNote() {
    notes.value = notes.value.map((el: Note) => {
        if (el.id == props.id) {
            return {...el, archived: true};
        }
        return el;
    });
    router.replace(`${prevRoute?.join("")}`);
}
function restoreNote() {
    notes.value = notes.value.map((el: Note) => {
        if (el.id == props.id) {
            return {...el, archived: false};
        }
        return el;
    });
    router.replace(`${prevRoute?.join("")}`);
}
</script>

<template>
    <div class="flex flex-col px-3 gap-y-3">
        <button
            class="py-2 pl-4 items-center flex gap-x-2 rounded-md border border-darkGray dark:border-darkGray-dark"
            title="archive note"
            v-if="!archived"
            @click="archiveNote"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    class="group-hover:stroke-skyBlue stroke-text dark:stroke-text-dark"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                />
                <path
                    class="group-hover:stroke-skyBlue stroke-text dark:stroke-text-dark"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                />
            </svg>
            <span class="text-text dark:text-text-dark text-[0.8rem]"
                >Archive Note</span
            >
        </button>
        <button
            class="py-2 pl-4 items-center flex gap-x-2 rounded-md border border-darkGray dark:border-darkGray-dark"
            title="restore note"
            @click="restoreNote"
            v-else
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    class="group-hover:fill-skyBlue fill-text dark:fill-text-dark"
                    fill-rule="evenodd"
                    d="M3.708 7.404a.75.75 0 0 1 .983.398l1.316 3.114L9.1 9.608a.75.75 0 0 1 .584 1.382L5.9 12.59a.75.75 0 0 1-.983-.4L3.309 8.387a.75.75 0 0 1 .4-.982Z"
                    clip-rule="evenodd"
                />
                <path
                    class="group-hover:fill-skyBlue fill-text dark:fill-text-dark"
                    fill-rule="evenodd"
                    d="M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622a7.838 7.838 0 0 1 7.835 7.835 7.833 7.833 0 0 1-7.835 7.835 7.843 7.843 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.343 6.343 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.339 6.339 0 0 0-6.335-6.335Z"
                    clip-rule="evenodd"
                />
            </svg>
            <span class="text-text dark:text-text-dark text-[0.8rem]"
                >Restore Note</span
            >
        </button>
        <button
            class="py-2 pl-4 items-center flex gap-x-2 rounded-md border border-darkGray dark:border-darkGray-dark"
            title="delete note"
            @click="removeNote"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="23"
                fill="none"
                viewBox="0 0 24 25"
            >
                <path
                    class="group-hover:stroke-skyBlue stroke-text dark:stroke-text-dark"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
                />
            </svg>
            <span class="text-text dark:text-text-dark text-[0.8rem]"
                >Delete Note</span
            >
        </button>
    </div>
</template>
