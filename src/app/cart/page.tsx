import Image from "next/image";
import Hamlet from '../../../public/assets/tools/Hamlet.webp';
import Delete from '../../../public/delete.svg';

const CartPage = () => {
    return ( 
        <div>
            <h1 className="text-center mt-7 text-[32px]">سبد خرید</h1>

            <div className="mx-[50px] min-h-fit my-5 border-[#b6b2b2] rounded-md">
                <table className="w-full text-customGray border">
                    <thead className="">
                        <tr className="bg-gray-100 rounded-xl">
                            <th className="py-5 border w-5/12">محصول</th>
                            <th className="py-5 border">قیمت</th>
                            <th className="py-5 border">تعداد</th>
                            <th className="py-5 border">مجموع قیمت</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        <tr className="border">
                            <td className="py-5 border flex items-center justify-between">
                                <Image src={Delete} alt="delete icon" width={35} height={35} className="mx-2 cursor-pointer"/>
                                <Image src={Hamlet} alt="product" width={70} height={70} className="bg-red-500"/>
                                <h1 className="ml-4 text-[22px] truncate">کلاه ایمنی هترمن مدل MK6 بدون عینک</h1>
                            </td>
                            <td className="py-5 border">1,000,000</td>
                            <td className="py-5 border">5</td>
                            <td className="py-5 border">5,000,000</td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <div className="mx-[50px] flex mt-10">
                    <div className="w-1/2">
                        <label className="text-[20px] text-customGray pb-4">کد تخفیف</label><br />
                        <input type="text" className="border w-[400px] px-4 py-2 mt-4"/>
                        <button className="bg-customYellow mx-3 px-4 py-2">اعمال کد تخفیف</button>
                    </div>

                    <div className="w-1/2 flex justify-end items-end">
                    
                    <div className="flex items-center gap-5">
                        <h1 className="text-[18px] text-customGray">مجموع قیمت:</h1>
                        <h2 className="text-[24px] font-semibold">5,000,000 تومان</h2>
                    </div>

                    <button className="bg-blue-500 text-white px-[123px] py-2 mr-4 rounded-md hover:">پرداخت</button>

                    </div>
            </div>

        </div>
    );
}

export default CartPage;
