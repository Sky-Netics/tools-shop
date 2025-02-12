import OfferTitleImage from '../../../../public/assets/offer-title-1.png';
import Image from 'next/image';
import OfferProduct from '../OfferProduct/offerProduct';
import HandMadeCarousel from '../handMadeCarousel/handMadeCarousel';
import { getData } from '@/app/actions/getData';
import { BACKEND_DOMAIN } from '@/app/backDomain';
import { Products } from '@/app/interfaces/products';


export default async function OfferProducts() {
    const products:Products[]|string = await getData(`${BACKEND_DOMAIN}/store/products/`);

    return (
      <div className='mx-6'>
        <div className="bg-[#FF4343] h-[358px] rounded-md mt-1 mb-2 flex relative overflow-hidden max-w-[1250px] mx-auto">
          <div className="h-full w-fit flex items-center pr-8 max-lg:hidden">
            <Image className='min-w-32' src={OfferTitleImage} alt="offer title image" />
          </div>

          <div className="h-full w-full py-7 flex justify-center">
            <div dir='ltr' id='discountContainer' className="bg-white h-full w-[80%] scroll-smooth max-lg:w-full max-lg:mx-8 flex overflow-hidden">
              {typeof products !== "string" ? (
                products.map((product, index) => (
                  <OfferProduct
                    url = {`/products/${product.id}`}
                    title={product.name}
                    currentPrice={product.price}
                    src={product.image}
                    index = {index}
                  />
                ))
              ) : (
                <div className='text-red-500 m-auto flex flex-row-reverse'>
                  {products}
                </div>
              )}
              {typeof products !== "string" ?
                <HandMadeCarousel nextID="offerNext" prevID="offerPrev" containerID="discountContainer" slideID="discountProducts" length={products.length}/>
                :
                <></>
              }
            </div>
          </div>

          <div id='offerNext' className='absolute top-1/2 -translate-y-1/2 right-52 text-xl max-lg:right-0
          cursor-pointer text-white hover:bg-gray-900 w-7 h-7 rounded-full flex-center'>{"<"}</div>
          <div id='offerPrev' className='absolute top-1/2 -translate-y-1/2 left-5 max-lg:left-0 text-xl
          cursor-pointer text-white hover:bg-gray-900 w-7 h-7 rounded-full flex-center'>{">"}</div>
        </div>
      </div>
    );
  } 
//   catch (error) {
//     console.error(error);
//     return (
//       <div className="mx-[150px] bg-[#FF4343] h-[358px] rounded-md mt-1 mb-2 flex overflow-hidden max-[1330px]:mx-[75px] max-[1200px]:mx-[30px] max-[1100px]:justify-center">
//         <div className="h-full w-fit flex items-center px-8 max-[1100px]:hidden">
//           <Image src={OfferTitleImage} alt="offer title image" />
//         </div>

//         <div className="h-full w-full py-7 flex justify-center">
//           <div className="bg-white h-full w-[80%] flex justify-center flex-wrap overflow-hidden">
//             <p>Failed to load products.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
