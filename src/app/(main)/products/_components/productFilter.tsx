'use client'

import { useRef } from "react";
import RightFilter from "./rightFilter";


const ProductFilter = () => {
    const sortContainer = useRef<HTMLDivElement|null>(null);
    const rightFilter = useRef<HTMLDivElement|null>(null);
    const filterBg = useRef<HTMLDivElement|null>(null);

    const setSort = (action:string)=>{
        if (action === "open"){
            sortContainer.current?.classList.remove("hidden");
            setTimeout(()=>{
                if (sortContainer.current){
                    sortContainer.current.style.opacity = "1";
                    sortContainer.current.style.top = "32px";
                }
            },40)
        }else{
            if (sortContainer.current){
                sortContainer.current.style.top = "52px";
                sortContainer.current.style.opacity = "0";
            }
            setTimeout(()=>{
                sortContainer.current?.classList.add("hidden");
            },150)
        }
    }

    const openFilter = ()=>{
        filterBg.current?.classList.remove("hidden");
        setTimeout(()=>{
            if (rightFilter.current && filterBg.current){
                rightFilter.current.style.right = "0px"
                filterBg.current.style.opacity = "1"
            }
        },150)
    }
    const closeFilter = ()=>{
        if (rightFilter.current && filterBg.current){
            rightFilter.current.style.right = "-344px"
            filterBg.current.style.opacity = "0"
            setTimeout(()=>{
                filterBg.current?.classList.add("hidden");
            },150)
        }
    }

    return (
     <>
        <div className="text-gray-600 cursor-pointer">
        <div onMouseEnter={()=>setSort("open")} onMouseLeave={()=>setSort("close")} className="flex items-center gap-8 border-b max-lg:hidden relative">
            <p>مرتب سازی</p>
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <div className="bg-none w-full h-4 absolute top-4"></div>
            <div ref={sortContainer} style={{top:"52px",opacity:"0"}} className="absolute bg-white text-nowrap duration-150 p-3 hidden space-y-2 -left-4 customShadow">
                <p className="hover:scale-105 duration-150">مرتب سازی براساس جدید ترین</p>
                <p className="hover:scale-105 duration-150">مرتب سازی براساس محبوب ترین</p>
                <p className="hover:scale-105 duration-150">مرتب سازی براساس محبوبیت</p>
                <p className="hover:scale-105 duration-150">مرتب سازی براساس ارزان ترین</p>
                <p className="hover:scale-105 duration-150">مرتب سازی براساس گران ترین</p>
            </div>
        </div>
        <div onClick={openFilter} className="hidden max-lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>
        </div>
        </div>
        <>
          <div ref={rightFilter} style={{right:"-344px"}} className="fixed w-[344px] top-0 bottom-0 transition-all border-l-4 bg-white z-50 overflow-y-auto">
              <div onClick={closeFilter} className="flex items-center gap-1 justify-end p-4 border-b-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  <p>بستن</p>
              </div>
              <div className="p-4">
                  <RightFilter id="component"/>
              </div>
          </div>
          <div ref={filterBg} style={{opacity:"0"}} onClick={closeFilter} className="fixed w-full hidden h-full left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)] cursor-pointer backdrop-blur-sm z-40"></div>
        </>
     </>
     );
}
 
export default ProductFilter;