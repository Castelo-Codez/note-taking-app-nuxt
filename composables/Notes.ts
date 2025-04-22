interface Note {
    id: string;
    lastUpdated: string;
    title: string;
    body: string;
    tag: string;
    archived: boolean;
}

export const useNotes = () => useState<Note[]>("Notes", () => []);
export type {Note};
