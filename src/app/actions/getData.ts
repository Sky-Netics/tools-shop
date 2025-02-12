import { Products } from "../interfaces/products";

export const getData = async (url:string):Promise<Products[]|string> =>{
    try {
      const response = await fetch(url,{cache:"no-store"});
      if (!response.ok) {
        return "مشکلی در ارتباط با سرور رخ داده !"
      }else{
        const data:Products[] = await response.json();
        return data
      }
    } catch (error) {
      return "مشکلی در ارتباط با سرور رخ داده !"
    }
}