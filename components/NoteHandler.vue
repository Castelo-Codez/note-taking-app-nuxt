<script setup lang="ts">
import uniqid from "uniqid";
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import {z} from "zod";
import {useNotes} from "~/composables/notes";
import {changeMobileRoute} from "~/helpers/changeMobileRoute";
const router = useRouter();
const notes = useNotes();
const emits = defineEmits(["back"]);
const prevRoute = router.currentRoute.value.fullPath.match(/\/[-\w]+/);
const title = defineModel("title", {
    default: "",
});
const tag = defineModel("tag", {
    default: "",
});
const body = defineModel("body", {
    default: "",
});
const archived = defineModel("archived", {
    default: false,
});

const {id = ``, lastUpdated = ""} = defineProps<{
    id?: string;
    lastUpdated?: string;
    isnew: boolean;
}>();
const nonemptyMsg = "cann't be empty";
const minErrorMsg = "At Least 2 characters";
const schema = toTypedSchema(
    z.object({
        title: z.string().nonempty(nonemptyMsg).min(2, minErrorMsg),
        tag: z.string().nonempty(nonemptyMsg).min(2, minErrorMsg),
        body: z.string().nonempty(nonemptyMsg),
    })
);
const {defineField, errors, handleSubmit} = useForm({
    validationSchema: schema,
});

const arrayOfMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];
const onSubmit = handleSubmit(async (values) => {
    //@ts-expect-error
    const checkIfNoteExists: Note = notes.value.find((el: Note) => el.id == id);
    if (checkIfNoteExists) {
        const oldNoteIndex = notes.value.indexOf(checkIfNoteExists as Note);
        notes.value.splice(oldNoteIndex, 1);
        notes.value.splice(oldNoteIndex, 0, {
            ...values,
            id,
            archived: archived.value,
            lastUpdated: `${new Date().getDate()} ${
                arrayOfMonths[new Date().getMonth()]
            } ${new Date().getFullYear()}`,
        });
    } else {
        let uniqId = `${uniqid()}`;
        let addedNote = {
            ...values,
            id: uniqId,
            archived: archived.value,
            lastUpdated: `${new Date().getDate()} ${
                arrayOfMonths[new Date().getMonth()]
            } ${new Date().getFullYear()}`,
        };
        let req = await $fetch("/api/notes/addNote", {
            body: addedNote,
            method: "POST",
        });
        let {status} = req;
        if (status === "Note Added") {
            notes.value = [...notes.value, addedNote];
        }
    }
    router.replace(`${prevRoute?.join("")}`);
    changeMobileRoute("");
});

const [$title, titleAttrs] = defineField("title");
$title.value = title.value;
const [$tag, tagAttrs] = defineField("tag");
$tag.value = tag.value;
const [$body, bodyAttrs] = defineField("body");
$body.value = body.value;

watch(title, (newVal) => {
    $title.value = newVal;
});
watch(tag, (newVal) => {
    $tag.value = newVal;
});
watch(body, (newVal) => {
    $body.value = newVal;
});
async function removeNote() {
    const noteToDelete = notes.value.find((el: Note) => el.id == id);
    let req = await $fetch(`/api/notes/deleteNote/${id}`, {
        method: "delete",
    });

    if (noteToDelete) {
        let status = req.status;
        if (status === "Note deleted") {
            notes.value.splice(notes.value.indexOf(noteToDelete), 1);
        }
    }
    router.replace(`${prevRoute?.join("")}`);
    changeMobileRoute("");
}
function archiveNote() {
    notes.value = notes.value.map((el: Note) => {
        if (el.id == id) {
            return {...el, archived: true};
        }
        return el;
    });
    router.replace(`${prevRoute?.join("")}`);
    changeMobileRoute("");
}
function restoreNote() {
    notes.value = notes.value.map((el: Note) => {
        if (el.id == id) {
            return {...el, archived: false};
        }
        return el;
    });
    router.replace(`${prevRoute?.join("")}`);
    changeMobileRoute("");
}
</script>
<template>
    <section
        class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] 2xl:grid-cols-[3fr_1fr]"
    >
        <section
            class="md:py-6 md:px-3 xl:border-r xl:border-r-border xl:dark:border-r-border-dark"
        >
            <MobileNoteHandlerHeader
                @back="
                    () => {
                        emits('back');
                    }
                "
                @save="onSubmit"
                @delete="removeNote"
                @archive="archiveNote"
                @restore="restoreNote"
                :is-new="isnew"
                :archived="archived"
            />
            <form
                class="w-[90%] pb-32 md:pb-0 mx-auto"
                @submit.prevent="onSubmit"
            >
                <div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        v-model="title"
                        v-bind="titleAttrs"
                        placeholder="Enter a title..."
                        class="block text-[0.99rem] md:text-[1.3rem] placeholder:text-text dark:placeholder:text-text-dark font-[800] w-full p-[0.3px] bg-transparent text-text dark:text-text-dark"
                    />
                    <MainErrorMsg
                        :error-msg="errors.title as string"
                        :show="errors.title as string"
                    />
                </div>
                <div
                    class="grid grid-cols-[140px_1fr] mt-5 gap-x-2 md:gap-x-16 items-start"
                >
                    <div class="flex items-center gap-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            color="#FFF"
                        >
                            <path
                                class="stroke-text dark:stroke-text-dark"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                                clip-rule="evenodd"
                            ></path>
                            <path
                                class="stroke-text dark:stroke-text-dark"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span
                            class="text-[0.88rem] text-text dark:text-text-dark capitalize"
                            >tags</span
                        >
                    </div>
                    <div>
                        <input
                            type="text"
                            id="tag"
                            name="tag"
                            v-model="tag"
                            v-bind="tagAttrs"
                            placeholder="Add tags separated by commas (e.g. Work, Planning)"
                            class="block text-[0.66rem] w-full p-[0.3px] bg-transparent text-text dark:text-text-dark"
                        />
                        <MainErrorMsg
                            :error-msg="errors.tag as string"
                            :show="errors.tag as string"
                        />
                    </div>
                </div>
                <div
                    v-if="archived"
                    class="grid grid-cols-[140px_1fr] mt-5 gap-x-2 md:gap-x-16 items-start"
                >
                    <div class="flex items-center gap-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            color="#FFF"
                        >
                            <path
                                fill="#FFF"
                                fill-rule="evenodd"
                                d="M5.658 6.348c.27-.27.708-.27.979 0l.876.876a.692.692 0 0 1-.98.979l-.875-.876a.692.692 0 0 1 0-.98Zm1.855 9.446c.27.27.27.709 0 .98l-1.589 1.589a.692.692 0 1 1-.98-.979l1.59-1.59c.27-.27.708-.27.979 0Zm7.592 0c.27-.27.709-.27.98 0l1.588 1.59a.692.692 0 1 1-.98.979l-1.588-1.59a.692.692 0 0 1 0-.979ZM11.308 4.583c.382 0 .692.31.692.693v.662a.692.692 0 1 1-1.384 0v-.662c0-.383.31-.692.692-.692ZM2.824 12c0-.382.31-.692.692-.692h1.731a.692.692 0 0 1 0 1.384H3.516A.692.692 0 0 1 2.824 12Zm13.852 0c0-.382.31-.692.693-.692h2.247a.692.692 0 0 1 0 1.384h-2.247a.692.692 0 0 1-.693-.692Zm-5.368 5.368c.382 0 .692.31.692.693v2.247a.692.692 0 1 1-1.384 0V18.06c0-.383.31-.693.692-.693Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span
                            class="text-[0.88rem] text-text dark:text-text-dark capitalize"
                            >status</span
                        >
                    </div>
                    <div>
                        <input
                            type="text"
                            disabled
                            placeholder="archived"
                            class="block capitalize text-[0.88rem] w-full p-[0.3px] bg-transparent text-text dark:text-text-dark"
                        />
                        <MainErrorMsg
                            :error-msg="errors.tag as string"
                            :show="errors.tag as string"
                        />
                    </div>
                </div>
                <div
                    class="grid grid-cols-[140px_1fr] mt-5 gap-x-2 md:gap-x-16 items-start pb-5 border-b border-b-border dark:border-b-border-dark"
                >
                    <div class="flex items-center gap-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="none"
                            color="#FFF"
                        >
                            <path
                                class="fill-text dark:fill-text-dark"
                                fill-rule="evenodd"
                                d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.364 9.75-9.75 9.75-5.385 0-9.75-4.366-9.75-9.75Z"
                                clip-rule="evenodd"
                            ></path>
                            <path
                                class="fill-text dark:fill-text-dark"
                                fill-rule="evenodd"
                                d="M11.922 7.827a.75.75 0 0 1 .75.75v3.672l2.81 1.68a.75.75 0 1 1-.77 1.287l-3.174-1.897a.75.75 0 0 1-.366-.644V8.577a.75.75 0 0 1 .75-.75Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span
                            class="text-[0.88rem] text-text dark:text-text-dark capitalize"
                            >last edited</span
                        >
                    </div>
                    <input
                        type="text"
                        disabled
                        :placeholder="
                            lastUpdated ? lastUpdated : 'not saved yet!'
                        "
                        class="bg-transparent text-[0.66rem] capitalize"
                    />
                </div>
                <div class="mt-5">
                    <textarea
                        name="body"
                        id="body"
                        v-bind="bodyAttrs"
                        v-model="body"
                        placeholder="start typing your note here..."
                        class="resize-y bg-transparent block w-full min-h-[500px] border border-border dark:border-border-dark focus-within:outline-none rounded-md p-2 text-lightText dark:text-lighterGray-dark text-[0.8rem]"
                    >
                    </textarea>
                    <MainErrorMsg
                        :error-msg="errors.body as string"
                        :show="errors.body as string"
                    />
                </div>
                <div
                    class="mt-3 py-4 hidden md:flex gap-x-3 md:border-t md:border-t-border md:dark:border-t-border-dark"
                >
                    <button
                        type="submit"
                        class="text-text-dark bg-skyBlue p-2 px-4 rounded-md text-[0.8rem]"
                    >
                        Save Note
                    </button>
                    <button
                        type="button"
                        @click="
                            () => {
                                changeMobileRoute('');
                                router.replace(`${prevRoute?.join('')}`);
                            }
                        "
                        class="text-lighterGray dark:text-lighterGray-dark bg-darkerGray dark:bg-darkerGray-dark text-[0.8rem] rounded-md p-2 px-4"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
        <section
            class="py-6 px-3 border-t border-t-border dark:border-t-border-dark xl:border-t-0"
        >
            <ArchiveOrRestoreOrDelete
                class="hidden md:flex"
                :archived="archived"
                :id="id"
                v-if="!isnew"
            />
        </section>
    </section>
</template>
