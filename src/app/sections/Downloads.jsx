import { links, logos } from '@/app/constants'
import React from 'react'

const Downloads = () => {
  return (
    <section id='downloads' className='relative min-h-screen  mt-[12em] px-[6em] max-lg:p-[3em] py-[4em]'>
     <div className='absolute z-[100]'>
        <div className='flex max-lg:px-2 gap-[2em] py-3 px-[2em] md:items-center md:flex-row flex-col justify-between'>
            {/* Xora Description */}
            <div className='flex flex-col max-lg:gap-[1em]  gap-[2em] md:w-[35%]'>
            <div>
                <img src='/images/xora.svg' className='object-cover' />
            </div>
                <p className='max-w-lg  tracking-wide text-2xl max-lg:text- '>
                Try it now for free on iOS, Android, PC, Web - whatever your flavor, we&apos;ve got you covered.
                </p>

                <div className='flex flex-wrap max-md:gap-[1em] gap-[2em]'>
                    {links.map((item, index) => {
                        return <div className='border-2 bg-[#182250] relative hover:border-blue-900 transition-borderColor duration-200 delay-75 ease-in cursor-pointer border-[#333165] size-[4.5em] flex items-center justify-center rounded-full' key={index}>
                           <div className=''>
                           {item.icon}
                           </div>
                        </div>
                    })}
                </div>

            </div>
            
            <div className='border-2 md:w-[50em] lg:w-[100em] flex 
            gap-[2em]
            flex-col  relative bg-black py-8 rounded-2xl px-[2em] border-blue-950'>
                <div className='flex items-center gap-2'>
                    {[1,2,3].map((item,index) => {
                        return <div key={index} className={`size-4  rounded-full ${index > 0 ? 'bg-slate-800' : 'bg-blue-950'}`} /> 
                    })}

                </div>
                <div className='overflow-hidden rounded-xl'>
                    <img src="/images/screen.jpg" alt=" object-cover" />
                </div>

            </div>
        </div>


     </div>
    </section>
  )
}

export default Downloads