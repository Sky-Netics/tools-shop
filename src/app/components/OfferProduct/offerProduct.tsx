import Image from "next/image";
import { BACKEND_DOMAIN } from "@/app/backDomain";
import TimeLeft from "./timeLeft";
import Link from "next/link";

type PropsType = {
    url:string,
    title: string,
    currentPrice: string,
    src: string,
    index:number,
}

const OfferProduct = ({url,title, currentPrice, src,index}: PropsType) => {

    return (<>
            <div id="discountProducts" key={index} className="h-full min-w-[25%] max-lg:min-w-[33.333%] 
                max-md:min-w-[50%] max-sm:min-w-full border p-3 bg-white">
                <Link href={url}>
                    <p className="text-[13px] text-customGray text-center truncate">{title}</p>

                    <Image src={BACKEND_DOMAIN+src} width={180} height={140} className="my-1 h-40 w-full object-cover" alt="offer product image" />

                    <div className="text-[14px] text-center flex flex-row-reverse justify-center font-semibold">
                        <span className="line-through ml-3">1000</span>
                        <span className="text-customYellow">{currentPrice}</span>
                        <span className="mr-1">تومن</span>
                    </div>

                    <TimeLeft />    
                </Link>
            </div>
    </>);
}

export default OfferProduct;