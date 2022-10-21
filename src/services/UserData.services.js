import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserDataService {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateUser = (id, updateUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updateUser);
  };

  /* Supprimer le profile complet d'un utilisateur enregistré */
  /* Utilisation: UserDataService.deleteUser(USERID) */
  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  /* Obtenir tous les profiles complet des utilisateurs enregistré */
  /* Utilisation: UserDataService.getAllUsers().then((querySnapshot)=>querySnapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id }))) */
  getAllUsers = () => {
    return getDocs(userCollectionRef)
  };

  /* Obtenir le profile complet d'un utilisateur enregistré */
  /* Utilisation: UserDataService.getUser(USERID)).data() */
  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

export default new UserDataService();