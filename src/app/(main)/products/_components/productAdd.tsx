'use client'

import { useState } from "react";
import addToCart from '@/app/actions/addToCart';

const ProductAdd = ({id}:{id:string}) => {
    const [loader,setLoader] = useState(false);

    const addItem = (id:string)=>{
        setLoader(true)
        const process = addToCart(id)
        setLoader(false)
    }

    return ( 
            
        <div className={`mt-4 ${loader ? "opacity-40" : ""}`}>
            <button onClick={()=>addItem(id)} disabled={loader} className={`
            p-2 bg-customYellow rounded-lg text-white`}>افزودن به سبد خرید</button>
        </div>
        
     );
}
 
export default ProductAdd;