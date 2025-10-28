import React from "react"
import SkillCard from "./SkillCards";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col justify-around items-center w-[100%] border-b-8 border-gray-300 border-dashed pb-10 space-y-10">
      <h1 className="text-4xl font-bold">
        SKILLS!
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-10 gap-5 ">
        <SkillCard label="HTML" icon = {FaHtml5} iconColor="#e34c26" iconSize={100}/>
        <SkillCard label="CSS"  icon = {FaCss3Alt} iconColor="#264de4" iconSize={100}/>
        <SkillCard label="JS"   icon = {FaJs} iconColor="#f7df1e" iconSize={100}/>
        <SkillCard label="React"icon = {FaReact} iconColor="#61dbfb" iconSize={100}/>
        <SkillCard label="Sass"icon = {FaSass} iconColor="#cc6699" iconSize={100}/> 
        <SkillCard label="Node.JS"icon = {FaNodeJs} iconColor="#68A063" iconSize={100}/>
        <SkillCard label="Tailwind"icon = {RiTailwindCssFill} iconColor="#06b6d4" iconSize={100}/>
        <SkillCard label="Next.JS"icon = {RiNextjsFill} iconColor="#171717" iconSize={100}/>
        <SkillCard label="Godot"icon = {SiGodotengine} iconColor="#4487b9" iconSize={100}/>
        <SkillCard label="Unity"icon = {FaUnity} iconColor="#171717" iconSize={100}/>
      </div>
    </div>
  )
};

export default Skills;
