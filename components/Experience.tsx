import React from 'react'
import { motion } from "framer-motion";
import { urlfor } from '../sanity';
import { Experience as Experiency } from "../typings";

type Props = {
  experience: Experiency;
};

export default function Experience({ experience }: Props) {
  return (
    <article className="flex flex-col bg-ultimate rounded-md max-w-64 font-mono items-center space-y-20 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img
    initial={{
        y: -100,
        opacity:0,
    }}
    transition={{ duration: 1.2}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{once: true}}
    className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
    src={urlfor(experience?.companyImage).url()}
    alt=""
    />
    <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex justify-center items-center space-x-2 my-2">
            { experience.technologies.map(technology => (
              <img 
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlfor(technology.image).url()}
              />
            ))}
        </div>
        <p>
          {new Date(experience.dateStarted).toDateString()} - {new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc text-left">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
        </ul>
    </div>
  </article>
  );
}

