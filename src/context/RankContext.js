import { createContext, useState, useEffect, useContext } from "react";

// Import Authentificated
import{ db } from "../firebase.config"
import { doc, getDocs, collection, deleteDoc, addDoc } from "firebase/firestore";

export const RankContext = createContext()

export const GetRankByPower = (user) => {
    const { Rank } = useContext(RankContext)
    var data = Rank.filter(function(item){
        return item.power == (user.power ? user.power : 0);
     }).map(function(ranks){
        return ranks;
     });
     return data[0]
}

export const DeleteRank = ({Rank, setRank},rankId) => {
  if(rankId.deletable != false){
      const newFruits = Rank.filter( (rank) => rank.id !== rankId.id );
      setRank(newFruits);
      console.log(newFruits)
      deleteDoc(doc(db, "ranks", rankId.id))
  }
}

export const CreateRank = ({Rank, setRank}, nameI, deletableI, colorI, powerI) => {
  const newRank = {
    name: nameI ? nameI : "Sans nom", 
    deletable: deletableI ? deletableI : true,
    color: colorI ? colorI : 'bg-green-600',
    power: powerI ? powerI : 1
  }

  const test = [...Rank, newRank]

  addDoc(collection(db, "ranks"), newRank)
    .then( 
      setRank(test) 
    );
     
}


export function RankContextProvider(props){

    const [Rank, setRank] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {

        let unsubscribed = false;

        getDocs(collection(db, "ranks"))
          .then((querySnapshot) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
            
            const newUserDataArray = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));
      
              console.log(newUserDataArray)
            setRank(newUserDataArray);
            setLoadingData(false)
          })
          .catch((err) => {
            if (unsubscribed) return; // unsubscribed? do nothing.
      
            // TODO: Handle errors
            console.error("Failed to retrieve data", err);
          });
      
        return () => unsubscribed  = true;

    }, [])

    return (
        <RankContext.Provider value={{Rank, setRank}}>
            {!loadingData && props.children}
        </RankContext.Provider>
    )
}