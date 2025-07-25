import { useEffect } from "react";

const useTitle = (msg)=>{
    useEffect(()=>{
        document.title = msg;
    }, {})
}

export default useTitle