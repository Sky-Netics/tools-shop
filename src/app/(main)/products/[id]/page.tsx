import Link from 'next/link'
import Image from 'next/image'

import Tick from '../../../../../public/assets/tick.svg'
import exclamationMark from '../../../../../public/exclamation-mark.svg'
import truck from '../../../../../public/truck.svg'
import Telegram from '../../../../../public/telegram.svg'
import getProductById from '@/app/actions/getDatabyId'
import { Products } from '@/app/interfaces/products'
import { BACKEND_DOMAIN } from '@/app/backDomain'
import { getData } from '@/app/actions/getData'
import Product from '@/app/components/Product/Product'
import ProductQ from '../_components/productQ'
import ProductAdd from '../_components/productAdd'


interface ProductIdParams{
    params:{id :string }
}

const ProductId = async ({params}:ProductIdParams) => {

    const param = await params
    
    const productData:Products|string = await getProductById(param.id);
    let products:Products[]|string = await getData(`${BACKEND_DOMAIN}/store/products`)
    if (typeof products !== "string")
        products = products.slice(0,6)

    if (typeof productData === "string")
        return <div className='h-40 w-full flex-center text-2xl font-bold'>{productData}</div>

    return (
        <div className='my-10 max-w-[1400px] mx-auto px-6 max-sm:px-2'>
            <div className='border-b-2 flex text-gray-500 pb-2 items-center justify-between'>
                <div className='flex gap-2'>
                    <Link href="/">خانه</Link>
                    <p>/</p>
                    <Link href="/products">فروشگاه</Link>
                    <p>/</p>
                    <Link className='text-black line-clamp-1' href={`/products/${param.id}`}>{productData.name}</Link>
                </div>
                <div>
                    <Link aria-label='Link to products' href="/products">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='py-10'>
                
                <div className='flex max-sm:flex-col gap-10'>
                    <div className='w-2/5 max-lg:w-1/2 max-md:w-3/5 max-sm:w-full'>
                        <div className='border'>
                            <Image src={BACKEND_DOMAIN+productData.image} alt={productData.name} width={392} height={392} className='w-full h-full'/>
                        </div>
                    </div>
                    <div className='w-2/5 max-lg:w-1/2 max-md:w-2/5 max-sm:w-full text-customGray'>
                        <h1 className='text-2xl text-gray-900 font-bold'>{productData.name}</h1>
                        
                        <div className='flex gap-2 mt-1'>
                            <Image src={Tick} alt='tick icon'/>
                            <p>موجود است</p>
                        </div>

                        <p className='my-4'>دسته : ابزار برقی و شارژی</p>

                        <ul className='list-disc list-inside space-y-1'>
                            <li>برند کاپریول</li>
                            <li>جنس دسته پلاستیک</li>
                            <li>جنس بدنه فولاد کربنی</li>
                            <li>ابعاد 30*50*250 میلی متر</li>
                        </ul>

                        <p className='text-customYellow text-2xl my-4'>{productData.price}<span className='text-customGray mr-2'>تومان</span></p>

                        <div className='mt-5 w-[250px] flex items-center justify-center gap-32'>
                            رنگ
                            <div className='flex gap-2 my-2'>
                                <div className='w-5 h-5 rounded-[50%] bg-customYellow cursor-pointer border border-customGray'></div>
                                <div className='w-5 h-5 bg-red-500 rounded-[50%] cursor-pointer border border-customGray'></div>
                            </div>

                        </div>
                        <ProductQ />
                        <ProductAdd id={param.id}/>

                        <div className='flex max-md:flex-col max-md:items-end max-sm:flex-row my-4'>
                            <p>آیا قیمت مناسب تری سراغ دارید؟</p>
                            <div className='mr-4'>
                                <button className='ml-4 underline'>بله</button>
                                <button className='underline'>خیر</button>
                            </div>
                        </div>

                    </div>
                    <div className='w-1/5 border-customYellow border-4 max-lg:hidden
                        flex flex-col items-center justify-evenly shadow'>
                        <div>
                            <p className='text-gray-500'>ارسال رایگان</p>
                            <p>بالای ده میلیون</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>ضمانت اصالت</p>
                            <p>محصولات اورجینال</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>پشتیبانی</p>
                            <p>مشاوره خرید محصول</p>
                        </div>
                        <div>
                            <p className='text-gray-500'>تحویل فوری</p>
                            <p>سریع ترین زمان</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex mt-10 max-sm:flex-col max-sm:items-center max-sm:gap-6'>
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
            <div className='py-4 px-20 max-sm:px-4'>
                <h2 className='text-2xl font-bold'>{productData.name}</h2>
                <p className='text-gray-600'>{productData.description}</p>

                <h2 className='text-2xl font-bold mt-4'>مشخصات {productData.name}</h2>
                <ul className='list-disc list-inside text-gray-600 space-y-1'>
                    <li>برند کاپریول</li>
                    <li>جنس دسته پلاستیک</li>
                    <li>جنس بدنه فولاد کربنی</li>
                    <li>ابعاد 30*50*250 میلی متر</li>
                </ul>
            </div>
            <div className='mt-10'>
                <h3 className='text-xl font-bold'>محصولات مشابه</h3>
                <div className='flex flex-wrap justify-center max-md:grid grid-cols-2 max-md:hide-last-two-mb max-xl:gap-2 my-3'>
                    {typeof products !== "string" ? (
                        products.map((product: any, index: number) => (
                            <Link href={`/products/${product.id}`} key={index}>
                            <Product description="" name={product.name} price={product.price} image={product.image} id={product.id} />
                        </Link>
                    ))
                    ) : (
                    <div className="text-red-500 mx-auto">
                        {products}
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductId
