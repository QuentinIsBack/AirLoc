import React, { useState } from "react";

const themes = {
    default: {
        normal: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-stone-400 focus:ring-black hover:ring-black outline-none",
        error: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-red-400 outline-none",
        valid: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-green-600 outline-none"
    }
}

const sizes = {
    default: {
        normal: 'text-base font-normal px-3 pt-5 pb-1 rounded-md',
        floater: 'px-3 pt-3',
    }
}

export const InputFloatin = ({  
    id,
    type,
    value,
    defaultValue,
    onChange,
    placeholder,

    theme,
    size,
    statut,
}) => {

    const [values, setValues] = useState('')
    const handleChange = (e) => {
        setValues(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div className="block relative w-full h-fit">
            <input
                id={id}
                type={type}
                value={value}
                defaultValue={defaultValue}
                onChange={e=>handleChange(e)}
                className={`peer absolute transition duration-600 placeholder-transparent decoration-none ${statut=="normal" && themes[theme].normal} ${statut=="error" && themes[theme].error} ${statut=="valid" && themes[theme].valid} ${sizes[size].normal}`}
                placeholder={placeholder} />
            <label for={id} className={`${sizes[size].floater} ${values.length > 0  && '-translate-y-1.5 text-sm'} peer-focus:-translate-y-1.5 peer-focus:text-sm unselectable absolute duration-300`}>{placeholder}</label>
        </div>            
    )
}

InputFloatin.defaultProps = {
    theme: "default",
    size: "default",
    statut: "normal",
    defaultValue: '',
}
