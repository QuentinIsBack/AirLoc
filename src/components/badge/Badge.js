export const Badge = ({color, children}) => {
    return <div className={`text-xs text-white font-semibold px-3 py-0.5 rounded-full w-fit ${color ? color : 'bg-gray-500'}`}>{children}</div>;
}

export const BadgeRank = ({rank}) => {
    return <div className={`text-xs text-white font-semibold px-3 py-0.5 rounded-full w-fit ${rank.color ? rank.color : 'bg-gray-500'}`}>{rank.name}</div>;
}