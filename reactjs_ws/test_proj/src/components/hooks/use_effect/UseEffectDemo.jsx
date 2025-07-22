import { useEffect } from "react";

function UseEffectDemo(){
    useEffect(()=>{
        console.log("I just exected when this component is loaded.");
        
    });
    return (
        <div>
            <h3>UseEffect Demo</h3>
        </div>
    )
}
export default UseEffectDemo;    