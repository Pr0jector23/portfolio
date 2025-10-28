import React from "react"
import { IconType } from 'react-icons';

interface SoftCardProps {
    label : string;
    icon? : IconType;
    iconColor?: string;
    iconSize?: number;
}

// icon : Icon is needed because JSX treats lowercase <icon/> as an html element and not a react component
const SoftCard = ({ label, icon : Icon, iconColor, iconSize } : SoftCardProps) => {
  return (
    <div className="bg-gray-100 shadow-md shadow-gray-400 w-80 h-20 rounded-2xl px-5
                        flex items-center">
       {Icon && <Icon color={iconColor} size={iconSize} className="min-w-[50px]"/>}
       <h1 className="text-xl font-bold ml-5" style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{label}</h1>
    </div>
  )
};

export default SoftCard;
