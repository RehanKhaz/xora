'use client'
import { plans } from '@/app/constants'
import clsx from 'clsx'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import Button from '../components/Button'

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <section id='pricing' className=' z-[100] min-h-screen w-screen  px-[2rem] md:px-[3em]  lg:px-[4em] py-[3em]'>
      <div className='pt-[3em] flex  flex-col items-center justify-center gap-[4em]'>
        <h1 className='text-center max-lg:h4 text-wdhite h3'>Flexible Pricing <br /> for teams of all sizes</h1>
        <div className='w-[18em] sm:w-[20em] md:w-[25em] py-[.9px] overflow-hidden  flex items-center rounded-3xl border-[#0E2754] border-[2.5px]'>
          <div className={clsx(`px-3 md:px-[2em] cursor-pointer py-4 tracking-wider text-xl  rounded-xl text-white text-center h-full w-1/2`, isMonthly && 'bg-[#1E397C]' )} onClick={() => setIsMonthly(true)} >Monthly</div>
          <div className={clsx(`px-3 md:px-[2em] cursor-pointer py-4 tracking-wider text-xl  rounded-xl text-white text-center h-full w-1/2`, !isMonthly && 'bg-[#1E397C]' )} onClick={() => setIsMonthly((prev) => !prev)} >Annual</div>
        </div>
        <div className=' lg:p-[4em] relative flex flex-wrap items-center max-md:gap-[3em] justify-center w-full '>
          {plans.map(({ title, priceMonthly, priceYearly, caption, features, icon, logo }, index) => {
            return <div key={index} className={clsx(` flex w-full md:w-[33%] pt-[2em]  min-h-[60vh] relative  items-center  gap-[1em] border-[1px]  rounded-2xl ${index === 1 ? ' min-h-[100vh] w-[35%] border-[#3C52D9] bg-[#223271]' : 'bg-[#080D27] py-[2em] border-[#334679] border-[1px]'}  flex-col`)}>
              <div className='absolute -top-8 left-[50%] scale-100 -translate-x-1/2'>
            <img src={logo} className={clsx(`size-[5em]   object-cover`)} alt="" />
              </div>
              <span className={clsx(`uppercase font-medium px-4 py-2 rounded-2xl mt-[2em] border-[1.5px] ${index !== 1 ? 'border-[#2EF2FF]  text-[#2EF2FF]' : 'text-[#C8EA80] border-[#C8EA80]'} text-[1.2em] tracking-wider`)}>{title}</span>
              <h1 className={`max-lg:text-[3.4em] lg:text-[5em] tracking-wider relative ${index ===1 ? 'text-[#C8EA80]' : 'text-white'} font-extrabold `}> $<CountUp delay={0} duration={2}  end={isMonthly ? priceMonthly : priceYearly} start={isMonthly ? priceYearly : priceMonthly}/> <sub className='text-lg text-white font-medium tracking-widest  absolute top-4'>/MO</sub></h1>
              <span className='-mt-8 text-white font-medium max-lg:text-lg lg:text-xl xl:text-2xl tracking-wide'>{caption}</span>
              <div className={clsx(`w-full  flex flex-col max-md:px-[1em] lg:px-[1em]  justify-center  gap-3`, index === 1 ? 'bg-[#141D46] py-12 overflow-hidden rounded-b-[2em]': 'border-t-[.1px] py-4 border-[#141D46]')}>
      {
           features.map((feature,index) => {
            return <div key={index} className='flex  items-center gap-2'>
              <img src={'/images/check.png'} className='object-cover size-[2em]' alt="" />
              <span className='text-[.9em] tracking-wide text-white text-center font-medium'>{feature}</span>
            </div>
           })
      }
         <Button containerClass={'mt-[1em] m-auto'} icon={icon}>Get Started</Button>
{  index === 1 && <span className=' text-sm tracking-wide font-medium m-auto mt-8 text-[#BDDD7D]'>- Limited Time Offer -</span>}

              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing