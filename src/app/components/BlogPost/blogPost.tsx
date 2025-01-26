import Image from "next/image"
import LeftArrow from '../../../../public/left-arrow.svg'
import Link from "next/link"

type PostsType = {
    id: number,
    title: string,
    description: string,
    image: string,
    date: string
}



const BlogPost = ({post}: {post: PostsType}) => {
    return(
        <div className="w-[300px] h-[300px] border py-4 px-4 rounded-lg">
            
            <div className="w-full flex justify-center">
                <Link href={`/blog/${post.id}`}>
                    <Image src={post.image} alt="blog image" width={280} height={100} className="rounded-lg" style={{ objectFit: 'cover', height: '180px' }}/>
                </Link>
            </div>

            <div className="mt-4">
                <h1>{post.title}</h1>
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