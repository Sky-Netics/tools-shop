'use client'

import { useRef } from "react";

const Alert = () => {
    const alertID = useRef<HTMLDivElement|null>(null);

    const isHidden = ()=>{
        if (alertID.current)
            alertID.current.style.display = "none";
    }

    return ( 
        <div ref={alertID} id="page-alert" onClick={isHidden} className={`fixed left-5 p-2 right-5 z-10 top-10
            flex justify-between items-start bg-red-300 border-red-700 text-red-500 cursor-pointer`} 
            style={{display:"none"}}>
            <div className="space-y-1"> 
                {/* for map */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 te">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
     );
}
 
export default Alert;