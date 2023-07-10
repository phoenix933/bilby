import { documents } from '$stores/documents.js';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load({ params, parent }) {
    // Wait initial load
    await parent();

    // Get documents from store (labels might have changed)
    const docs = get(documents)
    const doc = docs.find(doc => doc.id === params.id)

    if (!doc) {
        throw error(404, 'Document not found')
    }
}