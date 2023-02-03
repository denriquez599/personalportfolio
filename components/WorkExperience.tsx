import React from 'react'
import Experience from './Experience'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from 'next/link';
import { Experience as Experiency } from '../typings';

type Props = {
  experiences: Experiency[];
}

const WorkExperience = ({experiences}: Props) => {
  return (
    <div className="flex flex-col h-screen text-center justify-evenly items-center">
        <h3 className="lowercase font-bold tracking-[10px] text-ill text-2xl space-x-14 pl-4 pt-16">
            Experience
        </h3> 
        <div className="w-full flex space-x-5 scrollbar-hide overflow-x-scroll p-10 snap-x snap-mandatory">
            {experiences?.map(experience => (
              <Experience key={experience._id} experience={experience} />
            ))}
        </div>
    </div>
  )
}

export default WorkExperience