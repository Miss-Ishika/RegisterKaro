import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Banner = () => {
  return (
    <div className='h-[44px] bg-[#1C4670] flex text-white text-lg md:text-2xl gap-4 md:gap-8 items-center justify-end px-4'>
        <div className='flex gap-2'>
            <div><MdEmail/></div>
            <div className='hidden md:block text-lg'>www.registerkaro.in</div>
        </div>
        <div className='bg-gradient-to-b from-[#1C4670] via-[white] to-[#1C4670] w-0.5 h-[44px]'></div>
        <div className='flex gap-2'>
            <div><FaPhone/></div>
            <div className='hidden md:block text-lg'>+918447746183</div>
        </div>
        <div className='bg-gradient-to-b from-[#1C4670] via-[white] to-[#1C4670] w-0.5 h-[44px]'></div>
        <div className='flex gap-4'>
            <div><FaInstagram/></div>
            <div><FaFacebook/></div>
            <div><FaTwitter/></div>
            <div><FaPinterest/></div>
        </div>
    </div>
  )
}

export default Banner