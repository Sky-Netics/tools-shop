'use client'

import { useText,useVisible } from "../store/alerts";

const Alert = () => {
    const { text } = useText();
    const { visible,setVisible } = useVisible();    

    const errors = [];
    if (typeof text !== "string"){
        if (text.username)
            errors.push(`username : ${text.username[0]}`)
        if (text.password)
            errors.push(`password : ${text.password[0]}`)
        if (text.detail)
            errors.push(text.detail)
    }

    return ( 
        <div id="page-alert" onClick={()=>{setVisible(false)}} className={`fixed left-5 p-2 right-5 z-10 top-10 flex justify-between 
            items-start bg-red-300 border-red-700 text-red-500 cursor-pointer ${visible ? "block":"hidden"}`}>
            <div className="space-y-1"> 
                {typeof text === "string" ? <p>{text}</p> : 
                    errors.map((error,i)=>{
                        return (<p key={i}>{error}</p>)
                    })
                }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 te">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
     );
}
 
export default Alert;