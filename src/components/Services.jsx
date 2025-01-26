import React from 'react'
import Grid from './Grid'

const Services = () => {
  return (
    <div className='flex flex-col gap-4 items-center bg-yellow-50 py-8 md:py-16 md:px-32'>
        <div className='font-bold text-yellow-500'>WELCOME TO REGISTERKARO.IN</div>
        <div className='font-bold text-4xl'>Explore Our Services</div>
        <div><Grid/></div>
        <button className='bg-[#063561] h-[46px] w-[157px] rounded-sm font-semibold text-white text-lg'>See All Services</button>
    </div>
  )
}

export default Services