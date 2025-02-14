'use client'

import { useRef, useState } from "react";

const PriceRange = () => {
    const [price,setPrice] = useState("560")
    const priceRange = useRef<HTMLInputElement|null>(null);

    const priceChange = (e:React.FormEvent<HTMLInputElement>)=>{
        setPrice(e.currentTarget.value)
        const value = ((+e.currentTarget.value) - (+e.currentTarget.min)) / ((+e.currentTarget.max) - (+e.currentTarget.min)) * 100;
        e.currentTarget.style.background = `linear-gradient(to left, #fdcf07 ${value}%, #ddd ${value}%)`; 
    }

    return ( 
        <div className="mt-8">
            <input className="w-full" onInput={e=>priceChange(e)} value={price} ref={priceRange} min={0} max={1120} type="range" name="priceRange" id="priceRange" />
            <div className="flex max-xl:flex-col items-center gap-2">
                <div className="flex items-center">
                    <label className="opacity-50" htmlFor="priceRange">قیمت :</label>
                    <p className="text-xs">0 تومن - {price} تومن</p>
                </div>
                <button className="py-1 px-4 mr-auto max-xl:mx-auto max-xl:w-full bg-customYellow text-white rounded-xl hover:opacity-70">فیلتر</button>
            </div>
        </div>
     );
}
 
export default PriceRange;