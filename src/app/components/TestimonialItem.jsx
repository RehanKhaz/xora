import React from 'react'

const TestimonialItem = ({index, testimonial, containerClass}) => {
  return (
    <div key={index} className={`${containerClass} border-blue-700 max-md:border-b-[1px] flex flex-col gap-[1.5em] px-4 py-5`} >
    <blockquote className='text-[1.4em] max-lg:text-xl font-medium tracking-wide'>
      {testimonial.comment}
    </blockquote>
    <div className='flex items-center gap-4'>
        <div className='size-fit p-2 border-blue-950 border-[1px] rounded-full'>
            <img src={testimonial.avatarUrl} className='size-[4em]' alt="" />
        </div>
        <div>
            <p className='text-[1.2em] max-lg:text-[1.1em] text-[#2EF2FF] font-medium '>{testimonial.name}</p>
            <p className='text-[.9em] tracking-wider text-[#324578] uppercase'>{testimonial.role}</p>
        </div>

    </div>
    </div>
  )
}

export default TestimonialItem