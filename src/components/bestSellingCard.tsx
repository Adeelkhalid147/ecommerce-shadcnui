import React from "react";
import card from "../../public/bghero.jpg";
import { Button } from "./ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BestSellAddToCart from "./bestSellingCardAddToCart";

interface abc {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}

const BestSellingCard = ({
  src,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: abc) => {
  return (
    <div>
      <div className="max-w-[350px] h-[30rem] p-4 mx-auto shadow-md rounded-xl relative group">
        {/* image div */}
        <Link href={`/${category}/${slug}`}>
          <div className="h-64 block rounded overflow-hidden">
            <Image src={src} alt="bestseeling" height={300} width={300} />
          </div>

          {/* typography  */}
          <div className="mt-4">
            {/* title && se murad h k agr title h to h2 wala code show kro */}
            {title && (
              <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 text-myblackhead line-clamp-1">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myblackpara line-clamp-2">
                {description}
              </p>
            )}

            {price && (
              <div className="flex gap-3">
                <p
                  className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myblackhead line-clamp-1 ${
                    discount > 0 &&
                    "line-through decoration-2 decoration-myorange/70"
                  }`}
                >
                  ${price}
                </p>
                {/* discounted value */}
                {discount > 0 && (
                  <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myblackhead line-clamp-1">
                    ${price - (price * discount) / 100}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>

        {/* button div */}
        <div className="mt-2">
          <div className=" absolute botton-2 right-2">
            <BestSellAddToCart slug={slug}/>
          </div>
          {/* <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
            <AiOutlineShoppingCart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
            Add to Cart
          </Button> */}
          <Button className="group bg-myblackhead hover:bg-transparent text-mywhite hover:text-myblackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute botton-2 left-2">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-myorange duration-300" />
            Buy Now
          </Button>
          {discount > 0 && (
            <div className="scroll-m-20 text-xs text-mywhite bg-myorange font-semibold tracking-tight absolute top-0 left-2 w-[87px] p-2 text-center uppercase mydiscount">{`${discount}% OFF`}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;
