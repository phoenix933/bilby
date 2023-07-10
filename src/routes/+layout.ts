import { getDocuments } from "$api/documents";

export const ssr = false;

export async function load() {
    const documents = await getDocuments();

    return {
        documents
    };
}