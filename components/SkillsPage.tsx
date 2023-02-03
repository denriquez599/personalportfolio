import React from 'react'
import { urlfor } from '../sanity'
import { Skill as SkillType} from '../typings'
import Skill from './Skill'
import { motion, useScroll } from "framer-motion";


type Props = {
    skills: SkillType[]
}

function SkillsPage({ skills }: Props) {
  return (
    <div>
      <div className="bg-gradient-to-b from-[rgb(36,36,36)] to-ultimate w-screen h-16"/>
      <div className="flex relative h-screen flex-col text-center md:text-left xl:flex-rowmax-w-[2000px]
          xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
         <h3 className="top-2 absolute text-center lowercase font-bold tracking-[20px] text-ill text-2xl">
              Skills
         </h3>
         
        <div className="absolute scale-150 -rotate-3 -translate-x-52">
          <img
            src="/computerline.png"
          />
        </div>
        
          <motion.div 
          initial={{ opacity: 0 }}
          transition={{ duration: 2}}
          whileInView={{ opacity: 1}}
          viewport={{once: true}}
          className="grid grid-cols-4 gap-5 scale-75 rotate-6 -skew-x-12  translate-x-2 -translate-y-20 z-0">
            {skills?.map(skill => (
             <Skill key={skill._id} skill={skill} />
           ))}
          </motion.div>
        </div> 
    </div>
  
  )
}

export default SkillsPage