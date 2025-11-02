'use client'

import React from "react"
import { IconType } from 'react-icons';

import { FaGithub } from "react-icons/fa";
import { PiMonitorPlayFill } from "react-icons/pi";


interface ProjectCardProps {
    label : string;
    icon? : IconType;
    iconColor?: string;
    iconSize?: number;
    github?: string;
    demo?: string;
}

// icon : Icon is needed because JSX treats lowercase <icon/> as an html element and not a react component
const ProjectCard = ({ label, icon : Icon, iconColor, iconSize, github, demo } : ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-center space-y-7 bg-gray-100 shadow-md shadow-gray-400 w-80 h-70 rounded-2xl px-5">
      <div className="flex flex-col items-center">
        {Icon && <Icon color={iconColor} size={iconSize} className="min-w-[50px]"/>}
        <h1 className="text-2xl font-bold" style={{ whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{label}</h1>
      </div>
      <div className="flex justify-center items-center space-x-15">
        <a href={github} target="_blank"><FaGithub size={60} className="min-w-[50px] hover:-translate-y-1/6 duration-100 ease-in text-black hover:text-[#e34c26]"/></a>
        
        {demo && <a href={demo} target="_blank"><PiMonitorPlayFill size={70} className="min-w-[50px] hover:-translate-y-1/6 duration-100 ease-in text-[#4487b9] hover:text-[#a884f3]"/></a>}
      </div>
    </div>
  )
};

export default ProjectCard;
