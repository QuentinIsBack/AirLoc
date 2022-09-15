import { useState } from "react";

import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
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

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };

  getUserTest = (id) => {
    onSnapshot(doc(db, "users", "quentintramp"), (doc) => {
      console.log("Current data: ", doc.data());
      return doc.data()
  });
  };

}

export default new UserDataService();