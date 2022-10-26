import { useEffect, useState } from "react";
import RankDataServices from "../../services/RankData.services";

export const Badge = ({color, children}) => {
    return <div className={`text-xs text-white font-semibold px-3 py-0.5 rounded-full w-fit ${color ? color : 'bg-gray-500'}`}>{children}</div>;
}

export const BadgeRankUser = (id) => {

    const [ rank, setRank ] = useState({
        color: '#6b7280'
    })

    useEffect(()=> {
        RankDataServices.getRank(id.id, {setRank})
    }, [])



    return <div className={`text-xs text-white font-semibold px-3 py-0.5 rounded-full w-fit`} style={{backgroundColor: rank.color ? rank.color : '#6b7280'}}>{rank.name}</div>;
}

export const BadgeRank = ({rank}) => {
    return <div className={`text-xs text-white font-semibold px-3 py-0.5 rounded-full w-fit`} style={{backgroundColor: rank.color ? rank.color : '#6b7280'}}>{rank.name}</div>;
}