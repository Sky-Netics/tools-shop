'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import minus from '../../../../../public/minus.svg';
import plus from '../../../../../public/plus.svg';
import { BACKEND_DOMAIN } from "@/app/backDomain";
import { CartItmes } from "@/app/interfaces/cartItems";
import addToCart from "@/app/actions/addToCart";
import { useRouter } from "next/navigation";
import { UserInfo } from "@/app/interfaces/userInfo";
import { isUser, refreshUser } from "@/app/actions/isUser";
import { deleteItem, updateCart } from "@/app/actions/updateCart";

const CartComponent = () =>{
    const router = useRouter();

    const [items, setItems] = useState<CartItmes>()
    const [refresh,setRefresh] = useState(false);

    useEffect(() => {
        const checkUser = async ()=>{
            const result:UserInfo|number = await isUser();
            if (typeof result === "number"){
                if (result === 401){
                    const refresh = await refreshUser();
                    if (refresh === 200){
                        return 0
                    }else{
                        router.push("/login")
                    }
                }
            }
        }
        checkUser()
    }, []);

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
                console.log(result)
                setItems(result[0])
            }
        }
        fetchData()
    },[refresh])
    
    
    // async function DeleteItem(id) {
    //     try {
    //         const response = await fetch(`http://127.0.0.1:8000/usercart/cart/remove/${id}/`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${localStorage.getItem("access")}`
    //             },
    //             cache: 'no-store'
    //         });
    
    //         if (!response.ok) {
    //             throw new Error(`Error: ${response.status} ${response.statusText}`);
    //         }
    
    //         setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    //     } catch (error) {
    //         console.error('Error deleting item:', error);
    //     }
    // }
    
    const plusItem = (id:number,q:number,action:string)=>{
        if (action === "minus"){
            if (q <= 1){
                deleteItem(`${id}`)
            }else{
                updateCart(`${id}`,q-1)
            }
        }else{
            updateCart(`${id}`,q+1)
        }
        setTimeout(()=>{
            setRefresh(!refresh)
        },300)
    }

    return(
        
        <div>
            <div className="mx-2 min-h-fit my-5 border-[#b6b2b2] rounded-md overflow-x-auto">
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
                        items?.items.map((item, index) => (
                            <tr className="border" key={index}>
                                <td className="py-5 border flex items-center gap-2 justify-around space-x-6">
                                    <img src={`${BACKEND_DOMAIN}${item.product_image}`} alt={item.product_name} width={70} height={70} className="w-16 h-16 object-cover" />
                                    <span className="text-xs md:text-base truncate text-center">{item.product_name}</span>
                                </td>
                                <td className="py-5 border text-sm md:text-base text-center">{item.product_price} <span>تومن</span></td>
                                <td className="py-5 border text-sm md:text-base text-center">
                                    <div className="flex-center mb-2"><Image onClick={()=>plusItem(item.id,item.quantity,"minus")} src={minus} width={20} height={20} alt="minus"/></div>
                                    <div>{item.quantity}</div>
                                    <div className="flex-center mt-2"><Image onClick={()=>plusItem(item.id,item.quantity,"plus")} src={plus} width={20} height={20} alt="plus"/></div>
                                </td>
                                <td className="py-5 border text-sm md:text-base text-center">{item.get_total_price} <span>تومن</span></td>
                            </tr>
                        ))
                    }
                        
                    </tbody>
                </table>
            </div>



            <div className="mx-10 flex mt-10 flex-col lg:flex-row lg:items-start">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-5 mb-7 lg:mb-0 flex justify-center items-center flex-col">
                    <label className="text-[20px] text-customGray pb-4 lg:pb-0 ml-2 w-[140px] text-center lg:text-right">کد تخفیف</label>
                    <div className="flex items-center">
                        <input type="text" className="border w-full lg:w-[90%] px-4 py-2 mt-0 lg:mt-0" />
                        <button className="bg-customYellow px-4 py-2 w-[180px] text-[14px] mr-2 lg:text-[16px] rounded-sm whitespace-nowrap">اعمال کد تخفیف</button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-end mt-5 lg:mt-0">
                    <div className="flex items-center gap-5 text-lg text-customGray font-bold">
                        <p className="">مجموع قیمت:</p>
                        <p className="">
                            {items?.get_total_price}
                        </p>
                        <p>تومان</p>
                    </div>
                    <button className="bg-blue-500 text-white px-10 py-2 mt-4 rounded-md hover:bg-blue-600 w-full" onClick={()=>window.location.reload()}>پرداخت</button>
                </div>
            </div>
        </div>
        
    )
}

export default CartComponent