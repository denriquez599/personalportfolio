import React from 'react'
import { urlfor } from '../sanity';
import { Skill } from '../typings'

type Props = {
    skill: Skill;
}
function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <img
        src={urlfor(skill?.image).url()}
        className="rounded-full  object-cover w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale group-hover:scale-110"
        />
        <div className="absolute opacity-0 group-hover:opacity-70 group-hover:bg-white h-24 
        group-hover:scale-110 w-24 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className=" font-bold text-lg text-black opacity-100 font-mono">
              {skill.title}
            </p>
          </div>
        </div>
    </div>
    
  )
}

export default Skill;