import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const data = [
    {
        head: "START A BUSINESS",
        features: [
            "Features", "Solutions", "Integration", "Enterprise", "Solutions"
        ]
    },
    {
        head: "GOVERNMENT REGISTRATION",
        features: [
            "Partners", "Community", "Developers", "App", "Blog"
        ]
    },
    {
        head: "COMPLIANCE & TAX",
        features: [
            "Channels", "Scale", "Watch the Demo", "Our Competition"
        ]
    },
    {
        head: "BIS & CDSCO",
        features: [
            "About Us", "News", "Leadership", "Media Kit"
        ]
    }
]

const Footer = () => {
  return (
    <div className='bg-[#011B5B] text-white flex flex-col gap-2 py-8'>
        <div className='text-center p-8 md:text-left md:flex md:py-16 md:mx-24 md:justify-between '>
            <div className='mb-16 md:mb-0 md:w-1/4 flex flex-col gap-4'>
                <span className='text-lg'>Design outstanding interfaces with advanced Figma features in a matter of minutes.</span>
                <div className='justify-center md:justify-normal flex gap-4 text-2xl'>
                    <FaFacebook />
                    <FaGoogle />
                    <FaApple />
                    <FaInstagram />
                </div>
            </div>
            <div className='md:flex md:gap-28'>
                {
                    data.map((item) => (
                        <div className='my-16 md:my-0 flex flex-col gap-2 md:gap-6'>
                            <span className='text-lg text-[#FFA229]'>{item.head}</span>
                            <div className='flex flex-col gap-2 md:gap-4'>
                            {
                                item.features.map((fea) => (
                                    <span>{fea}</span>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-4 py-4'>
            <button className='w-12 h-12 rounded-full text-white bg-[#FFA229] flex items-center text-2xl justify-center'><FaArrowUp /></button>
            <span className='flex items-center gap-2 text-white'><FaRegCopyright/> 2024 Registerkaro. All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer