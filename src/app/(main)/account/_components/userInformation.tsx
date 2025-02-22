'use client'

import { isUser, refreshUser } from "@/app/actions/isUser";
import { UserInfo } from "@/app/interfaces/userInfo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserInformation = () => {
    const [userInfo,setUserInfo] = useState<UserInfo>();
    const router = useRouter();

    useEffect(()=>{

        const fetchData = async ()=>{
            const result:UserInfo|number = await isUser();
            if (typeof result === "number"){
                if (result === 401){
                    const refresh = await refreshUser();
                    if (refresh === 200){
                        const result:UserInfo|number = await isUser();
                        if (typeof result !== "number"){
                            setUserInfo(result);
                        }
                    }else{
                        router.push("/login")
                    }
                }
            }else
                setUserInfo(result);
        }
        fetchData()
    },[])

    return ( 
        <p>{userInfo?.phone_number}</p>
     );
}
 
export default UserInformation;