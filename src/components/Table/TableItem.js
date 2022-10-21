import React from "react";

export const TableItem = ({  
    children
}) => {
    return (
            <tbody className="h-16 border-t">
                <tr>
                    {children}
                </tr>
            </tbody>
        )
}
