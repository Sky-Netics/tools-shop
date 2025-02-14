import Image from "next/image";

import PriceRange from "./priceRange";
import CategoryFilter from "./categoryFilter";

import ronix from '../../../../../public/assets/ronix.png';
import denlex from '../../../../../public/assets/denlex.png';

const RightFilter = ({id}:{id:string}) => {
    return (<>
        <div className="p-5 border-2">
            <p className="bg-gray-200 text-gray-800 font-bold px-4 py-2">وضعیت موجودی</p>
            <div className="opacity-50 flex items-center gap-3 mt-6">
                <input type="checkbox" name="specialSell" id="specialSell" />
                <label htmlFor="specialSell">فروش ویژه</label>
            </div>
            <div className="opacity-50 flex items-center gap-3 mt-2">
                <input type="checkbox" name="existsInStore" id="existsInStore" />
                <label htmlFor="existsInStore">موجود در انبار</label>
            </div>
            </div>
            <div className="mt-8 p-5 border-2">
            <p className="bg-gray-200 text-gray-800 font-bold px-4 py-2">فیلتر براساس قیمت:</p>
            <PriceRange />
            </div>
            <div className="mt-8 p-5 border-2">
            <p className="bg-gray-200 text-gray-800 font-bold px-4 py-2">دسته بندی محصولات</p>
            <CategoryFilter id={id}/>
            </div>
            <div className="mt-8 p-5 border-2">
            <p className="bg-gray-200 text-gray-800 font-bold px-4 py-2">برند محصولات</p>
            <div className="flex items-center gap-2 text-gray-500 cursor-pointer mt-6">
                <Image className="object-cover w-16 h-5" src={denlex} width={100} height={20} alt="denlex brand"/>
                <p>دنلکس</p>
                <p className="mr-auto">5</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 cursor-pointer mt-2">
                <Image className="object-cover w-14 h-5" src={ronix} width={100} height={20} alt="ronix brand"/>
                <p>رونیکس</p>
                <p className="mr-auto">2</p>
            </div>
        </div>
    </>);
}
 
export default RightFilter;