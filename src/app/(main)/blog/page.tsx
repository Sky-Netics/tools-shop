import React from 'react';
import BlogPostCard from '../../components/BlogPost/blogPost'

type PostsType = {
    id: number,
    title: string,
    description: string,
    image: string,
    date: string
}

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

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">وبلاگ</h1>
      
      <div className="flex flex-wrap px-[100px] gap-7">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
