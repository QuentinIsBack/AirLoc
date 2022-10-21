import React from "react";

const colors = {
    "black": "outline-gray-500",
    "red": "outline-red-500",
    "green": "outline-green-500",
}

export const GroupInput = ({
    color,
    children,
}) => {
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
  