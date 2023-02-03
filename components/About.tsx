import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <div className="flex flex-col h-screen text-center justify-center items-center">
        <img className="h-5/6 -translate-x-40 translate-y-4" src="/guitarnobg.png"/>
      </div>

      <div className="flex flex-col h-screen text-center max-w-lg max-h-80 items-center">
        <h3 className="lowercase relative -translate-x-96 pr-40 bottom-44 font-bold tracking-[20px] text-ill text-2xl pl-4">
          about
        </h3>
        <div className="font-mono -translate-x-52 text-left -translate-y-32">
          <h1 className="bg-ill text-xl">
          professional
          </h1>
          <h2 className="indent-12">
            I am a second year at the Georgia Institute of Technology pursuing my Bachelor of Science degree in Computer Science.
          </h2>
          <h2 className="indent-12">
            My academic interests are embedded in my threads and my personal ventures.
          </h2>
            <ul className="list-disc translate-x-12 list-inside">
              <li>Intelligence</li>
              <li>People</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Data Science</li>
              <li>Blockchain Technology</li>
            </ul>
        </div>
        <div className="font-mono -translate-x-52 -translate-y-20 text-left">
          <h1 className="bg-ill text-xl">
          personal
          </h1>
          <h2 className="indent-12">
            I did not have the early start to Computer Science that so many do, but originally wanted to work in Economics.
          </h2>
          <h2 className="indent-12">
            Learning new programming languages has helped me love the process of acquiring skills and start all the hobbies I enjoy now.
          </h2>
            <ul className="list-disc translate-x-12 list-inside">
              <li>Long-Distance Running and Tennis</li>
              <li>Jazz Guitar and Saxophone</li>
              <li>Reading</li>
              
            </ul>
        </div>
        
      </div>
        
    </div>
  )
}

export default About