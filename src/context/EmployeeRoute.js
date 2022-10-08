import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

// Import Authentificated
import { UserContext } from "../context/UserContext";

export default function Home(){

    const { User } = useContext(UserContext)

    if(!(User.power > 100)){
        console.log(User.power)
        return <Navigate to="/" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}