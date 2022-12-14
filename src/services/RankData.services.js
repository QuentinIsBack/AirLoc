import { db } from "../firebase.config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const rankCollectionRef = collection(db, "ranks");

class RankDataService {

  /* Créer le role complet */
  /* Utilisation: RankDataServices.addRank(RANKID) */
  addRank = async (newRank) => {
    return await addDoc(rankCollectionRef, newRank);
  };

  updateRank = (id, updateRank) => {
    const userRank = doc(db, "ranks", id);
    return updateDoc(userRank, updateRank);
  };

  /* Supprimer le role complet */
  /* Utilisation: RankDataService.deleteRank(RANKID) */
  deleteRank = async (id) => {
    const rankDoc = doc(db, "ranks", id);
    return await deleteDoc(rankDoc);
  };

  /* Obtenir tous les roles complet */
  /* Utilisation:RankDataServices.getAllRanks({setRank}) => setRank est un useState */
  getAllRanks = async ({setRank}) => {
    getDocs(rankCollectionRef).then((querySnapshot) => {
      setRank(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  };

  /* Obtenir le role complet */
  /* Utilisation: RankDataService.getRank(RANKID)).data() */
  getRank = async (id, {setRank}) => {
    getDoc(doc(db, "ranks", id)).then((data)=>setRank(data.data()));
  };

}

export default new RankDataService();