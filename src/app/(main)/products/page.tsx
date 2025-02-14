import Link from "next/link"
import RightFilter from "./_components/rightFilter"
import ProductFilter from "./_components/productFilter"
import ProductRenderer from "./_components/productDenderer"

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