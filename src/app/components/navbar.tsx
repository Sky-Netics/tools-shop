'use client'

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react"

import NavItems from "./navItems";
import RightBarItems from "./rightBarItems";
import { LoginFetch } from "../actions/authentication";
import { useText,useVisible } from '@/app/store/alerts';
import { authResponseProps } from "../interfaces/authResponse";

import logo from "../../../public/assets/logo.png";
import { BACKEND_DOMAIN } from "../backDomain";


const Navbar = () => {
    const router = useRouter();

    const { setText } = useText();
    const { setVisible } = useVisible();
    
    const [total,setTotal] = useState(0);

    const rigthBar = useRef<HTMLDivElement|null>(null);
    const placeholder = useRef<HTMLDivElement|null>(null);
    const searchQ = useRef<HTMLInputElement|null>(null);
    const loginCart = useRef<HTMLDivElement|null>(null);

    const username = useRef<HTMLInputElement|null>(null);
    const password = useRef<HTMLInputElement|null>(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`${BACKEND_DOMAIN}/usercart/cart/`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("access")}`
                }
            })
            if (response.ok){
                const result = await response.json();
                if (result[0] !== undefined)
                    setTotal(result[0]?.item_count)
            }
        }
        fetchData()
    })

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

    const submitSearch = ()=>{
        if (searchQ.current){
            router.push(`/search?query=${searchQ.current.value}`)
            searchQ.current.value = ""
        }
    }
    const submitForm = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (searchQ.current){
            router.push(`/search?query=${searchQ.current.value}`)
            searchQ.current.value = ""
        }
    }
    const handleMouseEnter = ()=>{
        if (window.innerWidth > 624){

            loginCart.current?.classList.remove("hidden");
            setTimeout(()=>{
                if (loginCart.current){
                    loginCart.current.style.opacity = "1";
                    loginCart.current.style.top = "36px";
                }
            },50)
        }
    }
    const handleMouseLeave = ()=>{
        if (loginCart.current){
            loginCart.current.style.top = "64px";
            loginCart.current.style.opacity = "0";
            setTimeout(()=>{
                loginCart.current?.classList.add("hidden");
            },150)
        }
    }

    const submitLogin = async ()=>{
        if (password.current && username.current){
            const result:authResponseProps|string = await LoginFetch(username.current.value,password.current.value);
                    
            if (typeof result !== "string" && result.access){
                localStorage.setItem("access",result.access)
                localStorage.setItem("refresh",result.refresh)
                
                router.push("/account")
            }else{
                setText(result)
                setVisible(true)
            }
            handleMouseLeave();
        }
    }

    return (<>
        <div className="layout flex text-gray-600 gap-8 px-2 pt-5 text-sm">
            <div>
                <Link href={'/'}>
                    <Image className="w-16 h-16 object-cover" src={logo} width={100} height={100} alt="logo" />
                </Link>
            </div>
            <div className="hidden w-[500px] lg:flex">
                <div className="relative w-full flex">
                    <svg onClick={submitSearch} className="cursor-pointer size-5 absolute top-1/2 -translate-y-1/2 right-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <form onSubmit={e=>submitForm(e)}>
                        <input ref={searchQ} className="w-full h-full mr-7 pr-2 focus:outline-none" placeholder="دنبال چی میگردی" type="text" />
                    </form>
                </div>
            </div>
            <div className="flex items-center gap-5 mr-auto ml-4 lg:border-r-2 lg:pr-2">
                <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="flex items-center relative gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <Link href="/account">
                        <p>حساب کاربری</p>
                    </Link>
                    <div ref={loginCart} style={{top:"64px",opacity:0}} className="hidden absolute w-64 duration-150 left-1/2 -translate-x-1/2 bg-white customShadow p-4">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-b-white border-x-transparent border-l-[10px] border-r-[10px] border-b-[20px]"></div>
                        <div className="flex items-end justify-between">
                            <p className="text-lg font-bold">ورود</p>
                            <Link href="/sign-up" className="text-nowrap text-customYellow">ایجاد حساب کاربری</Link>
                        </div>
                        <hr />
                        <div className="py-4">
                            <div className="mt-3">
                                <p className="font-bold">نام کاربری یا آدرس ایمیل</p>
                                <div>
                                    <input ref={username} className="w-full outline-customYellow border h-10 rounded-lg mt-1" type="text" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="font-bold">رمز عبور</p>
                                <div>
                                    <input ref={password} className="w-full outline-customYellow border h-10 rounded-lg mt-1" type="password" />
                                </div>
                            </div>
                            <div className="flex-center mt-6">
                                <button onClick={submitLogin} className="bg-customYellow text-white py-2 px-16 rounded-lg hover:opacity-85">ورود</button>
                            </div>
                        </div>
                    </div>
                </div>            
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
                        text-[10px] flex-center bg-gray-800 text-white">{total}</div>
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