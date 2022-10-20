import React from "react";

export const TableHead = ({  
    children
}) => {
    return (
            <tr className="h-8 uppercase text-xs text-left font-bold text-gray-500">
                {children}
            </tr>
        )
}
