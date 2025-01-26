'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetch(`/api/products?search=${query}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("محصولی یافت نشد");
          }
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [query]);

  if (!query) {
    return <p>لطفاً عبارتی برای جستجو وارد کنید.</p>;
  }

  if (isLoading) {
    return <p className="text-center mt-14">در حال بارگذاری...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-14 text-[24px]">خطایی رخ داده است: {error}</p>;
  }

  return (
    <div>
      <h1>نتایج جستجو برای "{query}"</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <img src={product.image} alt={product.name} />
              <button>مشاهده و خرید</button>
            </div>
          ))
        ) : (
          <p>محصولی یافت نشد.</p>
        )}
      </div>
    </div>
  );
}
