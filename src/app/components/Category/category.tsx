'use client'
import Link from "next/link"

const Category = () =>{
    return(
        <div className="flex max-w-[1250px] justify-center mx-auto px-6">
            <div className="flex w-fit gap-4 my-8 whitespace-nowrap overflow-x-auto">
                
                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    آچار
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    ابزار اندازه گیری
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    ابزار بادی و بنزینی
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    ابزار برقی و شارژی
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    ابزار جوش و برش
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                ابزار دستی
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    اتو
                </Link>

                <Link href={'/'} className="bg-gray-200 text-[14px] rounded-sm duration-200 min-w-32 text-center py-3 hover:bg-customYellow">
                    اره بنزینی
                </Link>

            </div>
        </div>
    )
}

export default Category