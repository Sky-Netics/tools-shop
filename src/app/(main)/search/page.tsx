import Link from "next/link";

import ProductFilter from "../products/_components/productFilter";
import RightFilter from "../products/_components/rightFilter";
import ProductRenderer from "../products/_components/productDenderer";
import { Metadata } from "next";


interface QueryParamsProps{
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}


export const metadata:Metadata = {
  title:"ابزارقفلی – فروشگاه ابزار قفلي",
  description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
  
  robots:"index, follow",

  openGraph:{
    title:"ابزارقفلی – فروشگاه ابزار قفلي",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    url: 'https://abzarghofli.ir/search',
    type: 'website',
    images: [
      {
        url: 'https://abzarghofli.ir/assets/logo.png',
        width: 150,
        height: 80,
        alt: 'ابزار قفلی',
        type: 'image/png'
      }
    ],
    locale :"fa_IR"
  },
  
}

export default async function SearchPage({params,searchParams}:QueryParamsProps) {
  const query = await searchParams
  const queryName:string|undefined = query.query;
  
  return (
    <div className="flex px-10 max-sm:px-0 mt-12 max-w-[1400px] mx-auto">
      <div className="w-[20%] ml-10 max-lg:hidden">
        <RightFilter id="root"/>
      </div>
      <div className="w-[80%] max-lg:w-full max-lg:px-6 max-sm:px-2">
        <div className="flex justify-between pb-6">
          <div className="flex gap-2">
            <Link className="text-gray-600" href="/">خانه</Link>
            <div className="text-gray-600">{"/"}</div>
            <Link className="text-gray-600" href="/products">فروشگاه</Link>
            <div className="text-gray-600">{"/"}</div>
            <Link className="line-clamp-1" href={`/search?query=${queryName}`}>نتیجه جستجو برای "{query.query}"</Link>
          </div>
          <ProductFilter />
        </div>
        <ProductRenderer query={queryName}/>
      </div>
    </div>
  )
}
