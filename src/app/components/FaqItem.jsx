'use client'
import React, {useState} from 'react'
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css'; 
import clsx from 'clsx';

const FaqItem = ({item ,index}) => {
    const [checkId, setCheckId] = useState(null)
    function handleAccordian(index){
        setCheckId((prevIndex) => prevIndex == index ? null : index)
    }
  return (
    <div onClick={()=> {handleAccordian(item.id)}} className={clsx(`transition-all ease-out duration-1000 delay-200 cursor-pointer`, item.id== checkId && 'border-t-[2px] rounded-3xl bg-[#223271] max-lg:px-3 px-[1em] max-lg:py-5 py-[2em] border-[#2EF2FF]')} >
        { index < 10 && <p className='tracking-wider font-medium text-[#ADCC74]'>
            {`${ item.id != 9 ? 0 : '' }${Number(item.id) + 1}`}
            </p>}
            <div className='flex flex-col gap-3'>

           <div className='flex cursor-pointer   items-center justify-between'>
           {
               <span className='text-2xl max-w-[19em] max-lg:text-xl font-medium text-white'> {item.question}</span>
            }
            <div className='size-fit border-black hover:border-blue-900 transition-borderColor ease-in-out duration-300 delay-100 border-[1px] rounded-full p-1'>
            <span className='transition-all delay-100 ease-in-out duration-1000 font-medium size-10 flex items-center text-white text-2xl justify-center rounded-full bg-[#20387C] '>{ item.id == checkId ? '-': '+'}</span>
            </div>
            </div>
            <SlideDown>
            {
                
                item.id == checkId && <span className='text-[1.1em] pr-5 max-md:text-xl  tracking-wider text-white' >
                    {item.answer}
                </span>
            }
            </SlideDown>
             </div>
    </div>
  )
}

export default FaqItem