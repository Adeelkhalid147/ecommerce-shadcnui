import { StaticImageData } from "next/image"


export type product = {
    id:number,
    title:string,
    image:string[] | StaticImageData,
    slug:string,
    price:number,
    category:string,
    description:string,
    size:string[],
    color:string[],
    qty:number,
    discount?:number | any,
};
export type Cart = {
    id:number,
    title:string,
    image:string[] | StaticImageData | any,
    slug:string,
    price:number,
    discount:number,
    category:string,
    size:string,
    qty:number,
    uuid:number | string | undefined,
    color:string,
};

