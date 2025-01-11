'use client'
import Link from "next/link"

const Category = () =>{
    return(
        <div className="flex px-[150px] my-8 gap-4 max-xl:px-[50px]">

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow">
                آچار
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow">
                ابزار اندازه گیری
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow">
                ابزار بادی و بنزینی
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow max-[515px]:hidden">
                ابزار برقی و شارژی
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow max-[600px]:hidden">
                ابزار جوش و برش
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow max-[730px]:hidden">
            ابزار دستی
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow max-[830px]:hidden">
                اتو
            </Link>

            <Link href={'/'} className="w-[145px] h-[50px] flex items-center justify-center bg-gray-200 text-[14px] max-lg:text-[12px] rounded-sm transition hover:bg-customYellow max-[900px]:hidden">
                اره بنزینی
            </Link>

        </div>
    )
}

export default Category