import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, useScroll } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Projects from "./Projects";

type Props = {}

export default function Header({}: Props) {
    const [text, count] = useTypewriter({
        words: ["David Enriquez",
            "Georgia Tech",
            "Computer Science"],
        loop: true,
        delaySpeed: 1000,
    });

    
  return (
    <header
    className="sticky w-screen top-0 flex items-start justify-between max-w-6xl mx-auto xl:items-center py-3 font-mono z-0">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: .5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            
        }}
        className="cursor-pointer flex flex-row items-center text-me space-x-14 text-ultimate">
            <Link href={"#about"}>
                <button className="hover:text-ill hover:scale-105">about</button>
            </Link>
            <Link href={"#experience"}>
                <button className="hover:text-ill hover:scale-105">experience</button>
            </Link>
            <Link href={"#skills"}>
                <button className="hover:text-ill hover:scale-105">skills</button>
            </Link>
            
        </motion.div>
        <div className="flex flex-row items-center text-2xl space-x-14 mx- px-20 text-left">
            <Link href={"#hero"}>
                <button className='text-ultimate font-bold'>david enriquez</button>
            </Link>
        </div>

        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: .5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            
        }}
        className="cursor-pointer flex flex-row items-center text-me space-x-14 mx- text-ultimate">
            {/* Information Headers */}
            <Link href="../BookLog">
                <button className="hover:text-ill hover:scale-105">projects</button>
            </Link>
            <Link href="/resume.pdf">
                <button className="hover:text-ill hover:scale-105">resume</button>
            </Link>
            <Link href={"#contact"}>
                <button className="hover:text-ill hover:scale-105">contact</button>
            </Link>
            
        </motion.div>
        
        
    </header>
  );
}
