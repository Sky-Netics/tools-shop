import Link from "next/link"
import blog from '../../../../public/blog.svg'
import Image from "next/image"
import BlogPost from "../BlogPost/blogPost"

const BlogPostsContainer = () => {
    return(
        <div className="py-8">
            <div className="mx-[150px] mb-2">
       
            <div className="flex">
                <div className="flex items-center">
                    <Image src={blog} alt="blog icon" width={25}/>

                    <h1 className="mr-2">وبلاگ</h1>
                </div>

                <div className="w-[90%] border border-dashed border-[#b6b6b6] h-0 mt-3 mr-5">

                </div>

                <div className="mr-3 py-1 w-[150px]">
                    <Link className="flex items-center" href={'/'}>
                    <div className="bg-customYellow rounded-[50%] w-4 h-4">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </div>

                    <h1 className="mr-2 text-[14px]">مشاهده همه</h1>
                    </Link>
                </div>

            </div>

                <div className="flex py-3 gap-4">
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                </div>   

            </div>
        </div>
    )
}

export default BlogPostsContainer