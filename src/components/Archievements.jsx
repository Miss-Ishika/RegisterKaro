import React from 'react'

const data = [
    {
        archi: "1M+",
        desc: "CUSTOMERS"
    },
    {
        archi: "12+",
        desc: "YEARS OF EXCELLENCE"
    },
    {
        archi: "41+",
        desc: "R&D ENGINEERS"
    },
    {
        archi: "78+",
        desc: "CONTRIES"
    },
    {
        archi: "3287+",
        desc: "PARTENERS"
    },
    {
        archi: "41+",
        desc: "AWARDS RECEIVED"
    }
]

const Archievements = () => {
  return (
    <div className='flex flex-col gap-6 items-center py-16 md:px-24'>
          <div className='font-semibold text-yellow-500 '>WHY REGISTER KARO</div>
          <div className='font-bold text-4xl text-center'>Some Numbers are important</div>
          <div className='md:w-full grid grid-cols-2 gap-y-8 md:flex gap-4 md:gap-6 justify-between md:p-8'>
          {data.map((item) => (
            <div className='flex flex-col items-center gap-2'>
                <div className='font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-500  to-blue-950'>{item.archi}</div>
                <div className='font-semibold'>{item.desc}</div>
            </div>
          ))}
          </div>
          
    </div>
  )

}

export default Archievements