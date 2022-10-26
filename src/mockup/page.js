import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export default function Page({title, children}) {
    const [doctitle, setDocTitle] = useTitle(title ? title : "AirLoc");

    return (
        <>
            <div className="h-screen w-screen">
                {children}
            </div>
        </>
    )

} 
