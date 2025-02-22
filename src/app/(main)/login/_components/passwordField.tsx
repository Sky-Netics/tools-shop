'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useText,useVisible } from '@/app/store/alerts';
import { LoginFetch } from "@/app/actions/authentication";
import { authResponseProps } from "@/app/interfaces/authResponse";


const PasswordField = () => {
    const router = useRouter();

    const { setText } = useText();
    const { setVisible } = useVisible();

    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const [processing,setProcessing] = useState(false);

    const submitLogin = async ()=>{
        setProcessing(true);
        const username = document.getElementById("username") as HTMLInputElement ;

        const result:authResponseProps|string = await LoginFetch(username.value,password);
        
        if (typeof result !== "string" && result.access){
            localStorage.setItem("access",result.access)
            localStorage.setItem("refresh",result.refresh)
            
            router.push("/account")
        }else{
            setText(result)
            setVisible(true)
        }
        
        setProcessing(false);
    }

    return (<> 
        <div className="relative w-full">
            <label className="bg-white font-bold" htmlFor="password">رمز عبور</label>
            <div className="flex relative mt-4">
                <input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-inputBorder outline-customYellow w-full h-10 border shadow rounded"
                />

                <div className="absolute left-2 top-3 bg-white cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}}>
                    {showPassword ?
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path d="M 23.986328 9 C 12.666705 9 2.6928719 16.845918 0.046875 27.126953 A 1.5002454 1.5002454 0 0 0 2.953125 27.873047 C 5.2331281 19.014082 14.065951 12 23.986328 12 C 33.906705 12 42.767507 19.01655 45.046875 27.873047 A 1.5002454 1.5002454 0 0 0 47.953125 27.126953 C 45.306493 16.84345 35.305951 9 23.986328 9 z M 24.001953 17 C 18.681885 17 14.337891 21.343999 14.337891 26.664062 C 14.337891 31.984127 18.681885 36.330078 24.001953 36.330078 C 29.322021 36.330078 33.667969 31.984126 33.667969 26.664062 C 33.667969 21.343999 29.322021 17 24.001953 17 z M 24.001953 20 C 27.700702 20 30.667969 22.965317 30.667969 26.664062 C 30.667969 30.36281 27.700702 33.330078 24.001953 33.330078 C 20.303205 33.330078 17.337891 30.362809 17.337891 26.664062 C 17.337891 22.965317 20.303205 20 24.001953 20 z"></path>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                            <path d="M 42.470703 3.9863281 A 1.50015 1.50015 0 0 0 41.439453 4.4394531 L 28.025391 17.853516 C 28.02058 17.85139 28.016533 17.847821 28.011719 17.845703 L 25.652344 20.205078 C 25.657802 20.206406 25.662515 20.209597 25.667969 20.210938 L 17.210938 28.667969 C 17.209447 28.661908 17.206553 28.656457 17.205078 28.650391 L 14.845703 31.009766 C 14.848052 31.015107 14.851157 31.020054 14.853516 31.025391 L 4.4394531 41.439453 A 1.50015 1.50015 0 1 0 6.5605469 43.560547 L 16.513672 33.607422 C 18.345732 35.683816 21.01901 37 24 37 C 29.514 37 34 32.514 34 27 C 34 24.019566 32.683637 21.345974 30.607422 19.513672 L 35.052734 15.068359 C 39.90447 17.90912 43.668811 22.496845 45.050781 27.869141 C 45.220781 28.549141 45.83 29 46.5 29 C 46.62 29 46.749141 28.989219 46.869141 28.949219 C 47.679141 28.749219 48.159219 27.930859 47.949219 27.130859 C 46.409379 21.128251 42.461227 16.073087 37.277344 12.84375 L 43.560547 6.5605469 A 1.50015 1.50015 0 0 0 42.470703 3.9863281 z M 23.990234 9 C 12.820234 9 2.7507813 16.620859 0.05078125 27.130859 C -0.15921875 27.930859 0.32085937 28.749219 1.1308594 28.949219 C 1.9308594 29.159219 2.7492187 28.679141 2.9492188 27.869141 C 5.2792187 18.819141 14.330234 12 23.990234 12 C 25.700234 12 27.389531 12.209141 29.019531 12.619141 L 31.480469 10.160156 C 29.090469 9.4001562 26.570234 9 23.990234 9 z M 24 17 C 18.486 17 14 21.486 14 27 C 14 27.197 14.017297 27.390938 14.029297 27.585938 L 17.751953 23.863281 C 18.428953 22.521281 19.521281 21.428953 20.863281 20.751953 L 24.583984 17.029297 C 24.389984 17.017297 24.197 17 24 17 z M 28.472656 21.648438 C 30.00901 22.931321 31 24.845705 31 27 C 31 30.859 27.86 34 24 34 C 21.845705 34 19.931321 33.009291 18.648438 31.472656 L 21.488281 28.632812 A 3 3 0 0 0 24 30 A 3 3 0 0 0 25.632812 24.488281 L 28.472656 21.648438 z"></path>
                        </svg> 
                    }
                </div>
            </div>
        </div>
        <p className="text-center mt-8">آیا از قبل حساب کاربری ندارید؟ <Link className="text-blue-600 " href={'/sign-up'}>ثبت نام</Link></p>
        <div className="text-center">
            <button onClick={submitLogin} disabled={processing} className={`bg-blue-600 text-white text-[18px] rounded-xl
                    w-full py-3 mx-auto mt-2 transition hover:bg-[#298ed6] ${processing ? "opacity-50" : "opacity-100"}`}>
                ورود
            </button>
        </div>
    </>);
}
 
export default PasswordField;