import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return ( <div className='flex items-center justify-center h-screen w-screen'>

  <Image src="/images/xora.svg" alt={'Loading Image'} height={'300'} width={'200'} className='object-cover'  />
  </div>

  )
}

export default Loading