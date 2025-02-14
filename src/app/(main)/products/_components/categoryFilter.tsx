'use client'

import Image from "next/image";

import chevronDown from '../../../../../public/chevronDown.svg';

const CategoryFilter = ({id}:{id:string}) => {

    const openFilterBar = (id:string)=>{
        const obj = document.getElementById(id) as HTMLDivElement;
        if (obj.offsetHeight === 0){
            obj.classList.remove("hidden");
            setTimeout(()=>{
                obj.style.maxHeight = "1000px";
            },20)
        }else{
            obj.style.maxHeight = "0px";
            setTimeout(()=>{
                obj.classList.add("hidden");
            },205)
        }
    }

    return (
        <div className="px-2 text-sm text-gray-500">
            <div>
                <div onClick={()=>openFilterBar(`filterElectricTool${id}`)} className="flex mt-4 cursor-pointer justify-between">
                    <p>ابزار برقی</p>
                    <Image style={{rotate:"0deg"}} src={chevronDown} width={15} height={15} alt="chevron down"/>
                </div>
                <div style={{maxHeight:"0px"}} id={`filterElectricTool${id}`} className="p-2 space-y-1 duration-200 hidden overflow-hidden">
                    <p className="cursor-pointer hover:text-yellow-400">اتو</p>
                    <p className="cursor-pointer hover:text-yellow-400">پولیش</p>
                    <p className="cursor-pointer hover:text-yellow-400">دریل</p>
                    <p className="cursor-pointer hover:text-yellow-400">سشوار</p>
                    <p className="cursor-pointer hover:text-yellow-400">فرز</p>
                </div>
            </div>
            <div>
                <div onClick={()=>openFilterBar(`filterGarageTool${id}`)} className="flex mt-4 cursor-pointer justify-between">
                    <p>ابزار گاراژی</p>
                    <Image style={{rotate:"0deg"}} src={chevronDown} width={15} height={15} alt="chevron down"/>
                </div>
                <div style={{maxHeight:"0px"}} id={`filterGarageTool${id}`} className="p-2 space-y-1 duration-200 hidden overflow-hidden">
                    <p className="hover:text-yellow-400 cursor-pointer">تلمبه</p>
                    <p className="hover:text-yellow-400 cursor-pointer">جرثقیل</p>
                    <p className="hover:text-yellow-400 cursor-pointer">جک</p>
                    <p className="hover:text-yellow-400 cursor-pointer">گیره</p>
                </div>
            </div>
            <div>
                <div onClick={()=>openFilterBar(`filterHandTool${id}`)} className="flex mt-4 cursor-pointer justify-between">
                    <p>ابزار دستی</p>
                    <Image style={{rotate:"0deg"}} src={chevronDown} width={15} height={15} alt="chevron down"/>
                </div>
                <div style={{maxHeight:"0px"}} id={`filterHandTool${id}`} className="p-2 space-y-1 duration-200 hidden overflow-hidden">
                    <p className="hover:text-yellow-400 cursor-pointer">آچار</p>
                    <p className="hover:text-yellow-400 cursor-pointer">انبر</p>
                    <p className="hover:text-yellow-400 cursor-pointer">چکش</p>
                    <p className="hover:text-yellow-400 cursor-pointer">دیلم</p>
                    <p className="hover:text-yellow-400 cursor-pointer">سوهان</p>
                    <p className="hover:text-yellow-400 cursor-pointer">سیم چین</p>
                    <p className="hover:text-yellow-400 cursor-pointer">سیم لخت کن</p>
                    <p className="hover:text-yellow-400 cursor-pointer">کاتر</p>
                </div>
            </div>
            <div>
                <div onClick={()=>openFilterBar(`filterMechanicTool${id}`)} className="flex mt-4 cursor-pointer justify-between">
                    <p>ابزار مکانیکی</p>
                    <Image style={{rotate:"0deg"}} src={chevronDown} width={15} height={15} alt="chevron down"/>
                </div>
                <div style={{maxHeight:"0px"}} id={`filterMechanicTool${id}`} className="p-2 space-y-1 duration-200 hidden overflow-hidden">
                    <p className="hover:text-yellow-400 cursor-pointer">تراز دستی</p>       
                    <p className="hover:text-yellow-400 cursor-pointer">تراز لیزری</p>
                    <p className="hover:text-yellow-400 cursor-pointer">خط کش</p>
                    <p className="hover:text-yellow-400 cursor-pointer">دماسنج</p>
                    <p className="hover:text-yellow-400 cursor-pointer">گونیا</p>
                    <p className="hover:text-yellow-400 cursor-pointer">متر دستی</p>
                    <p className="hover:text-yellow-400 cursor-pointer">متر لیزری </p> 
                </div>
            </div>
        </div>
     );
}
 
export default CategoryFilter;