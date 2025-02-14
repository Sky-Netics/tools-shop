import { BACKEND_DOMAIN } from "../backDomain"
import { authResponseProps } from "../interfaces/authResponse"

const LoginFetch = async (username:string,password:string):Promise<string[]> =>{
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
            const userError:string = result.username[0]
            const passwordError:string = result.password[0]
            return [userError,passwordError]
        }else{
            const access:string = result.access[0]
            const refresh:string = result.refresh[0]
            return ["ok",access,refresh]
            
        }
    }catch{
        return ["خطا در ارتباط با سرور !"];
    }
}

export default LoginFetch;