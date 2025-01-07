'use client'
import Link from "next/link"

const Category = () =>{
    return(
        <div className="flex px-[150px] my-8 gap-4">

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                آچار
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                ابزار اندازه گیری
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                ابزار بادی و بنزینی
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                ابزار برقی و شارژی
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                ابزار جوش و برش
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
            ابزار دستی
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                اتو
            </Link>

            <Link href={'/'} className="w-[145px] h-[60px] flex items-center justify-center bg-gray-200 text-[14px] rounded-sm transition hover:bg-customYellow">
                اره بنزینی
            </Link>

        </div>
    )
}

export default Category