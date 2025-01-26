'use client'

import { useRef, useState } from "react"
import NavItems from "./navItems";
import RightBarItems from "./rightBarItems";
import Link from "next/link";

const Navbar = () => {
    const rigthBar = useRef<HTMLDivElement|null>(null);
    const placeholder = useRef<HTMLDivElement|null>(null);

    const openBar = ()=>{
        if (rigthBar.current)
            rigthBar.current.style.right = "0px";
        placeholder.current?.classList.remove("hidden");
    }
    const closeBar = ()=>{
        if (rigthBar.current)
            rigthBar.current.style.right = "-288px";
        placeholder.current?.classList.add("hidden");
    }

    return (<>
        <div className="layout flex text-gray-600 flex-col lg:flex-row px-2 pt-5 text-sm">
            <div>
                <Link href={'/'}>
                <img className="object-cover" src="https://demos.mahdisweb.net/tools/wp-content/uploads/2023/12/h8-logo.png" alt="" />
                </Link>
            </div>
            <div className="hidden w-[500px] mr-2 lg:flex">
                <div className="relative w-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute top-1/2 -translate-y-1/2 right-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const query = e.target.search.value;
                            if (query) {
                            window.location.href = `/search?query=${query}`;
                            }
                        }}
                        className="w-full"
                        >
                        <input
                            type="text"
                            name="search"
                            placeholder="جستجو کنید..."
                            className="w-full h-full mr-7 pr-2 focus:outline-none"
                        />
                    </form>

                    {/* <input className="w-full h-full mr-7 pr-2 focus:outline-none" placeholder="دنبال چی میگردی" type="text" name="" id="" /> */}
                </div>
            </div>
            <div className="flex items-center gap-5 mr-auto ml-4 lg:border-r-2 lg:pr-2">
                <Link href={'/login'}>

                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p>حساب کاربری</p>
                </div>

                </Link>
                <div className="gap-2 hidden sm:flex items-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p>مورد علاقه</p> */}
                    <Link href={'/about-us'}>
                        <p>درباره ما</p>
                    </Link>
                </div>

                <Link href={'/cart'}>
                    <div className="flex gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 z-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <div className="w-5 h-5 pt-1 rounded-full absolute -top-2 -left-3
                        text-[10px] flex-center bg-gray-800 text-white">0</div>
                    </div>
                </Link>

            </div>
        </div>
        <div className="w-full bg-yellow-400 flex justify-between px-4 text-sm py-3 mt-8">
            <div onClick={openBar} className="flex items-center gap-2 lg:hidden text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <p className="">فهرست</p>
            </div>
            <div className="hidden lg:flex gap-6 text-gray-800">
                <NavItems />
            </div>
            <div className="flex items-center gap-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <p className="">تخفیفات ویژه</p>
            </div>
        </div>
        <div>
            <div style={{right:"-288px"}} ref={rigthBar} className="h-full text-gray-600 z-30 transition-all w-72 fixed top-0 bottom-0 border-l-[4px] bg-white">
                <div className="flex justify-end p-3">
                    <svg onClick={closeBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 te">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <hr className="border-gray-600"/>
                <RightBarItems />
            </div>
            <div onClick={closeBar} ref={placeholder} className="h-full z-20 w-full hidden bg-[rgba(255,255,255,0.7)] backdrop-blur-[2px] fixed top-0 bottom-0 left-0"></div>
        </div>
     </>);
}
 
export default Navbar;