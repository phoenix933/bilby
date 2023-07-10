import { getDocuments, updateDocumentLabel } from "$api/documents";
import type { Document } from "$types/Document";
import { writable } from "svelte/store";

export const documents = function () {
    const store = writable<Document[]>([]);

    return {
        subscribe: store.subscribe,

        get: async () => {
            const docs = await getDocuments();

            store.set(docs);
        },
        updateDocumentLabel: async (id: string, label: string) => {
            await updateDocumentLabel(id, label);

            store.update((docs) => docs.map((doc) => doc.id === id ? { ...doc, label } : doc))
        }
    }
}();