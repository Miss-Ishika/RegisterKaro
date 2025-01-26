import React from 'react'
import { FaSmile } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

const data = [
    {
        icon: FaShieldAlt,
        iconColor: '#F45C20',
        bgColor: '#FEF3EF',
        head: 'Confidential',
        desc: 'All your private instruction is safe with us'
    },
    {
        icon: SiTicktick,
        iconColor: '#3DCD5C',
        bgColor: '#F1FBF3',
        head: 'No Hidden Fee',
        desc: 'Everything is put before you with no hidden charges or conditions'
    },
    {
        icon: GrUserManager,
        iconColor: '#D5414F',
        bgColor: '#FBF1FB',
        head: 'Expert CA/CS Assistance',
        desc: 'Prompt support from our in-house expert professions'
    },
    {
        icon: FaShieldAlt,
        iconColor: '#F45C20',
        bgColor: '#FEF3EF',
        head: 'Confidential & Safe',
        desc: 'All your private information is safe with us'
    }
]

const WhyRegisterKaro = () => {
  return (
    <div className='md:flex my-32 px-4 md:px-0 md:pl-8'>
        <div className='md:w-1/2 flex flex-col gap-16 md:gap-28'>
            <div className='flex flex-col gap-8 md:gap-4 md:ml-24'>
                <div className='font-semibold text-[#FFA229] text-center md:text-left'>WHY REGISTERKARO.IN</div>
                <div className='text-4xl font-bold text-[#272D37] text-center md:text-left'>Why Choose RegisterKaro</div>
                <div className='text-[#0D1216] text-[16px] font-semibold text-center md:text-left'>
                    It is with consistent services and results that build trust with the people and that in
                    turn help us to serve the business better.
                </div>
            </div>
            <div className='flex justify-center md:justify-end mb-8 md:mb-0'>
                <div className='w-[300px] h-[215px] bg-[#EDF3FF] border-2 border-slate-200 rounded-xl flex flex-col gap-4 items-center justify-center'>
                    <FaSmile className='text-4xl text-[#2F6AE1]'/>
                    <div className='text-xl font-semibold'>Guaranteed satisfaction</div>
                    <div className='text-sm text-gray-600 text-center px-8'>We ensure that you stay 100% satisfies with our offered services.</div>
                </div>
            </div>
        </div>

        <div className='flex flex-col md:grid grid-cols-2 gap-8 pl-8'>
            {
                data.map((item) => (
                    <div className='w-[300px] h-[215px] border-2 border-slate-200 rounded-xl flex flex-col gap-4 items-center justify-center' style={{background: item.bgColor}}>
                        <item.icon className="text-4xl" style={{ color: item.iconColor }} />
                        <div className='text-xl font-semibold text-[#000000]'>{item.head}</div>
                        <div className='text-sm text-gray-600 text-center px-8'>{item.desc}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhyRegisterKaro