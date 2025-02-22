'use client'

import { useState } from "react";

const ProductQ = () => {
    const [count,setCount] = useState(1);

    return ( 
        <div className='flex items-center gap-4 mr-5'>
            <button onClick={()=>setCount((prev) => prev+1)} className='bg-green-500 px-4 text-[22px] text-white rounded-md'>+</button>
            <p className='text-lg'>{count}</p>
            <button onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))} className='bg-red-500 px-4 text-[22px] text-white rounded-md'>-</button>
        </div>
     );
}
 
export default ProductQ;