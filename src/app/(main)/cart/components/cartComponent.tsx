'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Hamlet from '../../../../../public/assets/tools/Hamlet.webp';
import Delete from '../../../../../public/delete.svg';

const CartComponent = () =>{

    const [cartList, setCartList] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/usercart/cart/', {
            cache: 'no-store'
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0 && data[0].items) {
                setCartList(data);
                setItems(data[0].items);
            } else {
                setCartList([]);
                setItems([]);
            }
        })
        .catch((error) => console.error('Error fetching cart:', error));
    }, []);
    
    
    async function DeleteItem(id) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/usercart/cart/remove/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("access")}`
                },
                cache: 'no-store'
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
    
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }
    


    return(
        
        <div>
            <div className="mx-[50px] min-h-fit my-5 border-[#b6b2b2] rounded-md overflow-x-auto">
                <table className="w-full text-customGray border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-5 border w-5/12 text-center text-sm md:text-base px-2">محصول</th>
                            <th className="py-5 border text-center text-sm md:text-base px-2">قیمت</th>
                            <th className="py-5 border text-center text-sm md:text-base px-2">تعداد</th>
                            <th className="py-5 border text-center text-sm md:text-base whitespace-nowrap px-2">مجموع قیمت</th>
                        </tr>
                    </thead>

                    <tbody>

                    {
                        items.map((item, index) => (
                            <tr className="border" key={index}>
                                <td className="py-5 border flex items-center justify-center space-x-6">
                                    <Image src={Delete} alt="delete icon" width={35} height={35} className="cursor-pointer ml-4" onClick={()=>DeleteItem(item.id)}/>
                                    <Image src={Hamlet} alt="product" width={70} height={70} className="bg-red-500" />
                                    <span className="text-xs md:text-base truncate text-center">{item.product_name}</span>
                                </td>
                                <td className="py-5 border text-sm md:text-base text-center">{item.product_price} <span>تومن</span></td>
                                <td className="py-5 border text-sm md:text-base text-center">{item.quantity}</td>
                                <td className="py-5 border text-sm md:text-base text-center">{item.get_total_price} <span>تومن</span></td>
                            </tr>
                        ))
                    }
                        
                    </tbody>
                </table>
            </div>



            <div className="mx-[50px] flex mt-10 flex-col lg:flex-row lg:items-start">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-5 mb-7 lg:mb-0 flex justify-center items-center flex-col">
                    <label className="text-[20px] text-customGray pb-4 lg:pb-0 ml-2 w-[140px] text-center lg:text-right">کد تخفیف</label>
                    <div className="flex items-center">
                        <input type="text" className="border w-full lg:w-[90%] px-4 py-2 mt-0 lg:mt-0" />
                        <button className="bg-customYellow px-4 py-2 w-[180px] text-[14px] mr-2 lg:text-[16px] rounded-sm whitespace-nowrap">اعمال کد تخفیف</button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-end mt-5 lg:mt-0">
                    <div className="flex items-center gap-5">
                        <h1 className="text-[18px] text-customGray w-[120px]">مجموع قیمت:</h1>
                        <h2 className="text-[24px] font-semibold w-[200px]">
                            {cartList.length > 0 ? `${cartList[0].get_total_price} تومان` : 'در حال بارگذاری...'}
                        </h2>
                    </div>
                    <button className="bg-blue-500 text-white px-10 py-2 mt-4 rounded-md hover:bg-blue-600 w-full" onClick={()=>window.location.reload()}>پرداخت</button>
                </div>
            </div>
        </div>
        
    )
}

export default CartComponent