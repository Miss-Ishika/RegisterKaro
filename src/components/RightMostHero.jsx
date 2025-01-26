import React from 'react'

const RightMostHero = () => {
  return (
    <div className='relative'>
        <ul className='flex flex-col gap-12 mt-16'>
          <li className='border-2 md:border-r-0 text-lg py-4 mx-8 md:mx-0 md:py-2 md:px-[10px] font-semibold md:rounded-l-xl shadow-xl flex justify-center items-center'>Annual Compliance</li>
          <li className='border-2 md:border-r-0 text-lg py-4 mx-8 md:mx-0 md:py-2 md:px-[10px] font-semibold md:rounded-l-xl shadow-xl flex justify-center items-center'>Payroll Services</li>
          <li className='border-2 md:border-r-0 text-lg py-4 mx-8 md:mx-0 md:py-2 md:px-[10px] font-semibold md:rounded-l-xl shadow-xl flex justify-center items-center'>Comapny Formation</li>
          <li className='border-2 md:border-r-0 text-lg py-4 mx-8 md:mx-0 md:py-2 md:px-[10px] font-semibold md:rounded-l-xl shadow-xl flex justify-center items-center'>Annual Compliance</li>
        </ul>
    </div>
  )
}

export default RightMostHero