import React from 'react'
import img from '../assets/clients.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Clients = () => {
  return (
    <div className='flex flex-col gap-8 py-16 md:mt-8'>
        <div className='font-bold text-2xl md:text-4xl text-center'>Our Happy Client</div>
        <div className='text-center text-xl text-slate-500 px-8 md:px-80'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</div>
        <img src={img} alt='clients'/>
        <div className='flex gap-4 items-center justify-center text-xl text-blue-950 cursor-pointer'>
            <div>Show more</div>
            <FaArrowRightLong/>
        </div>
    </div>
  )
}

export default Clients