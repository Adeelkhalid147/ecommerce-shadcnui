import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-10">
      <h1 className="text-myblackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
       Our Promotion
      </h1>
    
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
      </div>
    </div>
    {/* Promotion Start Here */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
        {/* 1st child */}
        <div>
        <div className="hero h-[25rem] bg-myblackhead rounded-2xl">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 mb-5 text-3xl font-bold tracking-tight uppercase text-mywhite">Get Upto<span className='text-myorange'> 60% </span> Off</h1>
      <p className="mb-5 scroll-m-20 text-base font-medium tracking-tight text-mywhite">Flash Sale, get upto 60% off on the Season Variant.</p>
      
    </div>
  </div>
</div>
        </div>
        {/* 2st child */}
        <div>
        <div className="hero h-[25rem] bg-myorange rounded-2xl">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 mb-5 text-3xl font-bold tracking-tight uppercase text-mywhite">Get Upto<span className='text-myorange'> 30% </span> Off</h1>
      <p className="mb-5 scroll-m-20 text-base font-medium tracking-tight text-mywhite">Flash Sale, get upto 30% off on the Season Variant.</p>
      
    </div>
  </div>
</div>
        </div>
    </div>
    </div>
  )
}

export default Promotion