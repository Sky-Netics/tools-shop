'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useText,useVisible } from '@/app/store/alerts';
import { RegisterFetch } from "@/app/actions/authentication";
import { authResponseProps } from "@/app/interfaces/authResponse";


const SignupPage = () => {
    const { setText } = useText();
    const { setVisible } = useVisible();

    const router = useRouter() 
    
    const [proccessing,setProcessing] = useState(false);
    const [userInfo,setUserInfo] = useState({
        username:"",
        email:"",
        password:"",
        password2:"",
        profile:{
            first_name:"",
            last_name:"",
            phone_number:"",
        }
    });

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const parent = e.currentTarget.parentElement as HTMLDivElement;
        const childLabel = parent.childNodes[0] as HTMLLabelElement;
        childLabel.style.top = '0px';
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const parent = e.currentTarget.parentElement as HTMLDivElement;
        const childLabel = parent.childNodes[0] as HTMLLabelElement;
        if (e.currentTarget.value.length === 0) {
          childLabel.style.top = '20px';
        }
    };
    
    const sendRequest = async ()=>{
        setProcessing(true)

        const result:authResponseProps|string = await RegisterFetch(JSON.stringify(userInfo))

        if (typeof result !== "string" && result.access_token){
            localStorage.setItem("access",result.access_token)
            localStorage.setItem("refresh",result.refresh_token)
            
            router.push("/account")
        }else{
            setText(result)
            setVisible(true)
        }

        setProcessing(false)
    }

    return ( 
        <div className="flex justify-center">
            <div className="w-fit px-10 mt-6">
                <div className="px-4 w-full max-w-[900px] py-6 space-y-6 md:space-y-8">
                    <h1 className="text-center font-bold text-2xl text-black">ثبت نام</h1>
                    <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="name"
                        >
                        نام
                        </label>
                        <input
                        name="name"
                        id="name"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="text"
                        value={userInfo.profile.first_name}
                        onChange={(e) => setUserInfo({...userInfo,profile:{...userInfo.profile,first_name:e.target.value}})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>

                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="lastName"
                        >
                        نام خوانوادگی
                        </label>
                        <input
                        name="lastName"
                        id="lastName"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="text"
                        value={userInfo.profile.last_name}
                        onChange={(e) => setUserInfo({...userInfo,profile:{...userInfo.profile,last_name:e.target.value}})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>
                    </div>

                    <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="username"
                        >
                        نام کاربری
                        </label>
                        <input
                        name="username"
                        id="username"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="text"
                        value={userInfo.username}
                        onChange={(e) => setUserInfo({...userInfo,username:e.target.value})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>

                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="phone"
                        >
                        شماره تلفن
                        </label>
                        <input
                        name="phone"
                        id="phone"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="text"
                        value={userInfo.profile.phone_number}
                        onChange={(e) => setUserInfo({...userInfo,profile:{...userInfo.profile,phone_number:e.target.value}})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>
                    </div>

                    <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="email"
                        >
                        ایمیل
                        </label>
                        <input
                        name="email"
                        id="email"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo,email:e.target.value})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>
                    </div>

                    <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="password"
                        >
                        رمز عبور
                        </label>
                        <input
                        name="password"
                        id="password"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="password"
                        value={userInfo.password}
                        onChange={(e) => setUserInfo({...userInfo,password:e.target.value})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>

                    <div className="relative w-full">
                        <label
                        className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all px-1"
                        htmlFor="password-confirm"
                        >
                        تکرار رمز عبور
                        </label>
                        <input
                        name="password-confirm"
                        id="password-confirm"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="password"
                        value={userInfo.password2}
                        onChange={(e) => setUserInfo({...userInfo,password2:e.target.value})}
                        className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                        />
                    </div>
                    </div>

                    <p className="text-center">آیا از قبل حساب کاربری دارید؟ <Link className="text-blue-500 " href={'/login'}>ورود</Link></p>

                    <div className="text-center">
                    <button className={`bg-blue-600 text-white text-[18px] rounded-xl w-full py-3 mx-auto mt-2 transition 
                            hover:bg-[#298ed6] ${proccessing ? "opacity-50" : "opacity-100"}`} onClick={sendRequest} disabled={proccessing}>
                        ثبت نام
                    </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignupPage;