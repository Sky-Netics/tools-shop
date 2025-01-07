import Link from "next/link";
import ElectricProduct from "../Product/Product";

const ElectricProductsContainer = () => {
    return (
        <div className="mx-[150px] mb-10">

        
            <div className="flex">
                <div className="flex">
                    <svg className="pack-fontawesome w-[25px] h-[25px] ml-2" viewBox="0 0 576 512">
                        <path xmlns="http://www.w3.org/2000/svg" d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32V16zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32V16zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H32v64c0 83 63.1 151.2 144 159.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16V399.2c17.3-1.7 33.7-6.2 48.9-12.9c-.6-6-.9-12.1-.9-18.3c0-6 .3-11.8 .9-17.6c-19 11.2-41.2 17.6-64.9 17.6c-70.7 0-128-57.3-128-128V176H320v56.2c9.8-8.1 20.6-15.2 32-21V176h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H352 320 64 32 16zM320 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-96.1-81c-4.3-3.7-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1 .6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2H452.4l30.1-54.2c2.8-5 1.7-11.1-2.6-14.9z"></path>
                    </svg>

                    <h1>ابزار برقی و شارژی</h1>
                </div>

                <div className="w-[75%] border border-dashed border-[#b6b6b6] h-0 mt-3 mr-5">

                </div>

                <div className="mr-3 py-1">
                    <Link className="flex items-center" href={'/'}>
                    <div className="bg-customYellow rounded-[50%] w-4 h-4">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </div>

                    <h1 className="mr-2 text-[14px]">مشاهده همه</h1>
                    </Link>
                </div>

            </div>

            <div className="flex py-3 gap-4">
                    <ElectricProduct />
                    <ElectricProduct />
                    <ElectricProduct />
                    <ElectricProduct />
                    <ElectricProduct />
                    <ElectricProduct />
            </div>

        </div>
     );
}
 
export default ElectricProductsContainer;