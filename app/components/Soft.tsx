import React from "react"
import SoftCard from "./SoftCard";
import { GiTeamIdea } from "react-icons/gi";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaMagic } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
import { SiUndertale } from "react-icons/si";
import { IoExtensionPuzzle } from "react-icons/io5";

const Soft = () => {
  return (
    <div className="flex flex-col justify-around items-center w-[100%] border-b-8 border-gray-300 border-dashed pb-10 space-y-10">
      <h1 className="text-4xl font-bold">
        SOFT SKILLS!
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 px-10">
        <SoftCard label="Great at teamwork" icon = {GiTeamIdea} iconColor="#4d65b4" iconSize={50}/>
        <SoftCard label={"Attention to \n design details"} icon = {SiMaterialdesignicons} iconColor="#171717" iconSize={50}/>
        <SoftCard label="Creative problem-solving" icon = {FaMagic} iconColor="#a884f3" iconSize={50}/>
        <SoftCard label={"Adaptability to \n new technologies"} icon = {IoExtensionPuzzle} iconColor="#f9c22b" iconSize={50}/>
        <SoftCard label="Continuous learning" icon = {FaBookAtlas} iconColor="#239063" iconSize={50}/>
        <SoftCard label="Determination" icon = {SiUndertale} iconColor="#e83b3b" iconSize={50}/>
      </div>
    </div>
  )
};

export default Soft;
