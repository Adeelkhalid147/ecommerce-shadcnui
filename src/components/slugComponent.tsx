"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const SlugComponent = ({image}:string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");
  return (
    <div>
      <Image src={path ? path : image[0]} alt="ecom" height={400} width={400} />
      <div className="flex justify-evenly items-center mx-auto mt-2">
        {image.map((item:any,index:number)=>(
        <div key={index} className="cursor-pointer w-16 h-16">
          <Image src={item} alt="abc" height={60} width={60}
          onClick={()=>setPath(item)} />
        </div>
        ))}      
      </div>
    </div>
  );
};

export default SlugComponent;
