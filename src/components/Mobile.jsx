import React from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import img from '../assets/phone.png'
import img1 from '../assets/phone1.png'

const Mobile = () => {
  return (
    <div className='flex bg-gradient-to-l from-[#133d66] via-[#1C4670] to-[#1C4670] py-12 px-8 text-white'>
        <div className='md:w-1/2 flex flex-col gap-8 md:px-24 md:py-8'>
            <span className='font-bold text-4xl'>Manage Your Services by your Mobile Phone</span>
            <span className='text-lg text-gray-400'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </span>
            <div className='flex flex-col gap-4 mt-8'>
                <span className='font-semibold text-lg'>Get the App</span>
                <div className='flex gap-4 text-black'>
                    <div className='flex gap-4 items-center bg-white py-2 px-4 rounded-lg'>
                        <FaApple className='text-4xl text-[#A5C937]'/>
                        <div className='flex flex-col '>
                            <span className='text-sm'>Get it on</span>
                            <span className='font-bold'>App Store</span>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-white py-2 px-4 rounded-lg'>
                        <FaGooglePlay className='text-4xl text-[#A5C937]'/>
                        <div className='flex flex-col '>
                            <span className='text-sm'>Get it on</span>
                            <span className='font-bold'>Google Play</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:w-1/2 relative'>
            <img src={img} className='absolute top-[-15px] overflow-hidden right-20'/>
            <img src={img1} className='absolute top-[186px] overflow-hidden right-[450px]'/>
        </div>
    </div>
  )
}

export default Mobile