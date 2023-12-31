"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCartToast = ({ cartItem }: any) => {
  const dispatch = useAppDispatch();
  const notify = () =>
    toast.success("Product Added Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
    <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
      
      <Button
        onClick={notify}
        className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl botton-2 right-2"
      >
        <AiOutlineShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
        Add to Cart
      </Button>
     
    </div>
     <ToastContainer
     position="top-center"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
   />
   </>
  );
};

export default AddToCartToast;
