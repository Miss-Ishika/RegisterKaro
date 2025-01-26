import React from 'react'
import { RiLightbulbFill } from "react-icons/ri";
import { GiCandlebright } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

import laptop from '../assets/laptop.jpg'
const Video = () => {
  return (
    <div className='md:flex bg-[#1C4670] text-white'>
        <div className='md:w-1/2 flex flex-col gap-8 p-6 md:p-16 md:mx-16'>
            <div className='text-2xl font-bold text-center md:text-left'>Our Video Introduction</div>
            <div>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</div>
            <div className='flex gap-6 items-center'>
                <div className='border-2 h-12 w-28 md:w-12 rounded-full flex justify-center items-center bg-yellow-600 border-yellow-600'><RiLightbulbFill className='text-2xl'/></div>
                <div className='flex flex-col '>
                    <span className='text-2xl font-bold'>Explore ideas together</span>
                    <span>Engage audience segments and finally create actionable insights. Amplify vertical integration.</span>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <div className=' h-12 w-28 md:w-12 rounded-full flex justify-center items-center bg-yellow-600 border-yellow-600'><GiCandlebright className='text-2xl'/></div>
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold'>Bright those ideas to life</span>
                    <span>Engage audience segments and finally create actionable insights. Amplify vertical integration.</span>
                </div>
            </div>
            
        </div>

        <div className='w-1/2 relative hidden md:block'>
            {/* <div className='relative border-2'> */}
                <img src={laptop} className='w-[640px] h-[420px] p-16 absolute left-[30px] top-[30px] z-0 '/>
                <div className='w-[515px] h-[293px] p-16 absolute left-[94px] top-[94px] z-10 opacity-60 bg-gradient-to-b from-[#0c0e10] to-[#063561]'></div>
                <FaYoutube className='text-red-600 absolute top-[220px] left-[340px] right-[200px]  text-4xl z-10'/>
            {/* </div> */}
        </div>
        <div className='relative md:hidden p-8'>
            
                <img src={laptop} className='w-[350px] h-[200px] z-0'/>
                {/* <div className='z-10 opacity-60 bg-gradient-to-b from-[#0c0e10] to-[#063561]'></div> */}
                <FaYoutube className='text-red-600 absolute top-[120px] left-[200px] text-4xl z-10'/>
            
        </div>
    </div>
  )
}

export default Video