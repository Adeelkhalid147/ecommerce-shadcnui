import Image from 'next/image'
import React from 'react'
import vandelivery from '../../public/vandelivery.jpg'
import service from '../../public/service.png'
import moneyback from '../../public/moneyback.png'

const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px]">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myblackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Our Services
      </h1>
    
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
      </div>
    </div>




    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* Delivery */}
      <div className="group p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image src={vandelivery} alt='Delivery' height={100} width={100} className='h-20 w-20 rounded-full'/>
        </div>
        <div className="flex-grow">
          <h2 className="scroll-m-20 group-hover:text-myorange duration-300 text-lg text-myblackhead font-bold tracking-tight lg:text-xl mb-3">
            Free Delivery
          </h2>
          <p className="line-clamp-2 scroll-m-20 group-hover:text-myblackpara/70 text-base text-myblackpara font-semibold tracking-tight transition-colors">
            Free Delivery on Order Above $1000
          </p>
         
        </div>
      </div>

        {/* 24/7 Services */}
        <div className="group p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image src={service} alt='Delivery' height={100} width={100} className='h-20 w-20 rounded-full'/>
        </div>
        <div className="flex-grow">
          <h2 className="scroll-m-20 group-hover:text-myorange duration-300 text-lg text-myblackhead font-bold tracking-tight lg:text-xl mb-3">
          24/7 Services
          </h2>
          <p className="line-clamp-2 scroll-m-20 group-hover:text-myblackpara/70 text-base text-myblackpara font-semibold tracking-tight transition-colors">
            For Queries and Information Feel Free to Contact
          </p>
         
        </div>
      </div>


        {/* MoneyBack */}
        <div className="group p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image src={moneyback} alt='Delivery' height={100} width={100} className='h-20 w-20 rounded-full'/>
        </div>
        <div className="flex-grow">
          <h2 className="scroll-m-20 group-hover:text-myorange duration-300 text-lg text-myblackhead font-bold tracking-tight lg:text-xl mb-3">
          MoneyBack Garuntee
          </h2>
          <p className="line-clamp-2 scroll-m-20 group-hover:text-myblackpara/70 text-base text-myblackpara font-semibold tracking-tight transition-colors">
            Get Money Back Gurantee in Case of Damage
          </p>
         
        </div>
      </div>




      
    </div>
   
  </div>
</section>

  )
}

export default Services