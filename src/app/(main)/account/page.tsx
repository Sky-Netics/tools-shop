import { Metadata } from "next";
import Logout from "./_components/logout";
import UserInformation from "./_components/userInformation";

export const metadata:Metadata = {
    title:"ابزارقفلی – پنل کاربری",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    
    robots:"index, follow",
  
    openGraph:{
      title:"ابزارقفلی – پنل کاربری",
      description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
      url: 'https://abzarghofli.ir/account',
      type: 'website',
      images: [
        {
          url: 'https://abzarghofli.ir/assets/logo.png',
          width: 150,
          height: 80,
          alt: 'ابزار قفلی',
          type: 'image/png'
        }
      ],
      locale :"fa_IR"
    },
}

const Account = () => {
    return ( 
        <div className="max-w-[1400px] mx-auto px-2">
            <div className="flex max-lg:flex-col-reverse gap-5 mt-10">
                <div className="w-1/5 max-lg:w-full border-2 rounded-lg p-4">
                    <div className="flex justify-between items-center text-customGray">
                        <UserInformation />
                        <svg className="size-5 cursor-pointer text-customYellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </div>
                    <div className="mt-12 text-gray-800">
                        <div className="h-12 flex gap-4 items-center px-2 cursor-pointer active">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <p>خلاصه فعالیت</p>
                        </div>
                        <hr />
                        <div className="h-12 flex gap-4 items-center px-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p>سفارش‌ها</p>
                        </div>
                        <hr />
                        <div className="h-12 flex gap-4 items-center px-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <p>لیست‌های من</p>
                        </div>
                        <hr />
                        <div className="h-12 flex gap-4 items-center px-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <p>اطلاعات کاربری</p>
                        </div>
                        <hr />
                        <Logout />
                    </div>
                </div>
                <div className="w-4/5 max-lg:w-full border-2 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold border-b-2 border-customYellow">سفارش‌های من</p>
                        <p className="text-[#19BFD3] text-sm cursor-pointer">مشاهده همه</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Account;