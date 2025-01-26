import React from 'react'
// import grid from './data.js'

import { TbSettingsCode } from "react-icons/tb";
import { MdOutlineImageSearch } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { LuBoxes } from "react-icons/lu";
import { RiShoppingCartFill } from "react-icons/ri";
import { TbSpeakerphone } from "react-icons/tb";
import { IoCaretDownCircleOutline } from "react-icons/io5";


const grid = [
    {
        icon: TbSettingsCode,
        heading: "Computer Formation",
        desc: "Build web-based solution that enhance customer experience.",
        side: 1
    },
    {
        icon: MdOutlineImageSearch,
        heading: "Company Secretarial Services",
        desc: "Make data-driven decision and utilize technology to reach business goals.",
        side: 2
    },
    {
        icon: FaPeopleRoof,
        heading: "Vitual Office Address",
        desc: "Foster customer relationships by effective serving your market.",
        side: 0
    },
    {
        icon: LuBoxes,
        heading: "Annual Compliance Services",
        desc: "Turrn your ideas into modern products with our design ecperts.",
        side: 1
    },
    {
        icon: RiShoppingCartFill,
        heading: "Payroll Services",
        desc: "Expand your business across the glob with minimum effort",
        side: 2
    },
    {
        icon: TbSpeakerphone,
        heading: "Bookkeeping Services",
        desc: "Steering user behaviours with creative design, data insights & technology.",
        side: 0
    }
];

const Grid = () => {

  return (
    <div className='flex flex-col md:grid grid-cols-3 grid-rows-2 gap-4'>
        {
            grid.map((item) => (
            <div className='flex gap-8'>
                <div className='flex flex-col gap-4 items-center my-8 px-4 md:px-12 '>
                <item.icon className='w-[60px] h-[50px] text-yellow-500' />
                    
                <span className='font-bold text-xl text-black'>{item.heading}</span>
                <p className='text-slate-500 font-semibold text-center'>{item.desc}</p>
                <div className='flex items-center gap-2 font-semibold'>Learn more <IoCaretDownCircleOutline/></div>
                </div>
                <div className='hidden md:block'>
                
                {
                    item.side === 1 && <div className='h-[200px] w-[2px] rounded-xl bg-slate-300 mt-16 relative'>
                        <div className='h-[16px] w-[4px] bg-red-500 absolute top-10 left-[-1px]'></div>
                    </div>
                }

                {
                    item.side === 2 && <div className='h-[200px] w-[2px] rounded-xl bg-slate-300 mt-16 relative'>
                        <div className='h-[16px] w-[4px] bg-red-500 absolute bottom-10 left-[-1px]'></div>
                    </div>
                }
                </div>
            </div>
                
            ))
        }
    </div>
  )
}

export default Grid