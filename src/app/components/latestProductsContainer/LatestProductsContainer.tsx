import Image from "next/image"
import sendIcon from '../../../../public/send.svg'
import ElectricProduct from "../Product/Product"
import Link from "next/link";
import { Products } from "@/app/interfaces/products";
import { getData } from "@/app/actions/getData";
import { BACKEND_DOMAIN } from "@/app/backDomain";

const LatestProductsContainer = async () =>{
    let products:Products[]|string = await getData(`${BACKEND_DOMAIN}/store/products/`)

    if (typeof products !== "string"){
        products = products.slice(0,6).reverse();
    }

    return(
        <div className="max-w-[1400px] mx-auto py-6 max-xl:px-6 max-md:px-2 overflow-x-hidden">

            <div className="flex items-center gap-7">
                <div className="flex items-center text-nowrap gap-1">
                    <Image src={sendIcon} alt="send icon" width={25} className="w-5 h-5 object-cover"/>
                    <p>آخرین محصولات</p>
                </div>
                <hr className="w-full border-dashed border-[#b6b6b6]"/>
            </div>

            <div className="flex flex-wrap justify-center max-md:grid grid-cols-2 max-md:hide-last-two-mb gap-2 my-3">
              {typeof products !== "string" ? 
              products.map((product,index) => (
                  <Link href={`/products/${product.id}`} key={index}>
                      <ElectricProduct name={product.name} price={product.price} image={product.image} id={product.id} description=""/>
                  </Link>
              ))
              :<div className="my-5 mx-auto text-red-500">{products}</div>
              }
            </div>

        </div>
    )
}

export default LatestProductsContainer