const Discount = () =>{
    return(
        <div className="flex items-center justify-between bg-gray-800 text-white p-6 rounded-lg mx-4 max-sm:flex-col-reverse">
            <div className="flex items-center justify-between max-sm:w-full gap-2">
                <div className="text-green-500">وضعیت فعال</div>
                <div className="bg-gray-700 rounded text-gray-300">sky-netics2024</div>
            </div>
            <div className="flex text-right justify-between max-sm:w-full max-sm:mb-4 gap-2">
                <p className="">تخفیف ویژه افتتاح فروشگاه</p>
                <span className="text-yellow-400 text-lg font-bold">۳۱٪ تخفیف</span>
            </div>
        </div>
    )
}

export default Discount