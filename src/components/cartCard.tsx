"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaHeart, FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { CgTrash } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, delItem, subtractCart } from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  // console.log("aaaaaaaaaa: ", cartArray);
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, index) => (
          <div key={index} className="flex px-10 py-3">
            {/* image */}
            <Image
              src={item.image[0]}
              alt={item.title}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            {/* some info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* title */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myblackhead ">
                  {item.title}
                </h2>
                {/* size */}
                <p className="mt-2 text-sm text-myblackpara/80 leading-none line-clamp-1">
                  size:&nbsp;
                  <span>
                    <button
                      className="border-2 border-gray-300 mr-1 rounded-full w-4 h-4 focus:outline-none active:border-none focus:border-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>
                {/* color */}
                <p className="mt-2 text-sm text-myblackpara/80 leading-none line-clamp-1">
                  color:&nbsp;<span> {item.size} </span>
                </p>
                {/* quantity */}
                <div 
                
                className="flex mt-2 items-center">
                  <Button 
                  onClick={() => dispatch(subtractCart(item))}
                  className="group hover:bg-mywhite bg-myblackhead text-mywhite hover:text-myblackhead w-fit h-fit rounded-lg text-xs duration-300">
                    <FaMinus className="h-2 w-2 grounp-hover:text-myblackhead" />
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myblackpara/80">
                    {item.qty}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    className="group hover:bg-mywhite bg-myblackhead text-mywhite hover:text-myblackhead w-fit h-fit rounded-lg text-xs duration-300"
                  >
                    <FiPlus className="h-2 w-2 grounp-hover:text-myblackhead" />
                  </Button>
                </div>
                {/* price and delete */}
                <div className="lg:hidden mt-3 flex-col item-end gap-5">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myblackhead">
                    <span>Price:&nbsp;</span>&#36;
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.qty
                      : item.price * item.qty}
                  </h3>
                  <CgTrash
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="mt-2 text-base font-semibold leading-none text-myblackhead cursor-pointer"
                    size={23}
                  />
                </div>
              </div>
            </div>
            {/* price and delete */}
            <div className="hidden lg:flex flex-col item-end gap-5">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myblackhead">
                <span>Price:&nbsp;</span>&#36;
                {item.discount > 0
                  ? (item.price - (item.price * item.discount) / 100) * item.qty
                  : item.price * item.qty}
              </h3>
              <CgTrash
                onClick={() => dispatch(delItem(item.uuid))}
                className="text-base font-semibold leading-none text-myblackhead cursor-pointer"
                size={23}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
