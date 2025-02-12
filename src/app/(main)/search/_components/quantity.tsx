'use client'

import { useState } from "react";

const Quantity = () => {
    const [quantity,setQuantity] = useState(1)
    
    const increment = ()=>{
        if (quantity === 9){
            setQuantity(9)
        }else{
            setQuantity(quantity+1)
        }
    }
    const decrement = ()=>{
        if (quantity === 1){
            setQuantity(1)
        }else{
            setQuantity(quantity-1)
        }
    }

    return ( 
        <div className="flex">
            <div className="border rounded-r px-3 py-1 cursor-pointer" onClick={increment}>+</div>
            <div className="border px-3 py-1 ">{quantity}</div>
            <div className="border rounded-l px-3 py-1 cursor-pointer" onClick={decrement}>-</div>
        </div>
     );
}
 
export default Quantity;