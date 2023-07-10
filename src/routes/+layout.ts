import { documents } from "$stores/documents";

export const ssr = false;

export async function load() {
    await documents.get();
}