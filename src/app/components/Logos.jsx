import { logos } from '@/app/constants'
import React from 'react'

const Logos = () => {
  return (
     <div className='flex w-screen max-md:hidden relative mt-[36em]    items-center justify-center gap-[3em]'>
      {
          logos.map((item,index) => {
              return <div key={index} className='object-cover'>
                <img src={item.url} width={item.width} height={item.height} />
            </div>
        })
    }
    </div>
  )
}

export default Logos