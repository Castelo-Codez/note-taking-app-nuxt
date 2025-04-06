interface Note {
    id: string;
    lastUpdated: string;
    title: string;
    body: string;
    tag: string;
    archived: boolean;
}

const useNotes = () =>
    useState<Note[]>("Notes", () => [
        {
            id: "1321231",
            lastUpdated: "22-3-2025",
            title: "castelo",
            tag: "castelo",
            body: "castelo",
            archived: false,
        },
    ]);

export type {Note};
export default useNotes;
