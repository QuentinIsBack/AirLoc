import { createContext, useState, useEffect, useContext } from "react";

// Import Authentificated
import{db, auth} from "../firebase.config"
import { doc, getDocs, onSnapshot, collection } from "firebase/firestore";

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