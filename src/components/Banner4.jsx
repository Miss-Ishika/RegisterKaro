import React from 'react'
import { SiTicktick } from "react-icons/si";


const data = [
    "Instant", "User-friendly interface", "Personalized customization"
]

const Banner4 = () => {
  return (
    <div className='flex flex-col gap-2 items-center bg-gradient-to-r from-[#FFA229]  to-[#1C4670] py-12 px-8 text-white'>
        <span className='font-semibold'>1% OF THE INDUSTRY</span>
        <span className='font-bold text-4xl'>Welcome to your new digital reality.</span>
        <div className='flex my-8'>
            <div><input placeholder='Enter your Email' className='p-2 w-[200px] md:w-[400px] rounded-l-md'/></div>
            <div><button className='bg-[#FFA229] h-[40px] w-[80px] md:h-[40px] md:w-[100px] rounded-r-md font-semibold text-white text-lg'>Submit</button></div>
        </div>
        <div className='md:flex gap-10 font-semibold text-lg'>
        {
            data.map((item) => (<div className='flex gap-4 justify-center items-center'>
            <SiTicktick/>
            <div>{item}</div>
            </div>))
        }
        </div>
        
    </div>
  )
}

export default Banner4