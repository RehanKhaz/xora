import React from 'react'
import { Marker } from '../components/Marker'
import { socials } from '@/app/constants'

const Footer = () => {
  return (
    <footer className='relative mt-[4em] max-md:mt-[23em] max-md:min-h-[60vh] h-screen  flex md:flex-row flex-col items-center max-md:gap-[2em] justify-center z-[100]'>
        <div className='absolute max-md:hidden top-1/2 left-1/2 size-[5em] rounded-full flex bg-black-100 items-center justify-center translate-x-[-50%] translate-y-[-50%]'>
            <img src="/images/faq-logo.svg" alt="" />
        </div>
    <section className='w-full md:w-1/2 bg-[#0A112E] max-md:mt-[30em] flex-1 h-full md:px-[6em] max-lg:p-[3em] py-[4.5em] '>
    <div className='flex flex-col  gap-[2em]'>
       {
        ['Features', 'Pricing', 'Faq', 'Downloads'].map((item,index) => {
            return <a href={`#${item.toLowerCase()}`} className='font-medium tracking-wider text-[1.8em] ' key={index}>{item}</a>
        })
       }
    </div>

    <div className=' flex md:hidden lg:flex max-lg:mt-[3em] mt-[5em] items-center justify-between'>
     <span className='text-xs tracking-wide font-medium'>
     © Copyright UI8, LLC.
     </span>
     <div className='flex text-xs tracking-wide font-medium text-white items-center gap-3'>
     <span>Privacy Policy</span>
     <div className='dot' />
     <span>Terms of Use</span>
     </div>
    </div>

    </section>
    <section className='md:w-1/2 w-full bg-[#1A2557] h-full flex-1  flex flex-col gap-[1.5em]   md:px-[5em] max-lg:p-[3em]  py-[5em] '>
     <h1 className='h3 max-lg:h4 text-white '>Subscribe</h1>
     <p className='text-lg font-medium tracking-wide'>
     Sign up to our newsletter for feature <br className='hidden lg:block' /> updates and our undying love.
     </p>

     <div className='w-full relative cursor-pointer transition-borderColor duration-1000 delay-300 ease-in-out rounded-[1.4em] hover:border-[3px] border-[2px] border-[#143773] p-1 overflow-hidden'>
    <input type="text" placeholder='youremail@domain.com' className='indent-2 text-lg font-medium text-[#272F51] w-full outline-none  rounded-[1.4em] px-3 py-4 border-[#080D27] border-[2px] bg-[#0D1536] ' />
    <div className='absolute right-0 top-1/2 z-[100] scale-x-[-1] translate-y-[-50%]' >
    <Marker />
    </div>
     </div>
     <div className='flex mt-12  items-center gap-4'>
  {socials.map((socialItem, index) => {
    return <div key={index} className='size-[3.5em] border-[1.5px] hover:border-[#2EF2FF] border-blue-900 cursor-pointer transition-all  delay-300 ease-in-out flex items-center justify-center rounded-full bg-[#0B1331] '>
  <img src={socialItem.icon} alt="" />
    </div>
  })}
     </div>
    </section>

    </footer>
  )
}

export default Footer