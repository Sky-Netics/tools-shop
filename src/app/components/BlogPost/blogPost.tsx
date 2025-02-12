import Link from "next/link"
import Image from "next/image"

import LeftArrow from '../../../../public/left-arrow.svg'


interface PostsType{
    id: number,
    title: string,
    description: string,
    image: string,
    date: string
}



const BlogPost = ({post}: {post: PostsType}) => {
    return(
        <div className="flex flex-col w-fit mx-auto justify-between border py-4 px-4 rounded-lg">

            <div className="w-fit flex justify-center overflow-hidden relative">
                <Link href={`/blog/${post.id}`}>
                    <Image className="rounded-md rounded-bl-3xl w-full object-cover h-48" src={post.image} alt="blog image" width={280} height={100} />
                    <div className="absolute rounded rounded-bl-3xl -top-4 -left-4 -right-4 -bottom-4 border-[16px]
                    hover:-bottom-0 hover:-left-0 hover:-right-0 hover:-top-0 duration-300 border-[rgba(255,255,255,0.7)]"></div>
                </Link>
            </div>

            <div className="mt-4">
                <p>{post.title}</p>
            </div>

            <div className="flex items-center justify-between py-3 max-sm:flex-col">
                <Link href={`/blog/${post.id}`}>
                <button className="bg-customYellow px-6 py-1 rounded-lg flex items-center gap-2 transition hover:bg-[#ffde39]">
                    خواندن
                    <Image src={LeftArrow} alt="Left arrow" width={15} height={15}/>
                </button>
                </Link>
                <h1 className="text-customGray text-[14px] max-sm:mt-5">{post.date}</h1>
            </div>
        </div>
    )
}

export default BlogPost