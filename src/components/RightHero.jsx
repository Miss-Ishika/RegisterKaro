import React from 'react'
import img from '../assets/img.png'

const RightHero = () => {
  return (
    <div className="h-[350px] w-[350px] my-16 md:mt-48 mx-auto md:ml-8 md:mr-[-10px] md:h-[400px] md:w-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}>
        
    </div>
  )
}

export default RightHero