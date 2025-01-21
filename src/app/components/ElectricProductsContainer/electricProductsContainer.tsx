import Link from "next/link";
import ElectricProduct from "../Product/Product";

async function fetchProducts() {
  const res = await fetch('http://127.0.0.1:8000/store/products/', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch offer products');
  }
  return res.json();
}

export default async function ElectricProductsContainer() {
  let products = [];
  let error = null;

  try {
    products = await fetchProducts();
  } catch (err) {
    error = err.message;
  }

  return (
    <div className="mx-[150px] mb-10 max-md:mx-[50px] overflow-hidden max-sm:mx-[10px]">
      <div className="flex">
        <div className="flex">
          <svg className="pack-fontawesome w-[25px] h-[25px] ml-2" viewBox="0 0 576 512">
            {/* SVG Path */}
          </svg>
          <h1>ابزار برقی و شارژی</h1>
        </div>
        <div className="w-[75%] border border-dashed border-[#b6b6b6] h-0 mt-3 mr-5" />
        <div className="mr-3 py-1 w-[200px]">
          <Link className="flex items-center" href={'/'}>
            <div className="bg-customYellow rounded-[50%] w-4 h-4">
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
              </svg>
            </div>
            <h1 className="mr-2 text-[14px]">مشاهده همه</h1>
          </Link>
        </div>
      </div>

      {/* نمایش ارور در صورت بروز خطا */}
      {error && (
        <div className="text-red-500 py-2 text-center">
          هیچ محصولی یافت نشد
        </div>
      )}

      {/* نمایش محصولات در صورت موفقیت */}
      <div className="flex py-3 gap-4">
        {products.length > 0 ? (
          products.map((product: any, index: number) => (
            <Link href={`products/${product.id}`} key={index}>
              <ElectricProduct title={product.name} price={product.price} image={product.image} id={product.id} />
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
