'use client'

import React from "react"
import Profile from "./Profile";
import Skills from "./Skills";
import Soft from "./Soft";
import Projects from "./Projects";

const SideDiv = <div className="bg-gradient-to-r from-emerald-700 via-indigo-400 to-emerald-700  md:w-[15%] w-[2.5%] h-screen">
                </div>
const SideColumn = <div className="bg-[#100f24] md:w-[15%] w-[5%] md:h-[300vh] h-[520vh]">
                    <div className="bg-[url(../public/img/column_blue.png)] bg-center bg-repeat-y w-full md:h-[300vh] h-[520vh]"></div> {/*h-[200vh] is so it infiniitely extends down */}
                  </div>
//const SideColumnOnly = <div className="bg-[url(/public/img/column_blue.png)] bg-center bg-repeat-y w-[15%] h-screen"></div>
const MainContainer = () => {
  return (
    <div className="flex w-full min-h-screen">
        {SideColumn}
        <div className="bg-white md:w-[70%] w-[90%] flex flex-col justify-start items-center space-y-10 pb-20">
            <Profile />
            <Skills />
            <Soft />
            <Projects />
        </div>
        {SideColumn}
    </div>
  )
};

export default MainContainer;