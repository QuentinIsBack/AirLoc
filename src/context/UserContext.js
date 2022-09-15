import { createContext, useState, useEffect } from "react";

// Import Authentificated
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import{db, auth} from "../firebase.config"
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export const UserContext = createContext()

export function UserContextProvider(props){

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

    const [currentUser, setCurrentUser] = useState();
    const [User, setUser] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            onSnapshot(doc(db, "users", "quentintramp"), (doc) => {
                console.log("Current data: ", doc.data());
                setUser(doc.data())
                setLoadingData(false)
            });
        })

        return unsubscribe;

    }, [])

    const [modalSign, setModalSign] = useState(false)


    return (
        <UserContext.Provider value={{modalSign, setModalSign, signUp, currentUser, User}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}