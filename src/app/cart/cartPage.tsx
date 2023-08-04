"use client"
import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useAppSelector } from '../store/hooks'

const CartPage = () => {
    const cartArray = useAppSelector((state) => state.cart)
    const total = cartArray.reduce((total,arr)=>{return (total + ((arr.price-(arr.price*arr.discount)/100))*arr.qty)},0)
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
    {/* items */}
    <div className="col-span-2">
        <CartCard />
    </div>
    {/* summary */}
    <div className="bg-myblackhead/5 p-5 rounded-xl">
      {/* heading */}
      <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myblackhead">
        Order Summary
      </h2>
      {/* divider (https://daisyui.com/components/divider/)  */}
      <div className="divider mt-0 mb-1"></div>
      {/* pricing */}
      <div className="text-sm font-medium tracking-tight text-myblackpara">
        {/* products prices */}
        <div className="flex items-center justify-between capitalize">
          <h2>Sub Total</h2>
          <h2>${total}</h2>
        </div>
        {/* delivery charges */}
        <div className="flex items-center justify-between capitalize">
          <h2>Delivery Charges</h2>
          <h2>TBD</h2>
        </div>
        {/* Sale Tax */}
        <div className="flex items-center justify-between capitalize">
          <h2>Sales Tax</h2>
          <h2>TBD</h2>
        </div>
      </div>
      {/* divider */}
      <div className="divider mt-0 mb-1"></div>
      {/* Estimated Total */}
      <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myblackhead">
          <h2>Estimated Total</h2>
          <h2>${total}</h2>
        </div>
        {/* divider */}
      <div className="divider mt-0 mb-1"></div>
      {/* checkout button */}
      <div className="flex items-center justify-center w-full">
        <Button className="bg-myblackhead hover:bg-transparent duration-300 text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl">Proceed to Checkout</Button>
      </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* note */}
        <p className="text-xs font-semibold tracking-tight text-myblackhead w-[97%] text-center italic">{`* Delivery Charges and the Sales Tax will be calculated in the checkout page`}</p>
    </div>
  </div>
  )
}

export default CartPage