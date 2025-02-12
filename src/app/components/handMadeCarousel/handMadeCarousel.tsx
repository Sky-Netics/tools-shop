'use client'

import { useEffect } from "react";

interface CarouselProps {
    containerID:string,
    slideID:string,
    length:number,
    nextID:string,
    prevID:string
}

const HandMadeCarousel = ({containerID,slideID,length,nextID,prevID}:CarouselProps):null => {

    useEffect(()=>{
        const width = window.innerWidth
        const count = width < 640 ? 1 : width < 770 ? 2 : width < 1024 ? 3 : 4 ;

        const container = document.getElementById(containerID) as HTMLDivElement
        const slide = document.getElementById(slideID) as HTMLDivElement
        const nextButton = document.getElementById(nextID) as HTMLDivElement
        const prevButton = document.getElementById(prevID) as HTMLDivElement

        const next = ()=>{
            const scrollValue = slide.offsetWidth
            const maxScroll = scrollValue * (length - count)
            const currentScroll = container.scrollLeft

            if (currentScroll > (maxScroll - 10))
                container.scrollLeft = 0 ;
            else
                container.scrollLeft += scrollValue
        }
        const prev = ()=>{
            const scrollValue = slide.offsetWidth
            const maxScroll = scrollValue * (length - 1)
            const currentScroll = container.scrollLeft

            if (currentScroll === 0)
                container.scrollLeft = maxScroll;
            else
                container.scrollLeft -= scrollValue
        }
        const interval = setInterval(()=>{
            next();
        },6000)

        nextButton.addEventListener("click",()=>{next()})
        prevButton.addEventListener("click",()=>{prev()})

        return ()=> {
            clearInterval(interval);
            nextButton.removeEventListener("click",next);
            prevButton.removeEventListener("click",prev);
        };

    },[])

    return null ;
}
 
export default HandMadeCarousel;