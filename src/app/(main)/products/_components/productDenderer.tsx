import Image from "next/image";


import Quantity from "./quantity";
import { getData } from "@/app/actions/getData";
import { BACKEND_DOMAIN } from "@/app/backDomain";
import { Products } from "@/app/interfaces/products";

import check from '../../../../../public/check.svg';
import ProductAdd from "./productAdd";
import Link from "next/link";

const ProductRenderer = async ({query}:{query:string|undefined}) => {
    let url:string;
    if (query !== undefined){
      url = `${BACKEND_DOMAIN}/store/products/search?name=${query}`
    }else{
      url = `${BACKEND_DOMAIN}/store/products/`
    }
    const products:Products[]|string = await getData(url)
    
    
    return ( 
        <>
        {typeof products !== "string" ? (
            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-center">
            {products.map((product,i) => (
              <div key={i} className="text-gray-900 w-full border flex flex-col">
                <Link href={`/products/${product.id}`}><Image className="w-full p-2 h-48 max-sm:h-56 object-cover" width={200} height={200} src={BACKEND_DOMAIN+product.image} alt={product.name} /></Link>
                <h2>{product.name}</h2>
                <div className="flex items-center mt-5 justify-center gap-2">
                  <Image className="w-4 h-4 object-cover" src={check} width={30} height={30} alt="check sign"/>
                  <p className="font-bold text-sm">موجود در انبار</p>
                </div>
                <p className="text-customGray -mt-1 text-center">{product.price} تومن</p>
                <div className="flex items-center justify-between max-xl:flex-col 
                                max-lg:flex-row gap-2 p-2 mt-auto">
                  <Quantity />
                  <div>
                    <ProductAdd id={`${product.id}`}/>
                  </div>
                </div>
              </div>
            ))}
            </div>
          ) : (
            <p className="flex-center h-60 text-2xl">محصولی یافت نشد.</p>
          )}
        </>
     );
}
 
export default ProductRenderer;