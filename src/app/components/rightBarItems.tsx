const RightBarItems = () => {
    
    const handleRightItems = (id:string,element:React.MouseEvent<HTMLDivElement>)=>{
        const rightItem = document.getElementById(id) as HTMLDivElement
        const svgElement = element.currentTarget.childNodes[1] as SVGAElement;
        
        if (rightItem.style.maxHeight === "0px"){
            rightItem.style.maxHeight = `${rightItem.scrollHeight}px`;
            svgElement.style.rotate = "0deg";
        }else{
            rightItem.style.maxHeight = `0px`
            svgElement.style.rotate = "90deg";
        }
    }

    return (
        <div>
            <div>
                <div onClick={(e)=>handleRightItems("tools",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>ابزار اندازه گیری</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="tools" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-500 py-2">تراز دستی</a>       
                    <a href="/" className="hover:text-yellow-500 py-2">تراز لیزری</a>
                    <a href="/" className="hover:text-yellow-500 py-2">خط کش</a>
                    <a href="/" className="hover:text-yellow-500 py-2">دماسنج</a>
                    <a href="/" className="hover:text-yellow-500 py-2">گونیا</a>
                    <a href="/" className="hover:text-yellow-500 py-2">متر دستی</a>
                    <a href="/" className="hover:text-yellow-500 py-2">متر لیزری </a>
                </div>
            </div>
            <div>
                <div onClick={(e)=>handleRightItems("fuels",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>ابزار بادی وبنزینی</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="fuels" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-400 py-2">اره بنزینی</a>
                    <a href="/" className="hover:text-yellow-400 py-2">پرچ کن</a>
                    <a href="/" className="hover:text-yellow-400 py-2">پیچ گوشتی بادی</a>
                    <a href="/" className="hover:text-yellow-400 py-2">چکش بادی</a>
                    <a href="/" className="hover:text-yellow-400 py-2">چمن زن بنزینی</a>
                    <a href="/" className="hover:text-yellow-400 py-2">دریل بادی</a>
                </div>
            </div>
            <div>
                <div onClick={(e)=>handleRightItems("charges",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>ابزار شارژی</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="charges" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-400 py-2">اتو</a>
                    <a href="/" className="hover:text-yellow-400 py-2">پولیش</a>
                    <a href="/" className="hover:text-yellow-400 py-2">دریل</a>
                    <a href="/" className="hover:text-yellow-400 py-2">سشوار</a>
                    <a href="/" className="hover:text-yellow-400 py-2">فرز</a>
                </div>
            </div>
            <div>
                <div onClick={(e)=>handleRightItems("cuts",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>ابزار برش</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="cuts" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-400 py-2">الکترود جوشکاری</a>
                    <a href="/" className="hover:text-yellow-400 py-2">ترانس جوشکاری</a>
                    <a href="/" className="hover:text-yellow-400 py-2">دسته جوشکاری</a>
                    <a href="/" className="hover:text-yellow-400 py-2">شلنگ هواگاز</a>
                </div>
            </div>
            <div>
                <div onClick={(e)=>handleRightItems("hands",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>ابزار دستی</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="hands" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-400 py-2">آچار</a>
                    <a href="/" className="hover:text-yellow-400 py-2">انبر</a>
                    <a href="/" className="hover:text-yellow-400 py-2">چکش</a>
                    <a href="/" className="hover:text-yellow-400 py-2">دیلم</a>
                    <a href="/" className="hover:text-yellow-400 py-2">سوهان</a>
                    <a href="/" className="hover:text-yellow-400 py-2">سیم چین</a>
                    <a href="/" className="hover:text-yellow-400 py-2">سیم لخت کن</a>
                    <a href="/" className="hover:text-yellow-400 py-2">کاتر</a>
                </div>
            </div>
            <div>
                <div onClick={(e)=>handleRightItems("works",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>تجهزات کارگاهی</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="works" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-400 py-2">تلمبه</a>
                    <a href="/" className="hover:text-yellow-400 py-2">جرثقیل</a>
                    <a href="/" className="hover:text-yellow-400 py-2">جک</a>
                    <a href="/" className="hover:text-yellow-400 py-2">گیره</a>
                </div>
            </div>
            <div>
                <div onClick={(e)=>handleRightItems("safes",e)}  className="flex items-center justify-between p-3 cursor-pointer border-gray-400 border-b">
                    <p>لوازم ایمنی</p>
                    <svg style={{rotate:"90deg"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="transition-all size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div id="safes" style={{maxHeight:'0px'}} className="flex h-full transition-all overflow-hidden flex-col px-3 bg-gray-100 divide-y">
                    <a href="/" className="hover:text-yellow-400 py-2">دستکش</a>
                    <a href="/" className="hover:text-yellow-400 py-2">عینک</a>
                    <a href="/" className="hover:text-yellow-400 py-2">کفش کار</a>
                    <a href="/" className="hover:text-yellow-400 py-2">کلاه</a>
                    <a href="/" className="hover:text-yellow-400 py-2">لباس کار</a>
                    <a href="/" className="hover:text-yellow-400 py-2">ماسک</a>
                    <a href="/" className="hover:text-yellow-400 py-2">مولتی متر</a>
                </div>
            </div>
        </div>
    );
}
 
export default RightBarItems;