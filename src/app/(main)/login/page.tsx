import { Metadata } from "next";
import PasswordField from "./_components/passwordField";


export const metadata:Metadata = {
    title:"ابزارقفلی – ورود",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    
    robots:"index, follow",
  
    openGraph:{
      title:"ابزارقفلی – ورود",
      description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
      url: 'https://abzarghofli.ir/login',
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

const Login = () => {
    

    return ( 
        <div className="flex justify-center">
            <div className="px-8 w-full max-w-[550px] mx-4 py-5 mt-6 rounded-lg text-customGray">
                <h1 className="text-2xl font-bold mb-8 text-center text-black">ورود</h1>
                <div className="">
                    <div className="w-full mb-4">
                        <label className="bg-white" htmlFor="username">نام کاربری</label>
                        <input
                            name="username"
                            id="username"
                            type="username"
                            className="border-inputBorder w-full h-10 border px-4 mt-2 outline-customYellow shadow rounded"
                        />
                    </div>
                    <PasswordField />
                </div>
            </div>
        </div>
     );
}
 
export default Login;