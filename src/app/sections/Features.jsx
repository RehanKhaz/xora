
import React from 'react'
import { details, features } from '@/app/constants'
import clsx from 'clsx'
import Button from '../components/Button'

const Features = () => {
  return (
    <section id='features' className='p-[3rem] bg-[#151E49] mb-[3em] md:px-[4rem] lg:px-[8em] w-full'>
      <div className='rounded-[3em] overflow-hidden  mt-[1em] border-[#334679] lg:border-[1px]'>

        <div className='flex   flex-col md:flex-row overflow-hidden  min-h-[60vh] max-md:gap-4  items-center'>
    { features.map(({icon,text,title,caption,button},index) => {
      return <div key={index} className={clsx(`max-md:px-8   py-[2em] max-md:rounded-[3em]   md:w-[50%] md:px-[2rem] ${index == 0 ? 'bg-[#182251]':'bg-[#24336E]'}`)}>
      <div className='flex flex-col gap-[.7em]'>
        <img src={icon} className='object-cover max-md:size-[5em] max-lg:size-[7em] lg:size-[8em]' alt="" />
        <span className='text-[1.2em] text-[#C8EA80] font-medium uppercase tracking-wide '>{caption}</span>
        <h2 className='text-white font-medium h3 max-lg:h4'>{title}</h2>
        <p className='max-lg:text-[1.2em] lg:text-[1.4em] font-medium tracking-wide font-poppins '>{text}</p>
      <Button icon={button.icon} containerClass={ index === 1 && 'bg-[#182251]'}>{button.title}</Button>
      </div>
      </div>
    })
  }
        </div>
<br className='max-md:block hidden' />
        <ul className='hidden lg:flex flex-wrap items-center justify-evenly bg-[#0B1231] lg:rounded-[3em] lg:border-[#334679] lg:border-[1px] py-10'>
  {
    details.map(({icon ,title},index) => (
      <div key={index} className='flex justify-center items-center flex-col gap-3'>
        <div className='size-[5em] shadow-[5px_4px_10px_rgb(100,100,100)]  rounded-full ' >
          <img src={icon} className='object-cover' alt="" />
        </div>
        <span className='text-[1.2em] font-medium text-center w-[9em] '>{title}</span>
      </div>
    ))
  }
        </ul>
  </div>
    </section>
  )
}

export default Features