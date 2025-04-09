export const useArchivedNotes = () =>
    useState<Note[]>("archivedNotes", () => []);
