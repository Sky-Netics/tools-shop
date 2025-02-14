import { BACKEND_DOMAIN } from "@/app/backDomain";
import { Products } from "@/app/interfaces/products";
import Image from "next/image";


const Product = ({name, price, image, id , description}:Products) => {
    return(
            <div className="w-56 max-md:w-full h-full border flex flex-col justify-between p-3">
                <div>
                    <Image className="h-40 max-md:h-60 max-sm:h-40 object-cover w-full" src={BACKEND_DOMAIN + image} width={180} height={180} alt="tool image"/>
                </div>
                <div>
                    <span className="text-customYellow">{price}</span>
                    <span className="text-[14px] mr-1">تومن</span>
                </div>
                <div className="mb-auto">
                    <h1 className="text-[14px] mt-1">{name}</h1>
                </div>
                <div className="flex mt-4 gap-2 text-customGray dark:text-white">    
                    <div className="cursor-pointer hover:bg-customYellow hover:text-white p-1 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>

                    <div className="p-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                    </div>

                    <div className="p-1 cursor-pointer">
                        <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" strokeWidth={1.5} width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                        </svg>
                    </div>
                </div>
            </div>
    )
}

export default Product