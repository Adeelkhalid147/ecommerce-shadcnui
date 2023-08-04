import React from 'react'
import { Button } from './ui/button'
import {AiFillShopping} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='mb-[100px]'>
        <div className="hero min-h-[80vh] custom-bgimg bg-fixed bg-center bg-no-repeat" >
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl mb-5 text-mywhite font-extrabold tracking-tight lg:text-5xl">Futuristic <span className='text-myorange'>Clothes</span> </h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-mywhite">Upgrade your Wardrobe with Sleek & Stylish Appear and Top-Notch Shoes.</p>
      <Button className='outline outline-offset-2 outline-1 text-mywhite group hover:rounded duration-300 hover:text-myorange hover:animate-bounce'>
      <AiFillShopping className="mr-2 h-6 w-6" /> Shop Now
    </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero