import React, { useState } from "react";

export const InputFloating = ({

    id,
    type,
    name,
    placeholder,
    onChange,

}) => {
    const [value, setValue] = useState("");

    return (
        <>
            <a className="relative group block h-3rem w-full outline outline-1 hover:outline-2 rounded-md">
                <div 
                    className={`absolute mt-3 ml-3 transition-all duration-600 ${value.length == 0 ? "group-hover:-translate-y-2 group-hover:text-sm text-base" : "-translate-y-2 text-sm"} font-normal text-gray-700`}>
                    {name}
                </div>
                <input 
                    id={id}
                    type={type}
                    onChange={ e => {setValue(e.target.value); onChange(e)}} 
                    className={`absolute mt-5 ml-3 bg-transparent outline-none transition duration-600 ${value.length == 0 ? "group-hover:visible invisible" : "visible"} text-base font-normal text-black`} 
                    placeholder={placeholder} />
            </a>

            
        </>
        
    )
}

InputFloating.defaultProps = {

};
  