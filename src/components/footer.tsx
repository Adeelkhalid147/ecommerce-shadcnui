import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight mb-3 text-myblackhead">
          COMPANY
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>HOME</Link>
          </li>
          <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>About Us</Link>
          </li>
          <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Contact us</Link>
          </li>
        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 text-lg font-semibold tracking-tight mb-3 text-myblackhead">
          Services
        </h2>
        <nav className="list-none mb-10">
        <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Branding</Link>
          </li>
        <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Marketing</Link>
          </li>
        <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Advertisement</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 text-lg font-semibold tracking-tight mb-3 text-myblackhead">
          Legal
        </h2>
        <nav className="list-none mb-10">
        <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Terms of use</Link>
          </li>
        <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Privacy</Link>
          </li>
        <li>
            <Link href={"#"} className='text-base tracking-tight text-myblackhead hover:text-myblackpara/70'>Cookie policy</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-xs text-gray-600"
            >
             Your Email Here
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-1 focus:ring-myblackpara focus:border-myblackhead text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-mywhite bg-myblackpara border-0 py-2 px-6 focus:outline-none hover:bg-myblackhead rounded">
            Get Notifcation
          </button>
        </div>
        <p className="text-gray-500 text-xs mt-2 md:text-left text-center">
          Please provide us your Email
          <br className="lg:block hidden" />
          To get excited new offers
        </p>
      </div>
    </div>
  </div>
  <div className="">
    <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <div  className="block text-sm">
    <p> Ladies Fashion </p>    
    </div>

        
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2020 Ladies Fashion —
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer