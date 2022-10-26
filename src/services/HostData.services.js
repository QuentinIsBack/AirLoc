import { db } from "../firebase.config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";

const CollectionRef = collection(db, "hosts");

class HostDataService {

  /* Créer le role complet */
  /* Utilisation: HostDataService.addRank(RANKID) */
  add = async (news) => {
    return await addDoc(CollectionRef, news);
  };

  update = (id, update) => {
    const Doc = doc(db, "hosts", id);
    return updateDoc(Doc, update);
  };

  /* Supprimer le role complet */
  /* Utilisation: HostDataService.delete(ID) */
  delete = async (id) => {
    const Doc = doc(db, "hosts", id);
    return await deleteDoc(Doc);
  };

  /* Obtenir tous les roles complet */
  /* Utilisation: HostDataService.gets({setHost}) => setHosts est un useState */
  gets = async ({setHosts}) => {
    getDocs(CollectionRef).then((querySnapshot) => {
      setHosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  };


  /* Obtenir tous les roles complet */
  /* Utilisation: HostDataService.gets({setHost}) => setHosts est un useState */
  getsWhere = async ({setHosts}, name, id) => {

    getDocs(query(CollectionRef, where(name, "==", id))).then((querySnapshot) => {
      setHosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })

  };

  /* Obtenir le role complet */
  /* Utilisation: HostDataService.get(ID)).data() */
  get = async (id, {setHost}) => {
    getDoc(doc(db, "hosts", id)).then((data)=>setHost(data.data()));
  };

}

export default new HostDataService();