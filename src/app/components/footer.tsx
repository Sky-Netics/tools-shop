import MobileFooter from "./mobileFooter";

const Footer = () => {
    return ( 
        <div>
            <div className="sm:hidden">
                <MobileFooter />
            </div>
            <div className="px-4 py-10 xl:px-20 mt-16 bg-gray-100 text-sm">
                <div className="md:flex justify-between items-center gap-4">
                    <div className="pb-6 md:w-2/3">
                        <p className="font-bold pb-1">فروشگاه ابزارالات</p>
                        <p className="text-gray-600 text-sm leading-6">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص  .</p>
                    </div>
                    <div className="flex justify-center gap-6 sm:gap-12 md:gap-6 pb-6">
                        <div><img src="https://demos.mahdisweb.net/tools/wp-content/uploads/2023/12/logo-etehad.webp" alt="" /></div>
                        <div><img src="https://demos.mahdisweb.net/tools/wp-content/uploads/2023/12/enamad2_logo-1-1-e1703922367430.png" alt="" /></div>
                        <div><img src="https://demos.mahdisweb.net/tools/wp-content/uploads/2023/12/logo-samandehi.webp" alt="" /></div>
                    </div>
                </div>
                <div className="flex gap-4 pb-10">
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-24 flex-center flex-col text-sm gap-1 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <p className="text-gray-600">تحویل اکسپرس</p>
                    </div>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-24 flex-center flex-col text-sm gap-1 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
                        </svg>
                        <p className="text-gray-600">ضمانت بازگشت</p>
                    </div>
                    <div className="hidden sm:flex-center w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-24 flex-col text-sm gap-1 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p className="text-gray-600">تضمین بهترین قیمت</p>
                    </div>
                    <div className="hidden md:flex-center w-1/4 lg:w-1/5 xl:w-1/6 h-24 flex-col text-sm gap-1 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <p className="text-gray-600">ضمانت اصل بودن</p>
                    </div>
                    <div className="hidden lg:flex-center w-1/5 xl:w-1/6 h-24 flex-col text-sm gap-1 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        <p className="text-gray-600">ارسال به تمام نقاط</p>
                    </div>
                    <div className="hidden xl:flex-center w-1/6 h-24 flex-col text-sm gap-1 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <p className="text-gray-600">پرداخت درب محل</p>
                    </div>
                </div>
                <div className="lg:flex justify-between">
                    <div className="flex flex-wrap gap-y-6 w-full text-gray-600 text-sm pb-4">
                        <div className="w-1/2 sm:w-1/3">
                            <div className="flex gap-3 items-center mb-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <p className="font-bold text-black">راهنمای خرید</p>
                            </div>
                            <div className="flex flex-col">
                                <a href="/" className="hover:text-yellow-400 py-1">ثبت سفارش</a>
                                <a href="/" className="hover:text-yellow-400 py-1">رویه های ارسال سفارش</a>
                                <a href="/" className="hover:text-yellow-400 py-1">شیوه های پرداخت</a>
                            </div>              
                        </div>
                        <div className="w-1/2 sm:w-1/3">
                            <div className="flex gap-3 items-center mb-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <p className="font-bold text-black">دسترسی سریع</p>
                            </div>
                            <div className="flex flex-col">
                                <a href="/" className="hover:text-yellow-400 py-1">تماس باما</a>
                                <a href="/" className="hover:text-yellow-400 py-1">فروشگاه</a>
                                <a href="/" className="hover:text-yellow-400 py-1">وبلاگ</a>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-1/3">
                            <div className="flex gap-3 items-center mb-1">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <p className="font-bold text-black">خدمات مشتریان</p>
                            </div>
                            <div className="flex flex-col">
                                <a href="/" className="hover:text-yellow-400 py-1">سوالات متداول</a>
                                <a href="/" className="hover:text-yellow-400 py-1">حریم خصوصی</a>
                                <a href="/" className="hover:text-yellow-400 py-1">رویه بازگردانی کالا</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[500px]">
                        <div className="flex justify-between items-center pb-4">
                            <p>شبکه های اجتماعی</p>
                            <div className="flex gap-2">
                                <div className="bg-gray-300 p-2 rounded-lg transition-all hover:bg-yellow-400 cursor-pointer">
                                    <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="bg-gray-300 p-2 rounded-lg transition-all hover:bg-yellow-400 cursor-pointer">
                                    <svg width="20px" height="20px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-385.000000, -7399.000000)" fill="#505050">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z">
                                                </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="bg-gray-300 p-2 rounded-lg transition-all hover:bg-yellow-400 cursor-pointer">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#505050"/>
                                    </svg>
                                </div>
                                <div className="bg-gray-300 p-2 rounded-lg transition-all hover:bg-yellow-400 cursor-pointer">
                                    <svg width="23px" height="23px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#505050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#505050"/>
                                        <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#505050" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>آدرس شرکت</p>
                            <p>ایران, تهران ,تهران ,کوچه ی انقلاب  ,پلاک 12</p>
                        </div>
                    </div>
                </div>
                <div className="pt-10">
                    <p className="text-gray-600">کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;