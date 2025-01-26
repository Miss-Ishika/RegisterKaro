import React from 'react'
import { SiGoogleforms } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const data = [
    {
        icon: SiGoogleforms,
        color: '#EB5757',
        desc: 'Fill up Application Form'
    },
    {
        icon: MdPayments,
        color: '#27AE60',
        desc: 'Make Online Payment'
    },
    {
        icon: BsPersonWorkspace,
        color: '#F2994A',
        desc: 'Executive will Process Application'
    },
    {
        icon: MdOutlineMarkEmailRead,
        color: '#828282',
        desc: 'Get Confirm Mail'
    }
]

const Banner3 = () => {
  return (
    <div className='md:flex justify-between items-center bg-[#FFA229] py-8 px-8 md:py-16 md:px-16 my-8'>
        {
            data.map((item) => (
                <div className='flex gap-4 items-center my-8 md:my-0'>
                    <div className=' h-16 w-16 flex items-center justify-center rounded-full' style={{background: item.color}}><item.icon className="text-4xl text-white" /></div>
                    <div className='text-xl font-semibold text-[#000000]'>{item.desc}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Banner3