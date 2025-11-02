'use client'

import React from "react"
import ProjectCard from "./ProjectCard";

import { FaCloudSunRain } from "react-icons/fa6";
import { GiCardRandom } from "react-icons/gi";
import { GiConwayLifeGlider } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";



const Projects = () => {

  const defaultSize = 100

  return (
    <div className="flex flex-col justify-around items-center w-[100%] border-b-8 border-gray-300 border-dashed pb-10 space-y-10">
      <h1 className="text-4xl font-bold">
        MY PROJECTS
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 px-10">
        <ProjectCard label="Nimbus Weather" icon = {FaCloudSunRain} iconColor="#4d65b4" iconSize={defaultSize} github="aaa"/>
        <ProjectCard label={"Memory Card Game"} icon = {GiCardRandom} iconColor="#a884f3" iconSize={defaultSize} github="https://github.com/Pr0jector23/match-game-100" demo="https://pr0jector23.github.io/match-game-100/"/>
        <ProjectCard label="Conway's Game of Life" icon = {GiConwayLifeGlider} iconColor="#4487b9" iconSize={defaultSize} github="https://github.com/Pr0jector23/game-of-life" demo="https://pr0jector23.github.io/game-of-life/"/>
        <ProjectCard label={"Current Porfolio"} icon = {FaAddressCard} iconColor="#239063" iconSize={defaultSize} github="https://github.com/Pr0jector23/portfolio" demo="https://pr0jector23.github.io/portfolio/"/>
      </div>
    </div>
  )
};

export default Projects;
