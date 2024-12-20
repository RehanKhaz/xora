import React from 'react'
import Button from '../components/Button'

const Hero = () => {
    return (
        <section className='max-lg:mt-[7rem] p-[3rem] lg:mt-[6em]  px-[2rem]  md:px-[6em] relative   '>
            <div className='container relative lg:flex-between'>

            <div className='max-w-512 -z-3 max-lg:max-w-388' >
                <p className='text-[1em] uppercase text-[#BEDF7B] tracking-wider
       '>Video Editing</p>
                <h1 className='text-white uppercase  mt-4 h1 max-lg:h2 leading-10 max-md:text-5xl'>Amazingly simple</h1>
                <p className='mt-4 text-white text-[1.2em] md:text-[1.6em] font-medium '>
                    We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful.
                </p>
                <div className='mt-4'>
                    <Button fillMarker={'#2EF1FE'}  icon='/images/zap.svg'>Try It Now</Button>
                </div>
            </div>
            <div className='max-lg:absolute max-lg:-top-40 z-[-4] max-lg:hero-img_res pointer-events-none left-[calc(65%-200px)] '>
                <img src="/images/hero.png" className='pointer-events-none w-[1230px] lg:scale-[1.8] lg:mt-3 object-cover  h-auto' alt="" />
            </div>

       </div>
        </section>
    )
}

export default Hero