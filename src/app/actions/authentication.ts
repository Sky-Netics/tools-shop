import { BACKEND_DOMAIN } from "../backDomain";
import { authResponseProps } from "../interfaces/authResponse";


export const LoginFetch = async (username:string,password:string):Promise<authResponseProps|string> =>{
    const userInfo = {
        "username":username,
        "password":password
    }

    try{
        const response = await fetch(`${BACKEND_DOMAIN}/account/login/`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "accept":"application/json"
            },
            body:JSON.stringify(userInfo)
        })
        const result:authResponseProps = await response.json()
        
        if (!response.ok){
            return result
        }else{
            return result 
            
        }
    }catch{
        return "خطا در ارتباط با سرور !"
    }
}

export const RegisterFetch = async (userInfo:string):Promise<authResponseProps|string>=>{

    try{
        const response = await fetch(`${BACKEND_DOMAIN}/account/signup/`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "accept":"application/json"
            },
            body:userInfo
        })
        const result:authResponseProps = await response.json()
        if (!response.ok){
            return "لطفا تمام مقادیر را به درستی پر کنید !" ;
        }else{
            return result ;  
        }
    }catch{
        return "خطا در ارتباط با سرور !";
    }
}
