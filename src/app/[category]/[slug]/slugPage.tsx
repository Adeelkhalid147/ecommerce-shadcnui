"use client";
import SlugComponent from "@/components/slugComponent";
import { Button } from "@/components/ui/button";
import { FaHeart, FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import AddToCartToast from "@/components/addToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.products);
  const slug = product.filter((val) => val.slug == params.slug);

  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image,
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
    color: slug[0].color[0],
  });

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* image */}
          <SlugComponent image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category */}
            <h2 className=" text-gray-500 tracking-widest scroll-m-20 text-sm font-semibold uppercase">
              {slug[0].category}
            </h2>

            {/* title/heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myblackhead">
              {slug[0].title}
            </h1>
            {/* ratings */}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myorange"
              />
            </div>

            {/* description */}
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myblackpara">
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center pb-5 mb-5">
                {/* colors */}
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base text-myblackhead font-semibold tracking-tight">
                  Color
                </span>

                {slug[0].color.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>

              {/* size */}
              <div className="flex ml-6 items-center">
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
                    {slug[0].size.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* Quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base text-myblackhead font-semibold tracking-tight">
                Quantity
              </span>
              <Button
                onClick={() =>
                  setCartItem({
                    ...cartItem,
                    qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                  })
                }
                className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit"
              >
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FiPlus
                  onClick={() =>
                    setCartItem({ ...cartItem, qty: ++cartItem.qty })
                  }
                  className="mr-2 h-4 w-4 group-hover:text-myorange duration-300"
                />
                Add
              </Button>
            </div>
            {/* divider */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* price */}
              <div className="">
                <span
                  className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myblackhead ${
                    cartItem.discount > 0 &&
                    "line-through decoration-2 decoration-myorange/70"
                  }`}
                >
                  ${cartItem.price * cartItem.qty}
                </span>
                {/* discounted value */}
                {cartItem.discount > 0 && (
                  <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myblackhead">
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.qty}
                  </span>
                )}
              </div>

              {/* button add to card/buy now */}
              <AddToCartToast cartItem={cartItem} />

              {/* <Button onClick={()=>dispatch(addToCart(cartItem))} className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl botton-2 right-2">
                <AiOutlineShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
                Add to Cart
              </Button> */}
            </div>
            <Button className="mt-3 group w-full bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl botton-2 right-2">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
