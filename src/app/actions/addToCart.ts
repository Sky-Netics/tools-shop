import { BACKEND_DOMAIN } from "../backDomain";

const addToCart = async (id:string)=>{
    try {
        const response = await fetch(`${BACKEND_DOMAIN}usercart/cart/add/${id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${localStorage.getItem("access")}`
            },
            body: JSON.stringify({ product_id: id }),
            cache: 'no-store'
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

export default addToCart;