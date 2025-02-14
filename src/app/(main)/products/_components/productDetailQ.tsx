'use client'

import { useState } from "react";
import addToCart from '@/app/actions/addToCart';

const ProductDetailQ = ({id}:{id:string}) => {
    const [count,setCount] = useState(1);

    return ( 
        <div className="mt-5">
            <div className='flex items-center gap-4 mr-5'>
                <button onClick={()=>setCount((prev) => prev+1)} className='bg-green-500 px-4 text-[22px] text-white rounded-md'>+</button>
                <p className='text-lg'>{count}</p>
                <button onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))} className='bg-red-500 px-4 text-[22px] text-white rounded-md'>-</button>
            </div>
            <div className="mt-4">
                <button onClick={()=>addToCart(id)} className='
                px-6 py-2 bg-customYellow rounded-lg text-white'>افزودن به سبد خرید</button>
            </div>
        </div>
     );
}
 
export default ProductDetailQ;