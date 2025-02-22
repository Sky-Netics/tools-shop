import { BACKEND_DOMAIN } from "../backDomain";
import { UserInfo } from "../interfaces/userInfo";


export const refreshUser = async ()=>{

    const refresh = localStorage.getItem("refresh");
    try{
        const response = await fetch(`${BACKEND_DOMAIN}/account/api/token/refresh/`,{
            method:"POST",
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({refresh:refresh})
        });
        const result = await response.json();

        if (!response.ok){
            return response.status
        }else{
            localStorage.setItem("access",result.access)
            return 200
        }
    }catch{
        throw new Error("something went wrong !");
    }
}


export const isUser = async ():Promise<UserInfo|number>=>{
    const access:string|null = localStorage.getItem("access");
    try{
        const response = await fetch(`${BACKEND_DOMAIN}/account/profile/`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${access}`
            }
        })
        const result = await response.json();
        if (!response.ok){
            return response.status
        }else{
            return result
        }
    }catch{
        throw new Error("something went wrong !");
    }
}