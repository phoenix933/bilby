import { firestore } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { documentConverter, type Document } from "$types/Document";

export async function getDocuments(): Promise<Document[]> {
    const querySnapshot = await getDocs(collection(firestore, 'documents').withConverter(documentConverter));

    return querySnapshot.docs.map((doc) => doc.data());
}