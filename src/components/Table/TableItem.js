import React from "react";
import { v4 } from 'uuid';

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
