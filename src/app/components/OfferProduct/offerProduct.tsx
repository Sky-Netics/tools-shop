'use client';
import Image from "next/image";
import Tools from '../../../../public/assets/tools/tools1.webp';
import { useState, useEffect } from "react";
import Link from "next/link";

const OfferProduct = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = endTime - now;

            if (difference > 0) {
                const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
                const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

                setTimeLeft({ hours, minutes, seconds });
            } else {
                clearInterval(timer);
                setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return ( 
        <Link href={'/products/1'}>
            <div className="h-full w-[200px] border px-3 py-3 bg-white">
                <h1 className="text-[13px] text-customGray truncate">آچار بکس جاب مدل JB-032 مجموعه 32 عددی</h1>

                <Image src={Tools} alt="offer product image" />

                <div className="text-[14px] text-center font-semibold">
                    <span className="text-customYellow">۱۰,۰۰۰,۰۰۰</span>
                    <span className="line-through ml-3">۱۲,۰۰۰,۰۰۰</span>
                    <span className="mr-1">تومن</span>
                </div>

                <div className="flex gap-2 mt-2 justify-center text-center text-white bg-gray-900 p-2 rounded-lg text-[12px]">
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{timeLeft.hours || '00'}</span>
                        <span>ساعت</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{timeLeft.minutes || '00'}</span>
                        <span>دقیقه</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{timeLeft.seconds || '00'}</span>
                        <span>ثانیه</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OfferProduct;
