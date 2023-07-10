import type { DocumentSnapshot, FirestoreDataConverter, SnapshotOptions } from "firebase/firestore";

export type Document = {
    id: string;
    title: string;
    body: string;
    url: string;
    label?: string;
}

export const documentConverter: FirestoreDataConverter<Document> = {
    toFirestore: (document: Document) => () => {
        const { title, body, url, label } = document;

        return { title, body, url, label };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const { id } = snapshot;
        const { title, body, url, label } = snapshot.data(options) ?? {};

        return {
            id,
            title,
            body,
            url,
            label,
        }
    }
}