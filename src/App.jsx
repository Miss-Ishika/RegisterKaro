// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Archievements from './components/Archievements'
import Banner from './components/Banner'
import Banner1 from './components/Banner1'
import Banner2 from './components/Banner2'
import Banner3 from './components/Banner3'
import Banner4 from './components/Banner4'
import Banner5 from './components/Banner5'
import BlogPage from './components/BlogPage'
import Blogs from './components/Blogs'
import Clients from './components/Clients'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Mobile from './components/Mobile'
import Navbar from './components/Navbar'
import Queries from './components/Queries'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Video from './components/Video'
import WhyRegisterKaro from './components/WhyRegisterKaro'

function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Banner1 />
      <Services />
      <Banner2 />
      <WhyRegisterKaro/>
      <Video/>
      <Clients/>
      <Banner3 />
      <BlogPage />
      <Testimonial />
      <FAQ />
      <Mobile />
      <Archievements />
      <Banner4 />
      <Banner5 />
      <Footer />
    </>
      
  )
}

export default App
