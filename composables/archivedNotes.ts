import useNotes from "./Notes";
const allNotes = useNotes();
const useArchivedNotes = () =>
    useState("archivedNotes", () =>
        allNotes.value.filter((el: Note) => el.archived)
    );
const archivedNotes = useArchivedNotes();
watch(allNotes, (newNotes) => {
    archivedNotes.value = newNotes.filter((el: Note) => el.archived);
});

export default useArchivedNotes;
