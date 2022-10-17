import React from "react";

export const TableItem = ({  
    children
}) => {
    return (
            <tr className="h-16 border-t">
                {children}
            </tr>
        )
}
