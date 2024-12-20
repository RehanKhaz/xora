import { testimonials } from '@/app/constants'
import React from 'react'
import TestimonialItem from '../components/TestimonialItem'

const Testimonials = () => {
    const halfTestimonialsData = testimonials.length / 2
    return (
        <section className='relative w-screen max-lg:p-[3em] p-[7em] border-t-[1px] border-blue-950 top-[40vh] z-[100]'>
            <div className='flex lg:flex-row flex-col items-center justify-between'>
        <div className='flex lg:w-[30em] lg:mt-[5em] lg:mb-auto flex-col gap-[1.7em]'>
            <p className='text-[#C8EA80] tracking-widest uppercase text-xl max-lg:text-lg font-medium'>Wall of Love</p>
            <h1 className='h3 max-lg:h4 text-white '>Words from <br /> our Fans</h1>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-between lg:w-full'>

<div className=' flex flex-col items-center md:w-[48%]  gap-[1em] py-4 '>
            {testimonials.slice(0,halfTestimonialsData).map((item,index)=> {
                return <TestimonialItem key={index} testimonial={item} index={index} />
            })}
        </div>
        <div className=' flex flex-col items-center md:w-[48%]  gap-[1em] py-4 '>
            {testimonials.slice(halfTestimonialsData).map((item,index)=> {
                return <TestimonialItem  key={index} testimonial={item} index={index} />
            })}
        </div>
            </div>
</div>
        </section>
    )
}

export default Testimonials