import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Header from './Header'

function Contact() {
  return (
    <div>
        <div className="h-72 flex flex-row justify-center text-center">
            <div className="flex flex-col pt-8 items-center space-y-6 font-mono">
                <h1 className="tracking-[14px] text-ill font-bold font-mono text-2xl">
                    contact
                </h1>
                <h1 className="text-ultimate text-xl">
                    denriquez8@gatech.edu || denriquez599@gmail.com
                </h1>
                <h1 className="text-ultimate text-xl pr-6">
                    (678)-580-9710
                </h1>
                <div className="flex flex-row space-x-6">
                    <SocialIcon className="hover:scale-125" bgColor="#F5DF4D" url="https://www.linkedin.com/in/-davidenriquez/"/>
                    <SocialIcon className="hover:scale-125" bgColor="#F5DF4D" url="mailto:denriquez599@gmail.com"/>
                    <SocialIcon className="hover:scale-125" bgColor="#F5DF4D" url="https://github.com/denriquez599"/>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact