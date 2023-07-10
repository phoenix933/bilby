import { error } from "@sveltejs/kit";

export async function load({ params, parent }) {
    const { id } = params;
    const { documents } = await parent();

    const document = documents.find(document => document.id === id);

    if (!document) {
        throw error(404, `Document not found`);
    }

    return {
        document
    };
}