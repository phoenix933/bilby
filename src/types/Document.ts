import type { DocumentSnapshot, FirestoreDataConverter, SnapshotOptions } from "firebase/firestore";

export type Document = {
    id: number;
    title: string;
    body: string;
    url: string;
    label?: string;
}

export const documentConverter: FirestoreDataConverter<Document> = {
    toFirestore: (document: Document) => document,
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const { id, title, body, url, label } = snapshot.data(options) ?? {};

        return {
            id,
            title,
            body,
            url,
            label,
        }
    }
}