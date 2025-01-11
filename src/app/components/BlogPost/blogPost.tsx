import Image from "next/image"
import blogIamge from '../../../../public/assets/blog-image.webp'
import LeftArrow from '../../../../public/left-arrow.svg'

const BlogPost = () => {
    return(
        <div className="w-[300px] h-[300px] border py-4 px-4 rounded-lg">
            
            <div className="w-full flex justify-center">
            <Image src={blogIamge} alt="blog image" width={265} height={163} className="rounded-lg"/>
            </div>

            <div className="mt-4">
                <h1>بهترین مارک آچار فرانسه در سال ۲۰۲۳</h1>
            </div>

            <div className="flex items-center justify-between py-3 max-sm:flex-col">
                <button className="bg-customYellow px-6 py-1 rounded-lg flex items-center gap-2 transition hover:bg-[#ffde39]">
                    خواندن
                    <Image src={LeftArrow} alt="Left arrow" width={15} height={15}/>
                </button>
                <h1 className="text-customGray text-[14px] max-sm:mt-5">19/10/1403</h1>
            </div>
        </div>
    )
}

export default BlogPost