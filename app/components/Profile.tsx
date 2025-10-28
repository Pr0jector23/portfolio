'use client'

import React from "react"
import { FaSquare } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const squares = <div className="flex text-gray-300 md:text-md text-sm"><FaSquare />  <FaSquare />  <FaSquare /></div>
const bubble = <div className="bg-radial from-indigo-400 from-30% to-emerald-700 
                    w-10 h-10 rounded-full"></div>

const Profile = () => {
  return (
    <div className="pb-10 flex md:flex-row flex-col justify-around items-center w-[100%] border-b-8 border-gray-300 border-dashed">
      <div 
        className="bg-radial from-indigo-400 from-40% to-emerald-700 
                    md:w-60 md:h-60 w-40 h-40 flex justify-center items-center rounded-full
                    shadow-gray-400 shadow-md overflow-clip mt-5">
        <img src="../img/axolotl.png" alt="pfp"/>
        <div className="absolute ">
          <div className="transform md:-translate-x-35 md:-translate-y-20 -translate-x-25 -translate-y-10">{bubble}</div>
          <div className="transform md:translate-x-35 md:translate-y-20 translate-x-25 translate-y-10">{bubble}</div>
        </div>
        
      </div>
      <div className="md:w-150 w-75 mt-5">
        <div className="bg-gray-100 w-full h-15 shadow-md shadow-gray-400 rounded-t-4xl border-b-8 border-gray-300
                        flex flex-row-reverse items-center justify-between md:px-8 px-4 pt-2">
            {squares}
            <div className="flex justify-between items-center text-3xl font-bold">
                <FaInfoCircle className="left-0 text-emerald-500 mr-5" size={35}/>
                <h1>About Me</h1>
            </div>
            
        </div>
        <div className="bg-gray-100 w-full shadow-md shadow-gray-400 rounded-b-4xl md:px-10 px-5 pb-10 py-5 space-y-5">
          <h1 className="text-4xl font-bold">Hi!</h1>
          <p className="text-2xl font-bold text-gray-600 flex items-center">• I am a frontend web developer with passion for design.</p>
          <p className="text-2xl font-bold text-gray-600 flex items-center">• I also develop video games and enjoy making art.</p>
        </div>
      </div>
    </div>
  )
};

export default Profile;
