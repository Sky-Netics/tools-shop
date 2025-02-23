import Link from "next/link"
import RightFilter from "./_components/rightFilter"
import ProductFilter from "./_components/productFilter"
import ProductRenderer from "./_components/productDenderer"
import { Metadata } from "next"


export const metadata:Metadata = {
    title:"ابزارقفلی – فروشگاه ابزار قفلي",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    
    robots:"index, follow",
  
    openGraph:{
      title:"ابزارقفلی – فروشگاه ابزار قفلي",
      description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
      url: 'https://abzarghofli.ir/products',
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


const ProductPage = () => {



    return(
        <div className="flex px-10 max-sm:px-0 mt-12 max-w-[1400px] mx-auto">
            <div className="w-[20%] ml-10 max-lg:hidden">
                <RightFilter id="root"/>
            </div>
            <div className="w-[80%] max-lg:w-full max-lg:px-6 max-sm:px-2">
                <div className="flex justify-between pb-6">
                <div className="flex gap-2 text-nowrap">
                    <Link className="text-gray-600" href="/">خانه</Link>
                    <div className="text-gray-600">{"/"}</div>
                    <Link href="/products">فروشگاه</Link>
                </div>
                <ProductFilter />
                </div>
                <ProductRenderer query={undefined}/>
            </div>
        </div>
    )
}

export default ProductPage