import React, { useState } from "react";

const themes = {
    "default": "outline-1",
    "group": "outline-0",
}

const colors = {
    "black": "outline-black",
    "red": "outline-red-500",
    "green": "outline-green-500",
}

export const InputFloating = ({

    id,
    type,
    name,
    placeholder,
    theme,
    color,
    onChange,

}) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e)
    }

    return (
        <>
            <a className={`relative group block h-3rem w-full outline ${themes[theme]} ${colors[color]} hover:outline-2 rounded-md`}>
                <div 
                    className={`absolute mt-3 ml-3 transition-all duration-600 ${value.length == 0 ? "group-hover:-translate-y-2 group-hover:text-sm text-base" : "-translate-y-2 text-sm"} font-normal text-gray-700`}>
                    {name}
                </div>
                <input 
                    id={id}
                    type={type}
                    onChange={(e) => handleChange(e)} 
                    className={`w-full absolute mt-5 ml-3 bg-transparent outline-none transition duration-600 ${value.length == 0 ? "group-hover:visible invisible" : "visible"} text-base font-normal text-black`} 
                    placeholder={placeholder} />
            </a>

            
        </>
        
    )
}

InputFloating.defaultProps = {
    theme: "default",
    color: "black",
};
  