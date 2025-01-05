import { useState } from "react";

const NavItems = () => {

    const [sizeTool,setSizeTool] = useState(false);
    const [fuelTool,setFuelTool] = useState(false);
    const [charging,setCharging] = useState(false);
    const [cuttingTool,setCuttingTool] = useState(false);
    const [handTool,setHandTool] = useState(false);
    const [work,setWork] = useState(false);
    const [safty,setSafty] = useState(false);

    return (<>
        <div onMouseEnter={()=>{setSizeTool(true)}} onMouseLeave={()=>setSizeTool(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار اندازه گیری</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${sizeTool ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-500">تراز دستی</a>       
                <a href="/" className="hover:text-yellow-500">تراز لیزری</a>
                <a href="/" className="hover:text-yellow-500">خط کش</a>
                <a href="/" className="hover:text-yellow-500">دماسنج</a>
                <a href="/" className="hover:text-yellow-500">گونیا</a>
                <a href="/" className="hover:text-yellow-500">متر دستی</a>
                <a href="/" className="hover:text-yellow-500">متر لیزری </a> 
            </div>
        </div>
        <div onMouseEnter={()=>{setFuelTool(true)}} onMouseLeave={()=>setFuelTool(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار بادی وبنزینی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${fuelTool ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">اره بنزینی</a>
                <a href="/" className="hover:text-yellow-400">پرچ کن</a>
                <a href="/" className="hover:text-yellow-400">پیچ گوشتی بادی</a>
                <a href="/" className="hover:text-yellow-400">چکش بادی</a>
                <a href="/" className="hover:text-yellow-400">چمن زن بنزینی</a>
                <a href="/" className="hover:text-yellow-400">دریل بادی</a>
            </div>
        </div>
        <div onMouseEnter={()=>{setCharging(true)}} onMouseLeave={()=>setCharging(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار شارژی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${charging ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">اتو</a>
                <a href="/" className="hover:text-yellow-400">پولیش</a>
                <a href="/" className="hover:text-yellow-400">دریل</a>
                <a href="/" className="hover:text-yellow-400">سشوار</a>
                <a href="/" className="hover:text-yellow-400">فرز</a>
            </div>
        </div>
        <div onMouseEnter={()=>{setCuttingTool(true)}} onMouseLeave={()=>setCuttingTool(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار برش</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${cuttingTool ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">الکترود جوشکاری</a>
                <a href="/" className="hover:text-yellow-400">ترانس جوشکاری</a>
                <a href="/" className="hover:text-yellow-400">دسته جوشکاری</a>
                <a href="/" className="hover:text-yellow-400">شلنگ هواگاز</a>
            </div>
        </div>
        <div onMouseEnter={()=>{setHandTool(true)}} onMouseLeave={()=>setHandTool(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار دستی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${handTool ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">آچار</a>
                <a href="/" className="hover:text-yellow-400">انبر</a>
                <a href="/" className="hover:text-yellow-400">چکش</a>
                <a href="/" className="hover:text-yellow-400">دیلم</a>
                <a href="/" className="hover:text-yellow-400">سوهان</a>
                <a href="/" className="hover:text-yellow-400">سیم چین</a>
                <a href="/" className="hover:text-yellow-400">سیم لخت کن</a>
                <a href="/" className="hover:text-yellow-400">کاتر</a>
            </div>
        </div>
        <div onMouseEnter={()=>{setWork(true)}} onMouseLeave={()=>setWork(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>تجهیزات کارگاهی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${work ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">تلمبه</a>
                <a href="/" className="hover:text-yellow-400">جرثقیل</a>
                <a href="/" className="hover:text-yellow-400">جک</a>
                <a href="/" className="hover:text-yellow-400">گیره</a>
            </div>
        </div>
        <div onMouseEnter={()=>{setSafty(true)}} onMouseLeave={()=>setSafty(false)} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>لوازم ایمنی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div className={`bg-white absolute top-9 flex-col ${safty ? "flex" : "hidden"}
            border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">دستکش</a>
                <a href="/" className="hover:text-yellow-400">عینک</a>
                <a href="/" className="hover:text-yellow-400">کفش کار</a>
                <a href="/" className="hover:text-yellow-400">کلاه</a>
                <a href="/" className="hover:text-yellow-400">لباس کار</a>
                <a href="/" className="hover:text-yellow-400">ماسک</a>
                <a href="/" className="hover:text-yellow-400">مولتی متر</a>
            </div>
        </div>  
    </>);
}
 
export default NavItems;