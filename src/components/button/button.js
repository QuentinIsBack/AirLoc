import React from "react";

const themes = {
    black: {
        default: "rounded-md bg-stone-900 hover:bg-black text-white text-md",
    },
    night: {
        default: "rounded-md bg-gray-900 hover:bg-stone-900 text-white text-md",
    },
    red: {
        default: "rounded-md bg-red-500 hover:bg-red-700 text-white text-md",
    },
    green: {
        default: "rounded-md bg-green-600 hover:bg-green-700 text-white text-md",
    },
    white: {
        default: "rounded-md bg-white hover:bg-light-gray text-insane-gray text-md",
    },
    'white-outline': {
        default: "rounded-md bg-white border border-night hover:bg-gray-100/80 text-night text-md",
    },
    cyan: {
        default: "rounded-md bg-cyan-600 hover:bg-cyan-600/90 text-white text-md",
    },
};

const types = {
    large: {
        default: "py-2 px-6",
    },
    medium: {
        default: "py-3 px-6",
    },
    small: {
        default: "py-2 px-4",
    }
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

const sizes = {
    fit: {
        default: "w-fit h-fit",
    },
    full: {
        default: "w-full h-full",
    }
};

const borders = {
    none: {
        default: "",
    },
    black: {
        default: "ring-1 ring-gray-900",
    }
};


export const Button = ({  
    children,
    additionnal,
    onClick,
    theme,
    type,
    weight,
    size,
    border
}) => {
    return (
        <button className={`${additionnal} ${themes[theme].default} ${sizes[size].default} ${borders[border].default} ${types[type].default} ${weights[weight]}`} onClick={onClick} >
        {children}
      </button>
    )
}


Button.defaultProps = {
    theme: "black",
    type: "medium",
    border: "none",
    weight: "medium",
    size: "fit",
};
  