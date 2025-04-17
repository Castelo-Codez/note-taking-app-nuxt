<script setup lang="ts">
import useMobileCurrentPage from "~/composables/currentPage";
import {changeActiveRoute} from "~/helpers/changeActiveLink";
import changeCurrentRoute from "~/helpers/changeCurrentRoute";
import {changeMobileRoute} from "~/helpers/changeMobileRoute";
const allNotes = useNotes();
const props = defineProps<{
    notes: Note[];
}>();
const activeLink = useActiveLink();
const currentPage = useMobileCurrentPage();
const currentRoute = useCurrentRoute();
const targetNote = ref();
watch(currentPage, (newVal) => {
    targetNote.value = props.notes.find((el) => el.id == currentPage.value);
});
const router = useRouter();
const prevRoute = router.currentRoute.value.fullPath.match(/\/[-\w]+/);
</script>
<template>
    <MainSection>
        <header
            class="p-3 text-[1.5rem] font-[800] text-text dark:text-text-dark"
        >
            {{ currentRoute }}
        </header>
        <MainNav
            class="px-2"
            :-notes="props.notes"
            v-if="currentPage === ''"
            @create="
                () => {
                    changeMobileRoute('createNewNote');
                    //@ts-expect-error
                    props.notes = [...allNotes];
                    changeActiveRoute(1);
                    changeCurrentRoute('All Notes');
                    router.replace('/all-notes/create-new-note');
                    activeLink = 1;
                }
            "
        />
        <NoteHandler
            v-if="currentPage === 'createNewNote'"
            @back="
                () => {
                    changeMobileRoute('');
                    router.replace(`${prevRoute?.join('')}`);
                }
            "
            :isnew="true"
        />
        <NoteHandler
            v-if="currentPage !== '' && currentPage !== 'createNewNote'"
            @back="changeMobileRoute('')"
            :key="targetNote.id"
            :isnew="false"
            :id="targetNote.id"
            :archived="targetNote.archived"
            :tag="targetNote.tag"
            :body="targetNote.body"
            :title="targetNote.title"
            :last-updated="targetNote.lastUpdated"
        />
    </MainSection>
</template>
