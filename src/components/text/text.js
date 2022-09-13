import React from "react";


const colors = {
    "night": "#292D32",
    "pinky": "#FF385C",
    "white": "#FAFCFF",
    "puply": "#460479",
};

const sizes = {
    "xxs": "text-xxs",
    "xs": "text-xs",
    "sm": "text-sm",
    "base": "text-base",
    "md": "text-md",
    "l": "text-l",
    "lg": "text-lg",
    "xl": "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
};

const weights = {
    "thin": "font-thin",
    "extralight": "font-extralight",
    "light": "font-light",
    "normal": "font-normal",
    "medium": "font-medium",
    "semibold": "font-semibold",
    "bold": "font-bold",
    "extrabold": "font-extrabold",
    "black": "font-black",
};

const aligns = {
    "left": "text-left",
    "center": "text-center",
    "right": "text-right",
    "justify": "text-justify",
    "start": "text-start",
    "end": "text-end",
};

const leadings = {
    "3": "leading-3",
    "4": "leading-4",
    "5": "leading-5",
    "6": "leading-6",
    "7": "leading-7",
    "8": "leading-8",
    "9": "leading-9",
    "10": "leading-10",
    "none": "leading-none",
    "tight": "leading-tight",
    "snug": "leading-snug",
    "normal": "leading-normal",
    "relaxed": "leading-relaxed",
    "loose": "leading-loose",
};

export const Text = ({  
    children, 
    theme, 
    onClick,

    additionnal,
    color,
    size,
    weight,
    align,
    leading,
}) => {
    return (
        <div onClick={onClick} className={`flex items-center ${additionnal} ${colors[color]} ${sizes[size]} ${weights[weight]} ${aligns[align]} ${leadings[leading]}`}>
            {children}
        </div>
    )
}


Text.defaultProps = {

};
  