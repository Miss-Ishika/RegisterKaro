import React from 'react'
import { IoIosStar } from "react-icons/io";
import starts from '../assets/starts.png'
import data from './data.js'
import { BsFillPlayCircleFill } from "react-icons/bs";

const LeftHero = () => {
  return (
    <div className='flex flex-col gap-6 px-8 md:pl-24 md:pr-2 pt-16'>
        <div className='flex gap-2'>
            <IoIosStar className='text-2xl text-yellow-500'/>
            <span className='font-semibold font-sans'>Google Rating</span>
            <img src={starts} alt='starts' className='w-[100px]'/>
        </div>

        <span className='text-4xl md:text-6xl font-semibold text-black-600-500'>Your trusted partner <br/> for compliance business needs</span>
        <hr className='w-[50px] h-[2px] bg-[#e40e0e]'/>

        <span className='text-2xl text-[#636262]'>An online business compliance platform that helps entrepreneurs and <br/> other individuals with various, <span className='font-semibold'>registrations</span>, <span className='font-semibold'>tax filings</span>, and other <span className='font-semibold'>legal</span> <br/> <span className='font-semibold'>matters</span>.</span>

        <div className='md:flex md:gap-8'>
          {data.map((item) => (
            <div className='flex gap-4'>
              <img src={item.icon} className='w-[60px] h-[50px]'/>
              <div className='flex flex-col gap-2 text-'>
                <span className='font-bold text-4xl bg-gradient-to-br from-yellow-500  to-blue-900 text-transparent bg-clip-text'>{item.archieve}</span>
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='flex gap-8'>
          <button className='bg-[#093156] h-[46px] w-[157px] rounded-sm font-semibold text-white text-lg'>Talk An Expert</button>
          <button className='flex gap-2 items-center font-bold text-lg'><BsFillPlayCircleFill className='text-2xl text-red-600'/>See how it works</button>
        </div>
        
    </div>
  )
}

export default LeftHero