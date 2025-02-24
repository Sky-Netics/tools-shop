import { BACKEND_DOMAIN } from "../backDomain"

export const updateCart = async (id:string,q:number)=>{
    const url:string = `${BACKEND_DOMAIN}/usercart/cart/add/${id}/` ;
    
    try{
        const response = await fetch(url,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("access")}`
            },
            body:JSON.stringify({"quantity": q})
        })
    }catch{
        return 0
    }
}

export const deleteItem = async (id:string)=>{
    const url:string = `${BACKEND_DOMAIN}/usercart/cart/remove/${id}/` ;

    try{
        const response = await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("access")}`
            }
        })
    }catch{
        return 0;
    }
}