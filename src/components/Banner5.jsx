import React from 'react'
import img1 from '../assets/coinbase.png'
import img2 from '../assets/spotify.png'
import img3 from '../assets/slack.png'
import img4 from '../assets/drop.png'
import img5 from '../assets/web.png'
import img6 from '../assets/zoom.png'

const Banner5 = () => {
  return (
    <div className='md:flex py-20 px-28 items-center justify-between'>
        <img src={img1} className='h-[40px] my-8'/>
        <img src={img2} className='h-[40px] my-8'/>
        <img src={img3} className='h-[40px] my-8'/>
        <img src={img4} className='h-[40px] my-8'/>
        <img src={img5} className='h-[40px] my-8 '/>
        <img src={img6} className='h-[40px] my-8'/>
    </div>
  )
}

export default Banner5