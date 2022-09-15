import { createContext, useState, useEffect } from "react";

// Import Authentificated
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import{db, auth} from "../firebase.config"
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export const UserContext = createContext()

export function UserContextProvider(props){

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

    const [currentUser, setCurrentUser] = useState();
    const [User, setUser] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {

            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setCurrentUser(currentUser)
                if (currentUser){
                    onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
                        console.log("Current data:s ", doc.data());
                        setUser(doc.data())
                        setLoadingData(false)
                    });
                } else {
                    setLoadingData(false)
                }

            })
            return unsubscribe; 



    }, [])

    const [modalSign, setModalSign] = useState(false)


    return (
        <UserContext.Provider value={{modalSign, setModalSign, signUp, signIn, currentUser, User}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}