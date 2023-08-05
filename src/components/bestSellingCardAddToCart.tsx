"use client"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BestSellAddToCart = ({ slug }: { slug: string }) => {
  // calling product
  const product = useAppSelector((state) => state.products).find(
    (val) => val.slug == slug
  );
  //   add to cart
  const dispatch = useAppDispatch();
  //   setting cart item
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image,
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    color: product?.color[0],
  });
  //   toast
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
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
            <AiOutlineShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] bg-mywhite">
          {/* size */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base text-myblackhead font-semibold tracking-tight">
              Size
            </span>

            <div className="form-control w-full max-w-xs">
              <select
                onChange={(e) =>
                  setCartItem({ ...cartItem, size: e.target.value })
                }
                className="select select-bordered"
              >
                <option disabled defaultValue={"select size"}>
                  select size
                </option>
                {product?.size.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          {/* colors */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base text-myblackhead font-semibold tracking-tight">
              Color
            </span>

            {product?.color.map((item, index) => (
              <button
                key={index}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* add to cart */}
          <div className="w-fit" onClick={notify}>
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className="group mt-5 w-full bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
            >
              <AiOutlineShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
              Add to Cart
            </Button>
          </div>
          
        </PopoverContent>
      </Popover>
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
    </div>
  );
};

export default BestSellAddToCart;
