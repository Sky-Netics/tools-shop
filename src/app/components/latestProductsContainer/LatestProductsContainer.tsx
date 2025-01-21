'use client'

import { useEffect, useState } from "react";
import Image from "next/image"
import sendIcon from '../../../../public/send.svg'
import ElectricProduct from "../Product/Product"
import Link from "next/link";

const LatestProductsContainer = () =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/store/products/', {
              cache: 'no-store',
            });
            if (!response.ok) {
              throw new Error('Failed to fetch offer products');
            }
            const data = await response.json();
            setProducts(data);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchProducts();
      }, []);

      if (loading) {
        return (
          <div className="mx-[150px] mb-10 max-md:mx-[50px] overflow-hidden max-sm:mx-[10px]">
            <div>Loading...</div>
          </div>
        );
      }

      if (error) {
        return (
            <div className="mx-[150px] my-6 max-xl:mx-[50px] overflow-hidden max-sm:mx-[10px]">

            <div className="flex items-center">

            <div className="flex w-[180px]">
                <Image src={sendIcon} alt="send icon" width={25} className="ml-2"/>
                <h1>آخرین محصولات</h1>
            </div>

            <div className="w-full border border-dashed border-[#b6b6b6] h-0">
            </div>

            </div>

            <div className="my-3 text-red-500 text-center">
                هیچ محصولی یافت نشد
            </div>

        </div>
        )}

    return(
        <div className="mx-[150px] my-6 max-xl:mx-[50px] overflow-hidden max-sm:mx-[10px]">

            <div className="flex items-center">

            <div className="flex w-[180px]">
                <Image src={sendIcon} alt="send icon" width={25} className="ml-2"/>
                <h1>آخرین محصولات</h1>
            </div>

            <div className="w-full border border-dashed border-[#b6b6b6] h-0">
            </div>

            </div>

            <div className="flex gap-3 my-3">
            {products.length > 0 && (
            products.map((product: any, index: number) => (
                <Link href={`/products/${product.id}`} key={index}>
                    <ElectricProduct title={product.name} price={product.price} image={product.image} id={product.id}/>
                </Link>
          ))
        )}
          </div>

        </div>
    )
}

export default LatestProductsContainer