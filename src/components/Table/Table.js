import React from "react";

export const Table = ({  
    children,
}) => {
    return (
        <table className="w-full">
            {children}
        </table>
    )
}
