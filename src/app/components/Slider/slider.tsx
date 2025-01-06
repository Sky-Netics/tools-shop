'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import image1 from '../../../../public/assets/slider-1.png'
import image2 from '../../../../public/assets/slider-2.png'

const Slider = () => {
    const [imagesArray] = useState([image1, image2])
    const [indexArray, setIndexArray] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexArray(prevIndex => (prevIndex + 1) % imagesArray.length)
        }, 5000) 
        
        return () => clearInterval(interval)
    }, [imagesArray.length])

    return (
        <div className="w-full h-[400px] bg-gray-200 rounded-md max-lg:h-[300px] max-sm:h-[250px]">
            <Image src={imagesArray[indexArray]} alt={`slide image ${indexArray + 1}`} className="h-full rounded-md" />
        </div>
    )
}

export default Slider
