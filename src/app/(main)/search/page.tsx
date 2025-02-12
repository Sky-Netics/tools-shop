import Image from "next/image";
import Link from "next/link";

import { getData } from "@/app/actions/getData";
import { BACKEND_DOMAIN } from "@/app/backDomain";
import { Products } from "@/app/interfaces/products";

import check from '../../../../public/check.svg';
import Quantity from "./_components/quantity";

interface QueryParamsProps{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}


export default async function SearchPage({params,searchParams}:QueryParamsProps) {
  const query = await searchParams

  const products:Products[]|string = await getData(`${BACKEND_DOMAIN}/store/products/search?name=${query.query}`);

  return (
    <div className="flex max-w-[1250px] mx-auto mt-12">
      <div className="w-[20%] max-lg:hidden"></div>
      <div className="w-[80%] max-lg:w-full max-lg:px-6">
        <div className="flex justify-between pb-6">
          <div className="flex gap-2 text-nowrap">
            <Link className="text-gray-600" href="/">خانه</Link>
            <div className="text-gray-600">{"/"}</div>
            <Link className="text-gray-600" href="/">فروشگاه</Link>
            <div className="text-gray-600">{"/"}</div>
            <Link className="line-clamp-1" href={`/search?query=${query.query}`}>نتیجه جستجو برای "{query.query}"</Link>
          </div>
          <div className="text-gray-600 max-sm:hidden flex items-center gap-8 border-b cursor-pointer">
            <p>مرتب سازی</p>
            <div>
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
          <div className="hidden max-sm:flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-center">
          {typeof products !== "string" ? (
            products.map((product,i) => (
              <div key={i} className="text-gray-900 w-full border flex flex-col">
                <Image className="w-full h-48 max-sm:h-56 object-cover" width={200} height={200} src={BACKEND_DOMAIN+product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <div className="flex items-center mt-5 justify-center gap-2">
                  <Image className="w-4 h-4 object-cover" src={check} width={30} height={30} alt="check sign"/>
                  <p className="font-bold text-sm">موجود در انبار</p>
                </div>
                <p className="text-customGray -mt-1 text-center">{product.price} تومن</p>
                <div className="flex items-center justify-between max-xl:flex-col 
                                max-lg:flex-row gap-2 p-2 mt-auto">
                  <Quantity />
                  <div>
                    <p className="bg-customYellow cursor-pointer text-white p-2 rounded-lg">افزودن به سبد</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="flex-center h-60 text-2xl">محصولی یافت نشد.</p>
          )}
        </div>
      </div>
    </div>
  )
}
