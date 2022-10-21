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

export const InputFloating = ({  
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

    const [values, setValues] = useState(defaultValue ? defaultValue : '')
    const handleChange = (e) => {
        setValues(e.target.value)
        onChange(e)
    }


    return (
        <div className="relative w-full">
            <input
                id={id}
                type={type}
                value={value}
                defaultValue={defaultValue}
                onChange={e=>handleChange(e)}
                className={`peer inherit transition duration-600 placeholder-transparent decoration-none truncate ${statut==="normal" && themes[theme].normal} ${statut==="error" && themes[theme].error} ${statut==="valid" && themes[theme].valid} ${sizes[size].normal}`}
                placeholder={placeholder} />
            <label htmlFor={id} className={`truncate absolute z-10 top-0 left-0 ${sizes[size].floater} ${values.length > 0  && '-translate-y-1.5 text-sm'} peer-focus:-translate-y-1.5 peer-focus:text-sm unselectable duration-300 `}>{placeholder}</label>
        </div>                    
    )
}

InputFloating.defaultProps = {
    theme: "default",
    size: "default",
    statut: "normal",
    defaultValue: '',
}
