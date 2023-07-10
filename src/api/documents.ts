import { firestore } from '$lib/firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { documentConverter, type Document } from "$types/Document";

const documentsCollectionRef = collection(firestore, 'documents');

export async function getDocuments(): Promise<Document[]> {
    const querySnapshot = await getDocs(documentsCollectionRef.withConverter(documentConverter));

    return querySnapshot.docs.map((doc) => doc.data());
}

export async function updateDocumentLabel(id: string, label: string) {
    const documentRef = doc(documentsCollectionRef, id);

    return updateDoc(documentRef, { label });
}
