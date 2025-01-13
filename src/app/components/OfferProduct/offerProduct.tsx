'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

type PropsType = {
    title: string,
    currentPrice: string,
    src: string
}

const OfferProduct = ({title, currentPrice, src}: PropsType) => {
    const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
    const [isMounted, setIsMounted] = useState(false);

    // This useEffect will run once on the client side, after the component mounts
    useEffect(() => {
        setIsMounted(true); // Ensure timer is only set on client side

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

    // Render null or a loading state until the component is mounted on the client
    if (!isMounted) {
        return null;
    }

    return (
            <div className="h-full w-[200px] border px-3 py-3 bg-white">
                <h1 className="text-[13px] text-customGray truncate">{title}</h1>

                <Image src={`http://127.0.0.1:8000${src}`} width={180} height={140} className="my-1" alt="offer product image" />

                <div className="text-[14px] text-center font-semibold">
                    <span className="text-customYellow">{currentPrice}</span>
                    <span className="line-through ml-3">1000</span>
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
    );
}

export default OfferProduct;