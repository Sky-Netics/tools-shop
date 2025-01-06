import OfferTitleImage from '../../../../public/assets/offer-title-1.png'
import Image from 'next/image'
import OfferProduct from '../OfferProduct/offerProduct'

const OfferProducts = () =>{
    return(
        <div className="mx-[150px] bg-[#FF4343] h-[358px] rounded-md mt-1 mb-2 flex">

            <div className='h-full w-fit flex items-center px-8'>
                <Image src={OfferTitleImage} alt='offer title image'/>
            </div>

            <div className='h-full w-full py-7'>
                <div className='bg-white h-full w-[80%] flex'>
                    {/* <OfferProduct />
                    <OfferProduct />
                    <OfferProduct />
                    <OfferProduct /> */}
                    <OfferProduct />
                    <OfferProduct />
                    <OfferProduct />
                    <OfferProduct />
                </div>
            </div>

        </div>
    )
}

export default OfferProducts