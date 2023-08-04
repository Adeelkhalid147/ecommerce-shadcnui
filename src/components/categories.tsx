import Image from 'next/image'
import React from 'react'
import catagory1 from '../../public/bghero.jpg'

import Link from 'next/link'

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-10">
      <h1 className="text-myblackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
       Our Catagories
      </h1>
    
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
      </div>
    </div>
    {/* Catagories start here */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {/* catagory 1 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative '>
        <Link href={"/tops"}>
        <Image className=' rounded-xl duration-500 group-hover:scale-125' src={catagory1} alt='tops' height={350} width={350}/>
        <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Tops</h1>
        </div>
        <div className='block lg:hidden absolute bottom-10 duration-500 z-[100] scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Tops</h1>
        </div>
        </Link>
    </div>



    {/* catagory 2 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/pents"}>
        <Image className=' rounded-xl duration-500 group-hover:scale-125' src={catagory1} alt='tops' height={350} width={350}/>
        <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Pents</h1>
        </div>
        <div className='block lg:hidden absolute bottom-10 duration-500 z-[100] scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Pents</h1>
        </div>
        </Link>
    </div>
    {/* catagory 3 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/accessories"}>
        <Image className=' rounded-xl duration-500 group-hover:scale-125' src={catagory1} alt='Accessories' height={350} width={350}/>
        <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Accessories</h1>
        </div>
        <div className='block lg:hidden absolute bottom-10 duration-500 z-[100] scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Accessories</h1>
        </div>
        </Link>
    </div>
    {/* catagory 4 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"shoes"}>
        <Image className=' rounded-xl duration-500 group-hover:scale-125' src={catagory1} alt='Shoes' height={350} width={350}/>
        <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Shoes</h1>
        </div>
        <div className='block lg:hidden absolute bottom-10 duration-500 z-[100] scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl bg-myblackhead/60 text-mywhite w-full text-center'>
            <h1 className='uppercase'>Shoes</h1>
        </div>
        </Link>
    </div>



    </div>
    </div>
  )
}

export default Categories