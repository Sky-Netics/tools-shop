
import { Metadata } from 'next';
import CartComponent from './components/cartComponent'


export const metadata:Metadata = {
    title:"ابزارقفلی – سبد خرید",
    description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
    
    robots:"index, follow",
  
    openGraph:{
      title:"ابزارقفلی – سبد خرید",
      description:"ابزار قفلی فروشگاه اینترنتی تخصصی در حوزه ابزار دستی، ابزار برقی، ابزار گاراژی فعالت دارد.هدف از راه اندازی فروش اینترنتی ابزار قفلی برای خرید هر زمان از شب",
      url: 'https://abzarghofli.ir/cart',
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

const CartPage = () => {

    return ( 
        <div className='pb-14'>
            <h1 className="text-center mt-7 text-[32px]">سبد خرید</h1>
            <CartComponent/>
        </div>

    );
}

export default CartPage;
