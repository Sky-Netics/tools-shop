'use client'

import Link from "next/link";
import { useState } from "react";

const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) return null;
  
    try {
      const response = await fetch('http://127.0.0.1:8000/account/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }
  
      const data = await response.json();
      // Store new tokens in localStorage
      localStorage.setItem('access_token', data.access_token);
      return data.access_token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      return null;
    }
};

const SignupPage = () => {
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
    
    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<number | string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const SendRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    // First, try to refresh the token if it's expired or missing
    const accessToken = await refreshToken();
    if (!accessToken) {
        // Handle case where token refresh failed (e.g., show an error message)
        console.error('Token refresh failed');
        return;
    }

    // Send signup request with the fresh token if available
    fetch('http://127.0.0.1:8000/account/signup/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`, // Use the fresh access token
        },
        body: JSON.stringify({
        username,
        email,
        password,
        password2: confirmPassword,
        profile: {
            first_name: name,
            last_name: lastName,
            phone_number: phoneNumber,
        },
        }),
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        window.location.pathname = "/"
        return response.json();
        })
        .then(data => {
        console.log('Success:', data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    };

    return ( 
        <div className="flex justify-center">
            <div className="border w-fit px-10 mt-12">
            <form className="px-4 w-full max-w-[900px] py-6  text-subTitle space-y-6 md:space-y-8">
                <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>

                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>
                </div>

                <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>

                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
                    htmlFor="phone"
                    >
                    شماره تلفن
                    </label>
                    <input
                    name="phone"
                    id="phone"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>
                </div>

                <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>
                </div>

                <div className="space-y-6 md:space-y-0 md:flex items-center justify-between gap-5">
                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>

                <div className="relative w-full">
                    <label
                    className="absolute right-3 bg-white top-5 -translate-y-1/2 transition-all"
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-inputBorder w-full border px-4 py-2 focus:outline-none shadow rounded"
                    />
                </div>
                </div>

                <p className="text-center">آیا از قبل حساب کاربری دارید؟ <Link className="text-blue-500 " href={'/login'}>ورود</Link></p>

                <div className="text-center">
                <button className="bg-blue-600 text-white text-[18px] rounded-xl w-full py-3 mx-auto mt-2 transition hover:bg-[#298ed6]" onClick={SendRequest}>
                    ثبت نام
                </button>
                </div>
            </form>
            </div>
        </div>
     );
}
 
export default SignupPage;