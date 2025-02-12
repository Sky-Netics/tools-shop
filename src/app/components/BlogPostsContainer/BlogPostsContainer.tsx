import Link from "next/link"
import blog from '../../../../public/blog.svg'
import Image from "next/image"
import BlogPost from "../BlogPost/blogPost"

interface PostsType{
  id: number,
  title: string,
  description: string,
  image: string,
  date: string
}

const BlogPostsContainer = () => {
    
    const posts: PostsType[] = [
      {
        id: 1,
        title: 'نکات مهم در انتخاب ابزار مناسب',
        description: 'در این مقاله به بررسی نکات کلیدی در انتخاب ابزار مناسب برای کارهای مختلف می‌پردازیم.',
        image: '/assets/blog-image.webp',
        date: '1402/10/15'
      },
      {
        id: 2,
        title: 'نگهداری صحیح از ابزارهای برقی',
        description: 'با روش‌های صحیح نگهداری و افزایش طول عمر ابزارهای برقی آشنا شوید.',
        image: '/assets/blog-image.webp',
        date: '1402/09/28'
      },
      {
        id: 3,
        title: 'ابزارهای ضروری برای هر کارگاه',
        description: 'لیست ابزارهای ضروری که هر کارگاه حرفه‌ای باید داشته باشد.',
        image: '/assets/blog-image.webp', 
        date: '1402/09/10'
      },
    
      {
        id: 4,
        title: 'ابزارهای ضروری برای هر کارگاه',
        description: 'لیست ابزارهای ضروری که هر کارگاه حرفه‌ای باید داشته باشد.',
        image: '/assets/blog-image.webp', 
        date: '1402/09/10'
      },
      {
        id: 5,
        title: 'ابزارهای ضروری برای هر کارگاه',
        description: 'لیست ابزارهای ضروری که هر کارگاه حرفه‌ای باید داشته باشد.',
        image: '/assets/blog-image.webp', 
        date: '1402/09/10'
      },
      {
        id: 6,
        title: 'ابزارهای ضروری برای هر کارگاه',
        description: 'لیست ابزارهای ضروری که هر کارگاه حرفه‌ای باید داشته باشد.',
        image: '/assets/blog-image.webp', 
        date: '1402/09/10'
      },
      {
        id: 7,
        title: 'ابزارهای ضروری برای هر کارگاه',
        description: 'لیست ابزارهای ضروری که هر کارگاه حرفه‌ای باید داشته باشد.',
        image: '/assets/blog-image.webp', 
        date: '1402/09/10'
      },
    
    ];

    return(
        <div className="max-w-[1250px] mx-auto px-6">
            <div className="">

              <div className="flex">
                  <div className="flex items-center">
                      <Image src={blog} alt="blog icon" width={25}/>
                      <p className="mr-2">وبلاگ</p>
                  </div>

                  <div className="w-[90%] border border-dashed border-[#b6b6b6] h-0 mt-3 mr-5">

                  </div>

                  <div className="mr-3 py-1 w-[150px]">
                      <Link className="flex items-center" href={'/blog'}>
                      <div className="bg-customYellow rounded-[50%] w-4 h-4">
                          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                          </svg>
                      </div>
                      <p className="mr-2 text-[14px] w-[100px]">مشاهده همه</p>
                      </Link>
                  </div>

              </div>
              <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
                max-sm:hide-last-two-mb py-3 gap-4">
                {posts.slice(0,4).map(post => (
                    <BlogPost key={post.id} post={post} />
                ))}
              </div>   
            </div>
        </div>
    )
}

export default BlogPostsContainer