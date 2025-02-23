import { Metadata } from "next";

import SliderContainer from "../components/SliderContainer/sliderContainer";
import OfferProducts from "../components/OfferProductsContainer/offerProductsContainer";
import Category from "../components/Category/category";
import ElectricProductsContainer from "../components/ElectricProductsContainer/electricProductsContainer";
import Discount from "../components/Discount/discount";
import LatestProductsContainer from "../components/latestProductsContainer/LatestProductsContainer";
import BlogPostsContainer from "../components/BlogPostsContainer/BlogPostsContainer";


export const metadata:Metadata = {
  title:"ابزارقفلی – فروشگاه ابزار قفلي",
  description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
  
  robots:"index, follow",

  openGraph:{
    title:"ابزارقفلی – فروشگاه ابزار قفلي",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    url: 'https://abzarghofli.ir',
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


export default function Home() {
  return (
    <div>
        <SliderContainer />
        <OfferProducts/>
        <Category />
        <ElectricProductsContainer/>
        <Discount/>
        <LatestProductsContainer/>
        <BlogPostsContainer/>
    </div>
  );
}
