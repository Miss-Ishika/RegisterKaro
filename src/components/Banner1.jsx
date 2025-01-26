import React from 'react'
import monday from '../assets/monday.png'
import morpheus from '../assets/morpheus.png'
import samsung from '../assets/samsung.png'
import oracle from '../assets/oracle.png'
import segment from '../assets/segment.png'

const Banner1 = () => {
  return (
    <div className='flex flex-col gap-8 items-center my-24'>
        <div className='text-center font-bold text-2xl'>Trsuted By Over 100+ Startups and freelance business</div>
        <div className='md:flex gap-16'> 
            <img src={oracle} alt='oracle' className='h-[60px]'/>
            <img src={morpheus} alt='morpheus' className='h-[40px] mt-[10px]'/>
            <img src={morpheus} alt='morpheus' className='h-[40px] mt-[10px]'/>
            <img src={samsung} alt='samsung' className='h-[130px] mt-[-35px]'/>
            <img src={monday} alt='monday' className='h-[50px]'/>
            <img src={segment}  alt='segment' className='h-[30px] mt-[10px]'/>
        </div>
    </div>
  )
}

export default Banner1