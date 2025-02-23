import { Metadata } from 'next';
import React from 'react';

export const metadata:Metadata = {
  title:"ابزارقفلی – درباره ما",
  description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
  
  robots:"index, follow",

  openGraph:{
    title:"ابزارقفلی – درباره ما",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    url: 'https://abzarghofli.ir/about-us',
    type: 'website',
    images: [
      {
        url: 'https://abzarghofli.ir/assets/logo.png',
        width: 150,
        height: 80,
        alt: 'ابزار قفلی',
        type: 'image/png'
      }
    ],
    locale :"fa_IR"
  },
}

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* عنوان صفحه */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          درباره <span className="text-[#facc15]">ما</span>
        </h1>

        {/* بخش اول: معرفی */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">چه کسی هستیم؟</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            فروشگاه ابزار ما با بیش از ۱۵ سال تجربه در زمینه ارائه ابزارهای صنعتی و خانگی، به عنوان یکی از پیشروان این صنعت شناخته می‌شود. ما با تکیه بر دانش فنی و تعهد به کیفیت، بهترین ابزارها را از برندهای معتبر جهانی به مشتریان خود ارائه می‌دهیم.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            تیم ما متشکل از مهندسان و متخصصان باتجربه است که همواره آماده‌اند تا شما را در انتخاب ابزار مناسب برای پروژه‌هایتان راهنمایی کنند.
          </p>
        </div>

        {/* بخش دوم: ماموریت ما */}
        <div className="bg-[#facc15] rounded-2xl shadow-2xl p-8 mb-12 transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ماموریت ما</h2>
          <p className="text-gray-900 text-lg leading-relaxed mb-6">
            ماموریت ما این است که با ارائه ابزارهای با کیفیت و خدمات پس از فروش بی‌نظیر، تجربه‌ای لذت‌بخش و بدون دغدغه را برای مشتریان خود فراهم کنیم. ما به مشتریان خود به چشم شریک‌های تجاری نگاه می‌کنیم و موفقیت آن‌ها را موفقیت خود می‌دانیم.
          </p>
          <p className="text-gray-900 text-lg leading-relaxed">
            ما همواره در تلاش هستیم تا با نوآوری و بهبود مستمر، بهترین راه‌حل‌ها را برای نیازهای شما ارائه دهیم.
          </p>
        </div>

        {/* بخش سوم: تیم ما */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">تیم ما</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            تیم ما شامل مهندسان، تکنسین‌ها و مشاوران متخصص است که هر کدام سال‌ها تجربه در زمینه ابزارهای صنعتی و خانگی دارند. ما به کار تیمی و همکاری با مشتریان خود افتخار می‌کنیم.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            ما همواره در حال آموزش و به‌روزرسانی دانش خود هستیم تا بتوانیم بهترین خدمات را به شما ارائه دهیم.
          </p>
        </div>

        {/* بخش چهارم: چرا ما؟ */}
        <div className="bg-gradient-to-r from-[#facc15] to-[#fbbf24] rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">چرا ما را انتخاب کنید؟</h2>
          <ul className="list-disc list-inside text-gray-900 text-lg leading-relaxed space-y-4">
            <li>ارائه ابزارهای با کیفیت از برندهای معتبر جهانی</li>
            <li>گارانتی و خدمات پس از فروش بی‌نظیر</li>
            <li>تیم پشتیبانی متخصص و پاسخگو</li>
            <li>تحویل سریع و مطمئن در سراسر کشور</li>
            <li>قیمت‌های رقابتی و تخفیف‌های ویژه</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;