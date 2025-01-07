const Discount = () =>{
    return(
        <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded-lg mx-[150px] px-5 mb-5">
            <div className="flex items-center space-x-4">
                <span className="text-green-500 ml-5">وضعیت فعال</span>
                <div className="bg-gray-700 px-4 py-2 rounded text-gray-300">abzardigi2023</div>
            </div>
            <div className="text-right">
                <p>تخفیف ویژه افتتاح فروشگاه</p>
                <span className="text-yellow-400 text-lg font-bold">۳۱٪ تخفیف</span>
            </div>
        </div>

    )
}

export default Discount