import Link from "next/link";

const NavItems = () => {

    const navItemHover = (id:string,action:string)=>{
        const currentObject = document.getElementById(id) as HTMLDivElement ;
        if (action === "open"){
            currentObject.classList.remove("hidden");
            currentObject.classList.add("flex");
            setTimeout(()=>{
                currentObject.style.opacity = '1';
                currentObject.style.top = "36px";
            },50)
        }
        else {
            currentObject.style.opacity = '0';
            currentObject.style.top = "64px";
            setTimeout(()=>{
                currentObject.classList.add("hidden");
                currentObject.classList.remove("flex");
            },150)
        }
    }

    return (<>
        <div onMouseEnter={()=>{navItemHover("sizeTool","open")}} onMouseLeave={()=>navItemHover("sizeTool","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار اندازه گیری</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="sizeTool" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
                border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <Link href="/products" className="hover:text-yellow-500">تراز دستی</Link>       
                <Link href="/products" className="hover:text-yellow-500">تراز لیزری</Link>
                <Link href="/products" className="hover:text-yellow-500">خط کش</Link>
                <Link href="/products" className="hover:text-yellow-500">دماسنج</Link>
                <Link href="/products" className="hover:text-yellow-500">گونیا</Link>
                <Link href="/products" className="hover:text-yellow-500">متر دستی</Link>
                <Link href="/products" className="hover:text-yellow-500">متر لیزری </Link> 
            </div>
        </div>
        <div onMouseEnter={()=>{navItemHover("fuelTool","open")}} onMouseLeave={()=>navItemHover("fuelTool","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار بادی وبنزینی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="fuelTool" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
                border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">اره بنزینی</a>
                <a href="/" className="hover:text-yellow-400">پرچ کن</a>
                <a href="/" className="hover:text-yellow-400">پیچ گوشتی بادی</a>
                <a href="/" className="hover:text-yellow-400">چکش بادی</a>
                <a href="/" className="hover:text-yellow-400">چمن زن بنزینی</a>
                <a href="/" className="hover:text-yellow-400">دریل بادی</a>
            </div>
        </div>
        <div onMouseEnter={()=>{navItemHover("charging","open")}} onMouseLeave={()=>navItemHover("charging","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار شارژی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="charging" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
                border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <Link href="/products" className="hover:text-yellow-400">اتو</Link>
                <Link href="/products" className="hover:text-yellow-400">پولیش</Link>
                <Link href="/products" className="hover:text-yellow-400">دریل</Link>
                <Link href="/products" className="hover:text-yellow-400">سشوار</Link>
                <Link href="/products" className="hover:text-yellow-400">فرز</Link>
            </div>
        </div>
        <div onMouseEnter={()=>{navItemHover("cutting","open")}} onMouseLeave={()=>navItemHover("cutting","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار برش</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="cutting" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
                border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">الکترود جوشکاری</a>
                <a href="/" className="hover:text-yellow-400">ترانس جوشکاری</a>
                <a href="/" className="hover:text-yellow-400">دسته جوشکاری</a>
                <a href="/" className="hover:text-yellow-400">شلنگ هواگاز</a>
            </div>
        </div>
        <div onMouseEnter={()=>{navItemHover("handTool","open")}} onMouseLeave={()=>navItemHover("handTool","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>ابزار دستی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="handTool" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
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
        <div onMouseEnter={()=>{navItemHover("workShop","open")}} onMouseLeave={()=>navItemHover("workShop","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>تجهیزات کارگاهی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="workShop" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
                border-t-2 space-y-1 border shadow rounded border-t-yellow-400 w-40 p-2`}>
                <a href="/" className="hover:text-yellow-400">تلمبه</a>
                <a href="/" className="hover:text-yellow-400">جرثقیل</a>
                <a href="/" className="hover:text-yellow-400">جک</a>
                <a href="/" className="hover:text-yellow-400">گیره</a>
            </div>
        </div>
        <div onMouseEnter={()=>{navItemHover("safty","open")}} onMouseLeave={()=>navItemHover("safty","close")} className="relative">
            <div className="flex gap-1 items-center hover:text-gray-600 cursor-pointer">
                <p>لوازم ایمنی</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="w-full h-4 absolute"></div>
            <div id="safty" style={{opacity:0,top:"64px"}}
                className={`bg-white absolute flex-col transition-all flex z-20
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