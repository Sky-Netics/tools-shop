'use client'

import Image from "next/image"
import sendIcon from '../../../../public/send.svg'
import ElectricProduct from "../Product/Product"

const LatestProductsContainer = () =>{
    return(
        <div className="mx-[150px] my-6">

            <div className="flex items-center">

            <div className="flex w-[180px]">
                <Image src={sendIcon} alt="send icon" width={25} className="ml-2"/>
                <h1>آخرین محصولات</h1>
            </div>

            <div className="w-full border border-dashed border-[#b6b6b6] h-0">
            </div>

            </div>

            <div className="flex gap-3 my-3">
                <ElectricProduct />
                <ElectricProduct />
                <ElectricProduct />
                <ElectricProduct />
                <ElectricProduct />
                <ElectricProduct />
            </div>

        </div>
    )
}

export default LatestProductsContainer