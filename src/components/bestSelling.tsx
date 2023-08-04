"use client"
import Image from "next/image";
import React from "react";
import card from "../../public/bghero.jpg";
import { Button } from "./ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const product = useAppSelector((state)=>state.products)
  const bestSell = product.slice(0,3)
  // const bestSell = [
  //   {
  //     src: "/bghero.jpg",
  //     alt: "White T-Shirt",
  //     title: "White printed tee",
  //     description: "Best quality t-shirt for women",
  //     price: 150,
  //     category: "tops",
  //     slug: "white-top",
  //   },
  //   {
  //     src: "/bghero.jpg",
  //     alt: "Black T-Shirt2",
  //     title: "White Non-printed tee2",
  //     description: "Best quality for women2",
  //     price: 100,
  //     category: "tops",
  //     slug: "black-top",
  //   },
  //   {
  //     src: "/bghero.jpg",
  //     alt: "Blue shoes",
  //     title: "White Semi-printed tee3",
  //     description: "Best quality fine for women3",
  //     price: 300,
  //     category: "shoes",
  //     slug: "blue-shoes",
  //   },
  // ];
  return (
    <div className="mb-[100px] mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-myblackhead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          BestSelling Product
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myorange inline-flex" />
        </div>
      </div>

      {/* best Selling Product */}

      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items:any, index) => (
          <BestSellingCard
            key={index}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
