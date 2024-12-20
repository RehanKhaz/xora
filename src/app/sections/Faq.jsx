import { faq } from '@/app/constants'
import React from 'react'
import FaqItem from '../components/FaqItem'

const Faq = () => {
  const halfFaqData = faq.length / 2
  return (
    <section id='faq' className='  px-[2rem] md:px-[3em]   lg:px-[4em] py-[3em] '>
      <div className='relative'>

   <div className='px-16 max-lg:pb-[5em] absolute   z-[100] max-lg:py-6 max-lg:px-4 py-6'>
    <h1 className='h3 max-lg:h4'>Curiosity didn't kill the cat , <br className='hidden md:block' /> it got answers.</h1>
    <p className=' font-medium  mt-6  max-sm:text-xl text-2xl'>You've got questions , we've got answers.</p>
   </div>
            <br />
            <br />
            <div className='absolute z-[-1]  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] min-h-screen max-sm:hidden w-[.4px] bg-blue-600'></div>
            <div className='relative'>
              <div className='absolute max-sm:hidden    overflow-hidden z-[99] top-[40vh] left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full size-[4.5em] flex items-center justify-center bg-[#080D27] border-[1px] border-blue-900 '>
                <img src="/images/faq-logo.svg" alt="" />
              </div>
            </div>
      </div>
              <div className='top-[13.7em] lg:top-[42vh]  sm:border-t-[1px] z-[40]  sm:border-blue-950  relative'>
                <div className='max-md:p-[3em] mt-[3em] sm:mt-0 p-[5em] md:flex-row flex  flex-col justify-between max-md:gap-[2em] gap-4  max-md:px-[1em] px-[2.4em]'>

                <div className='flex  flex-col max-md:gap-[2em] gap-[3em]  md:w-[48%]'>
               {
                 faq.slice(0,halfFaqData).map((item, index) => {
                   return    <FaqItem key={index} item={item} index={index} />
                  })
                }
                </div>

                <div className='flex   max-md:gap-[2em]  flex-col gap-[3em]  md:w-[48%]'>
               {
                 faq.slice(halfFaqData).map((item, index) => {
                   return    <FaqItem key={index} item={item} index={index} />
                  })
                }
                </div>
                </div>
              </div>
   
    </section>
  )
}

export default Faq