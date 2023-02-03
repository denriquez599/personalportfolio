import { motion, MotionConfig } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


type Props = {}

function BookLog({}: Props) {
  return (
    <div className="bg-readingcream h-screen flex flex-row items-center justify-center">
        <motion.div
        initial={{
            x: -500,
            y:-350,
            opacity: 0,
            scale: .5
        }}
        animate={{
            x: -250,
            y:-350,
            opacity: 1,
            scale: 1
        }}
        transition={{
            
        }}>
        <Link href="/">
            <button className="font-mono top-0 ">back to portfolio</button>
        </Link>
        </motion.div>
        
        <img className="h-60 -translate-y-60" src="/readinglogcrop.png"/>

        <motion.div
        initial={{
            x: 500,
            y:-350,
            opacity: 0,
            scale: .5
        }}
        animate={{
            x: 250,
            y:-350,
            opacity: 1,
            scale: 1
        }}
        transition={{
            
        }}>
            <Link href="">
                <button className="font-mono ">next project</button>
            </Link>
        </motion.div>
        
    </div>
  )
}

export default BookLog