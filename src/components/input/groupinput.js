import React, { Children, useState } from "react";

export const GroupInput = ({

    id,
    type,
    name,
    placeholder,
    onChange,
    children,

}) => {
    const [value, setValue] = useState("");

    return (
        <>
            <div className="rounded-md outline outline-1 outline-gray-500">
                {children}
            </div>

            
        </>
        
    )
}

GroupInput.defaultProps = {

};
  