import OfferTitleImage from '../../../../public/assets/offer-title-1.png';
import Image from 'next/image';
import OfferProduct from '../OfferProduct/offerProduct';
import Link from 'next/link';


async function getData() {
  const res = await fetch('http://127.0.0.1:8000/store/products/', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function OfferProducts() {

  let products = []
  let error = null

  try{
     products = await getData();
  }
  catch(err){
    error = err.message    
  }
  

    return (
      <div className="mx-[150px] bg-[#FF4343] h-[358px] rounded-md mt-1 mb-2 flex overflow-hidden max-[1330px]:mx-[75px] max-[1200px]:mx-[30px] max-[1100px]:justify-center">
        <div className="h-full w-fit flex items-center px-8 max-[1100px]:hidden">
          <Image src={OfferTitleImage} alt="offer title image" />
        </div>

        <div className="h-full w-full py-7 flex justify-center">
          <div className="bg-white h-full w-[80%] flex justify-center flex-wrap overflow-hidden">
            
          {error && (
            <div className="text-red-500 py-2 text-center">
              هیچ محصولی یافت نشد
            </div>
          )}
            
            {products.length > 0 ? (
              products.map((product, index) => (
                <Link href={`/products/${product.id}`} key={index}>
                  <OfferProduct
                    title={product.name}
                    currentPrice={product.price}
                    src={product.image}
                  />
                </Link>
              ))
            ) : (
              <></>
            )}


          </div>
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
