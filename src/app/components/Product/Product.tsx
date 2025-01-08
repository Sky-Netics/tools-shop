import Image from "next/image"
import Tool2 from "../../../../public/assets/tools/Hamlet.webp"
import Link from "next/link"

const Product = () => {
    return(
        <Link href={'/products/1'}>
            <div className="h-[321px] w-[197px] border p-3">
                <Image src={Tool2} alt="tool image"/>
                
                <div className="flex">
                <span className="text-customYellow">۷۰,۰۰۰ </span>
                <span className="text-[14px] mr-1">تومن</span>
                </div>

                <h1 className="text-[14px] mt-1">کلاه ایمنی هترمن مدل MK6 بدون عینک</h1>

                <div className="flex mt-4">
                
                <div className="ml-2 cursor-pointer">
                    <svg className="w-6 h-6 text-customGray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                    </svg>
                </div>

                <div className="mx-2 cursor-pointer">
                    <svg className="w-6 h-6 text-customGray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"/>
                    </svg>
                </div>

                <div className="mx-2 cursor-pointer">
                    <svg className="w-6 h-6 text-customGray dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                    </svg>
                </div>

                </div>
            </div>
        </Link>
    )
}

export default Product