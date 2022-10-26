// Import
import React from "react"
import { Button } from "../button/button"
import { ProgressBar } from "../progressbar/ProgressBar"

// Application
export const Begin = ({  
    children,
    title,
    topBar,
    bottomBar,
    progressPercentage,
    onNext,
    onPrev,
    customBackground
}) => {  
    return (
        <>
            <div className="h-screen w-screen grid grid-cols-2">

                <div className={`relative ${customBackground ? customBackground : 'bg-color-gradient-btn'}`}>
                    <div className="absolute w-full top-0">
                        TOP BAR
                    </div>
                    <div className="absolute h-screen w-full flex items-center pl-14 pr-72 font-semibold text-5xl text-white animate-showin leading-tight">
                    {title}
                    </div>
                    <div className="absolute w-full bottom-0">
                        BOT BAR
                    </div>
                </div>

                <div className="flex flex-col h-screen">
                    {topBar == true && TopBar()}
                    <div className="flex-grow overflow-auto">
                        {children}
                    </div>
                    {bottomBar == true && BottomBar({onNext, onPrev}, progressPercentage)}
                </div>

            </div>
        </>
  )
}

const TopBar = () => {
    return(
        <>
            <div className="flex-none w-full top-0 border-b sticky z-10">
                <div className="h-4.5rem bg-white p-4 flex items-center justify-end space-x-4">
                    <button className="bg-stone-100 rounded-full text-xs font-semibold py-2 px-4">Aide</button>
                    <button className="bg-stone-100 rounded-full text-xs font-semibold py-2 px-4">Enregistrer et quitter</button>
                </div>
            </div>
        </>
    )
}

const BottomBar = ({onNext, onPrev}, progressPercentage) => {
    return(
        <>
            <div className="flex-none w-full bottom-0 sticky z-10">
                <ProgressBar progressPercentage={progressPercentage ? progressPercentage : 0} />
                <div className="h-4rem bg-white p-4 flex items-center justify-between">
                    <Button onClick={onPrev} theme={'text'}>Retour</Button>
                    <Button onClick={onNext}>Continuer</Button>
                </div>
            </div>
        </>
    )
}