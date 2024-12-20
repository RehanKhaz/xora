'use client'
import React from 'react'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import clsx from 'clsx'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)
    const NavLink = ({ title }) => {
        return <a onClick={()=> setIsOpen(!isOpen) } className= 'font-medium hover:text-green-400 ease-in-out text-white tracking-wide transition-colors duration-1000 delay-100 text-[2em] uppercase  lg:text-[1.2em]' href={`/#${title.toLowerCase()}`}>{title}</a>
    }

    useEffect(() => {
      function handleScrollY (){
        setHasScrolled(window.scrollY > 32)
      }
     
      window.addEventListener('scroll', handleScrollY)
      
      return () => {
          window.removeEventListener('scroll', handleScrollY)
      }
    }, [hasScrolled])
    

    return (
        <header className={clsx(`fixed h-[6.5em]  transition-all ease-in-out duration-700   -top-0 z-[999] left-0 px-4  py-3`, hasScrolled && 'py-3 max-lg:-mt-2 -mt-6 max-lg:h-[5em] lg:h-[5.5em] bg-black   lg:backdrop-blur-[7px]' )}>
            <div  >
                <div className='flex px-8 py-3 items-center justify-between'>
                <Link className='lg:hidden block' href={'/'}>
                    <img src="/images/xora.svg" className='h-[2.8em]' alt="" />
                </Link>

                <div  onClick={()=> setIsOpen((prev) => !prev)} className='max-lg:block hidden p-2  rounded-full'>
                  <img src={`/images/${!isOpen ? 'magic':'close'}.svg`} className='size-6 object-contain' alt="" />
                </div>
                </div>

                <nav className='w-screen    relative'>
                    <ul className={clsx(`${isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none'} max-lg:flex max-lg:justify-center max-lg:-mt-[1px]  overflow-hidden  opacity-0 absolute z-[11] lg:opacity-100 max-lg:min-h-[100vh]  max-lg:bg-black-100 sidebar-before flex flex-col px-[4rem] lg:px-0 lg:flex-row  lg:mt-0 lg:items-center w-full lg:justify-evenly`)}>
                        <li className='flex flex-col lg:flex-row  lg:items-center w-[25%] justify-between '>
                            <NavLink title={'Features'} />
                            <div className='dot' />
                            <NavLink title={'Pricing'} />
                        </li>
                <li>
                            <Link href={'/'}>
                                <img className='hidden lg:block' src="/images/xora.svg" alt="" />
                            </Link>
                        </li>
                        <li className='flex flex-col lg:flex-row lg:items-center w-[25%] justify-between'>
                        <NavLink title={'FAQ'} />
                            <div className='dot' />
                            <NavLink title={'Downloads'} />

                        </li>
                    </ul>
                </nav>

                </div>
        </header>
    )
}

export default Header