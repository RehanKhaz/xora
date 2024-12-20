'use client'
import React ,{ useEffect, useState} from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Loading from './components/Loading'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Downloads from './sections/Downloads'
import Footer from './sections/Footer'
import Logos from './components/Logos'

const Page = () => {
  const [isloading,setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setInterval(()=> {
      setIsLoading(false)
    },2000)
  
    return () => clearInterval(timer)
  }, [isloading])
  
  return (
    isloading ? 
    <>
    <Loading /> 
    </> :
    <div className='overflow-x-hidden min-h-screen w-dvw'>
         <Header />
         <Hero />
         <Features/>
         <Pricing />
         <Faq/>
         <Testimonials/>
         <Downloads />
         <Logos />
         <Footer/>
    </div>
  )
}

export default Page