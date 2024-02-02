import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from 'next/image';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["World!",
            "Georgia Tech!",
            "Community!",
            "Recruiters!",
            "Employers!",
            "World!"],
        loop: 1,
        delaySpeed: 2000,
    });
    const [text2, count2] = useTypewriter({
        words: ["","student","colleague","young worker","software engineer","person"],
        loop: 1,
        delaySpeed: 2000,
    });
    const [text3, count3] = useTypewriter({
        words: ["","learn.","network.","intern.","develop.","create."],
        loop: 1,
        delaySpeed: 2000,
    });

  return (

    <div className="h-screen py-14 font-mono text-white pt-24 z-0">
        <div className="flex flex-col pl-14">
            <h1 className='text-7xl'> 
                <span>Hello, </span>
                <span>{text}</span>
                <Cursor cursorColor='#f2e651'/>
            </h1>
            {/* Resize starting at smallest size */}
            <h2 className="text-5xl">
                <p className="py-10">My name is David Enriquez.</p>
                <span className="pb-6">I am a {text2}</span>
                <Cursor cursorColor='#f2e651'/>
                <p></p>
                <span>looking to {text3}</span>
                <Cursor cursorColor='#f2e651'/>
            </h2>
            
        </div>
        <div className='flex flex-row-reverse'>
            <h1>
                <img
                className="rounded-full h-1/2 mx-auto hover:scale-105 border-4 border-ill"
                src="/profilebw.jpg"
                />
            </h1>
            
        </div>
    </div>
  );
}

