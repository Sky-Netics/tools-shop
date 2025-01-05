'use client'

import { useState } from "react"
import Image from "next/image"
import image1 from '../../../../public/assets/slider-1.png'
import image2 from '../../../../public/assets/slider-2.png'


const Slider = () =>{

    const [imagesArray] = useState([
        image1, 
        image2
    ])
    const [indexArray, setIndexArray] = useState(0)

    // const slideHandler = () => {
    //     if (indexArray < imagesArray.length - 1) {
    //         setTimeout(() => {
    //             setIndexArray((prev) => {
    //                 const newIndex = prev + 1;
    //                 console.log(newIndex); // مقدار جدید ایندکس را لاگ می‌کنیم
    //                 return newIndex;
    //             });
    //             slideHandler(); // فراخوانی بازگشتی
    //         }, 3000);
    //     } else {
    //         setTimeout(() => {
    //             setIndexArray(() => {
    //                 console.log(0); // ایندکس را به ۰ تنظیم می‌کنیم و لاگ می‌کنیم
    //                 return 0;
    //             });
    //             slideHandler(); // حلقه را دوباره شروع می‌کنیم
    //         }, 3000);
    //     }
    // }
    
    

    return(
        <div className="w-full h-[400px] bg-red-200 rounded-md">
            <Image src={imagesArray[indexArray]} alt="slide image 1" className="h-full rounded-md object-cover"/>
        </div>
    )
}

export default Slider