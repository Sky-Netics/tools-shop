'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Hamlet from '../../../../public/assets/tools/Hamlet.webp'
import Hamlet2 from '../../../../public/assets/Helmet2.webp'
import Hamlet3 from '../../../../public/assets/Helmet3.webp'
import Tick from '../../../../public/assets/tick.svg'
import exclamationMark from '../../../../public/exclamation-mark.svg'
import truck from '../../../../public/truck.svg'
import Telegram from '../../../../public/telegram.svg'
import { useState } from 'react'
import Link from 'next/link'

const ProductId = () => {
    const params = useParams()
    const { productId } = params
    const [count, setCount] = useState(1)

    console.log(productId)

    return (
        <div className='mx-[100px] my-10 max-[900px]:mx-[30px]'>
            <h1>کلاه ایمنی هترمن مدل MK6 بدون عینک</h1> 

            <div className='border border-[#767676] rounded-lg  mt-10 flex flex-col py-6 px-3'>
                
                <div className='flex max-[550px]:flex-col'>

                
                <div className='flex w-5/12 p-2 max-md:justify-center max-[550px]:w-full'>

                <div className='w-fit h-fit ml-2'>
                    <div className='border mb-2'>
                        <Image src={Hamlet} alt='hamlet image' width={75} height={75}/>
                    </div>

                    <div className='border mb-2'>
                        <Image src={Hamlet2} alt='hamlet image' width={75} height={75}/>
                    </div>

                    <div className='border'>
                        <Image src={Hamlet3} alt='hamlet image' width={75} height={75}/>
                    </div>
                </div>

                <div className='border h-fit'>
                    <Image src={Hamlet} alt='Hamlet' width={392} height={392} className='max-md:w-[250px]'/>
                </div>

                </div>

                <div className='w-7/12  py-2 px-2 text-[14px] text-customGray max-[550px]:w-full flex flex-col max-[550px]:items-center'>
                
                <div className='flex max-[550px]:mt-5'>
                    <Image src={Tick} alt='tick icon' className='ml-2'/>
                    <p>موجود است</p>
                </div>

                <p className='my-4 text-black'>دسته : ابزار برقی و شارژی</p>

                <ul className='list-disc list-inside space-y-1'>
                    <li>جنس : پی‌وی‌سی</li>
                    <li>ویژگی‌های کلاه ایمنی : قابلیت گردش هوا</li>
                </ul>

                <p className='text-customYellow text-[20px] my-4'>۷۰,۰۰۰ <span className='text-customGray text-[14px]'>تومان</span></p>

                <div className='mt-5 w-[250px] flex justify-between'>
                    رنگ

                    <div className='flex gap-2 my-2'>
                        <div className='w-[20px] h-[20px] rounded-[50%] bg-customYellow cursor-pointer border border-customGray'></div>
                        <div className='w-[20px] h-[20px] bg-red-500 rounded-[50%] cursor-pointer border border-customGray'></div>
                    </div>

                </div>

                <div className='flex items-center my-6 gap-2 max-[700px]:flex-col'>
                        
                        <div className='flex gap-2 max-[700px]:gap-6'>
                            <button onClick={()=>setCount((prev) => prev+1)} className='bg-green-500 px-4 text-[22px] text-white rounded-md'>+</button>
                            <p className='text-[20px]'>{count}</p>
                            <button onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))} className='bg-red-500 px-4 text-[22px] text-white rounded-md'>-</button>
                        </div>
                        <div>
                            <Link href={'/cart'}>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-12 text-[16px] max-[700px]:mr-0 max-[700px]:mt-2'>افزودن به سبد خرید</button>
                            </Link>
                        </div>
                </div>

                <div className='flex my-4'>
                    <p>آیا قیمت مناسب تری سراغ دارید؟</p>
                    <div className='mr-4'>
                        <button className='ml-4 underline'>بله</button>
                        <button className='underline'>خیر</button>
                    </div>
                </div>

                </div>

                </div>


                <div className='flex mt-4 max-[550px]:flex-col max-[550px]:items-center max-[550px]:gap-6'>
                    <div className='w-5/12 flex flex-col max-[550px]:w-full max-[550px]:items-center'>

                    <div className='flex items-center'>
                        <div className='border-2 w-fit p-1 border-customYellow rounded-[50%]'>
                            <Image src={exclamationMark} alt='Exclamation Mark icon' width={15} height={15} />
                        </div>
                        <p className='mr-2 text-[14px] text-customGray'>گزارش نادرستی مشخصات</p>
                    </div>

                    <div className='mt-4 flex'>
                        <Image src={truck} alt='delivery icon' width={25} height={25}/>
                        <p className='mr-2 text-[14px] text-customGray'> آماده ارسال</p>
                    </div>

                    </div>

                    <div className='w-7/12 flex flex-col space-y-2 max-[550px]:w-full'>
                        <div className='h-[70px] rounded-md px-4 py-2 border border-customGray flex justify-between max-xl:py-1 max-[933px]:h-[80px] max-[755px]:h-[100px] max-[620px]:h-[120px] max-[550px]:items-center'>
                            <div className='border-2 border-customYellow w-fit p-1 rounded-[50%] h-fit ml-2'>
                                <Image src={exclamationMark} alt='exclamation mark icon' width={10} height={10}/>
                            </div>
                            <p className='text-[14px] text-customGray'>درخواست مرجوع کردن کالا در گروه کلاه ایمنی با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
                        </div>

                        <div className='h-[60px] mt-5 border border-[#2CC2ED] rounded-md p-2 flex'>
                            <div className='flex items-center mx-2'>
                                <Image src={Telegram} alt='telegram icon' width={30} height={30} className='text-[16px]'/>

                            </div>

                            <Link href={'https://telegram.com'} target='_blank'>
                                <div>
                                    <p className='text-[12px] text-[#2CC2ED]'>ارتباط با فروش</p>
                                    <p className='text-[12px] text-customGray'>تماس با پشتیبانی در تلگرام</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductId
