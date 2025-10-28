'use client'

import React from "react"
import { IconType } from 'react-icons';

interface SkillCardProps {
    label : string;
    icon? : IconType;
    iconColor?: string;
    iconSize?: number;
}

// icon : Icon is needed because JSX treats lowercase <icon/> as an html element and not a react component
const SkillCard = ({ label, icon : Icon, iconColor, iconSize } : SkillCardProps) => {
  return (
    <div className="bg-gray-100 shadow-md shadow-gray-400 w-30 h-40 rounded-2xl space-y-3
                        flex flex-col justify-center items-center">
       {Icon && <Icon color={iconColor} size={iconSize}/>}
       <h1 className="text-2xl font-bold">{label}</h1>
    </div>
  )
};

export default SkillCard;
