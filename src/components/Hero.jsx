import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'
import RightMostHero from './RightMostHero'

const Hero = () => {
  return (
    <div className=''>
      <div className='md:h-[600px] gap-2 md:flex bg-gradient-to-br from-yellow-100 via-white to-blue-100 '>
        <LeftHero />
        <RightHero />
        <RightMostHero />
    </div>
    </div>
    
  )
}

export default Hero