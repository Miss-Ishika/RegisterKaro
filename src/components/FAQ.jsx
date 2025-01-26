import React from 'react'
import Queries from './Queries'
import { FaArrowRightLong } from "react-icons/fa6";


const FAQ = () => {
    return (
        <div className='flex flex-col gap-6 items-center py-8 md:py-16 md:px-24'>
          <div className='font-semibold text-yellow-500 '>FAQ</div>
          <div className='font-bold text-4xl text-center'>Frequently Asked Questions</div>
          <Queries />
          <button className='bg-[#063561] h-[46px] w-[180px] rounded-sm font-semibold text-white text-md flex items-center gap-2 justify-center'>Show More <FaArrowRightLong /></button>
        </div>
      )
}

export default FAQ