import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import database from "./firebaseConfig";

const name = "contacts";
export const fetchContacts = () => getDocs(collection(database, name));

export const addContacts = (contact) =>
    addDoc(collection(database, name), contact);

export const delContacts = (id) => {

    deleteDoc(doc(database, name, id));
};

export const updateContacts = (contact) => {

    updateDoc(doc(database, name, contact.id), contact);
};
