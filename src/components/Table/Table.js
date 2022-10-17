import React from "react";
import { TableItem } from './TableItem'

export const Table = ({  
    header,
    children,
}) => {
    return (
        <table className="w-full">
            {children}
        </table>
    )
}
