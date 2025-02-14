import { BACKEND_DOMAIN } from "../backDomain";
import { Products } from "../interfaces/products";

const getProductById = async (id:string):Promise<Products|string>=>{
    try {
      const response = await fetch(`${BACKEND_DOMAIN}/store/products/${id}`,{cache:"no-store"});
      if (!response.ok) {
        return "محصولی با این شناسه پیدا نشد !"
      }else{
        const data:Products = await response.json();
        return data
      }
    } catch (error) {
      return "مشکلی در ارتباط با سرور رخ داده !"
    }

}

export default getProductById