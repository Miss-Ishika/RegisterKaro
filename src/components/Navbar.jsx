import React from 'react'
import logo from '../assets/logo.png'
import { FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <div className='flex items-center justify-between py-1 px-16 border-2'>
          <div><img src={logo}/></div>
             <div className='flex items-center gap-8 text-md'>
            <ul className='flex items-center gap-8 font-semibold'>
                <li>Home</li>
                <li className='flex gap-2 items-center'>Our Services <FaAngleDown/></li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
            <FiSearch className='text-2xl text-slate-600'/>
            <button className='bg-[#FFA229] h-[46px] w-[157px] rounded-[4px] font-semibold text-white text-lg'>Talk Expert</button>
         </div>
        </div>
      </div>

      <div className='md:hidden h-[40px] opacity-0.5 bg-slate-500 items-center flex justify-between px-4'>
        <GiHamburgerMenu className='text-4xl text-white pt-1'/>
        <button className='bg-[#FFA229] h-[30px] w-[80px] rounded-[4px] font-semibold text-white text-sm'>Talk Expert</button>
      </div>
    </div>
    
    
  )
}

export default Navbar