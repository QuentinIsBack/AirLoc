import React from "react";

const themes = {
    default: {
        normal: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-stone-400 focus:ring-black hover:ring-black outline-none",
        error: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-red-400 outline-none",
        valid: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-green-600 outline-none"
    }
}

const sizes = {
    default: 'text-base font-normal h-3rem px-3 rounded-md'
}

export const Input = ({  
    id,
    type,
    defaultValue,
    onChange,
    placeholder,

    theme,
    size,
    statut,
}) => {
    return (
        <input
            id={id}
            type={type}
            defaultValue={defaultValue}
            onChange={onChange}
            className={`transition duration-600 decoration-none ${statut==="normal" && themes[theme].normal} ${statut==="error" && themes[theme].error} ${statut==="valid" && themes[theme].valid} ${sizes[size]}`}
            placeholder={placeholder} />
    )
}

Input.defaultProps = {
    theme: "default",
    size: "default",
    statut: "normal",
}
