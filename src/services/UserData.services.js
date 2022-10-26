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

  updateUser = async (id, updateUser) => {
    console.log(updateUser)
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
  getAllUsers = async ({setUsers}) => {
    getDocs(userCollectionRef).then((querySnapshot) => {
      setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  };

  /* Obtenir le profile complet d'un utilisateur enregistré */
  /* Utilisation: UserDataService.getUser(USERID)).data() */
  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };

}

export default new UserDataService();