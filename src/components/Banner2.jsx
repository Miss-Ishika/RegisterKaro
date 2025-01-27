import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import photo from '../assets/grouPhoto.jfif'

const Banner2 = () => {
  return (
    <div className='w-full md:flex gap-0 my-8'>
        <div className='w-full md:w-1/2 flex flex-col gap-4 my-4 px-0 md:ml-24 md:mr-16'>
            <div className='font-semibold text-[#FFA229] text-center md:text-left'>WELCOME TO REGISTERKARO.IN</div>
            <div className='text-4xl font-bold text-[#272D37] text-center md:text-left'>About <span className='text-[#FFA229]'>Register Karo</span></div>
            <div className='text-[#0D1216] text-[16px] font-semibold'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. 
                <br/><br/>
                I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
            </div>
            <button className='bg-[#063561] h-[46px] w-[157px] rounded-sm font-semibold text-white text-lg flex items-center gap-2 justify-center'>Learn More <FaArrowAltCircleRight/></button>
        </div>

        <div className='w-full h-[340px] md:w-1/2 md:h-[355px] my-4  relative'>
            <div className='hidden md:block h-[400px] w-[400px] rounded-full absolute right-[-350px] bg-[#FFA229]'></div>
            <div className='hidden md:block'>
            <div className='text-6xl text-[#FFA229] flex flex-col gap-[-40px] absolute right-0 bottom-0 z-0'>
                <div>::::::::::::::::::</div>
                <div>::::::::::::::::::</div>
                <div>::::::::::::::::::</div>
            </div>
            </div>
            <div className='w-[380px] md:w-[580px] h-[200px] bg-[#FFA229] rounded-xl absolute bottom-0 md:ml-0 ml-4'></div>
            <img src={photo} alt='photo' className='w-[580px] h-[350px] rounded-3xl md:rounded-xl z-10 relative p-4 md:p-0'/>
        </div>
    </div>
  )
}

export default Banner2