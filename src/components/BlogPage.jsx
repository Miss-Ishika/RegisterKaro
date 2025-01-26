import React from 'react'
import Blogs from './Blogs'
import { FaArrowRightLong } from "react-icons/fa6";

const BlogPage = () => {
  return (
    <div className='flex flex-col gap-4 items-center py-8 md:py-16 md:px-32'>
      <div className='font-semibold text-yellow-500'>EXPLORE OUR BLOGS</div>
      <div className='font-bold text-4xl text-center'>Accelerate Digital Transformation</div>
      <Blogs/>
      <button className='bg-[#063561] h-[46px] w-[180px] rounded-sm font-semibold text-white text-md flex items-center gap-2 justify-center'>Show More Blogs <FaArrowRightLong /></button>
    </div>
  )
}

export default BlogPage
