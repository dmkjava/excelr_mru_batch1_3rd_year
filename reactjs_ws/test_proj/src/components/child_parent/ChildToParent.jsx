import { useState } from "react";
import Child from "./Child";

function ChildToParent(){
    const [pcount, setPCount] = useState(0);
    const getIncrement = (count)=>{
        setPCount(count);
    }
    return (
        <div style={{background:"cyan", padding: "20px"}}>
            <h3>Child to Parent communication Demo</h3>
            <div>
                <h3>Current Count is: {pcount}</h3>
            </div>
            <Child getIncrement={getIncrement}></Child>
        </div>
    )
}
export default ChildToParent;