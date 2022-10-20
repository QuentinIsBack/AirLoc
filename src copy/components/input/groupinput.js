import React, { Children, useState } from "react";

const colors = {
    "black": "outline-gray-500",
    "red": "outline-red-500",
    "green": "outline-green-500",
}

export const GroupInput = ({

    id,
    type,
    name,
    color,
    placeholder,
    onChange,
    children,

}) => {
    const [value, setValue] = useState("");

    return (
        <>
            <div className={`rounded-md outline outline-1 ${colors[color]}`}>
                {children}
            </div>

            
        </>
        
    )
}

GroupInput.defaultProps = {
    color: "black"
};
  