// Import
import React, {useState} from "react"
import { Button } from "../button/button";

// Component
const themes = {
    black: {
        name: "text-md text-stone-900 font-normal",
        option: "text-sm text-stone-900 font-medium underline",
    },
    cyan: {
        name: "text-md text-stone-900 font-semibold",
        option: "text-sm text-cyan-600 font-bold hover:underline",
    },
   
};

// Application
export const EditSettings = ({  
    name,
    message,
    description,
    onClick,
    children,
    theme
}) => {  

    const [use, setUse] = useState(false);

    const clickUpdate = () => {
        setUse((use) => !use)
        onClick(use)
    }

    return (
    <>
        <div className="flex justify-between">
            <div className={`${themes[theme].name}`}>{name}</div>
            <button onClick={() => setUse((use) => !use)} className={`${themes[theme].option}`}>{use ? 'Annuler' : 'Modifier'}</button>
        </div>
        <div>
            <div className='text-sm text-gray-500 font-normal'>{use ? description ? description: message : message}</div>
            <div className={`${use ? (children ? 'mt-4 w-full' : "") : 'hidden'}`}>
                {children}
            </div>
        </div>
        <div className={`mt-6 ${use ? '' : 'hidden'}`}>
            <Button theme={theme} onClick={clickUpdate}>Enregister</Button>
        </div>
    </>
  )
}

EditSettings.defaultProps = {
    theme: "black",
};
  